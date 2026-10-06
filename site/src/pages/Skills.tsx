import { Link } from 'react-router'
import { skills, groups } from '../data/skills'

export function Skills() {
  return (
    <div className="bg-ink text-fg font-mono">
      <header className="border-b border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-fg">//</span>
        <span>SKILLS DIRECTORY</span>
        <span>INDEX</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-line px-6 py-10">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">ALL SKILLS</h1>
        <p className="font-mono text-sm normal-case text-fg/70 max-w-3xl">
          Pick a skill based on where you are in your workflow. Each page explains the job, workflow, inputs, outputs, approval points, and the underlying SKILL.md.
        </p>
      </section>

      {groups.map(group => (
        <section key={group.title} className="border-b border-line">
          <h2 className="px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-fg/60 border-b border-line">
            === {group.title} ===
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink">
            {skills.filter(s => s.group === group.title).map(s => (
              <Link key={s.id} to={`/skill/${s.id}`} className="group tile-hover bg-ink p-6 block hover:z-10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-md">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg">{s.group}</span>
                  <span className="font-mono text-xs text-fg/60">ID_{s.id.slice(0, 4).toUpperCase()}</span>
                </div>
                <h3 className="font-display text-xl uppercase leading-[0.95] tracking-[-0.01em] mb-3 group-hover:text-fg">{s.name}</h3>
                <p className="font-mono text-sm normal-case text-fg/70 leading-relaxed">{s.desc}</p>
                <div className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-fg/60">[ VIEW SYSTEM ]</div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
