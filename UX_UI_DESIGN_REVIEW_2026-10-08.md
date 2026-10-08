# ArtKHome UX/UI review and improvement plan

Date: 8 October 2026  
Scope: the existing Spanish-language Astro demo in `artkhome-demo/`.

## Review passes

### 1. First impression and route to contact

- The hero makes the studio's broad offer and Torrevieja location clear, with a direct contact action.
- The six activity cards provide a quick way into every confirmed activity category; books now reach a phone inquiry section, and room rental reaches its contact section.
- A paragraph on the home page read like a research note (“según la información de la tarjeta del centro”). Replaced it with short visitor-facing copy.
- The location card showed an address but had no direct directions action. Added a Google Maps search link using that address.

### 2. Navigation, accessibility, and interaction

- The current page was only represented by a visual class on interior desktop links. Added `aria-current="page"` and applied it to the home mark and mobile “Inicio” link as well.
- Activity illustrations repeated information already conveyed by each card's title and note. Made them decorative so assistive technology reads the link's useful label once.
- Verified the card links in the accessibility tree after the change: each is announced as its index, activity name, and short description.
- Kept the native `<details>` mobile menu and made its plus mark rotate when expanded. Preserved visible keyboard focus styling.

### 3. Responsive layout and motion

- Reviewed the narrow home view at about 320 px. The heading, contact button, artwork, and first navigation section stay within the viewport.
- The stylesheet had grown into compressed rules with multiple breakpoint overrides, making future layout edits difficult to reason about. Formatted it into readable rule blocks and removed obsolete art-mark selectors while preserving the responsive cascade.
- Added a brief entrance motion to the hero copy and artwork and clearer focus/hover feedback on cards. Touch devices do not retain hover transforms, and reduced-motion preferences disable the entrance animation and transitions.
- Reviewed 21st.dev's component collection. Its catalog is oriented around React components, while this site uses Astro; the visual idea of restrained entrance motion was adapted directly in CSS without bringing in a component framework or animation dependency. [21st.dev component catalogue](https://21st.dev/community/components)

## Plan executed

1. Improve visitor-facing language and make the address actionable. **Done.**
2. Make current location and service-card labels clearer to screen readers. **Done.**
3. Consolidate the stylesheet presentation and preserve responsive behavior. **Done.**
4. Add lightweight, optional motion and device-appropriate interaction states. **Done.**
5. Rebuild all routes and repeat the narrow-screen and accessibility-tree review. **Done.**

## Verification

- `npm run build` succeeds and generates all six Spanish routes.
- Rechecked the home page at a narrow viewport and inspected its accessible names after the changes.
- No new runtime dependency was added.

## Company activity coverage audit

Compared the activity list in the supplied business facts and project handoff against the current home navigator, route content, and contact destinations.

| Confirmed company activity | Coverage in the demo | Result |
|---|---|---|
| Music lessons: singing, piano, guitar, violin, solfeo and choir | Home activity card and music route; the six disciplines are listed on the route | Covered |
| Musical development from age 3 | Music route, with a short age callout now surfaced in the home music introduction | Covered |
| Art and creative work, including painting and workshops | Home activity card and art/workshops route | Covered |
| Events and concerts | Home activity card and events route; only the sourced past event is presented as evidence | Covered |
| Spanish for foreigners | Home activity card and dedicated route | Covered |
| Books | Was missing; added a home activity card, navigation destination and contact anchor with a phone inquiry | Added, with stock left unasserted |
| Hourly room rental | Home activity card, navigation destination and contact section; copy tells visitors to confirm terms and availability | Covered |

The six categories are the directions explicitly evidenced by the source materials. The books illustration is conceptual. No book titles, inventory, sales model, class schedule, prices, or current availability were provided, so the site directs visitors to ask the studio rather than implying those details.

### Follow-up check for the coverage update

- Rebuilt the six Spanish routes successfully after adding books and surfacing the age-3+ offer.
- Inspected the updated home navigator in the narrow in-app browser: all six cards fit a two-column layout without a full-width outlier; titles, descriptions, and arrows remain visible.
- The contact destination includes separate room-rental and books inquiry anchors, and each card targets its matching section.
