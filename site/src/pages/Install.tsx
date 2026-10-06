export function Install() {
  return (
    <div className="bg-[#070914] text-[#FBFBFF] font-mono">
      <header className="border-b border-[#C3C7D6] px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-[#FBFBFF]">//</span>
        <span>INSTALLATION GUIDE</span>
        <span>SETUP</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">INSTALL THE SKILLS</h1>
        <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 max-w-3xl">
          Pick the skills and agents you use. The installer writes editable files into your project.
        </p>
      </section>

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">ALL SKILLS AT ONCE</h2>
        <pre className="font-mono text-xs bg-[#15152B] border border-[#C3C7D6] p-4 overflow-x-auto mb-4 text-[#FBFBFF]">
          <code>
            npx skills add ITZSHOAIB/youtube-creator-skills \
              --skill youtube-manager \
              --skill topic-scout \
              --skill review-grill \
              --skill video-kit \
              --skill youtube-shorts \
              --skill youtube-thumbnail \
              --skill creator-voice \
              --skill social-repurpose \
              --skill youtube-analytics \
              --agent codex \
              --global
          </code>
        </pre>
      </section>

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">JUST ONE SKILL</h2>
        <pre className="font-mono text-xs bg-[#15152B] border border-[#C3C7D6] p-4 overflow-x-auto mb-4 text-[#FBFBFF]">
          <code>npx skills add ITZSHOAIB/youtube-creator-skills --skill youtube-manager --agent codex --global</code>
        </pre>
      </section>

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">LOCAL PROJECT</h2>
        <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 mb-4">
          Omit <code className="text-[#FBFBFF]">--global</code> to install into the current project:
        </p>
        <pre className="font-mono text-xs bg-[#15152B] border border-[#C3C7D6] p-4 overflow-x-auto mb-4 text-[#FBFBFF]">
          <code>npx skills add ITZSHOAIB/youtube-creator-skills --skill topic-scout --agent codex</code>
        </pre>
      </section>

      <section className="border-b border-[#C3C7D6] px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">USE ANOTHER AGENT</h2>
        <p className="font-mono text-sm normal-case text-[#FBFBFF]/70 mb-4">
          Replace <code className="text-[#FBFBFF]">codex</code> with the supported agent name.
        </p>
        <a href="https://github.com/vercel-labs/skills" target="_blank" rel="noopener" className="font-mono text-sm normal-case text-[#FBFBFF]">[ Skills CLI docs ]</a>
      </section>

      <section className="px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">AFTER INSTALLING</h2>
        <ul className="list-disc list-inside font-mono text-sm normal-case text-[#FBFBFF]/70 space-y-2 mb-6">
          <li>Set up a channel manager for this YouTube channel.</li>
          <li>Find and rank five video opportunities using my channel memory.</li>
          <li>Help me turn a controller review brief into a video script.</li>
          <li>Prepare the title, description, thumbnail, and music options.</li>
          <li>Turn this review into a Short and save it in the video project.</li>
        </ul>
        <div className="border border-[#C3C7D6] p-5 font-mono text-sm normal-case text-[#FBFBFF]/80">
          <strong className="text-[#FBFBFF]">TIP:</strong> Start with YouTube Manager and Creator Voice.
        </div>
      </section>
    </div>
  )
}
