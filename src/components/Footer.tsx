import { site } from '../data/site'
import { SocialIcon } from './Icons'
import logo from '../assets/theo-stella-logo.webp'

const nav = [
  ['Home', '#top'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Reviews', '#reviews'],
  ['FAQ', '#faq'],
  ['Gift Cards', '#offers'],
  ['Visit', '#visit'],
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Logo badge */}
        <div className="flex justify-center pt-14">
          <div className="rounded-full bg-cream/95 px-8 py-6 shadow-[var(--shadow-card)]">
            <img
              src={logo}
              alt="Theo·Stella Beauty Bar"
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto"
            />
          </div>
        </div>

        {/* Top: contact + nav + socials */}
        <div className="grid gap-10 pb-16 pt-14 md:grid-cols-3">
          <div>
            <p className="editorial-label text-gold-soft">Visit</p>
            <a
              href={site.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm font-light text-cream/70 transition-colors hover:text-rose"
            >
              {site.address.line1}
              <br />
              {site.address.line2}
            </a>
            <div className="mt-4 space-y-1 text-sm font-light text-cream/70">
              <a href={site.phoneHref} className="block hover:text-rose">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="block break-all hover:text-rose">
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <p className="editorial-label text-gold-soft">Menu</p>
            <ul className="mt-4 space-y-2 text-sm font-light text-cream/70">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-rose">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="editorial-label text-gold-soft">Hours</p>
            <ul className="mt-4 space-y-2 text-sm font-light text-cream/70">
              {site.hours.map((h) => (
                <li key={h.day}>
                  <div>{h.day}</div>
                  <div className="text-cream/45">{h.time}</div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all hover:border-rose hover:text-rose"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant wordmark — SVG scales to fit width, never overflows */}
        <a href="#top" className="block border-t border-cream/10 pt-10" aria-label="Theo·Stella">
          <svg
            viewBox="0 0 1000 210"
            className="block w-full text-cream/95"
            role="img"
            aria-label="Theo·Stella"
          >
            <text
              x="0"
              y="168"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fill="currentColor"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              fontSize="200"
            >
              Theo
              <tspan fill="#e5a2ac">·</tspan>
              Stella
            </text>
          </svg>
        </a>

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Theo·Stella Beauty Bar</p>
          <p>Surrey, British Columbia · By appointment</p>
        </div>
      </div>
    </footer>
  )
}
