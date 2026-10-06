import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
}

export function MarkdownViewer({ source }: { source: string }) {
  const cleaned = stripFrontmatter(source)
  return (
    <div className="md-content p-6 md:p-8 text-sm normal-case text-[#C3C7D6] leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings are demoted: the page already has h1 (skill name) and
          // h2 (SOURCE INSTRUCTIONS), so markdown starts at h3.
          h1: ({ node, ...props }) => <h3 className="font-display text-xl uppercase tracking-[-0.01em] text-[#FBFBFF] mt-8 mb-3 first:mt-0" {...props} />,
          h2: ({ node, ...props }) => <h4 className="font-display text-base uppercase tracking-[0.05em] text-[#FBFBFF] mt-6 mb-3 first:mt-0" {...props} />,
          h3: ({ node, ...props }) => <h5 className="font-mono text-sm uppercase tracking-[0.15em] text-[#FF8A24] mt-5 mb-2 first:mt-0" {...props} />,
          h4: ({ node, ...props }) => <h5 className="font-mono text-sm uppercase tracking-[0.15em] text-[#FF8A24] mt-5 mb-2 first:mt-0" {...props} />,
          h5: ({ node, ...props }) => <h5 className="font-mono text-sm uppercase tracking-[0.15em] text-[#FF8A24] mt-5 mb-2 first:mt-0" {...props} />,
          h6: ({ node, ...props }) => <h5 className="font-mono text-sm uppercase tracking-[0.15em] text-[#FF8A24] mt-5 mb-2 first:mt-0" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4 text-[#C3C7D6]" {...props} />,
          a: ({ node, ...props }) => <a className="text-[#53D8FF] underline underline-offset-4 decoration-2 hover:text-[#070914]" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-outside pl-5 mb-4 space-y-1" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-outside pl-5 mb-4 space-y-1" {...props} />,
          li: ({ node, ...props }) => <li className="text-[#C3C7D6]" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-[#FBFBFF]" {...props} />,
          em: ({ node, ...props }) => <em className="italic text-[#FBFBFF]" {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-[#FF8A24] pl-4 italic my-4 text-[#FBFBFF]/80" {...props} />,
          hr: ({ node, ...props }) => <hr className="border-0 border-t-2 border-[#C3C7D6] my-6" {...props} />,
          code: ({ node, ...props }) => <code className="bg-[#070914] border border-[#C3C7D6] px-1.5 py-0.5 text-xs text-[#FF8A24]" {...props} />,
          pre: ({ node, ...props }) => <pre className="bg-[#070914] border-2 border-[#C3C7D6] p-4 mb-4 overflow-x-auto whitespace-pre text-xs text-[#FBFBFF]" {...props} />,
          table: ({ node, ...props }) => (
            <div className="w-full overflow-x-auto mb-4 border-2 border-[#C3C7D6]">
              <table className="w-full border-collapse text-left" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-[#070914]" {...props} />,
          th: ({ node, ...props }) => <th className="font-mono text-xs uppercase tracking-[0.1em] text-[#FBFBFF] border border-[#C3C7D6] px-3 py-2" {...props} />,
          td: ({ node, ...props }) => <td className="border border-[#C3C7D6] px-3 py-2 align-top text-[#C3C7D6]" {...props} />,
        }}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  )
}
