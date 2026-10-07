import { skills } from '../data/skills'

/**
 * Single source of truth for per-page SEO copy. Consumed by the
 * client-side useSeo hook and by the Cloudflare Pages edge function
 * (site/functions/[[path]].ts) so the two can never drift.
 *
 * index.html carries the home values as its static baseline; the edge
 * function overwrites them per route, and useSeo keeps SPA navigations
 * honest in local dev where no edge function runs.
 */

export const SITE_URL = 'https://creator-skills.sohab.dev'

export interface PageMeta {
  title: string
  description: string
  path: string
  notFound?: boolean
  breadcrumb?: { name: string; path: string }[]
}

const PAGES: Record<string, Omit<PageMeta, 'path'>> = {
  '/': {
    title: 'Creator Skills — AI agent skills for YouTube creators',
    description:
      'Installable skills that turn an AI agent into a YouTube workflow: research, scripting, thumbnails, analytics, and channel memory. One command to install.',
  },
  '/skills': {
    title: 'All Skills — Creator Skills',
    description:
      'Nine skills for the whole video process: ideas, research, scripts, thumbnails, Shorts, and analytics. Start wherever you are in your workflow.',
  },
  '/install': {
    title: 'Install — Creator Skills',
    description:
      'One command, no flags: npx skills add ITZSHOAIB/youtube-creator-skills. Pick your skills and agent; editable files land in your project.',
  },
  '/about': {
    title: 'What Is a Skill? — Creator Skills',
    description:
      'A skill is a repeatable habit written down for your agent: one job, what it needs, where it stops, and what it hands to the next step.',
  },
}

const NOT_FOUND: Omit<PageMeta, 'path'> = {
  title: 'Page Not Found — Creator Skills',
  description: 'This page does not exist. Browse the nine Creator Skills or head back home.',
  notFound: true,
}

/** Resolve the canonical page meta for any request path. */
export function resolvePageMeta(rawPath: string): PageMeta {
  const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath

  const page = PAGES[path]
  if (page) return { ...page, path }

  if (path.startsWith('/skill/')) {
    const id = path.slice('/skill/'.length)
    const skill = skills.find(s => s.id === id)
    if (skill) {
      return {
        title: `${skill.name} — Creator Skills`,
        description: skill.desc,
        path,
        breadcrumb: [
          { name: 'Home', path: '/' },
          { name: 'All Skills', path: '/skills' },
          { name: skill.name, path },
        ],
      }
    }
  }

  return { ...NOT_FOUND, path }
}
