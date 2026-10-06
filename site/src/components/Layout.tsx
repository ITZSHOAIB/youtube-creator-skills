import { Link, NavLink, useLocation } from 'react-router'
import { useEffect, useRef, type ReactNode } from 'react'
import { skills, groups } from '../data/skills'
import packageJson from '../../package.json'

const navItem = (isActive: boolean) =>
  isActive
    ? 'bg-primary border-2 border-line px-3 py-2 shadow-hard-md text-ink'
    : 'text-fg/70 hover:text-ink hover:bg-primary border-2 border-transparent px-3 py-2'

const mobileNavItem = (isActive: boolean) =>
  isActive
    ? 'bg-primary border-2 border-line px-2 py-1 shadow-hard-sm text-ink whitespace-nowrap'
    : 'text-fg/70 hover:text-ink hover:bg-primary border-2 border-transparent px-2 py-1 whitespace-nowrap'

const treeItem = (isActive: boolean) =>
  isActive
    ? 'block bg-primary border-2 border-line px-2 py-1 mb-1 text-ink shadow-hard-sm'
    : 'block text-fg/70 hover:text-ink hover:bg-primary border-2 border-transparent px-2 py-1 mb-1'

const chipItem = (isActive: boolean) =>
  `shrink-0 text-xs border-2 border-line px-2 py-1 whitespace-nowrap ${
    isActive
      ? 'bg-primary text-ink shadow-hard-sm'
      : 'bg-ink text-fg/70 hover:bg-primary hover:text-ink'
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
    <div className="min-h-screen bg-ink text-fg font-mono text-sm uppercase tracking-[0.05em]">
      {/* Mobile: compact sticky header with horizontally scrollable nav */}
      <header className="lg:hidden sticky top-0 z-40 bg-panel border-b border-line">
        <div className="flex items-center justify-between gap-3 px-4 pt-3">
          <Link to="/" className="font-display text-sm uppercase tracking-[-0.02em] text-fg">
            [==] CREATOR SKILLS
          </Link>
          <span className="text-xs text-fg/60">v{packageJson.version}</span>
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
        <aside className="hidden lg:flex lg:flex-col border-r-[4px] border-line p-6 lg:sticky lg:top-0 lg:h-screen justify-between bg-panel">
          <div className="min-h-0 overflow-y-auto">
            <Link to="/" className="block font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-4 text-fg">
              [==] CREATOR<br />SKILLS
            </Link>
            <div className="top-strip h-1 mb-8" />
            <nav aria-label="Main" className="flex flex-col gap-2 text-xs">
              <NavLink to="/" end className={({ isActive }) => navItem(isActive)}>[01] HOME</NavLink>
              <NavLink to="/skills" className={({ isActive }) => navItem(isActive || skillsActive)}>[02] SKILLS</NavLink>
              <div className="ml-2 border-l-2 border-line pl-3">
                {groups.map(g => (
                  <div key={g.title} className="mt-3 first:mt-1">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-fg/60 mb-1">&gt; {g.title}</p>
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
          <div className="mt-8 pt-6 border-t border-line text-xs text-fg/60 space-y-2">
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
