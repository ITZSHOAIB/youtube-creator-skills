# Contributing to YouTube Creator Skills

Thanks for helping improve these skills and the documentation site.
Contributions of all sizes are welcome — a typo fix counts.

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

| Area | Where | Notes |
|---|---|---|
| Skill content | [`skills/<name>/SKILL.md`](skills/) + `references/` | The instructions agents actually run |
| Documentation site | [`site/`](site/) | React + TypeScript + Tailwind, Vite v5 |
| Root docs | `README.md`, this file | Install steps, examples, layout |
| Bugs & ideas | [Issue forms](https://github.com/ITZSHOAIB/youtube-creator-skills/issues/new/choose) | Use the right form — see below |

## Ground rules

- **Memory-first, evidence-led.** Skills must treat creator-confirmed channel
  memory as the source of channel-specific choices, keep public observations
  separate from private data, label observed facts vs. inferences, and never
  promise views or growth.
- **Approval before persistence.** Skills ask before saving durable channel
  memory or turning an inference into a permanent creator preference.
- **Plain install commands.** Any documented install command stays exactly:

  ```bash
  npx skills add ITZSHOAIB/youtube-creator-skills
  ```

  No `--agent`, `--global`, or `--skill` flags in docs — the Skills CLI
  presents those options itself.

## Developing the site

Prerequisites: Node 20 (see `site/.nvmrc`). Keep Vite on v5 — do not upgrade
it (Rolldown-related breakage).

```bash
cd site
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # typecheck (tsc -b) + production build
npm run lint       # oxlint
```

To reach the dev server through a remote HTTPS endpoint (e.g. Tailscale
Serve), which forwards the original `Host` header, allow your hostname in
`site/.env.local` (gitignored): `DEV_ALLOWED_HOSTS=your-hostname`. When
unset, Vite's default host allowlist applies.

CI runs the skill-source check, `npm run build`, and lint on every pull
request to `main`.

The visual theme lives in `site/src/index.css`, where every color has a
semantic token:

- **primary** = orange `#FF8A24` — links, hover fills, active/selected
  states, and content accents (inline code, sub-headings, prompt)
- **accent** = cyan `#53D8FF` — decoration only: hard shadows, focus
  ring, gradient; never used as a hover or active fill

Use the generated utilities (`bg-primary`, `text-fg/70`, `border-line`,
`shadow-hard-md`, …) instead of hardcoded hex, and follow the universal
state machine: rest = muted, hover = primary fill + ink text, active =
primary fill + accent shadow. If you change colors or sizes, keep
text/background contrast at WCAG AA (4.5:1) or better — check both normal
and hover/active states.

## Changing skills

A skill lives in `skills/<skill-id>/`:

```text
skills/<skill-id>/
├── SKILL.md              # required: YAML frontmatter (name, description) + instructions
├── references/            # optional: supporting docs loaded on demand
├── scripts/               # optional: helper scripts
└── agents/openai.yaml     # optional: agent-specific config
```

Keep edits inside the skill's stated boundaries (every `SKILL.md` has a
`## Boundaries` section) and keep the handoffs between skills intact — e.g.
Video Kit consumes Review Grill's `review-brief.md` rather than
re-interviewing the creator.

After **any** edit to a `SKILL.md`, sync the copy the site serves:

```bash
cd site
npm run skills:sync
```

This refreshes `site/public/skill-source/<skill-id>.md`, the byte-identical
copy behind the site's RENDERED/RAW toggle. CI runs `npm run skills:check`
and fails if those copies are stale.

### Adding a new skill

1. Create `skills/<skill-id>/SKILL.md` with `name` and `description`
   YAML frontmatter.
2. Register it in [`site/src/data/skills.ts`](site/src/data/skills.ts) — add
   an entry to `skills` (and to `groups` if you introduce a new group).
3. Run `npm run skills:sync` in `site/`.
4. Add a row to the skills table in the root `README.md`.

## Submitting a pull request

1. Fork the repository and branch from `main`
   (`git checkout -b fix/short-description`).
2. Keep changes focused — one concern per PR.
3. Verify locally:
   - site changes: `npm run build` in `site/`
   - skill changes: `npm run skills:check` in `site/`
4. Open a PR with the template filled in: what changed, why, and the
   checklist. For site UI changes, attach before/after screenshots.

Reviewers look for:

- Build and skill-source check passing
- Skill changes staying within the skill's boundaries
- Evidence and approval language preserved (no invented claims, no
  silent persistence of preferences)
- No generated files committed (`site/dist`, `node_modules`)

## Reporting bugs and suggesting skills

Use the [issue forms](https://github.com/ITZSHOAIB/youtube-creator-skills/issues/new/choose):

- **Bug report** — a skill or the site behaves wrong
- **Skill improvement** — a skill is missing guidance or says something
  inaccurate; also for new-skill ideas

Security issues don't go in public issues — see [SECURITY.md](SECURITY.md).

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](LICENSE) covering this repository.
