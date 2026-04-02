import type { Metadata } from "next";
import localFont from "next/font/local";

const jersey10 = localFont({ src: "../../public/Jersey10-Regular.ttf" });

export const metadata: Metadata = {
  title: "Stream – Ohpake",
};

const platforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6Qz9jYFHJiHpf8O4AOdM89?si=D2rcdkJAR0eBd664ioH2ow",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/us/artist/oh-pake/1867908675",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a6.279 6.279 0 00-1.877-.726 10.496 10.496 0 00-1.606-.2c-.415-.024-.577-.03-1.693-.03H7.591c-1.116 0-1.278.006-1.693.03a10.49 10.49 0 00-1.606.199 6.274 6.274 0 00-1.878.728C1.31 1.621.563 2.626.244 3.934a9.22 9.22 0 00-.241 2.19C-.004 6.54 0 6.718 0 8.099v7.8c0 1.38.004 1.558.003 2.007a9.23 9.23 0 00.241 2.19c.317 1.31 1.063 2.31 2.18 3.043a6.28 6.28 0 001.878.726c.52.12 1.06.185 1.606.2.415.024.577.03 1.693.03h8.818c1.116 0 1.278-.006 1.693-.03a10.5 10.5 0 001.606-.2 6.28 6.28 0 001.877-.726c1.118-.734 1.863-1.734 2.18-3.043a9.22 9.22 0 00.241-2.19c.007-.45.003-.627.003-2.008V8.1c0-1.382-.004-1.56-.003-2.975zM12 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm5.75-9.87a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    name: "YouTube Music",
    href: "https://music.youtube.com/channel/UCUSuadCUKx9fVyJkFpdzNsg?si=cBxpQoXnCGsy3aJz",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.com/artists/B0GFYHCBXG/oh-pake?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_OMhvVTu985kuNY5NEYRWXsDko",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.661.661 0 01-.75.074c-1.052-.873-1.239-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.642-4.731-4.928 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.583-1.124-.823-1.778-.823-1.207 0-2.284.618-2.548 1.9-.054.285-.261.566-.549.58l-3.061-.333c-.259-.056-.548-.266-.472-.66C6.97 1.951 10.04.5 12.848.5c1.435 0 3.311.38 4.44 1.464 1.435 1.34 1.298 3.13 1.298 5.076v4.594c0 1.383.576 1.99 1.117 2.735.188.264.232.582-.01.779-.603.504-1.676 1.436-2.549 1.647z" />
      </svg>
    ),
  },
  {
    name: "Tidal",
    href: "https://tidal.com/track/488608565/u",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004 4.004-4.004 4.004 4.004 4.004-4.004zM8.008 16.004l-4.004-4.004L0 16.004 4.004 20.008zM16.016 11.996l-4.004 4.008 4.004 4.004L20.02 16.004zM16.016 3.992l-4.004 4.004 4.004 4.004L20.02 7.996z" />
      </svg>
    ),
  },
  {
    name: "Deezer",
    href: "https://link.deezer.com/s/32SkarIp5IRqfk8zPp22W",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M18.81 11.283H24v1.999h-5.19zM18.81 8.486H24v1.998h-5.19zM18.81 14.081H24v1.998h-5.19zM18.81 16.878H24v2H18.81zM0 16.878h5.19v2H0zM13.62 11.283h5.19v1.999h-5.19zM13.62 14.081h5.19v1.998h-5.19zM13.62 16.878h5.19v2h-5.19zM4.52 14.081h5.19v1.998H4.52zM4.52 16.878h5.19v2H4.52zM9.71 14.081h5.19v1.998H9.71zM9.71 16.878h5.19v2H9.71z" />
      </svg>
    ),
  },
  {
    name: "Bandcamp",
    href: "https://ohpake.bandcamp.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z" />
      </svg>
    ),
  },
];

export default function StreamPage() {
  return (
    <main className="min-h-screen bg-[#0e1019] text-[#e8edf8] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6 sm:px-10 flex flex-col gap-10">

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-px bg-[#6280c4]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#6280c4]">Listen</span>
          </div>
          <h1 className={`${jersey10.className} text-5xl sm:text-6xl text-[#c4ceec]`}>Stream Oh.pake</h1>
          <p className="text-[#9aaedf] text-base leading-relaxed mt-2">
            listen to our stuff! or don&apos;t but please do we worked hard :)
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {platforms.map((p) => (
            <li key={p.name}>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-4 rounded-2xl border border-[#9aaedf]/10 bg-[#9aaedf]/5 hover:bg-[#6280c4]/10 hover:border-[#6280c4]/30 transition-all"
                >
                  <span className="text-[#7b96d4] group-hover:text-[#9aaedf] transition-colors shrink-0">{p.icon}</span>
                  <span className={`${jersey10.className} text-2xl text-[#c4ceec] group-hover:text-[#e8edf8] transition-colors flex-1`}>{p.name}</span>
                  <svg className="w-5 h-5 text-[#6280c4] group-hover:text-[#9aaedf] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <div className="flex items-center gap-5 p-4 rounded-2xl border border-[#9aaedf]/5 opacity-30">
                  <span className="text-[#7b96d4] shrink-0">{p.icon}</span>
                  <span className={`${jersey10.className} text-2xl text-[#c4ceec] flex-1`}>{p.name}</span>
                  <span className="text-xs text-[#9aaedf] tracking-wider uppercase">Coming soon</span>
                </div>
              )}
            </li>
          ))}
        </ul>

      </div>
    </main>
  );
}
