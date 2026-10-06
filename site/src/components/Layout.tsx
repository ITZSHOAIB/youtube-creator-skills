import { Link, NavLink, useLocation } from 'react-router'
import { useEffect, useState, type ReactNode } from 'react'
import { skills, groups } from '../data/skills'

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const skillsActive = location.pathname.startsWith('/skills') || location.pathname.startsWith('/skill/')
  const [skillsOpen, setSkillsOpen] = useState(() => skillsActive)

  useEffect(() => {
    if (skillsActive) setSkillsOpen(true)
    // Re-expand whenever the route changes so skill pages always open the nav tree.
  }, [location.pathname, skillsActive])
  return (
    <div className="min-h-screen bg-[#070914] text-[#FBFBFF] font-mono text-sm uppercase tracking-[0.05em]">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen">
        <aside className="border-b lg:border-b-0 lg:border-r-[4px] border-[#C3C7D6] p-6 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between bg-[#15152B]">
          <div className="min-h-0 overflow-y-auto">
            <Link to="/" className="block font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-4 hover:opacity-80">
              [==] CREATOR<br />SKILLS
            </Link>
            <div className="top-strip h-1 mb-8" />
            <nav className="flex flex-col gap-2 text-xs">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-[#FF8A24] border-2 border-[#C3C7D6] px-3 py-2 shadow-[4px_4px_0_#53D8FF] text-[#070914]' : 'text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-3 py-2')}>[01] HOME</NavLink>
              <NavLink to="/skills" aria-expanded={skillsOpen} onClick={() => setSkillsOpen(o => !o)} className={({ isActive }) => (isActive || skillsActive ? 'bg-[#FF8A24] border-2 border-[#C3C7D6] px-3 py-2 shadow-[4px_4px_0_#53D8FF] text-[#070914]' : 'text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-3 py-2')}>[02] SKILLS {skillsOpen ? '[-]' : '[+]'}</NavLink>
              {skillsOpen && (
                <div className="ml-2 border-l-2 border-[#C3C7D6] pl-3 max-h-[45vh] overflow-y-auto">
                  {groups.map(g => (
                    <div key={g.title} className="mt-3 first:mt-1">
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#FBFBFF]/60 mb-1">&gt; {g.title}</p>
                      {skills.filter(s => s.group === g.title).map(s => (
                        <NavLink key={s.id} to={`/skill/${s.id}`} className={({ isActive }) => (isActive ? 'block bg-[#53D8FF] border-2 border-[#C3C7D6] px-2 py-1 mb-1 text-[#070914] shadow-[3px_3px_0_#FF8A24]' : 'block text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-2 py-1 mb-1')}>/{s.id}</NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              <NavLink to="/install" className={({ isActive }) => (isActive ? 'bg-[#FF8A24] border-2 border-[#C3C7D6] px-3 py-2 shadow-[4px_4px_0_#53D8FF] text-[#070914]' : 'text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-3 py-2')}>[03] INSTALL</NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'bg-[#FF8A24] border-2 border-[#C3C7D6] px-3 py-2 shadow-[4px_4px_0_#53D8FF] text-[#070914]' : 'text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-3 py-2')}>[04] ABOUT</NavLink>
            </nav>
          </div>
          <div className="mt-8 pt-6 border-t border-[#C3C7D6] text-xs text-[#FBFBFF]/50 space-y-2">
            <p>{'>'} STATUS: ACTIVE</p>
            <p>{'>'} REV: 2.6</p>
            <p>{'>'} UNIT: D-01</p>
          </div>
        </aside>

        <main className="min-w-0 min-h-screen border-t border-[#C3C7D6] lg:border-t-0">{children}</main>
      </div>
    </div>
  )
}
