# Short Production and Rendering

Use this guide only when the creator requests a production brief, overlay prototype, or rendered Short. Match review steps to the request: do not require approval after every phase when the creator has already specified the intended result. Ask before proceeding when a consequential creative choice remains unresolved. A clear request to create a new render authorizes that export; replacing or materially changing an existing edit requires approval.

## Before editing

1. Inspect the source video, voiceover, b-roll, music, and existing edit.
2. Map the selected script to precise clip timecodes and write the scene plan in the Short brief.
3. If clips will materially change the result, present choices before committing.
4. Keep a manually edited base video untouched when the request is overlay work only.

## Static design

Use the selected scene table and visual direction to create still mockups when mockups are part of the requested work. Resolve crop, overlay copy, diagrams, header treatment, logo position, safe zones, and CTA layout before rendering. Pause only when a consequential decision remains unresolved.

## Overlay and motion system

- Use the channel brand kit for fonts, weight, palette, logo treatment, and visual hierarchy.
- Keep a central safe zone: avoid top and bottom interaction regions, and leave space along the right for platform controls.
- Give each beat a distinct layout but maintain a shared typographic and motion system.
- Use text entrances, icon motion, diagrams, graphic trails, and transition sounds only when they support the voiceover or edit rhythm.
- Keep shadows and text backing subtle. The footage should remain the main subject.
- Use original clips, creator voice, and approved music whenever possible. For a source-video cutdown, never end a clip mid-sentence.

## Prototype review

Create one frame snapshot per overlay scene when a visual prototype or review is part of the requested work. Check clip selection, crop, hierarchy, spacing, colors, diagram clarity, logo treatment, and CTA before rendering. When the creator asked for a prototype or review, share the snapshots and incorporate their feedback. Otherwise, use them as an internal quality check and continue with the requested render unless a consequential choice remains unresolved. If a scene has too much copy, remove information before changing the type size.

## Render

Use available open-source local tooling, such as HyperFrames for designed motion sequences (route through the **Compose Video** (`compose-video`) skill when available) and FFmpeg for final composition, encoding, stream inspection, and frame extraction. Keep the composition editable where practical and follow any stricter tool constraints in channel memory.

Preserve the requested video properties. When the source is a 4K 60 fps manual edit, do not silently downscale or change frame rate. If a new final export is requested, target the approved dimensions, frame rate, video codec, audio codec, and bitrate.

## Verify

Before delivery:

1. Inspect video and audio streams with `ffprobe` or equivalent.
2. Check representative frames: hook, each text scene, transitions, and CTA.
3. Confirm no text collides with UI zones, no logo is distorted, and narration finishes cleanly.
4. Confirm the output path and leave all source footage and editable files intact.
