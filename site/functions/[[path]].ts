/**
 * Cloudflare Pages edge function: per-page <head> rewriting.
 *
 * context.next() serves real static files untouched (robots.txt,
 * sitemap.xml, llms.txt, JS/CSS, skill-source markdown) and falls
 * through the `/* /index.html 200` rewrite for every SPA route, so
 * any text/html response is the app shell. For HTML responses this
 * swaps in the route's title / description / canonical / Open Graph /
 * Twitter values, injects a BreadcrumbList on skill pages, and turns
 * unknown paths into a real HTTP 404 with noindex.
 *
 * Page copy lives in src/lib/seo.ts — the single source shared with
 * the client-side useSeo hook.
 */

import { resolvePageMeta, type PageMeta } from '../src/lib/seo'

interface PagesContext {
  request: Request
  next(): Promise<Response>
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function rewriteHead(html: string, meta: PageMeta): string {
  const title = escapeAttr(meta.title)
  const description = escapeAttr(meta.description)
  const url = `https://creator-skills.sohab.dev${meta.path === '/' ? '/' : meta.path}`

  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`)

  if (meta.notFound) {
    out = out.replace(
      /<meta name="description"/,
      '<meta name="robots" content="noindex" />\n    <meta name="description"',
    )
  }

  if (meta.breadcrumb) {
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: meta.breadcrumb.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://creator-skills.sohab.dev${item.path === '/' ? '/' : item.path}`,
      })),
    }
    out = out.replace(
      '</head>',
      `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>\n  </head>`,
    )
  }

  return out
}

export const onRequest = async (context: PagesContext): Promise<Response> => {
  const response = await context.next()

  const contentType = response.headers.get('content-type') ?? ''
  if (context.request.method !== 'GET' || !contentType.includes('text/html')) return response

  const url = new URL(context.request.url)
  const meta = resolvePageMeta(url.pathname)
  const rewritten = rewriteHead(await response.text(), meta)

  return new Response(rewritten, {
    status: meta.notFound ? 404 : response.status,
    statusText: meta.notFound ? 'Not Found' : response.statusText,
    headers: new Headers(response.headers),
  })
}
