---
name: compose-video
description: Builds and renders editable videos with the open-source HyperFrames pipeline — the production stage of this creator toolkit. Use when a creator asks to turn an approved brief, script, storyboard, or idea into a motion composition and a final video file, or when Video Kit or YouTube Shorts hands off a production brief. Checks the intake for build-blocking gaps, records every answered decision, applies creator constraints, runs quality checks, and reports honestly what was produced. Not for topic research or scripting (→ video-kit), Short planning (→ youtube-shorts), or choosing which video workflow to run (→ /hyperframes router).
---

# Compose Video

The production stage behind Video Kit and YouTube Shorts: take an approved creative contract and turn it into an editable HyperFrames composition, a checked preview, and — with approval — a rendered video file.

This skill is an **adapter, not a new front door**. Intent and workflow routing belong to the `/hyperframes` router and its workflow skills; this skill owns the creator-side layer: intake from the other skills, channel constraints, the quality bar, approval gates, and honest reporting.

## Workflow

1. **Check the toolchain before promising anything.** Probe HyperFrames availability (the `/hyperframes` skill resolvable in this agent, and `npx hyperframes --version` working). Pick one mode and say which:
   - **Full build** — toolchain present → continue below.
   - **Guided install** — missing but wanted → offer the official install from the [HyperFrames repository](https://github.com/heygen-com/hyperframes); confirm with the creator before installing anything. If an installed plugin already provides HyperFrames, do not add standalone duplicates.
   - **Brief-only** — HyperFrames unavailable or declined → deliver the ready-to-use brief and name the missing prerequisite. **Never claim a render happened when it did not.**

   Then run `npx hyperframes auth status` and relay its output verbatim. When channel memory requires open-source-only tooling, the local/offline branch is the only permitted one; ask the creator before signing in.

2. **Take the intake, don't recreate it.** Sources, in order: a `composition-brief.md` from Video Kit, a `shorts-brief.md` from YouTube Shorts, or the creator's direct request. Read `CHANNEL_MEMORY.md` when present. For a fresh build, convert the intake into the HyperFrames brief through the router's intent layer; for an existing project, resume from its files — never re-interrogate settled work or duplicate another skill's deliverable.

   **Check completeness; don't re-grill.** Treat the intake as complete only when it answers the build-blocking questions: **placement** (derive the canvas from it and state the derivation), **duration** (recommend one the material supports, with the reason, rather than asking), the **audio plan** — voice source (creator recording, local TTS, or none), BGM on or off, captions built or skipped — **language** (state it from channel memory or the request; ask only if it is contradictory or unknown), **taste direction**, **required assets and their licenses**, and **how approval will happen**. The full set — options, what each choice changes in the build, and where each answer is recorded for each intake type — is in [build-decisions.md](references/build-decisions.md). Concept and story decisions stay settled where they were made — Video Kit's brief, YouTube Shorts' `shorts-brief.md`, or the router's intent interview for a direct request — and are never reopened here. For any remaining build-blocking gap, ask one concise question at a time, lead with the recommended option and a one-line reason; never run a questionnaire.

   **Note every decision.** Record each answered choice (including gap answers) in the build's brief so a resumed run never asks the same thing twice. Durable preferences are proposed to channel memory only with the creator's confirmation.

3. **Apply the creator's constraints.** Open-source-only when required: local rendering, local open-source dependencies, creator-provided or properly licensed assets. Do not substitute hosted rendering, hosted HyperFrames MCP, metered generation services, or closed-source media services. Check the license of every asset — an open-source framework grants no rights to third-party footage, images, fonts, or music. Follow channel memory for language, voice, and pacing; never clone a real voice without permission.

4. **Build with the current contract, not memory.** Work inside the video's `production/` folder and preserve editable source. Follow the official HyperFrames skills/plugin and authoring contract — check current setup and CLI commands from the [repository](https://github.com/heygen-com/hyperframes) and [CLI guide](https://github.com/heygen-com/hyperframes/blob/main/packages/cli/README.md) rather than stale commands. Date-stamp commands taken from upstream docs (release checked + date) in the build notes, and re-check them when older than about one HyperFrames release. **An artifact on disk is the only proof a stage completed** — re-run or re-dispatch when expected output is missing instead of trusting a success report. On-screen and spoken copy stay in the creator's saved language; technical notes stay in English.

5. **Run the quality gate before showing anything.** Structural, runtime, and layout checks must pass; inspect representative frames for copy readability, language, timing, audio, and the final frame/poster. Fail on errors; a tolerated warning needs a stated reason in the report.

6. **Gate the render on approval.** Show the preview first. Render the final video only after the creator approves the preview, unless the request already clearly authorizes final rendering.

7. **Report exactly what exists.** State which checks and exports succeeded and where files landed. Never claim an MP4 exists if only a brief, source, or preview was produced.

## Boundaries

- Treat creator-confirmed channel memory as the source of channel-specific choices; do not copy channel details into this shared skill.
- Story, claims, language, and creative boundaries stay with Video Kit; Short-specific structure stays with YouTube Shorts. This skill consumes their briefs and does not re-research, re-script, or re-plan.
- Approval before persistence: never save durable preferences or channel memory without the creator's confirmation.
- No invented outputs, no promised growth. Distinguish checked results from untested ones in every report.
- Keep machine-specific quirks and channel-specific creative taste out of this skill — the first belongs in the workspace's agent instructions, the second in channel memory or a saved recipe.

## References

- Build decision set: `references/build-decisions.md` (the every-video decisions — options, build impact, and where each answer is recorded)
- Creative brief contract: `../video-kit/references/video-production-briefs.md` (the `composition-brief.md` shape this skill consumes)
- Shorts brief contract: `../youtube-shorts/references/shorts-brief-template.md`
- Music direction: `../video-kit/references/music-and-licensing.md`
