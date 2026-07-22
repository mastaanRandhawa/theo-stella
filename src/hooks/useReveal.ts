import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal for `.reveal` elements.
 *
 * Uses ONE shared, rAF-throttled scroll/resize listener for every registered
 * element instead of a per-element IntersectionObserver — scroll events are
 * reliable across all browsers, and anything already in view is revealed
 * immediately on mount. This guarantees content never gets stuck invisible.
 */

const pending = new Set<HTMLElement>()
let listening = false
let scheduled = false

function reveal(el: HTMLElement) {
  el.classList.add('is-visible')
  pending.delete(el)
}

function check() {
  scheduled = false
  const vh = window.innerHeight || document.documentElement.clientHeight
  for (const el of Array.from(pending)) {
    const r = el.getBoundingClientRect()
    // Reveal once the element's top enters the lower 90% of the viewport.
    if (r.top < vh * 0.9 && r.bottom > -80) reveal(el)
  }
  if (pending.size === 0 && listening) {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    listening = false
  }
}

function onScroll() {
  if (!scheduled) {
    scheduled = true
    requestAnimationFrame(check)
  }
}

function register(el: HTMLElement): () => void {
  // Respect reduced-motion and guard very old browsers: just show it.
  const reduce =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || typeof requestAnimationFrame !== 'function') {
    reveal(el)
    return () => {}
  }

  pending.add(el)
  if (!listening) {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    listening = true
  }
  // Reveal on the next frame if already in view (layout settled by then).
  requestAnimationFrame(check)

  return () => {
    pending.delete(el)
  }
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    return register(el)
  }, [])

  return ref
}
