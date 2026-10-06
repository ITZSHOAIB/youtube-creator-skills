# HyperFrames build workflow

Read only when the creator asks to implement, preview, validate, or render an editable HyperFrames composition. For creative direction and the `composition-brief.md` contract, first read [video-production-briefs.md](video-production-briefs.md).

## Tooling and constraints

- Follow the official HyperFrames coding-agent skills/plugin and current authoring contract. Check current setup requirements and CLI commands from the [HyperFrames repository](https://github.com/heygen-com/hyperframes) and [CLI guide](https://github.com/heygen-com/hyperframes/blob/main/packages/cli/README.md); do not rely on stale commands from memory.
- Honor channel memory and the current request. If open-source-only tooling is required, use the open-source HyperFrames project/CLI, local rendering, local open-source dependencies, and creator-provided or properly licensed assets. Do not substitute hosted rendering, hosted HyperFrames MCP, metered generation services, or closed-source media services. Prefer Chromium when the workflow permits.
- Do not assume an open-source framework grants rights to third-party footage, images, fonts, or music. Check the license for each asset. If the constraint cannot be met, explain the concrete limitation before proposing a different service.

## Build and review

1. Work inside this video's `production/` folder and preserve editable source. Keep on-screen and spoken copy in the creator's saved language/script; technical notes stay in English.
2. Use the official workflow to initialize, build, and preview the composition. Current setups commonly use Node.js and FFmpeg; verify actual prerequisites with the project's current doctor/setup command.
3. Run the available structural, runtime, and layout checks. Inspect representative frames and review copy readability, language, timing, audio, and the final frame/poster.
4. Render the final video after the creator approves the preview unless the request already clearly authorizes final rendering. Report which checks and exports succeeded. Never claim an MP4 exists if only a brief, source, or preview was produced.
5. If HyperFrames is unavailable in the current agent or rendering environment, provide the ready-to-use brief and name the missing prerequisite instead of claiming a render.

The official guide's install and build commands can change. Use its current instructions, and avoid installing both the plugin and duplicate standalone skills without a reason.
