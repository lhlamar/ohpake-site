"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";

const jersey10 = localFont({ src: "../../public/Jersey10-Regular.ttf" });

const EP_TITLE = "Oh.Pake";
const COVER = "/previews/cover.jpg";

const tracks = [
  { title: "Argues", src: "/previews/1-argues.mp3" },
  { title: "Earl The Turle", src: "/previews/2-earl-the-turle.mp3" },
  { title: "Oh.Pake", src: "/previews/3-ohpake.mp3" },
  { title: "Back Off!", src: "/previews/4-back-off.mp3" },
];

export default function EpPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [duration, setDuration] = useState(0);

  const track = tracks[current];

  // Load + optionally autoplay whenever the selected track changes.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    setProgress(0);
    if (playing) audio.play().catch(() => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function selectTrack(i: number) {
    if (i === current) {
      togglePlay();
      return;
    }
    setCurrent(i);
    setPlaying(true);
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  function step(delta: number) {
    setCurrent((c) => (c + delta + tracks.length) % tracks.length);
    setPlaying(true);
  }

  function onTimeUpdate() {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress(audio.currentTime / audio.duration);
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio);
  }

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#9aaedf]/10 bg-[#9aaedf]/5">
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => {
          if (current < tracks.length - 1) step(1);
          else setPlaying(false);
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div className="flex flex-col sm:flex-row sm:h-104">
        {/* Cover — full-width square on mobile; on desktop a square sized to the
            card's fixed height. Column + image are both square, so object-cover never crops. */}
        <div className="relative w-full aspect-square sm:w-auto sm:h-full sm:shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={COVER}
            alt={`${EP_TITLE} EP cover`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(98, 128, 196, 0.18)", mixBlendMode: "color" }}
          />
        </div>

        {/* Body */}
        <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-center gap-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className={`${jersey10.className} text-3xl sm:text-4xl text-[#e8edf8] leading-none`}>
                {EP_TITLE}
              </h3>
              <p className="text-xs tracking-[0.25em] uppercase text-[#9aaedf] mt-1 whitespace-nowrap">EP · 4 tracks</p>
            </div>
            <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#a56ac3]/20 text-[#c99ee0] border border-[#a56ac3]/30">
              Preview
            </span>
          </div>

          {/* Track list */}
          <ul className="flex flex-col">
            {tracks.map((t, i) => {
              const active = i === current;
              const isPlaying = active && playing;
              return (
                <li key={t.src}>
                  <button
                    type="button"
                    onClick={() => selectTrack(i)}
                    aria-label={`${isPlaying ? "Pause" : "Play"} ${t.title}`}
                    className={`group w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left transition-colors ${
                      active ? "bg-[#6280c4]/15" : "hover:bg-[#6280c4]/10"
                    }`}
                  >
                    <span className="w-5 shrink-0 flex items-center justify-center text-[#6280c4]">
                      {isPlaying ? (
                        <PauseIcon className="w-3.5 h-3.5" />
                      ) : active ? (
                        <PlayIcon className="w-3.5 h-3.5" />
                      ) : (
                        <>
                          <span className="text-xs tabular-nums text-[#9aaedf] group-hover:hidden">{i + 1}</span>
                          <PlayIcon className="w-3.5 h-3.5 hidden group-hover:block" />
                        </>
                      )}
                    </span>
                    <span
                      className={`flex-1 min-w-0 truncate text-sm ${
                        active ? "text-[#e8edf8] font-medium" : "text-[#c4ceec]"
                      }`}
                    >
                      {t.title}
                    </span>
                    {/* Playing equalizer bars */}
                    {isPlaying && (
                      <span aria-hidden className="flex items-end gap-0.5 h-3.5">
                        <span className="w-0.5 bg-[#7b96d4] animate-[eq_0.9s_ease-in-out_infinite]" style={{ height: "60%", transformOrigin: "bottom" }} />
                        <span className="w-0.5 bg-[#7b96d4] animate-[eq_0.9s_ease-in-out_infinite]" style={{ height: "100%", transformOrigin: "bottom", animationDelay: "0.15s" }} />
                        <span className="w-0.5 bg-[#7b96d4] animate-[eq_0.9s_ease-in-out_infinite]" style={{ height: "40%", transformOrigin: "bottom", animationDelay: "0.3s" }} />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] tabular-nums text-[#9aaedf] w-8">
              {fmt(progress * duration)}
            </span>
            <div
              onClick={seek}
              className="group relative flex-1 h-4 flex items-center cursor-pointer"
            >
              <div className="w-full h-1 rounded-full bg-[#9aaedf]/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-[#6280c4] to-[#a56ac3]"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
            <span className="text-[10px] tabular-nums text-[#9aaedf] w-8">
              {duration ? fmt(duration) : "0:30"}
            </span>
          </div>

          {/* Controls — centered, with the stream link on its own row below */}
          <div className="flex flex-col items-center gap-4 pt-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous track"
                className="p-2 rounded-full text-[#9aaedf] hover:text-[#e8edf8] hover:bg-[#6280c4]/15 transition-colors"
              >
                <PrevIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
                className="p-3 rounded-full bg-[#6280c4] text-[#e8edf8] hover:bg-[#7b96d4] transition-colors"
              >
                {playing ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next track"
                className="p-2 rounded-full text-[#9aaedf] hover:text-[#e8edf8] hover:bg-[#6280c4]/15 transition-colors"
              >
                <NextIcon className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/stream"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#9aaedf] hover:text-[#e8edf8] transition-colors"
            >
              Stream everywhere
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function PauseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}
function PrevIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6 6h2v12H6zM20 6l-9 6 9 6z" />
    </svg>
  );
}
function NextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16 6h2v12h-2zM4 6l9 6-9 6z" />
    </svg>
  );
}
