# Generated brand assets

Sources for the social share card and the icon set. The PNGs in
`site/public/` are generated from these HTML files by screenshotting
them in a headless Chrome/Edge at the exact viewport size:

- `og.html` → `public/og.png` (1200x630, og:image)
- `icon.html` → `public/icon-512.png`, `public/icon-192.png`,
  `public/apple-touch-icon.png` (square viewports)

`public/favicon.svg` is hand-authored (play-block mark, same
geometry as `icon.html`). To change copy or styling, edit the HTML
here and re-render; keep `og:image` dimensions at 1200x630.
