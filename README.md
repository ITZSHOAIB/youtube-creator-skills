# YouTube Creator Skills

**Practical, channel-aware workflows for the work behind a YouTube video.** Research the channel and product, learn the creator's real experience, then shape ideas, scripts, packaging, and production around the channel's approved memory.

This repository contains focused Agent Skills you can install individually or together. The skills are designed to work with Codex and other agents supported by the [Vercel Skills CLI](https://github.com/vercel-labs/skills).

## Skills in this repository

| Skill | What it helps with |
|---|---|
| [`youtube-manager`](skills/youtube-manager/SKILL.md) | Channel setup, creator-approved memory, channel research, content strategy, and optional reviews of supplied Studio analytics. |
| [`topic-scout`](skills/topic-scout/SKILL.md) | Deep, current research and evidence-backed ranking of video topic opportunities for a specific channel. |
| [`review-grill`](skills/review-grill/SKILL.md) | Product and digital-service research followed by an adaptive, one-question-at-a-time interview that saves the creator's firsthand experience in a structured review brief. |
| [`video-kit`](skills/video-kit/SKILL.md) | Per-video research, recording outlines or scripts, publishing assets, and optional open-source HyperFrames production. |
| [`youtube-shorts`](skills/youtube-shorts/SKILL.md) | Short-specific concepts, scripts, upload assets, production briefs, overlays, and requested local renders. |
| [`youtube-thumbnail`](skills/youtube-thumbnail/SKILL.md) | Honest thumbnail strategy, mockups, and final exports. |
| [`creator-voice`](skills/creator-voice/SKILL.md) | An approved creator voice profile from real scripts and transcripts. |
| [`social-repurpose`](skills/social-repurpose/SKILL.md) | A selected cross-platform repurposing plan from an approved source video. |
| [`youtube-analytics`](skills/youtube-analytics/SKILL.md) | Evidence-based decisions from supplied YouTube Studio data. |

### YouTube Manager

Start with a channel URL. The skill finds recent uploads, studies public channel evidence, and drafts a profile for the creator to review. A creator can optionally provide up to three “gold standard” videos. The skill saves persistent channel memory only after approval.

With approved memory in place, it can help with:

- Video, Short, and series ideas grounded in viewer needs and channel fit.
- Channel positioning, audience needs, recurring formats, and product/business hypotheses.
- Creator-approved memory maintenance as durable preferences and decisions emerge.
- Local transcript generation when YouTube captions are unavailable, with model, coverage, and review status recorded separately from channel memory.
- Optional, evidence-based reviews of supplied YouTube Studio results, with durable learnings passed to Topic Scout when saved.

For a deep, current evidence scan and ranked idea shortlist, use **Topic Scout**.

### Topic Scout

Topic Scout studies the channel's current public catalogue, approved memory, relevant search and trend signals, and competing coverage. It ranks topic ideas by audience/channel fit, evidence of demand, quality of the gap, creator's ability to deliver, and timing or production constraints. It distinguishes public clues from private Studio data, marks evidence confidence, and does not promise views or growth. Use Video Kit after selecting an idea for its researched outline/script and publishing package.

### Review Grill

This skill fits hands-on reviews of consumer products and digital services, from controllers and phones to apps and subscriptions. It researches specifications, current claims, pricing, and terms itself, then asks the creator one question per turn about firsthand use and what they would tell a buyer. It saves a structured `review-brief.md` with the creator's experience, key unknowns, and useful research sources kept distinct. It does not write scripts or publishing assets.

Review Grill can be used by itself when the creator only wants to capture product experience for later. For a complete review video, **Video Kit** uses the brief to create the requested recording outline or script and copy-ready publishing package.

### Video Kit

Video Kit handles work for one video: current research, a channel-aware recording outline by default (or a requested hybrid/full script), and the copy-ready publishing package. It checks for an existing Review Grill brief before interviewing; hands-on experience comes from the creator, while specifications and current claims are researched independently. Optional modules cover script-matched music, creative video briefs, and open-source HyperFrames builds. Brief guidance and implementation details load separately.

All files for a video stay together under the channel workspace's `videos/` folder. New projects use `videos/<year>/<video-title>/`; Review Grill's `review-brief.md`, Video Kit's `script.md` and `publishing.md`, and any assets share that same project folder. Existing projects are reused in place. See [project organization](skills/video-kit/references/project-organization.md).

### YouTube Shorts

Use YouTube Shorts for standalone Shorts and cutdowns from long-form videos. It adapts concepts and scripts to the requested goal and format, then continues into production only when requested. It follows channel memory, uses Review Grill briefs for firsthand review claims, and can draw on Topic Scout or Video Kit for the research each Short needs. It does not duplicate their saved research or long-form deliverables.

A Short derived from a long-form video stays in that video's folder under `shorts/<short-title>/`; a standalone Short uses `videos/<year>/<short-title>/`. The Short brief keeps its concept, scene beats, and requested upload copy together. Production assets stay with the Short.

## Memory-first, evidence-led

When `CHANNEL_MEMORY.md` is available, it guides the workflow: research priorities, intended audience, question phrasing, tone, language, script style, disclosures, and production constraints. Relevant transcript and style references inform voice without being copied mechanically.

Channel memory is maintained as the creator confirms durable preferences and decisions over time. Skills update confirmed guidance in place, keep one-video details with that video's project files, and ask before turning an inference into a permanent creator preference.

If no memory exists, the channel manager researches public evidence and presents a proposed profile for approval before saving setup files. Public observations, inferences, and unknown private details are labeled separately. Internal manager memory and research notes are kept in English; channel-facing content follows the creator's approved language and style.

For review work, the creator is the source for firsthand observations. Manufacturer claims, independent testing, public anecdotes, and creator experience stay clearly distinguished. Untested features and uncertain details are labeled instead of guessed.

## Install

```bash
npx skills add ITZSHOAIB/youtube-creator-skills
```

No flags needed — the CLI takes care of the options while it runs: which skills to install, which agent to use, and whether to install globally or into the current project. See the [Skills CLI documentation](https://github.com/vercel-labs/skills) for supported agents and options.

## Try it

After installing, start a conversation with a task such as:

- “Set up a channel manager for this YouTube channel: `https://youtube.com/@yourhandle`.”
- “Use my channel memory and current YouTube evidence to find and rank five video opportunities.”
- “Interview me about my experience with this controller and save a review brief. Then help me turn it into a YouTube review video.”
- “Research this topic, make a Hinglish recording outline, and prepare the title, description, tags, thumbnail copy, and music options.”
- “Use my channel memory to pitch three video ideas for this month's uploads.”
- “Turn the strongest moment from this review into a self-contained YouTube Short and save the brief in the existing video project.”

For a hands-on review, Review Grill researches the product and saves an experience brief after interviewing the creator. Video Kit uses that brief for scripts and publishing assets. YouTube Manager maintains channel memory and strategy. For channel setup, the agent researches the channel and asks for approval before creating durable memory or transcript-reference files.

## Website deployment

The documentation site lives in [`site/`](site/). It is a Vite + React + TypeScript app styled with Tailwind CSS, and it has no server code, deployment manifest, credentials, or generated deployment artifacts checked in (`site/dist` and `site/node_modules` are ignored).

For Cloudflare Pages (git integration):

1. Connect this GitHub repository.
2. Set the production branch to `main`.
3. In **Build & deployments → Build configurations**, set the root directory to `site`.
4. Set the framework preset to **Vite** (build command `npm run build`).
5. Set the build output directory to `dist`.
6. Optional but recommended: add an environment variable `NODE_VERSION` = `20` (a `.nvmrc` with `20` is also included as a fallback).

Every push to `main` then rebuilds and deploys automatically. The site is a single-page app with client-side routing: [`site/public/_redirects`](site/public/_redirects) rewrites all paths to `index.html` so deep links like `/skill/video-kit` work on refresh, and unknown paths fall back to home.

To deploy manually instead, run:

```bash
cd site
npm install
npm run build
npx wrangler pages deploy dist
```

For local development:

```bash
cd site
npm install
npm run dev
```

## Repository layout

```text
skills/
├── youtube-manager/
│   ├── SKILL.md
│   ├── references/
│   └── scripts/
├── topic-scout/
│   ├── SKILL.md
│   └── references/
│       └── opportunity-research.md
├── review-grill/
│   ├── SKILL.md
│   └── references/
│       └── experience-probes.md
├── video-kit/
│   ├── SKILL.md
│   └── references/
│       ├── hyperframes-build.md
│       ├── music-and-licensing.md
│       ├── project-organization.md
│       ├── scripting-and-publishing.md
│       └── video-production-briefs.md
└── youtube-shorts/
    ├── SKILL.md
    └── references/
        ├── shorts-brief-template.md
        ├── shorts-intake.md
        ├── shorts-production.md
        ├── shorts-text-overlays.md
        └── shorts-writing-and-publishing.md
site/
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   └── skill-source/
│       └── *.md
└── src/
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── Layout.tsx
    │   └── MarkdownViewer.tsx
    ├── data/
    │   └── skills.ts
    └── pages/
        ├── Home.tsx
        ├── Skills.tsx
        ├── SkillDetail.tsx
        ├── Install.tsx
        └── About.tsx
```

Each skill has its own `SKILL.md` and can be installed independently. The channel manager includes supporting references and a local ASR helper for transcript fallback.
