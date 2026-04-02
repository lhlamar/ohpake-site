import localFont from 'next/font/local'

const jersey10 = localFont({ src: '../public/Jersey10-Regular.ttf' })

const links = [
  { label: 'Music', href: '#music' },
  { label: 'Shows', href: '#shows' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e1019] text-[#e8edf8] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Radial glow blob behind the title */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-85 h-85 md:w-150 md:h-150 rounded-full bg-[#6280c4] opacity-10 blur-[120px]" />
        </div>

        {/* Band name */}
        <h1
          className={`${jersey10.className} text-[clamp(4.5rem,22vw,14rem)] leading-none tracking-tight`}
          style={{ color: '#e8edf8' }}
        >
          OH
          <span style={{ color: '#7b96d4' }}>.</span>
          PAKE
          <span style={{ color: '#a56ac3' }}>!</span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-sm md:text-base tracking-[0.25em] text-[#9aaedf] opacity-80">
          oh.pake is friends!
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:justify-center">
          <a
            href="/stream"
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase bg-[#6280c4] text-[#e8edf8] hover:bg-[#7b96d4] transition-colors"
          >
            Listen
          </a>
          <a
            href="#shows"
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase border border-[#6280c4] text-[#9aaedf] hover:bg-[#6280c4]/10 transition-colors"
          >
            Upcoming Shows
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-[#9aaedf]">Scroll</span>
          <div className="w-px h-10 bg-linear-to-b from-[#9aaedf] to-transparent" />
        </div>
      </section>

      {/* ── Music strip ── */}
      <section id="music" className="px-6 py-20 md:py-32 max-w-2xl mx-auto w-full">
        <SectionLabel>Music</SectionLabel>

        <div className="mt-6 w-full rounded-2xl overflow-hidden border border-[#9aaedf]/10 bg-[#9aaedf]/5">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/InuV-ak9lsY"
              title="Ohpake"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Color tint overlay — blends warm video tones toward site palette */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(98, 128, 196, 0.35)', mixBlendMode: 'color' }}
            />
          </div>
        </div>
      </section>

      {/* ── Shows strip ── */}
      <section id="shows" className="px-6 py-20 md:py-32 bg-[#9aaedf]/5">
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel>Live</SectionLabel>
          <h2 className={`${jersey10.className} text-5xl md:text-7xl mt-2 mb-10 text-[#c4ceec]`}>
            Upcoming Shows
          </h2>

          <div className="flex flex-col gap-4">
            {[
              { date: 'Apr 09', venue: 'Monday Night Brewing', location: 'Birmingham, AL' },
              { date: 'Apr 25', venue: 'Trimtab Brewing', location: 'Birmingham, AL' },
              { date: 'May 02', venue: 'The Upstairs at Avondale', location: 'Birmingham, AL' },
              { date: 'May 23', venue: 'The Upstairs at Avondale', location: 'Birmingham, AL' },
              { date: 'May 29', venue: "Mom's Basement", location: 'Birmingham, AL' },
            ].map((show, i) => (
              <div
                key={i}
                className="flex items-center gap-5 py-5 border-b border-[#9aaedf]/10 last:border-0"
              >
                <div className="w-16 shrink-0 text-center">
                  <p className={`${jersey10.className} text-2xl text-[#7b96d4] leading-tight`}>{show.date.split(' ')[0]}</p>
                  <p className="text-xs text-[#9aaedf] uppercase tracking-wider">{show.date.split(' ')[1]}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#e8edf8]">{show.venue}</p>
                  <p className="text-xs text-[#9aaedf] mt-0.5">{show.location}</p>
                </div>
                <a
                  href="#"
                  className="shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#6280c4] text-[#9aaedf] hover:bg-[#6280c4]/20 transition-colors"
                >
                  Tickets
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section id="about" className="px-6 py-20 md:py-32 max-w-2xl mx-auto w-full">
        <SectionLabel>About</SectionLabel>
        <h2 className={`${jersey10.className} text-5xl md:text-7xl mt-2 mb-8 text-[#c4ceec]`}>
          the oh.pakes
        </h2>
        <p className="text-[#9aaedf] leading-relaxed text-base md:text-lg max-w-prose">
          Formed in June 2025 by Charity Cash, Timothy Cash, Dean Gaiser, and Lucas Lamar.
          Oh.Pake has crafted their sound and learned to juggle. As Birmingham 
          locals they enjoy the vast sound scapes that exist in its natural ecosystem such as open mic comedy,
          gunshots, and the Doppler Effect. New music recorded and coming soon, be on the lookout.
        </p>
        {/* Accent bar */}
        <div className="mt-10 w-16 h-1 rounded-full bg-linear-to-r from-[#6280c4] to-[#8b4eab]" />
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="mt-auto px-6 py-12 border-t border-[#9aaedf]/10">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className={`${jersey10.className} text-3xl text-[#7b96d4]`}>OH.PAKE!</span>
          <nav className="flex gap-6 flex-wrap justify-center">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs uppercase tracking-widest text-[#9aaedf] hover:text-[#e8edf8] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-[#9aaedf]/40">© {new Date().getFullYear()} Ohpake</p>
        </div>
      </footer>

    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-px bg-[#6280c4]" />
      <span className="text-xs tracking-[0.3em] uppercase text-[#6280c4]">{children}</span>
    </div>
  )
}
