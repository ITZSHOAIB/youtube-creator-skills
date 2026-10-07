import { CommandBlock } from '../components/CommandBlock'
import { resolvePageMeta, useSeo } from '../lib/useSeo'

const INSTALL_COMMAND = 'npx skills add ITZSHOAIB/youtube-creator-skills'

export function Install() {
  useSeo(resolvePageMeta('/install'))

  return (
    <div className="bg-ink text-fg font-mono">
      <header className="border-b border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
        <span className="text-fg">//</span>
        <span>ONE COMMAND</span>
        <span>SETUP</span>
      </header>
      <div className="top-strip" />

      <section className="border-b border-line px-6 py-10">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-[-0.03em] leading-[0.9] mb-4">INSTALL THE SKILLS</h1>
        <p className="font-mono text-sm normal-case text-fg/70 max-w-3xl">
          Pick the skills you want and the agent you use. Everything lands in your project as plain files you can edit.
        </p>
      </section>

      <section className="border-b border-line px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">RUN ONE COMMAND</h2>
        <p className="font-mono text-sm normal-case text-fg/70 mb-4">
          One command, no flags. Answer three quick questions — which skills, which agent, where — and it writes the files into your project.
        </p>
        <CommandBlock label="INSTALL" command={INSTALL_COMMAND} />
        <p className="font-mono text-sm normal-case text-fg/70">
          See the{' '}
          <a href="https://github.com/vercel-labs/skills" target="_blank" rel="noopener">
            Skills CLI docs
          </a>{' '}
          for everything the CLI supports.
        </p>
      </section>

      <section className="px-6 py-10">
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] leading-[0.9] mb-6">AFTER INSTALLING</h2>
        <ul className="list-disc list-inside font-mono text-sm normal-case text-fg/70 space-y-2 mb-6">
          <li>Set up a channel manager for this YouTube channel.</li>
          <li>Find and rank five video opportunities using my channel memory.</li>
          <li>Help me turn a controller review brief into a video script.</li>
          <li>Prepare the title, description, thumbnail, and music options.</li>
          <li>Turn this review into a Short and save it in the video project.</li>
        </ul>
        <div className="border border-line p-5 font-mono text-sm normal-case text-fg/80">
          <strong className="text-fg">TIP:</strong> Start with YouTube Manager and Creator Voice.
        </div>
      </section>
    </div>
  )
}
