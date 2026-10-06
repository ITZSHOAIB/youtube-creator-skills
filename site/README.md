# Documentation site

The [YouTube Creator Skills](../README.md) documentation site — a Vite +
React + TypeScript single-page app styled with Tailwind CSS v4. It produces
static files only: no server code, credentials, or deployment artifacts in
the repo (`dist/` and `node_modules/` are gitignored).

## Develop

Requires Node 20 (see `.nvmrc`).

```bash
npm install
npm run dev          # dev server at http://localhost:5173
npm run build        # typecheck (tsc -b) + production build to dist/
npm run lint         # oxlint
npm run skills:sync  # refresh public/skill-source/ from skills/*/SKILL.md
npm run skills:check # verify those copies are current (runs in CI)
```

Keep **Vite on v5** — the build is pinned for compatibility with this
toolchain. Do not upgrade it.

## Layout

- `src/components/` — `Layout` (sidebar + mobile header + scroll reset),
  `MarkdownViewer` (rendered markdown with heading demotion), `CommandBlock`
  (copyable install commands)
- `src/data/skills.ts` — the skill registry; **new skills must be registered
  here** before they appear anywhere on the site
- `src/pages/` — Home, Skills, SkillDetail (RENDERED/RAW toggle), Install, About
- `src/index.css` — theme tokens: palette with semantic roles
  (`primary` = orange interactive, `accent` = cyan decoration), the hard
  shadow scale, and the universal link/hover/focus rules
- `public/skill-source/` — byte-identical copies of `skills/*/SKILL.md` used
  by the RAW view; regenerate with `npm run skills:sync`, never by hand

## Deploy

Cloudflare Pages (git integration): root directory `site`, framework preset
Vite (build command `npm run build`), output directory `dist`, optional
`NODE_VERSION=20`. The full walkthrough, including the manual wrangler
deploy and the SPA redirect setup, lives in the
[root README](../README.md#website-deployment).
