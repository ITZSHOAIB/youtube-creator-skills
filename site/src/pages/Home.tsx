import { Link } from 'react-router'
import { skills } from '../data/skills'

export function Home() {
  return (
    <div className="bg-[#070914] text-[#FBFBFF] font-mono">
      <header className="border-b border-[#C3C7D6] px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-[#FBFBFF]">//</span>
        <span>SYSTEM / YOUTUBE-CREATOR-SKILLS</span>
        <span>REV_2.6</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-[#C3C7D6] px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FBFBFF] mb-6">/// TACTICAL SCHEMA</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] uppercase tracking-[-0.03em] leading-[0.9] mb-8 max-w-5xl">
          CREATOR SKILLS FOR YOUTUBE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="font-mono text-sm normal-case tracking-normal text-[#FBFBFF]/70 leading-relaxed">
            A brutal, evidence-led operating layer for creators. Plan, script, and ship with repeatable technical discipline.
          </p>
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#FBFBFF]/50">
            <span>[ INSTALL PIPELINE ]</span>
            <span>[ CHANNEL MEMORY ]</span>
            <span>[ SCRIPT + PACKAGING ]</span>
            <span>[ REVIEW + ITERATE ]</span>
          </div>
        </div>
      </section>

      <section className="border-b border-[#C3C7D6] grid grid-cols-1 md:grid-cols-2 gap-px bg-[#070914]">
        <div className="bg-[#070914] p-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">INSTALL</h2>
          <pre className="font-mono text-xs bg-[#15152B] border border-[#C3C7D6] p-4 overflow-x-auto mb-4 text-[#FBFBFF]">
            <code>npx skills add ITZSHOAIB/youtube-creator-skills --agent codex --global</code>
          </pre>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#FBFBFF]/60 mb-4">
            Update with <code className="text-[#FBFBFF]">npx skills update</code>
          </p>
          <Link to="/install" className="font-mono text-sm normal-case text-[#FBFBFF] hover:text-[#070914]">/// More options</Link>
        </div>

        <div className="bg-[#070914] p-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-4">FEATURED</h2>
          <ul className="space-y-1 font-mono text-xs uppercase tracking-[0.08em]">
            <li><Link to="/skill/youtube-manager" className="hover:text-[#070914]">/youtube-manager</Link></li>
            <li><Link to="/skill/topic-scout" className="hover:text-[#070914]">/topic-scout</Link></li>
            <li><Link to="/skill/video-kit" className="hover:text-[#070914]">/video-kit</Link></li>
            <li><Link to="/skill/creator-voice" className="hover:text-[#070914]">/creator-voice</Link></li>
          </ul>
        </div>
      </section>

      <section className="border-b border-[#C3C7D6]">
        <h2 className="px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FBFBFF]/50 border-b border-[#C3C7D6]">
          === UNIT GRID ===
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#070914]">
          {skills.map(s => (
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

      <section className="border-b border-[#C3C7D6] px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#070914]">
        <div className="bg-[#070914] p-6 md:p-0 md:pr-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">GET ORIENTED</h2>
          <ul className="font-mono text-sm normal-case text-[#FBFBFF]/70 space-y-3">
            <li><strong className="text-[#FBFBFF]">START HERE</strong> — <Link to="/install" className="text-[#FBFBFF]">Install the skills</Link></li>
            <li><strong className="text-[#FBFBFF]">PRINCIPLES</strong> — <Link to="/about" className="text-[#FBFBFF]">What is a skill?</Link></li>
            <li><strong className="text-[#FBFBFF]">EXPLORE</strong> — <Link to="/skills" className="text-[#FBFBFF]">Browse all skills</Link></li>
          </ul>
        </div>
        <div className="bg-[#070914] p-6 md:p-0 md:pl-6">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">LATEST</h2>
          <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 mb-4">See the full changelog on GitHub.</p>
          <a href="https://github.com/ITZSHOAIB/youtube-creator-skills/commits/main" target="_blank" rel="noopener" className="font-mono text-sm normal-case text-[#FBFBFF] hover:text-[#070914]">[ View commits ]</a>
        </div>
      </section>

      <footer className="px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-[#FBFBFF]/60 flex items-center justify-between border-t border-[#C3C7D6]">
        <span>© 2026 YOUTUBE-CREATOR-SKILLS</span>
        <span>DOCUMENTATION TERMINAL</span>
      </footer>
    </div>
  )
}
