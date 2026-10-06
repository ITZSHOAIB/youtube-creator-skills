import { useEffect, useRef, useState } from 'react'

type CommandBlockProps = {
  /** The exact text copied to the clipboard (trimmed). Use \n for line breaks. */
  command: string
  /** Small label shown in the block header. Defaults to "COMMAND". */
  label?: string
  /** Show a decorative `$` prompt in front of the command (not copied). */
  prompt?: boolean
}

async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for non-secure contexts / older browsers.
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      ta.remove()
      return ok
    } catch {
      return false
    }
  }
}

export function CommandBlock({ command, label = 'COMMAND', prompt = true }: CommandBlockProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    const ok = await writeClipboard(command.trim())
    if (!ok) return
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-4 w-full max-w-full border-2 border-line bg-panel shadow-hard-lg">
      <div className="flex items-center justify-between gap-3 border-b-2 border-line bg-ink px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg/60 truncate">{label}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? 'Command copied' : 'Copy command to clipboard'}
          className={`shrink-0 border-2 border-line px-2.5 py-1 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
            copied
              ? 'bg-primary text-ink'
              : 'bg-panel text-fg hover:bg-primary hover:text-ink'
          }`}
        >
          {copied ? 'COPIED ✓' : 'COPY'}
        </button>
      </div>
      <pre className="m-0 border-0 bg-transparent p-4 font-mono text-xs text-fg shadow-none overflow-x-auto whitespace-pre">
        {prompt && <span aria-hidden="true" className="select-none text-primary">$ </span>}
        {command.trim()}
      </pre>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Command copied to clipboard' : ''}
      </span>
    </div>
  )
}
