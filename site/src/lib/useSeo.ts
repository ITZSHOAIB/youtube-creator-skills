import { useEffect } from 'react'
import { resolvePageMeta, SITE_URL, type PageMeta } from './seo'

export { resolvePageMeta }

/**
 * Keep document head in sync with the current route. The Cloudflare
 * edge function handles first-load HTML for crawlers; this hook keeps
 * SPA navigations (and local dev, where no edge function runs) just as
 * accurate for browsers and social previewers.
 */
export function useSeo({ title, description, path, notFound = false }: PageMeta): void {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`

    document.title = title

    const setMeta = (key: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    if (notFound) {
      setMeta('robots', 'noindex')
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove()
    }
  }, [title, description, path, notFound])
}
