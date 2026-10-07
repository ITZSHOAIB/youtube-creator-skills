import { Fragment, useRef } from 'react'
import { Link } from 'react-router'
import { skills } from '../data/skills'
import { CommandBlock } from '../components/CommandBlock'
import { gsap, useGSAP, useRiseReveal } from '../lib/gsap'
import { resolvePageMeta, useSeo } from '../lib/useSeo'
import packageJson from '../../package.json'

const QUICK_INSTALL_COMMAND = 'npx skills add ITZSHOAIB/youtube-creator-skills'
const HERO_LABEL = '/// PLAN. SCRIPT. SHIP.'
const HERO_WORDS = ['CREATOR', 'SKILLS', 'FOR', 'YOUTUBE']

export function Home() {
  const root = useRef<HTMLDivElement>(null)

  useSeo(resolvePageMeta('/'))

  // Unit grid entrances: tiles are CSS-hidden until this batch reveals them.
  useRiseReveal(root)

  // Hero: the label types in while the headline words rise out of their masks.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const label = root.current?.querySelector<HTMLElement>('.motion-type')
        const timeline = gsap.timeline()

        if (label) {
          // Typed live: clear the rendered text, then slice it back in.
          label.textContent = ''
          label.style.visibility = 'visible'
          const typer = { n: 0 }
          timeline.to(
            typer,
            {
              n: HERO_LABEL.length,
              snap: { n: 1 },
              duration: 0.65,
              ease: 'none',
              onUpdate: () => {
                label.textContent = HERO_LABEL.slice(0, typer.n)
              },
              onComplete: () => {
                label.textContent = HERO_LABEL
              },
            },
            0,
          )
        }

        // GSAP parses the stylesheet's translateY(110%) into a pixel `y`
        // baseline, and `y` / `yPercent` are independent channels — zero `y`
        // explicitly or the tween ends at y=47.5px and the words stay masked.
        timeline.fromTo(
          '.motion-mask > span',
          { y: 0, yPercent: 110 },
          { y: 0, yPercent: 0, duration: 0.6, ease: 'power4.out', stagger: 0.07 },
          0.25,
        )
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="bg-ink text-fg font-mono">
      <header className="border-b border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-fg">//</span>
        <span>OPEN SOURCE / YOUTUBE-CREATOR-SKILLS</span>
        <span>v{packageJson.version}</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-line px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg mb-6 motion-type">{HERO_LABEL}</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] uppercase tracking-[-0.03em] leading-[0.9] mb-8 max-w-5xl">
          {HERO_WORDS.map((word, i) => (
            <Fragment key={word}>
              {i > 0 ? ' ' : null}
              <span className="motion-mask">
                <span>{word}</span>
              </span>
            </Fragment>
          ))}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="font-mono text-sm normal-case tracking-normal text-fg/70 leading-relaxed">
            Plan, script, and ship every video — without losing your voice. Nine skills your agent follows, start to finish.
          </p>
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg/60">
            <span>[ ONE-COMMAND INSTALL ]</span>
            <span>[ CHANNEL MEMORY ]</span>
            <span>[ SCRIPT + PACKAGING ]</span>
            <span>[ REVIEW + ITERATE ]</span>
          </div>
        </div>
      </section>

      <section className="border-b border-line grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
        <div className="bg-ink p-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">INSTALL</h2>
          <CommandBlock label="QUICK INSTALL" command={QUICK_INSTALL_COMMAND} />
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-fg/60 mb-4">
            Keep them updated with <code>npx skills update</code>
          </p>
          <Link to="/install" className="font-mono text-sm normal-case">/// More install options</Link>
        </div>

        <div className="bg-ink p-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">FEATURED</h2>
          <ul className="space-y-1 font-mono text-xs uppercase tracking-[0.08em]">
            <li><Link to="/skill/youtube-manager" className="hover:text-ink">/youtube-manager</Link></li>
            <li><Link to="/skill/topic-scout" className="hover:text-ink">/topic-scout</Link></li>
            <li><Link to="/skill/video-kit" className="hover:text-ink">/video-kit</Link></li>
            <li><Link to="/skill/creator-voice" className="hover:text-ink">/creator-voice</Link></li>
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <h2 className="px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-fg/60 border-b border-line">
          === ALL SKILLS ===
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink">
          {skills.map((s, i) => (
            <Link key={s.id} to={`/skill/${s.id}`} className="group tile-hover motion-rise bg-ink p-6 block hover:z-10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-md">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg">{s.group}</span>
                <span className="font-mono text-xs text-fg/60">{`[ ${String(i + 1).padStart(2, '0')} ]`}</span>
              </div>
              <h3 className="font-display text-xl uppercase leading-[0.95] tracking-[-0.01em] mb-3 group-hover:text-fg">{s.name}</h3>
              <p className="font-mono text-sm normal-case text-fg/70 leading-relaxed">{s.desc}</p>
              <div className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-fg/60">[ VIEW SKILL ]</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
        <div className="bg-ink p-6 md:p-0 md:pr-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">NEXT STEPS</h2>
          <ul className="font-mono text-sm normal-case text-fg/70 space-y-3">
            <li><strong className="text-fg">SETUP</strong> — <Link to="/install">Install in one command</Link></li>
            <li><strong className="text-fg">LEARN</strong> — <Link to="/about">What is a skill?</Link></li>
            <li><strong className="text-fg">BROWSE</strong> — <Link to="/skills">All nine skills</Link></li>
          </ul>
        </div>
        <div className="bg-ink p-6 md:p-0 md:pl-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">LATEST</h2>
          <p className="font-mono text-sm normal-case text-fg/70 mb-4">See the full changelog on GitHub.</p>
          <a href="https://github.com/ITZSHOAIB/youtube-creator-skills/commits/main" target="_blank" rel="noopener" className="font-mono text-sm normal-case">[ View commits ]</a>
        </div>
      </section>

      <footer className="px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-fg/60 flex items-center justify-between border-t border-line">
        <span>© 2026 YOUTUBE-CREATOR-SKILLS</span>
        <a href="https://www.youtube.com/4techloverz" target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:bg-primary px-2 py-1 border-2 border-transparent">[ YOUTUBE / 4TECHLOVERZ ]</a>
      </footer>
    </div>
  )
}
