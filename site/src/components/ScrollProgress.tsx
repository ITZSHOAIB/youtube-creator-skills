import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap'

/**
 * Cyan reading-progress hairline pinned to the top of the viewport. The
 * scrub tween is created once and survives navigation; each route change
 * re-measures the scroll range so `end: 'max'` tracks the new page height.
 * Under prefers-reduced-motion: reduce the tween never runs and the CSS
 * initial `scaleX(0)` keeps the bar invisible, so no hiding rule is needed.
 */
export function ScrollProgress() {
  const location = useLocation()

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.scroll-progress',
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.25 },
        },
      )
    })
    // Web fonts finish loading after mount and shift page height.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
  })

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [location.pathname])

  return <div className="scroll-progress" aria-hidden="true" />
}
