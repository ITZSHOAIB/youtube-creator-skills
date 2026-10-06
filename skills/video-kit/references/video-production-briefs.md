# Creative video production briefs

Read when developing a visual treatment, storyboard, intro, trailer, outro, bumper, or production brief. Follow channel memory for creator-specific style, tools, language, and licensing constraints.

## Video-generation and Hyperframes briefs

- Specify the video’s purpose, duration, aspect ratio/platform, pacing, shots, transitions, sound/music direction, and on-screen text language/script.
- Identify the exact product/version/era and any reference assets required for logo, host, or product fidelity.
- Clearly distinguish genuine product footage/screen capture from illustrative or generated shots. Never imply generated visuals are captured evidence or a real test.
- Include a shot-by-shot sequence with timestamps only when it helps production; otherwise use a concise scene brief.

### Channel-aware video production

For an actual video build, use a staged workflow inspired by strong project-to-video skills: inspect source material, choose a specific creative angle, storyboard, hand off a production brief to HyperFrames, then validate and render. Adapt every stage to the channel’s creator-approved memory, audience, visual identity, language, and supplied “gold standard” references. This workflow applies across channel genres and video types; it is not a startup-launch template.

#### Choose the right video job

Identify what the requested asset needs to do before choosing a style:

- Channel trailer or channel introduction: communicate the channel promise, target viewer, and reason to subscribe.
- Recurring episode intro/ident: establish recognition quickly without delaying the episode’s actual hook.
- Outro or CTA: reinforce the next useful action while preserving the creator’s natural subscriber relationship.
- Segment bumper or transition: distinguish recurring sections without disrupting pacing.
- Short-form hook/teaser: earn attention immediately and make one clear promise.
- Product review, tutorial, comparison, explainer, or story video: show the real subject, viewer problem, proof, and conclusion.
- Other channel-specific format: derive the structure from the actual script, examples, and creator goal.

Do not impose one duration, aspect ratio, joke, transition style, or story arc on every format. A recurring bumper should not become a long generic intro; a review should not be forced into a promo. Fit runtime and layout to its publishing slot and purpose.

#### Inspect before planning

Read the approved `CHANNEL_MEMORY.md` and any relevant transcript/style references. Inspect the actual source for this video (script, product/version, screenshots, footage, data, or reference URL) and the channel’s approved visual assets. If no memory exists, use the setup workflow first. If creator-selected gold-standard videos are available, treat them as taste references; compare them with recent uploads and do not assume popularity equals desired style.

Capture only evidence needed to make a specific video: the promise, strongest hook, 1–3 moments worth showing, essential claims/proof, visual palette/type/logo treatment, on-screen language, and CTA. Do not expose private customer data, account details, unreleased information, keys, or credentials from inspected material.

#### Make a channel-specific creative plan

Before writing composition code, draft a compact `video-plan.md` or a storyboard in chat with:

- Objective and publishing placement (for example, recurring long-form bumper, channel trailer, or vertical Short).
- Intended viewer and one central promise or feeling.
- Creative angle and opening hook, specific to the channel/topic.
- Format, aspect ratio, target duration, and safe-area assumptions.
- Beat-by-beat scenes: what is shown, what copy is read, and the evidence/assets required.
- Channel-fit tone and taste interpretation, grounded in approved references—not a generic preset or genre stereotype.
- On-screen and spoken copy in the channel’s saved publishing language/script; technical direction can remain in English.
- Audio role and licensed/local asset plan, CTA, and explicit exclusions (claims, visuals, pacing, music, humor, or sponsor treatment).

When a track recommendation is part of the request, read [music-and-licensing.md](music-and-licensing.md) and follow the channel's saved attribution preferences.

Favor one well-supported treatment over a long menu of concepts. If the request is exploratory or a major creative choice is still ambiguous, show the plan for feedback before coding. If the request is already clear, use sensible defaults from channel memory and keep moving; do not turn video production into another questionnaire. If a material claim lacks proof or an asset/license is unclear, flag that specific blocker.

#### Intro and channel identity principles

- Open on the viewer’s subject, question, or most compelling visual. Add branding where it strengthens recognition without holding up the promised content.
- Design the ident from the channel’s actual logo, colors, typography, host/voice relationship, and energy. A creator’s format and taste outrank a trendy motion preset.
- Keep recurring intros consistent enough to be recognized, but let topic-specific openings vary. Do not reuse the same animation as a substitute for the hook.
- For a channel trailer, show what viewers will actually get; avoid vague “welcome to my channel” copy.
- Narration is optional. Use the creator’s own supplied recording or an explicitly approved voice method; never clone a real voice without permission. Follow channel memory for all video copy and narration.

#### Production handoff

Video Kit owns the story, channel fit, language, source selection, claims, and creative boundaries. For a HyperFrames build, put the creative contract in `composition-brief.md`: specify the must-show/must-not-change points without prescribing low-level selectors or runtime internals. Read [hyperframes-build.md](hyperframes-build.md) for implementation, local rendering, and review.

Create only useful artifacts for the job. Depending on scope, those may be `video-plan.md`, `composition-brief.md`, the editable HyperFrames project, rendered video, a selected poster/thumbnail, and channel-language share copy. Do not create all artifacts for a brief-only or concept-only request.

Workflow inspiration: the staged inspect → plan/storyboard → HyperFrames handoff → validate/render structure in [`latent-spaces/brag`](https://github.com/latent-spaces/brag). Adapt the process, not its startup-only premise, fixed runtime, humor-first angle, tone presets, assets, or audio defaults.

