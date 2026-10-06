import { Link, NavLink, useLocation } from 'react-router'
import { useEffect, useRef, type ReactNode } from 'react'
import { skills, groups } from '../data/skills'
import packageJson from '../../package.json'

const navItem = (isActive: boolean) =>
  isActive
    ? 'bg-[#FF8A24] border-2 border-[#C3C7D6] px-3 py-2 shadow-[4px_4px_0_#53D8FF] text-[#070914]'
    : 'text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-3 py-2'

const mobileNavItem = (isActive: boolean) =>
  isActive
    ? 'bg-[#FF8A24] border-2 border-[#C3C7D6] px-2 py-1 shadow-[3px_3px_0_#53D8FF] text-[#070914] whitespace-nowrap'
    : 'text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-2 py-1 whitespace-nowrap'

const treeItem = (isActive: boolean) =>
  isActive
    ? 'block bg-[#53D8FF] border-2 border-[#C3C7D6] px-2 py-1 mb-1 text-[#070914] shadow-[3px_3px_0_#FF8A24]'
    : 'block text-[#FBFBFF]/70 hover:text-[#070914] hover:bg-[#53D8FF] border-2 border-transparent px-2 py-1 mb-1'

const chipItem = (isActive: boolean) =>
  `shrink-0 text-xs border-2 border-[#C3C7D6] px-2 py-1 whitespace-nowrap ${
    isActive
      ? 'bg-[#53D8FF] text-[#070914] shadow-[3px_3px_0_#FF8A24]'
      : 'bg-[#070914] text-[#FBFBFF]/70 hover:bg-[#53D8FF] hover:text-[#070914]'
  }`

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const skillsActive = location.pathname.startsWith('/skills') || location.pathname.startsWith('/skill/')

  // BrowserRouter does not reset scroll on route change, so the next page
  // would inherit the previous page's scroll offset. Skip the first render so
  // browser refresh/back scroll restoration still works; use 'instant' to
  // bypass the global `scroll-behavior: smooth`.
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#070914] text-[#FBFBFF] font-mono text-sm uppercase tracking-[0.05em]">
      {/* Mobile: compact sticky header with horizontally scrollable nav */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#15152B] border-b border-[#C3C7D6]">
        <div className="flex items-center justify-between gap-3 px-4 pt-3">
          <Link to="/" className="font-display text-sm uppercase tracking-[-0.02em] hover:opacity-80">
            [==] CREATOR SKILLS
          </Link>
          <span className="text-xs text-[#FBFBFF]/60">v{packageJson.version}</span>
        </div>
        <nav aria-label="Main" className="mt-2 flex gap-1 px-4 overflow-x-auto pb-1">
          <NavLink to="/" end className={({ isActive }) => mobileNavItem(isActive)}><span className="hidden sm:inline">[01] </span>HOME</NavLink>
          <NavLink to="/skills" className={({ isActive }) => mobileNavItem(isActive || skillsActive)}><span className="hidden sm:inline">[02] </span>SKILLS</NavLink>
          <NavLink to="/install" className={({ isActive }) => mobileNavItem(isActive)}><span className="hidden sm:inline">[03] </span>INSTALL</NavLink>
          <NavLink to="/about" className={({ isActive }) => mobileNavItem(isActive)}><span className="hidden sm:inline">[04] </span>ABOUT</NavLink>
        </nav>
        <nav aria-label="Skills" className="flex gap-1 px-4 pb-2 overflow-x-auto">
          {skills.map(s => (
            <NavLink key={s.id} to={`/skill/${s.id}`} className={({ isActive }) => chipItem(isActive)}>{' /'}{s.id}</NavLink>
          ))}
        </nav>
        <div className="top-strip h-1" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen">
        {/* Desktop: sticky sidebar, skills tree always expanded; scrolls on overflow */}
        <aside className="hidden lg:flex lg:flex-col border-r-[4px] border-[#C3C7D6] p-6 lg:sticky lg:top-0 lg:h-screen justify-between bg-[#15152B]">
          <div className="min-h-0 overflow-y-auto">
            <Link to="/" className="block font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-4 hover:opacity-80">
              [==] CREATOR<br />SKILLS
            </Link>
            <div className="top-strip h-1 mb-8" />
            <nav aria-label="Main" className="flex flex-col gap-2 text-xs">
              <NavLink to="/" end className={({ isActive }) => navItem(isActive)}>[01] HOME</NavLink>
              <NavLink to="/skills" className={({ isActive }) => navItem(isActive || skillsActive)}>[02] SKILLS</NavLink>
              <div className="ml-2 border-l-2 border-[#C3C7D6] pl-3">
                {groups.map(g => (
                  <div key={g.title} className="mt-3 first:mt-1">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#FBFBFF]/60 mb-1">&gt; {g.title}</p>
                    {skills.filter(s => s.group === g.title).map(s => (
                      <NavLink key={s.id} to={`/skill/${s.id}`} className={({ isActive }) => treeItem(isActive)}>{' /'}{s.id}</NavLink>
                    ))}
                  </div>
                ))}
              </div>
              <NavLink to="/install" className={({ isActive }) => navItem(isActive)}>[03] INSTALL</NavLink>
              <NavLink to="/about" className={({ isActive }) => navItem(isActive)}>[04] ABOUT</NavLink>
            </nav>
          </div>
          <div className="mt-8 pt-6 border-t border-[#C3C7D6] text-xs text-[#FBFBFF]/60 space-y-2">
            <p>{'>'} STATUS: ACTIVE</p>
            <p>{'>'} SKILLS: {skills.length}</p>
            <p>{'>'} VERSION: v{packageJson.version}</p>
          </div>
        </aside>

        <main className="min-w-0 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
