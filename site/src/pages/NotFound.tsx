import { Link } from 'react-router'
import { resolvePageMeta, useSeo } from '../lib/useSeo'

export function NotFound() {
  useSeo(resolvePageMeta(window.location.pathname))

  return (
    <div className="bg-ink text-fg font-mono">
      <header className="border-b border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-fg">//</span>
        <span>ERROR</span>
        <span>404</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-line px-6 py-10">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">404 — PAGE NOT FOUND</h1>
        <p className="font-mono text-sm normal-case text-fg/70 max-w-3xl">
          That page isn’t part of the system.
        </p>
      </section>

      <section className="px-6 py-10">
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="inline-block font-mono text-sm normal-case">[ BACK TO HOME ]</Link>
          <Link to="/skills" className="inline-block font-mono text-sm normal-case">[ ALL SKILLS ]</Link>
        </div>
      </section>
    </div>
  )
}
