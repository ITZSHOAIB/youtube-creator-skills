import { Link } from 'react-router'
import { skills, groups } from '../data/skills'

export function Skills() {
  return (
    <div className="bg-[#070914] text-[#FBFBFF] font-mono">
      <header className="border-b border-[#C3C7D6] px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-[#FBFBFF]">//</span>
        <span>SKILLS DIRECTORY</span>
        <span>INDEX</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">ALL SKILLS</h1>
        <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 max-w-3xl">
          Pick a skill based on where you are in your workflow. Each page explains the job, workflow, inputs, outputs, approval points, and the underlying SKILL.md.
        </p>
      </section>

      {groups.map(group => (
        <section key={group.title} className="border-b border-[#C3C7D6]">
          <h2 className="px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FBFBFF]/60 border-b border-[#C3C7D6]">
            === {group.title} ===
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#070914]">
            {skills.filter(s => s.group === group.title).map(s => (
              <Link key={s.id} to={`/skill/${s.id}`} className="group tile-hover bg-[#070914] p-6 block">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#FBFBFF]">{s.group}</span>
                  <span className="font-mono text-xs text-[#FBFBFF]/60">ID_{s.id.slice(0, 4).toUpperCase()}</span>
                </div>
                <h3 className="font-display text-xl uppercase leading-[0.95] tracking-[-0.01em] mb-3 group-hover:text-[#FBFBFF]">{s.name}</h3>
                <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 leading-relaxed">{s.desc}</p>
                <div className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-[#FBFBFF]/60">[ VIEW SYSTEM ]</div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
