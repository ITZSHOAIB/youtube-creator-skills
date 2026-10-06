// Syncs skills/<id>/SKILL.md into site/public/skill-source/<id>.md — the
// byte-identical copy the docs site serves behind the RENDERED/RAW toggle.
//
//   node scripts/sync-skill-source.mjs                copy / clean up stale files
//   node scripts/sync-skill-source.mjs --check        fail if anything is out of sync
//
// Run from site/ via `npm run skills:sync` or `npm run skills:check` (CI).

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
} from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const repoRoot = join(siteRoot, '..')
const skillsDir = join(repoRoot, 'skills')
const outDir = join(siteRoot, 'public', 'skill-source')
const checkOnly = process.argv.includes('--check')

const skills = readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(skillsDir, name, 'SKILL.md')))

mkdirSync(outDir, { recursive: true })

let problems = 0

for (const name of skills) {
  const source = join(skillsDir, name, 'SKILL.md')
  const dest = join(outDir, `${name}.md`)
  const sourceContent = readFileSync(source)
  const destContent = existsSync(dest) ? readFileSync(dest) : null

  if (destContent && sourceContent.equals(destContent)) continue

  problems += 1
  if (checkOnly) {
    console.error(`OUT OF SYNC  site/public/skill-source/${name}.md`)
  } else {
    copyFileSync(source, dest)
    console.log(`synced       ${name}.md`)
  }
}

for (const file of readdirSync(outDir)) {
  if (!file.endsWith('.md')) continue
  const name = file.slice(0, -3)
  if (skills.includes(name)) continue

  problems += 1
  if (checkOnly) {
    console.error(`STALE        site/public/skill-source/${file} (no matching skill)`)
  } else {
    rmSync(join(outDir, file))
    console.log(`removed      ${file}`)
  }
}

if (checkOnly) {
  if (problems > 0) {
    console.error(
      `\n${problems} skill source file(s) out of sync. ` +
        'Run `npm run skills:sync` in site/ and commit the result.',
    )
    process.exit(1)
  }
  console.log('Skill source copies are in sync.')
} else {
  console.log(problems > 0 ? 'Done.' : 'Already in sync.')
}
