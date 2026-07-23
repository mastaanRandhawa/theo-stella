import { site } from '../data/site'
import { Reveal } from './Reveal'
import { ArrowUpRight } from './Icons'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-espresso py-16 text-cream">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-rose/20 blur-[36px] sm:blur-[110px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[auto_1fr_auto] lg:px-10">
        <Reveal className="editorial-label text-gold-soft">
          (G) — Beauty Is Self-Care, Not a Luxury
        </Reveal>
        <Reveal className="max-w-xl text-center text-sm font-light leading-relaxed text-cream/70 md:text-left">
          You are not just an appointment. Step into a space of care, calm and
          craftsmanship. Together we&apos;ll create something beautiful — welcome home.
        </Reveal>
        <Reveal>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg uppercase tracking-[0.2em] text-cream transition-colors hover:text-rose"
          >
            Book Session
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 transition-colors group-hover:border-rose">
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
