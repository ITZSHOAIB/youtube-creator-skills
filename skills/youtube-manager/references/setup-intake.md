# Low-friction channel setup

Use this workflow when a channel has no complete `CHANNEL_MEMORY.md` or the creator asks to rebuild it. The goal is to do the research for the creator, present a sourced draft for approval, and only then write persistent files.

## 1. Ask for the minimum input

- If the channel URL/handle is already present in the current conversation or workspace, do not ask for it again. Start research.
- If it is missing, ask for the **YouTube channel URL or @handle**. This is the only required setup input.
- Find the **latest three videos** yourself from the channel URL; do not ask the creator to provide them.
- Optionally invite the creator to name or link up to three **“gold standard” videos** that represent the channel direction or voice they want. These may differ from the most-viewed videos.
- Do not ask the previous long list of setup questions. Do not ask for analytics, audience demographics, language, goals, workflow, or sponsor rules as a prerequisite.

Example first message when no URL is known:

> Send me the YouTube channel URL or @handle. If you have up to three “gold standard” videos that best represent the direction or voice you want, you can share those too; that’s optional. I’ll find the latest uploads, research the channel, draft its profile with evidence and confidence labels, and show it to you for approval before saving any files.

## 2. Research and draft the profile independently

Use the public channel URL to research as much as is reasonably accessible:

- Channel name, description, links, playlists, visible branding, and current activity.
- The latest three uploads, including Shorts where clearly part of the active channel mix. Find these from the channel; do not ask the creator to list them.
- Up to three publicly most-viewed/popular videos, identifying the selection as public-view based rather than private YouTube Studio performance. If this list is unavailable, state how examples were selected.
- Any creator-designated “gold standard” videos, if supplied, as examples of the desired future direction or voice rather than assuming they are the most popular.
- Titles, thumbnails, descriptions, format, hooks, CTAs, and recurring content topics.
- Available transcripts/captions for a small representative sample (prefer recent videos) to understand language, delivery, tone, and how the creator addresses subscribers. Preserve the original wording when making transcript references. Label ASR output, coverage, and confidence.
- Public comments/posts when available, as anecdotal evidence only.

Build a proposed profile covering the memory template’s useful sections: channel positioning, content pillars and formats, audience hypothesis, language and voice, subscriber relationship, packaging, goals, production constraints, commercial rules, guardrails, and open questions. Do not invent private facts. For goals, demographics, analytics, production constraints, or sponsor rules that cannot be established publicly, propose a conservative inference only when evidence supports one; otherwise mark them “unknown—not publicly verifiable.”

Include the proposed per-video folder convention in the approval summary as an editable workflow default: `videos/<year>/<video-title>/`. This is not another setup question. The creator may approve it with the profile, request a different convention, or leave it provisional if they do not want to decide yet. Record it as creator-confirmed only when the approved summary clearly showed the convention and the creator approved it.

In the draft, distinguish:

- **Observed:** directly visible in the public channel/videos.
- **Inferred:** a plausible interpretation of public evidence, with confidence (high/medium/low).
- **Unknown:** requires creator/private analytics input and is not safely inferable.
- **Creator-confirmed:** explicitly supplied or approved by the creator.

Include any preferences the creator explicitly states during setup (for example, language or open-source-only tool constraints) as creator-confirmed even if they cannot be inferred from public channel evidence. Carry them into the approval draft rather than asking the creator for them again.

For voice setup, do not transcribe every upload. Check captions for the latest videos; if captions are missing or unusable and no approved reference exists, run the local ASR workflow on a representative sample before concluding transcription is unavailable. Follow [the transcript workflow](transcripts.md), reusing an approved model from channel memory when present. Write the sample to a temporary path, include it with the proposed-profile approval, and do not create a durable transcript file before approval. If setup is declined, remove the temporary sample. If dependency download or execution fails, show the concrete blocker and still present the profile draft with transcript status marked unavailable. If ASR wording is not reviewed, label it unreviewed and do not treat exact phrases as confirmed voice guidance.

Treat public view counts as popularity clues only. Never describe them as the channel’s actual top-performing videos according to Studio unless the creator supplies analytics.

## 3. Ask for one confirmation, not a second questionnaire

Present a concise but useful **Proposed channel profile** in the user-visible reply. Summarize the evidence and list the drafted answers for the profile categories, marking inferences and unknowns. Include representative source video links and research date. Do not hide the profile or approval request in tool output or expanded history.

End with one clear choice:

> Do you approve this profile and the proposed `videos/<year>/<video-title>/` project-folder convention so I can save `CHANNEL_MEMORY.md` and the useful transcript references, or what would you like changed?

Do not turn every unknown into a question. The creator can approve with unknowns retained, approve with corrections, or request revisions. If they request changes, revise the proposed profile and seek approval again. **Do not create or overwrite setup memory/transcript files before explicit approval.**

## 4. Save only after approval

After approval:

- Create/update `CHANNEL_MEMORY.md` in English using `references/channel-memory-template.md`.
- Create separate transcript-reference Markdown files only for representative transcripts that materially preserve voice or are useful for future work. Preserve the source language and label source, URL, coverage, transcript method, confidence, and whether the creator reviewed it.
- Add a research/evidence Markdown file only if source notes are too extensive to keep usefully in the memory’s evidence section. Avoid empty folders and unnecessary files.
- Mark public inferences and unknown private details clearly. Record approval date and any corrections as creator-confirmed.
- Report the created files and note any important items left unknown. Do not ask the creator to repeat facts already provided.
