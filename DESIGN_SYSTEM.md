# ArtKHome Studio — visual system

## Direction

Editorial art meets practical wayfinding. The system takes its palette and moving ink-line motif from the supplied business card. Generated still-life illustrations give the service cards a distinct visual cue; they are conceptual art, never documentary evidence of the studio or its activities.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--paper` | `#f5f0e4` | Main canvas |
| `--ink` | `#10241e` | Body text, dark panels, linework |
| `--blue` | `#2168c8` | Emphasis, links and selected artwork |
| `--yellow` | `#e6b400` | Primary action and small accents |
| `--line` | `rgba(16,36,30,.17)` | Light dividers and outlines |
| `--space-1` … `--space-8` | 4–32px | Spacing rhythm |
| `--radius-card` | `3px` | Editorial card corners |
| `--radius-pill` | `999px` | Primary action shape |
| `--motion-fast` | `180ms` | Short hover/focus transitions |

Typography uses an editorial serif stack for display headings and Arial/sans-serif for interface and body copy. The layout does not request remote fonts.

## Patterns

### Primary button

- **Use:** one clear next step, such as contacting the studio.
- **Style:** yellow pill, dark bold label, northeast arrow.
- **Behavior:** navigates to the contact page; no false booking confirmation or form state.
- **Accessibility:** native link semantics, minimum 48px high, visible keyboard focus.

### Activity card

- **Use:** navigate among the six known activity areas.
- **Style:** warm paper surface, ordinal number, generated object illustration, serif title, concise factual note, arrow affordance.
- **Behavior:** the full card is a link. Hover movement is optional and reduced-motion preferences are honored.
- **Accessibility:** the illustration is decorative; the service title, note and destination are announced without redundant image descriptions.

### Navigation

- **Desktop:** compact horizontal links and a single contact action.
- **Mobile:** native disclosure menu with the same destinations; works without JavaScript.
- **Accessibility:** named navigation landmark, native summary/disclosure behavior, visible focus ring.

### Evidence panel

- **Use:** a dated, independently sourced past event.
- **Style:** dark ink panel with the date and a direct source link.
- **Content rule:** distinguish confirmed past participation from announcements or future plans.

## Layout and responsive behavior

- Main content is capped at 1180px with 18–32px mobile gutters.
- Six activity cards form one row on wide screens, three columns below 1100px, and two columns on phones. Cards keep equal grid placement so the last item does not appear more important than the others.
- Hero artwork uses a wide image on desktop and a cropped image on mobile, with all key text outside the image.
- Reduced motion disables smooth scrolling and transition movement.

## Image assets

- `public/images/brand/artkhome-mark.webp`: draft icon treatment based on the woman/music/brush mark visible on the supplied business-card photo. The project handoff says the official vector master and public-use rights are still unconfirmed; this derivative is for local review only.
- `src/assets/brand-source/artkhome-mark-draft.png`: full-resolution generated draft master used for that local treatment.
- `public/images/artwork/hero-artwork.webp`: generated wide editorial art for the home hero.
- `public/images/artwork/*-object.webp`: six generated category objects, including a conceptual books still life.
- Full-resolution PNG masters are in `src/assets/artwork-source/`.
- The illustrations contain no text and make no claims about real people, rooms or events.
