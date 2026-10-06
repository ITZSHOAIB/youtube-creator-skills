# Video project organization

Use the active channel workspace as the root: the folder containing its `CHANNEL_MEMORY.md` (or the clearly identified video project root if no memory file exists). Keep all durable channel memory at that root and each video's working files inside one project folder.

## New project path

For new projects, use:

```text
<channel-workspace>/videos/<year>/<video-title>/
```

Use the local year when the project folder is first created, not the planned publish date. This groups a growing archive by year without adding an extra navigation level. Use the creator's planned title if supplied; otherwise choose a clear working title from the product/topic and format. Replace filesystem-forbidden characters with readable separators. Keep the full human-readable video title as the H1 inside `script.md`.

Before creating a folder, search under `videos/` for an existing project matching the video title, product/topic, or supplied `review-brief.md`. Reuse a matching older `videos/<video-title>/` or dated folder in place. Do not move existing projects just to fit the current convention. If two distinct videos have the same title, add a short distinguishing date or topic suffix to the later folder.

### Review Grill first, Video Kit later

Review Grill may run before the final public title exists. In that case, create the folder after the interview using a stable working title derived from the product/topic (for example, `Evofox Elite X2 Pro Review`) and save `review-brief.md` there. Do not ask an extra title question just to name the folder.

When Video Kit runs later, search `videos/` for the matching `review-brief.md` and reuse that exact project folder. If one brief clearly matches, continue there. If multiple briefs could match, ask one short clarification before creating files. Do not start a second project for the same video.

Once Video Kit has settled on the primary video title, rename the working-title folder to that title once if there is no name conflict and the creator has not asked to preserve the old folder name. Keep every project file and subfolder together and report the updated path. Do not rename the folder for every alternate SEO title or later headline edit.

## Files in a project

```text
<video-title>/
├── review-brief.md       # Review Grill; only for hands-on reviews
├── script.md             # Video Kit outline, hybrid, or full script
├── publishing.md         # Video Kit upload copy and publishing notes
├── research.md           # Optional; only for substantial research that outgrows source notes
├── assets/               # Optional; create only when media/assets are saved
└── production/           # Optional; production plans or editable video project
```

- Review Grill saves or updates `review-brief.md` in the same folder Video Kit uses. If an existing brief is elsewhere in the channel workspace, use it and move/copy it only when the creator requests consolidation.
- Video Kit saves `script.md` and `publishing.md` beside the review brief. Keep source URLs and checked dates with the relevant claims; create `research.md` only if the notes are substantial.
- Put generated or collected media in `assets/` and create it only when needed. Keep HyperFrames planning and editable source under `production/` (for example, `production/video-plan.md` and `production/hyperframes/`). Do not create empty placeholder directories.
- Avoid duplicating the same script, review brief, or upload package under a separate global `scripts/` tree. A video folder is the source of truth for that video's materials.
- For a brainstorming-only response, do not create a project folder. Create one once the creator requests saved research, a review brief, a script/outline, a publishing package, or production files.

## Shorts projects

- When a Short is derived from a long-form video, keep it within that video's existing project folder at `shorts/<short-title>/`. Link back to the source script or footage in `shorts-brief.md`.
- For a standalone Short with no matching parent project, use `videos/<year>/<short-title>/` and keep its `shorts-brief.md`, optional production files, and generated assets together there.
- Reuse a matching existing Short folder. Do not duplicate the parent video, its review brief, or its publishing package inside the Short folder; link to them instead.
- Keep Short-specific spoken copy, scene beats, and requested upload copy in `shorts-brief.md` by default. Split out files only when the creator requests it or the material is substantial enough to work better separately.
