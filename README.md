# ArtKHome Studio — local demo

An independent six-page Spanish-language static-site demo based on the ArtKHome project handoff and the real business card. The visual system pairs the card's ink-wave motif and blue/yellow palette with an editorial, image-led layout.

## Preview

Run `npm run dev` from this folder and open `http://localhost:4321/es/`.

## GitHub Pages deployment

This repository is configured for `https://ministry-transformation.github.io/artkhome-studio/`. The GitHub Actions workflow builds the static site and deploys it on every push to `main`. The Astro base path is enabled automatically in GitHub Actions so local preview routes remain rooted at `/es/`.

## Routes

- `/es/` — home and numbered activity navigator
- `/es/clases-de-musica/`
- `/es/arte-y-talleres/`
- `/es/espanol-para-extranjeros/`
- `/es/eventos-y-conciertos/`
- `/es/contacto/`

## Content boundaries

The demo uses the name, address, phone, and activity names from the supplied business-card and evidence materials. The May 2026 concert mention links to its published source. It does not use generated concept images as documentary photography, does not invent prices or schedules, and does not imply online booking or a working contact form. The phone links are the only active inquiry action. The Instagram handle is displayed as printed on the card; its live profile was not independently audited.

The hero artwork and six category-card art objects were generated for this demo. They are illustrative visual concepts, not photographs of the actual studio, products, teachers, students, or events. The books still life is a navigation illustration only; it does not imply an online shop or confirmed inventory. Optimized WebP files are in `public/images/artwork/`; full-resolution PNG masters are in `src/assets/artwork-source/`.

The header icon is a draft treatment of the woman/music/brush mark shown on the supplied business card. It is not the missing official vector master and is only used in this local preview; verify the final logo file and rights before public release.

This is a local preview for iterative review. The project handoff still lists owner inputs for schedules, pricing, contact operations, design approval, legal identity, domain, and media rights before any public launch.
