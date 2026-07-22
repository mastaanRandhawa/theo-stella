import { site } from '../data/site'
import { ArrowUpRight } from './Icons'
import logo from '../assets/theo-stella-logo.png'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 90% at 50% 0%, #fbe3e6 0%, #f9d9dd 22%, #faf3ef 60%, #faf3ef 100%)',
      }}
    >
      {/* Soft watercolor washes echoing the logo */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-rose/30 blur-[130px]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blush/60 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-mauve/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-10 pt-28 lg:px-10">
        {/* Center cluster */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <img
            src={logo}
            alt="Theo·Stella Beauty Bar"
            className="mb-2 h-40 w-auto drop-shadow-[0_10px_30px_rgba(216,140,150,0.35)] sm:h-52"
          />

          <p className="editorial-label mb-5 text-mauve">
            Russian Manicure &amp; Beauty Bar — Surrey, BC
          </p>

          <h1 className="font-serif text-6xl leading-[0.9] text-plum sm:text-8xl lg:text-[8.5rem]">
            Rejoice,
            <span className="mt-1 block italic text-rose">Always</span>
          </h1>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-plum px-8 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-espresso hover:shadow-[0_20px_40px_-16px_rgba(59,45,48,0.6)]"
            >
              Book an Appointment
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-mauve/40 px-8 py-4 text-sm uppercase tracking-[0.16em] text-plum transition-colors duration-300 hover:border-plum hover:bg-plum/5"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-6 border-t border-mauve/20 pt-6 text-plum/70 md:flex-row md:items-end md:justify-between">
          <div className="hidden text-lg tracking-[0.35em] text-rose/60 md:block">
            &#10022; &#10022; &#10022;
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="editorial-label">Scroll Down</span>
            <span className="h-8 w-px animate-pulse bg-mauve/50" />
          </div>
          <p className="max-w-xs text-center text-sm font-light leading-relaxed text-plum/70 md:text-right">
            Your beauty deserves the same care as your spirit. Let&apos;s create
            something lovely — one detail at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
