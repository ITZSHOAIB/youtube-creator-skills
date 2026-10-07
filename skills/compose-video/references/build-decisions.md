# Build decisions

The decisions every video build resolves before composition starts. Read when the intake's completeness is in doubt, or when a direct request arrives without a brief. The intake may already answer all of these — the router's intent interview, `shorts-brief.md`, or `composition-brief.md` — in which case verify and record; do not ask again.

## How to resolve them

- **Derive and state** where a policy exists (canvas from placement; language from channel memory or the request). Derived values are stated in the brief, not asked.
- **Recommend first**: for a genuine gap, lead with the option the material supports and a one-line reason, one question per turn.
- **Record confirmed answers only** — never an inferred default — in the build's brief (mapping below). Announce any decision deliberately deferred to a later step (for example voice identity, chosen at the audio step) instead of asking it now.
- A decision that would not change the build is not asked.

## Decision set

| Decision | Options and resolution | What it changes in the build | Recorded where |
| --- | --- | --- | --- |
| Placement and canvas | Ask the publishing placement (YouTube 16:9, Shorts/Reels/TikTok 9:16, feed 1:1 or 4:5); derive the canvas and state the derivation | Layout, safe zones, type scale | `BRIEF.md` `destination` / `aspect`; shorts-brief `Platform and runtime:` |
| Duration | Recommend a range the material supports and give the reason; confirm only if the request conflicts | Timeline length, scene budget, pacing | `BRIEF.md` `length`; storyboard `duration`; shorts-brief `Platform and runtime:` |
| Voice source | **Creator recording** — stage the asset, time scenes to planned beats, re-sync when the file arrives · **Local TTS** — defer voice identity to the audio step (remembered voice, else default; say which was used) · **None** — BGM-only or silent video | Whether an audio track exists, scene timing basis, whether a TTS step runs, re-sync risk | shorts-brief `Voice source:`; brief `## Assets`; note the voice used in the build notes |
| BGM | On by default with a mood from the brief or memory (official convention: music plays unless turned off); verify license and credit before embedding · Off via the `music: none` marker | Music element, ducking under voice, license and credit obligation | shorts-brief `Music and licence credit:`; storyboard `music:` |
| Captions | Built by default whenever there is spoken audio; `captions: skipped (<reason>)` is valid | Caption layers, word-level timing source, one more check in the gate | Project notes / storyboard status with the skip reason |
| Language | State it from channel memory or the request; ask only if contradictory or unknown | Every line of on-screen and spoken copy | `BRIEF.md` `language`; brief notes |
| Taste direction | From channel memory, a named reference, or a stated preset; ask only when none exists | Type, palette, motion character | Brief `## Customizations`, or the adopted recipe |
| Assets and licenses | Every asset verified or replaced; an unclear license is a named blocker, not a silent embed | What may legally be embedded at all | Brief `## Assets` with license notes |
| Approval mode | Preview gate, unless the request already authorizes final rendering | When a render may start | The approval record in the brief or build notes |

## Recording surfaces by intake

- **From YouTube Shorts** — the existing `shorts-brief.md` fields: `Voice source:`, `Music and licence credit:`, `Platform and runtime:`, `Creator decisions or requested revisions:`.
- **From Video Kit** — `composition-brief.md`, using its deterministic YAML block plus notes.
- **Direct request** — the `BRIEF.md` the router's intent layer writes; if no brief exists, open a `Build decisions` section in the build notes and record the answers before composing.

Durable preferences do not live in any of these: promote a preference to channel memory only with the creator's confirmation.
