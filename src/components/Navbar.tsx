import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { ArrowUpRight, Menu, Phone } from './Icons'
import logo from '../assets/theo-stella-logo.png'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Gift Cards', href: '#offers' },
  { label: 'Visit', href: '#visit' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Dark text everywhere except while the dark overlay menu is open.
  const light = open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? 'bg-cream/85 py-2 shadow-[0_10px_30px_-26px_rgba(59,45,48,0.7)] backdrop-blur-md'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
          {/* Left — logo */}
          <a href="#top" className="justify-self-start" onClick={() => setOpen(false)}>
            {light ? (
              <span className="font-serif text-2xl font-semibold tracking-wide text-cream">
                Theo<span className="text-rose">·</span>Stella
              </span>
            ) : (
              <img
                src={logo}
                alt="Theo·Stella Beauty Bar"
                className="h-12 w-auto sm:h-14"
              />
            )}
          </a>

          {/* Center — contact */}
          <a
            href={site.phoneHref}
            className={`hidden items-center gap-2 justify-self-center text-sm tracking-[0.14em] transition-colors md:flex ${
              light ? 'text-cream/80' : 'text-plum/70'
            }`}
          >
            <Phone className="h-4 w-4" />
            {site.phone}
            <span className="mx-1 opacity-40">·</span> Surrey, BC
          </a>

          {/* Right — menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex items-center gap-2 justify-self-end rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors ${
              light
                ? 'border-cream/40 text-cream hover:bg-cream hover:text-plum'
                : 'border-plum/25 text-plum hover:bg-plum hover:text-cream'
            }`}
            aria-expanded={open}
          >
            <Menu className="h-4 w-4" />
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </header>

      {/* Overlay menu */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-espresso text-cream transition-opacity duration-500 ${
          open
            ? 'visible pointer-events-auto opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-rose/20 blur-[120px]" />
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <p className="editorial-label mb-6 text-gold-soft">Navigate</p>
          <ul className="space-y-0.5">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 border-b border-cream/10 py-3 font-serif text-3xl transition-colors hover:text-rose sm:text-5xl"
                >
                  <span className="text-sm text-gold-soft">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-cream/60">
              <div>{site.address.line1}</div>
              <div>{site.address.line2}</div>
            </div>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 rounded-full bg-rose px-8 py-4 text-sm uppercase tracking-[0.16em] text-espresso transition-all hover:bg-cream"
            >
              Book an Appointment
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
