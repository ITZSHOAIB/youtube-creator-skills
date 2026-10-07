import { Link } from 'react-router'

export function About() {
  return (
    <div className="bg-ink text-fg font-mono">
      <header className="border-b border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-fg">//</span>
        <span>WHAT IS A SKILL</span>
        <span>THE BASICS</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-line px-6 py-10">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">WHAT IS A SKILL?</h1>
        <p className="font-mono text-sm normal-case text-fg/70 max-w-3xl">
          A repeatable habit, written down for your agent. One skill = one clear job: what it does, what it needs, where it must stop, and what it hands to the next step.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border-b border-line">
        <div className="bg-ink p-6">
          <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">WHY SKILLS MATTER</h2>
          <p className="font-mono text-sm normal-case text-fg/70 leading-relaxed">
            Left to guess, your agent produces content that sounds right but misses your voice, your facts, or your audience. Skills keep you making the calls — and make the work repeatable.
          </p>
        </div>
        <div className="bg-ink p-6">
          <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">CORE IDEAS</h2>
          <ul className="list-disc list-inside font-mono text-sm normal-case text-fg/70 space-y-2">
            <li><strong className="text-fg">Your channel, remembered.</strong> You approve the context once; every skill reuses it.</li>
            <li><strong className="text-fg">Nothing made up.</strong> Every claim carries a source, a label, or an honest “we don’t know”.</li>
            <li><strong className="text-fg">Sounds like you.</strong> Scripts and copy follow your real style, not a generic one.</li>
            <li><strong className="text-fg">One video, one folder.</strong> Research, notes, and assets stay together in the video’s project folder.</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">WHAT YOU GET</h2>
        <p className="font-mono text-sm normal-case text-fg/70 mb-6">
          Nine focused skills covering setup, research, scripting, packaging, production, analytics, and repurposing.
        </p>
        <Link to="/skills" className="inline-block font-mono text-sm normal-case">[ Browse the full list ]</Link>
      </section>
    </div>
  )
}
