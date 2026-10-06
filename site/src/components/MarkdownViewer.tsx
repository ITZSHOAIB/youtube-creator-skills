import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---\n[\s\S]*?\n---\n/, '')
}

export function MarkdownViewer({ source }: { source: string }) {
  const cleaned = stripFrontmatter(source)
  return (
    <div className="rounded-2xl bg-[#0f1115] border border-[#2a3140] p-6 md:p-8 space-y-6 text-[15px] leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="font-serif text-3xl font-semibold mb-4 mt-8" {...props} />,
          h2: ({ node, ...props }) => <h2 className="font-serif text-2xl font-semibold mb-3 mt-6" {...props} />,
          h3: ({ node, ...props }) => <h3 className="font-serif text-xl font-semibold mb-2 mt-4" {...props} />,
          p: ({ node, ...props }) => <p className="text-[#9aa0ab] leading-relaxed mb-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-1 mb-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-1 mb-4" {...props} />,
          li: ({ node, ...props }) => <li className="text-[#9aa0ab]" {...props} />,
          a: ({ node, ...props }) => <a className="text-[#7bb3ff] hover:underline" {...props} />,
          code: ({ node, ...props }) => <code className="font-mono bg-[#1c2230] px-1.5 py-0.5 rounded text-[#7bb3ff] text-sm" {...props} />,
          pre: ({ node, ...props }) => <pre className="rounded-2xl bg-[#0f1115] border border-[#2a3140] p-5 font-mono text-sm overflow-x-auto mb-4" {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-[#7bb3ff]/30 pl-4 text-[#9aa0ab] italic mb-4" {...props} />,
        }}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  )
}
