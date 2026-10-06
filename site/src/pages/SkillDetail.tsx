import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { skills } from '../data/skills'

export function SkillDetail() {
  const { id } = useParams<{ id: string }>()
  const skill = skills.find(s => s.id === id)
  const [source, setSource] = useState<string>('')

  useEffect(() => {
    if (!skill) return
    fetch(`/skill-source/${skill.id}.md`)
      .then(r => r.ok ? r.text() : 'Source file unavailable.')
      .then(setSource)
      .catch(() => setSource('Source file unavailable.'))
  }, [skill?.id])

  if (!skill) {
    return (
      <div className="bg-[#070914] text-[#FBFBFF] font-mono p-6">
        <h1 className="font-display text-3xl uppercase mb-4">SKILL NOT FOUND</h1>
        <p className="text-[#FBFBFF]/60 mb-4">Return to the <Link to="/skills" className="text-[#FBFBFF]">skills directory</Link>.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#070914] text-[#FBFBFF] font-mono">
      <header className="border-b border-[#C3C7D6] px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-[#FBFBFF]">//</span>
        <span>{skill.group}</span>
        <span>{skill.name}</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FBFBFF] mb-4">[{skill.group}]</p>
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">{skill.name}</h1>
        <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 max-w-3xl mb-6">{skill.desc}</p>
        <span className="chip">/{skill.id}</span>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#070914] border-b border-[#C3C7D6]">
        <div className="bg-[#070914] p-6">
          <h2 className="font-display text-xl uppercase leading-[0.9] mb-3">WHEN TO USE</h2>
          <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 leading-relaxed">{skill.when}</p>
        </div>
        <div className="bg-[#070914] p-6">
          <h2 className="font-display text-xl uppercase leading-[0.9] mb-3">WHAT IT DOES</h2>
          <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 leading-relaxed">{skill.does}</p>
        </div>
        <div className="bg-[#070914] p-6">
          <h2 className="font-display text-xl uppercase leading-[0.9] mb-3">INPUTS</h2>
          <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 leading-relaxed">{skill.inputs}</p>
        </div>
      </section>

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">WORKFLOW</h2>
        <ol className="list-decimal list-inside font-mono text-sm normal-case text-[#FBFBFF]/70 space-y-2">
          {skill.steps.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#070914] border-b border-[#C3C7D6]">
        <div className="bg-[#070914] p-6">
          <h2 className="font-display text-xl uppercase leading-[0.9] mb-3">OUTPUTS</h2>
          <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 leading-relaxed">{skill.outputs}</p>
        </div>
        <div className="bg-[#070914] p-6">
          <h2 className="font-display text-xl uppercase leading-[0.9] mb-3">CREATOR APPROVAL</h2>
          <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 leading-relaxed">{skill.approval}</p>
        </div>
      </section>

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">RELATED</h2>
        <div className="flex flex-wrap gap-3">
          {skill.related.map(id => {
            const s = skills.find(x => x.id === id)
            return s ? <Link key={id} to={`/skill/${id}`} className="chip hover:border-[#C3C7D6] hover:text-[#070914]">/{s.id}</Link> : null
          })}
        </div>
      </section>

      <section className="px-6 py-10 overflow-hidden">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">SOURCE INSTRUCTIONS</h2>
        <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 mb-4">
          Current SKILL.md included for inspection. Not rendered as HTML.
        </p>
        <div className="w-full max-w-full border border-[#C3C7D6] bg-[#15152B] shadow-[8px_8px_0_#53D8FF]">
          <pre className="w-full max-w-full max-h-[75vh] m-0 border-0 shadow-none font-mono text-xs p-6 md:p-8 overflow-auto whitespace-pre text-[#FBFBFF]">{source}</pre>
        </div>
      </section>
    </div>
  )
}
