import { useState } from 'react'
import { site } from '../data/site'
import { Reveal } from './Reveal'
import { Arrow, Clock, Mail, MapPin, Phone } from './Icons'

export function Visit() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.address.full,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section id="visit" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-luxe text-mauve">Come See Us</span>
          <h2 className="mt-4 font-serif text-4xl text-plum sm:text-5xl">
            Visit the beauty bar
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <Reveal className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={<MapPin />} label="Location">
                <a
                  href={site.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose"
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </InfoCard>

              <InfoCard icon={<Clock />} label="Hours">
                {site.hours.map((h) => (
                  <div key={h.day} className="mb-1 last:mb-0">
                    <div className="text-plum">{h.day}</div>
                    <div className="text-sm text-mauve">{h.time}</div>
                  </div>
                ))}
              </InfoCard>

              <InfoCard icon={<Phone />} label="Call">
                <a href={site.phoneHref} className="transition-colors hover:text-rose">
                  {site.phone}
                </a>
              </InfoCard>

              <InfoCard icon={<Mail />} label="Email">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-rose"
                >
                  {site.email}
                </a>
              </InfoCard>
            </div>

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-1 flex items-center justify-between rounded-3xl bg-plum px-8 py-6 text-cream transition-all hover:bg-espresso"
            >
              <div>
                <div className="font-serif text-2xl">Book your appointment</div>
                <div className="text-sm text-cream/70">Real-time availability online</div>
              </div>
              <Arrow className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
            </a>
          </Reveal>

          {/* Map — only loads Google Maps after the visitor taps (saves ~1MB on mobile) */}
          <Reveal className="relative min-h-[24rem] overflow-hidden rounded-3xl border border-mauve/15 shadow-[var(--shadow-card)]">
            {mapLoaded ? (
              <iframe
                title="Map to Theo·Stella Beauty Bar"
                src={mapEmbed}
                className="h-full min-h-[24rem] w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapLoaded(true)}
                aria-label="Load interactive map"
                className="group flex h-full min-h-[24rem] w-full flex-col items-center justify-center gap-4 bg-shell/60 transition-colors hover:bg-shell"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, rgba(229,162,172,0.18), transparent 45%), radial-gradient(circle at 75% 70%, rgba(193,154,91,0.14), transparent 45%)',
                }}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-rose shadow-[var(--shadow-card)] transition-transform group-hover:scale-105">
                  <MapPin className="h-7 w-7" />
                </span>
                <span className="font-serif text-2xl text-plum">View the map</span>
                <span className="text-sm font-light text-plum/60">
                  {site.address.line1}, {site.address.line2}
                </span>
                <span className="mt-1 rounded-full border border-mauve/40 px-5 py-2 text-xs uppercase tracking-[0.16em] text-plum transition-colors group-hover:border-plum group-hover:bg-plum group-hover:text-cream">
                  Tap to load
                </span>
              </button>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-3xl border border-mauve/15 bg-white/60 p-6">
      <div className="flex items-center gap-2 text-mauve">
        <span className="text-rose">{icon}</span>
        <span className="text-xs uppercase tracking-[0.16em]">{label}</span>
      </div>
      <div className="mt-3 font-light leading-relaxed text-plum">{children}</div>
    </div>
  )
}
