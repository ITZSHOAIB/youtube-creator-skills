import { Link } from 'react-router'

export function About() {
  return (
    <div className="bg-ink text-fg font-mono">
      <header className="border-b border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-fg">//</span>
        <span>WHAT IS A SKILL</span>
        <span>META</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-line px-6 py-10">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">WHAT IS A SKILL?</h1>
        <p className="font-mono text-sm normal-case text-fg/70 max-w-3xl">
          A repeatable habit, written down for your agent. A Creator Skill defines one clear job, the context it needs, the boundaries it must respect, and the artifact it should hand to the next step.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border-b border-line">
        <div className="bg-ink p-6">
          <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">WHY SKILLS MATTER</h2>
          <p className="font-mono text-sm normal-case text-fg/70 leading-relaxed">
            Left to guess, an agent can produce plausible content that drifts away from a channel’s voice, evidence, or audience promise. A skill keeps the creator in charge of judgment while making the workflow repeatable.
          </p>
        </div>
        <div className="bg-ink p-6">
          <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">CORE IDEAS</h2>
          <ul className="list-disc list-inside font-mono text-sm normal-case text-fg/70 space-y-2">
            <li><strong className="text-fg">Memory first.</strong> Channel context is approved once and reused everywhere.</li>
            <li><strong className="text-fg">Evidence-led.</strong> Every claim is backed by a source, a label, or uncertainty.</li>
            <li><strong className="text-fg">Approved voice.</strong> Scripts and copy stay consistent with the creator’s real style.</li>
            <li><strong className="text-fg">One video, one place.</strong> Research, notes, and assets live together in a project folder.</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">SKILLS IN THIS REPO</h2>
        <p className="font-mono text-sm normal-case text-fg/70 mb-6">
          There are 9 focused skills that cover setup, research, scripting, packaging, production, analysis, and repurposing.
        </p>
        <Link to="/skills" className="inline-block font-mono text-sm normal-case">[ Browse the full list ]</Link>
      </section>
    </div>
  )
}
