import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-in reveal for every `.motion-rise` element inside `scope`. The
 * stylesheet hides them (only under prefers-reduced-motion: no-preference)
 * and this batch lifts each one as its top edge enters the viewport.
 * ScrollTrigger's first refresh fires onEnter for anything already in or
 * past view, so no element can stay hidden while on screen. Passing
 * dependencies reverts the previous batch before creating a fresh one
 * (revertOnUpdate), which restores the CSS start state for the new run.
 */
function useRiseReveal(scope: { current: HTMLElement | null }, dependencies: unknown[] = []) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        ScrollTrigger.batch('.motion-rise', {
          start: 'top bottom',
          once: true,
          onEnter: batch =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: 'power3.out',
              overwrite: true,
            }),
        })
      })
    },
    { scope, dependencies, revertOnUpdate: dependencies.length > 0 },
  )
}

export { gsap, ScrollTrigger, useGSAP, useRiseReveal }
