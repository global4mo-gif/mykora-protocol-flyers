---
version: alpha
name: MYKORA Brand Design System
description: "Unified DESIGN.md for MYKORA brand surfaces: website, partner portal, product pages, science articles, decks, social creatives, and AI-generated UI."

brand:
  name: "MYKORA"
  wordmark: "MYKORÁ"
  fallbackWordmark: "MYKORA"
  tagline: "Science-backed wellness, calm adult communication, practical biological sovereignty."
  logoAsset: "mykora-protocol-flyers-site/assets/mykora-logo-mark-white.png"
  logoLibrary: "/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Лого"
  logoVariants:
    mark: "/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Лого/Знак"
    logoNoDescriptor: "/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Лого/Лого без дескриптора"
    logoWithDescriptor: "/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Лого/Лого полное с дескриптором"
    wordmarkOnly: "/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Лого/Название без знака"
  patternAsset: "/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Элементы /pattern.png"
  signatureAsset: "/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Элементы /подпись.pdf"

colors:
  primary: "#3E3A17"
  secondary: "#A3A58C"
  tertiary: "#FF7F00"
  neutral: "#F8EFCB"
  surface: "#FFFFFF"
  surface-soft: "#FFFDF6"
  line: "#DCD7C2"
  text-soft: "#6D6854"
  misty-silver: "#C8D2D5"
  success: "#3F7B4F"
  danger: "#B9473B"

typography:
  display:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: 0em
  h1:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: 0em
  h2:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: 0em
  h3:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: 0em
  body-md:
    fontFamily: "Libertinus Sans, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0em
  body-lg:
    fontFamily: "Libertinus Sans, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-caps:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.12em

rounded:
  xs: 6px
  sm: 14px
  md: 22px
  lg: 30px
  pill: 999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-gap: 22px
  shell-max: 1320px

components:
  logo-mark:
    asset: "{brand.logoAsset}"
    library: "{brand.logoVariants.mark}"
    backgroundColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
    size: 42px
  wordmark:
    text: "{brand.wordmark}"
    assetFolder: "{brand.logoVariants.wordmarkOnly}"
    typography: "{typography.label-caps}"
    textColor: "{colors.primary}"
    letterSpacing: 0.18em
  scientific-pattern:
    asset: "{brand.patternAsset}"
    usage: "Optional background layer for scientific articles and editorial science visuals"
  social-signature:
    asset: "{brand.signatureAsset}"
    usage: "Signature element for social posts, carousels, infographics, images, and visual content"
  topbar:
    backgroundColor: "rgba(255,255,255,0.88)"
    borderColor: "rgba(62,58,23,0.11)"
    rounded: "{rounded.md}"
    padding: 12px
  nav-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    height: 38px
  nav-pill-active:
    backgroundColor: "rgba(255,127,0,0.10)"
    textColor: "{colors.tertiary}"
    borderColor: "rgba(255,127,0,0.35)"
    rounded: "{rounded.pill}"
  card-panel:
    backgroundColor: "rgba(255,255,255,0.88)"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.surface-soft}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    height: 42px
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.76)"
    textColor: "{colors.primary}"
    borderColor: "rgba(62,58,23,0.16)"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    height: 42px
  metric-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    accentColor: "{colors.tertiary}"
    rounded: "{rounded.md}"
  chart-card:
    backgroundColor: "rgba(255,255,255,0.92)"
    borderColor: "rgba(62,58,23,0.10)"
    rounded: "{rounded.md}"
  neutral-band:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
---

# MYKORA DESIGN.md

Use this file as the design source of truth for MYKORA. It is written for coding agents, design agents, and humans who need to create pages, apps, articles, decks, or social assets that feel unmistakably MYKORA.

![MYKORA logo mark](mykora-protocol-flyers-site/assets/mykora-logo-mark-white.png)

## 1. Visual Theme & Atmosphere

MYKORA is an editorial wellness brand with a scientific, practical, adult tone. The interface should feel warm, structured, evidence-based, and trustworthy: a calm ivory canvas, dark olive text, restrained panel geometry, and a single vivid orange action color.

The visual language is not "medical startup blue" and not "luxury beige spa." It is a warm laboratory notebook: clear grids, readable long-form typography, practical charts, product/protocol cards, and enough softness to feel human. Interfaces should be confident without hype, premium without looking cosmetic, and educational without looking academic.

**Key characteristics:**

- Warm ivory and soft-white backgrounds with a subtle MYKORA grid.
- Deep olive typography as the core identity signal.
- Vivid orange reserved for actions, selection, active states, highlights, and important markers.
- Editorial content rhythm: lead blocks, chart cards, explainer panels, protocol cards, FAQs, CTA bands.
- Large rounded cards and pill controls, with border-first separation and soft shadows.
- Dense but calm information design for products, protocols, pricing, science, and partner education.
- No blue or purple as primary UI accents.
- No glossy wellness gradients, neon effects, or pseudo-medical visual noise.

## 2. Logo & Brand Signature

### Logo Mark

Primary logo asset:

`mykora-protocol-flyers-site/assets/mykora-logo-mark-white.png`

The mark is a white vertical organic shape and should be placed inside a MYKORA orange or deep-forest container depending on context.

Canonical logo library:

`/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Лого`

This folder contains the working logo set:

- `Знак` - standalone mark. Use for compact brand moments, favicons, avatar-like placements, small badges, and when the wordmark appears separately.
- `Лого без дескриптора` - mark + MYKORA name. Use for most headers, covers, product pages, and brand-led layouts.
- `Лого полное с дескриптором` - full logo with descriptor. Use when the viewer needs immediate brand explanation: first-touch slides, external decks, one-off PDFs, and informational hero visuals.
- `Название без знака` - wordmark/name only. Use often in social layouts, carousels, infographics, and visuals where the sign is placed separately or the composition needs a lighter brand line.

Prefer assets from this library when building polished visual content. The repo-local `mykora-logo-mark-white.png` is a convenient UI fallback, not the full logo source.

**Preferred mark container:**

- Size: `42px x 42px` for app headers and compact navigation.
- Radius: `14px`.
- Fill: `#FF7F00`.
- Mark color: white / `#FFFDF6`.
- Inner padding: keep enough breathing room so the mark never touches the container edge.

Use the raw white mark on dark olive or orange surfaces only when the background has enough contrast. On light surfaces, place it inside the orange rounded square.

### Wordmark

Primary wordmark: **MYKORÁ**  
Fallback wordmark: **MYKORA**

Use `MYKORÁ` for premium navigation, protocol pages, decks, and brand-led pages. Use `MYKORA` when technical constraints, URLs, filenames, or font rendering make the accented form risky.

**Wordmark style:**

- Font: `Unbounded`.
- Weight: `700` or `800`.
- Case: uppercase.
- Letter spacing: `0.12em` to `0.18em` for navigation and brand locks.
- Color on light: `#3E3A17`.
- Color on dark: `#F8EFCB` or `#FFFDF6`.

### Lockups

**Horizontal lockup:** orange mark + wordmark, gap `10px` to `12px`. Use in headers, landing pages, app shells, social templates, and presentation covers.

**Compact lockup:** orange mark only. Use in mobile topbars, favicons, tiny cards, and sticky controls.

**Text-only lockup:** `MYKORÁ` in Unbounded with letter spacing. Use when a mark would be too small or visually crowded.

Do not stretch, rotate, outline, recolor randomly, add drop shadows to the mark, or place the mark over busy photography without a solid container.

### Brand Pattern

Scientific article background pattern:

`/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Элементы /pattern.png`

Use this pattern as an optional background layer for science articles, science explainers, evidence-led infographics, and research-style editorial pages. It can replace or supplement the generated CSS grid when the page needs a more explicitly branded scientific texture.

Usage rules:

- Keep it subtle; the pattern should support reading, not compete with content.
- Place white or soft-white cards over it for long text.
- Use with deep olive headings and orange evidence markers.
- Do not combine it with other busy background textures.

### Signature Element

Signature asset:

`/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Элементы /подпись.pdf`

Use the signature in social media content: carousels, infographics, static images, visual explainers, covers, and other branded visuals. It works as an editorial/authorship mark rather than as a replacement for the official logo.

Usage rules:

- Use it as a finishing brand accent on social visuals and image-led content.
- Keep it secondary to the main message and product/science content.
- Pair it with either the standalone sign or the wordmark-only asset when a composition needs both brand recognition and editorial personality.
- Do not use the signature as the only brand identifier on formal product, legal, or partner-facing materials.

## 3. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
| --- | --- | --- |
| Deep Forest | `#3E3A17` | Primary text, headings, navigation bars, dark brand bands |
| Soft Ivory | `#F8EFCB` | Warm page canvas, brand atmosphere, light bands |
| Vivid Orange | `#FF7F00` | Primary CTA, active nav, highlights, selection, important chart series |
| Earthy Olive | `#A3A58C` | Secondary accent, quiet chips, supporting chart series |
| Misty Silver | `#C8D2D5` | Cool supporting neutral, comparison surfaces, chart backgrounds |
| Surface | `#FFFFFF` | Cards, modals, high-readability modules |
| Surface Soft | `#FFFDF6` | Soft page surface, elevated content areas |
| Line | `#DCD7C2` | Borders, table dividers, chart grid lines |
| Text Soft | `#6D6854` | Secondary text, long descriptions, captions |

### Semantic Colors

- **Success** (`#3F7B4F`): measured positive state, confirmation, "works / completed" indicators.
- **Danger** (`#B9473B`): destructive state, warnings, validation errors. Use sparingly.
- **Orange tint** (`rgba(255,127,0,0.08-0.14)`): active cards, lead callouts, selected options.
- **Olive tint** (`rgba(163,165,140,0.14-0.22)`): secondary tags, supportive backgrounds.

### Background Formula

MYKORA pages should use a warm grid background when the surface is editorial, educational, or product-led:

```css
body {
  background:
    linear-gradient(rgba(62, 58, 23, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(62, 58, 23, 0.045) 1px, transparent 1px),
    radial-gradient(circle at top left, rgba(255, 127, 0, 0.12), transparent 28%),
    linear-gradient(180deg, #fffdf6 0%, #f8efcb 100%);
  background-size: 44px 44px, 44px 44px, auto, auto;
}
```

Use a flatter surface (`#FFFDF6` or `#FFFFFF`) for dense app workflows where the grid would reduce scanability.

### Selection

Always override system-blue selection:

```css
::selection {
  background: #FF7F00;
  color: #FFFDF6;
}
```

## 4. Typography Rules

### Font Family

- **Display / headings / UI labels:** `Unbounded, system-ui, sans-serif`.
- **Body / educational copy / tables / captions:** `Libertinus Sans, system-ui, sans-serif`.
- **Fallback for social templates only:** `Onest` may appear in older content templates, but new MYKORA surfaces should prefer Libertinus Sans for body copy.

Load Unbounded from Google Fonts and Libertinus Sans with Cyrillic support.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800&display=swap" rel="stylesheet">
```

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| Display | Unbounded | `64px` | `800` | `1.02` | `0` | hero covers, deck title slides |
| H1 | Unbounded | `56px` | `700` | `1.04` | `0` | page title, article title |
| H2 | Unbounded | `42px` | `700` | `1.08` | `0` | major sections |
| H3 | Unbounded | `20px` | `700` | `1.22` | `0` | card titles, sub-sections |
| Body Large | Libertinus Sans | `20px` | `400` | `1.55` | `0` | lead paragraphs |
| Body | Libertinus Sans | `16px` | `400` | `1.65` | `0` | default text |
| Label Caps | Unbounded | `11px` | `700` | `1` | `0.12em` | chips, nav, metadata |
| Micro | Libertinus Sans | `13px` | `400/700` | `1.45` | `0` | notes, captions, legal |

### Responsive Type

Use `clamp()` for display headings, but do not scale every text element with viewport width. Body text should remain stable.

Recommended CSS:

```css
h1 { font-size: clamp(2rem, 7vw, 4.35rem); line-height: 1.03; }
h2 { font-size: clamp(1.35rem, 2.6vw, 2rem); line-height: 1.22; }
p  { font-size: 1rem; line-height: 1.65; }
```

### Principles

- Headings should be compact, confident, and short.
- Body copy should feel editorial and readable; avoid cramped line-height.
- Labels and navigation use uppercase Unbounded with controlled positive tracking.
- Do not use negative letter spacing in MYKORA unless a specific social template already does it.
- Do not mix more than two type families on a single UI surface.

## 5. Component Stylings

### Brand Header / Topbar

Use a sticky, glassy, light topbar for apps and a solid deep-forest topbar for protocol microsites.

**Light topbar:**

- Background: `rgba(255,255,255,0.88)`.
- Border: `1px solid rgba(62,58,23,0.11)`.
- Radius: `22px`.
- Padding: `12px`.
- Shadow: `0 14px 32px rgba(62,58,23,0.07)`.
- Backdrop: optional `blur(14px)`.

**Dark protocol nav:**

- Background: `#3E3A17`.
- Text: `#F8EFCB`.
- Active button: `#FF7F00`.
- Wordmark: `MYKORÁ`, Unbounded, `14px`, `letter-spacing: 3px`.

### Buttons

**Primary CTA**

- Background: `#FF7F00`.
- Text: `#FFFDF6` on dark or high-impact CTAs; `#3E3A17` is acceptable for softer product CTAs if contrast is verified.
- Radius: `999px`.
- Height: `42px` to `48px`.
- Padding: `0 18px` or `11px 18px`.
- Font: Unbounded, `11px`, `700`, uppercase, `0.10em-0.12em`.
- Hover: slightly darken orange or lift by `translateY(-1px)`.

**Secondary Pill**

- Background: `rgba(255,255,255,0.76)`.
- Border: `1px solid rgba(62,58,23,0.16)`.
- Text: `#3E3A17`.
- Radius: `999px`.
- Use for navigation, filters, social links, and secondary actions.

**Active / Selected Pill**

- Background: `rgba(255,127,0,0.10)`.
- Border: `1px solid rgba(255,127,0,0.35)`.
- Text: `#FF7F00` or `#3E3A17` depending on surface.

**Ghost Link**

- Background: transparent.
- Text: `#3E3A17`.
- Border: none.
- Underline or color shift only on hover.

### Cards & Panels

**Default card**

- Background: `rgba(255,255,255,0.86-0.92)`.
- Border: `1px solid rgba(62,58,23,0.08-0.12)`.
- Radius: `22px` to `30px`.
- Padding: `18px` to `28px`.
- Shadow: `0 18px 42px rgba(62,58,23,0.07)`.

**Information module**

- Radius: `22px`.
- Background: `#FFFFFF` or `#FFFDF6`.
- Border-first hierarchy.
- Use H3 + short body + one metric, icon, or label.

**Lead block**

- Background: `rgba(255,127,0,0.06)`.
- Border-left: `4px solid #FF7F00`.
- Radius: `18px`.
- Padding: `24px`.
- Use for article introductions and practical "what matters" summaries.

**CTA band**

- Background: `#3E3A17`.
- Text: `#F8EFCB`.
- Accent: `#FF7F00`.
- Radius: `28px` or full-width rectangular band if used as a page section.
- Include one clear action, not several competing CTAs.

### Data & Science Components

**Chart card**

- Background: `rgba(255,255,255,0.92)`.
- Border: `1px solid rgba(62,58,23,0.10)`.
- Radius: `18px` to `22px`.
- Shadow: `0 14px 30px rgba(62,58,23,0.05)`.
- Chart colors: orange first, olive second, deep forest third, misty silver as neutral background.
- Minimum mobile chart height: `280px`.

**Metric card**

- Big number in Unbounded.
- Supporting text in Libertinus Sans.
- Accent marker in orange.
- Use for price, dosage, time, phases, effectiveness, and comparison stats.

**Comparison table**

- Header: deep forest background with soft ivory text.
- Body: white rows with line dividers.
- Avoid tiny dense tables on mobile; reflow into stacked cards when necessary.

### Forms & Inputs

- Background: `#FFFFFF`.
- Border: `1px solid rgba(62,58,23,0.14)`.
- Radius: `14px` to `18px`.
- Padding: `12px 14px`.
- Text: `#3E3A17`.
- Placeholder: `#6D6854`.
- Focus: orange border plus soft orange ring `0 0 0 4px rgba(255,127,0,0.12)`.
- Error: `#B9473B`, not red neon.
- Success: `#3F7B4F`.

### Chips, Badges, Tags

- Radius: `999px`.
- Font: Unbounded, `11px`, uppercase.
- Default: white/ivory fill with olive border.
- Active: orange tint.
- Science / evidence tags: olive tint.
- Warning tags: muted danger tint.

### Images & Visual Assets

MYKORA visual assets should look editorial, scientific, and premium:

- Logo variants live in `/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Лого`; choose between standalone sign, logo without descriptor, full logo with descriptor, and name-only wordmark based on context.
- Use `/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Элементы /pattern.png` as a branded scientific background pattern when articles or explainers need more identity than the CSS grid.
- Use `/Users/uneedmo/Desktop/Mykora/SMM МИКОРА/delivery_2026-03-28/MYKORA DESIGN/Элементы /подпись.pdf` as the signature element for social posts, carousels, infographics, image covers, and editorial visual content.
- Product, mushroom, hydration, and supplement visuals may be generated or photographed, but should be clear and inspectable.
- Use warm light surfaces and subtle deep-forest framing.
- Article hero images should be clean, vertical-friendly, and reusable in database tiles.
- Avoid surreal faces, fake logos, messy text in generated images, and over-saturated medical blue.

Recommended AI image prompt style:

```text
Editorial scientific wellness image for MYKORA, warm ivory background, deep olive and vivid orange accents, clean natural supplement ingredients, premium magazine composition, subtle grid, no text, no logos, no surreal elements, no blue medical UI.
```

## 6. Layout Principles

### Page Shell

- Max width: `1320px` for product/app surfaces.
- Article width: `900px` to `980px`.
- App shell padding: `16px` mobile, `20px-32px` desktop.
- Section gap: `22px` for compact app flows, `48px-80px` for editorial pages.

### Grid & Rhythm

- Use an `8px` base spacing rhythm.
- Cards should align to a visible grid, even on organic editorial pages.
- Repeated modules should use equal card heights only when comparison matters; otherwise allow natural editorial rhythm.
- Do not place cards inside cards unless the inner element is a repeated item, table row, or modal content.

### Content Rhythm For Articles

Recommended order:

1. Navigation: back to database + `mykora.ru`.
2. Header: meta line, H1, hero image.
3. Lead block.
4. GPT / editorial image block.
5. Chart card or infographic.
6. H2/H3 sections.
7. Practical "what to do" block.
8. FAQ.
9. CTA band.

### Content Rhythm For Apps

Recommended order:

1. Sticky topbar with logo lockup and status/control pills.
2. Primary task panel.
3. Supporting cards or data modules.
4. Results area.
5. Secondary education and explanation below the main workflow.

## 7. Depth & Elevation

MYKORA depth is soft and functional.

Use:

- `0 14px 32px rgba(62,58,23,0.07)` for topbars and sticky controls.
- `0 18px 42px rgba(62,58,23,0.07)` for hero panels.
- `0 14px 30px rgba(62,58,23,0.05)` for tables and chart cards.
- Borders before shadows for most separation.

Avoid:

- Heavy black shadows.
- Glassmorphism everywhere.
- Large blur blobs or decorative orbs.
- Dark mode unless a specific protocol, deck, or app screen needs it.

## 8. Motion & Interaction

Motion should be small, useful, and quiet.

- Buttons may lift by `translateY(-1px)` or compress slightly on active press.
- Cards may raise shadow subtly on hover when clickable.
- Active state should be obvious through orange fill/tint, not through animation alone.
- Page transitions should be under `200ms`.
- Avoid bouncy, playful, or exaggerated motion.

## 9. Responsive Behavior

### Breakpoints

- Small mobile: `320px-389px`.
- Mobile: `390px-767px`.
- Tablet: `768px-1023px`.
- Desktop: `1024px+`.

### Mobile Rules

- No horizontal overflow.
- Stack multi-column cards vertically.
- Keep touch targets at least `42px`.
- Topbar may wrap or horizontally scroll only when it is a protocol/filter nav.
- Tables become stacked comparison cards when columns would get cramped.
- Hero imagery must not push primary content below a blank first viewport.

### Desktop Rules

- Use generous shell width but keep reading text narrow.
- Dense dashboards can use 2-4 columns, but editorial articles should not exceed comfortable line length.
- Keep logo and primary action visible in the first viewport.

## 10. Do's And Don'ts

### Do

- Use the orange mark container and `MYKORÁ` wordmark for brand-led surfaces.
- Keep orange as the only strong interaction accent.
- Keep Unbounded + Libertinus Sans as the primary type pairing.
- Use the warm grid background on educational and product storytelling pages.
- Make product, pricing, protocol, and science blocks clear, comparable, and scannable.
- Use charts and practical blocks for evidence-based content.
- Keep copy calm, specific, and useful.

### Don't

- Do not introduce blue or purple CTA systems.
- Do not make the brand look like a generic medical SaaS dashboard.
- Do not use low-contrast olive text on warm surfaces.
- Do not mix multiple visual languages on one page.
- Do not use noisy gradients, neon glows, or busy decorative backgrounds.
- Do not stretch, recolor, or place the logo mark without contrast.
- Do not make typography too tiny inside cards or buttons.

## 11. Agent Prompt Guide

When building a MYKORA page, use this compact prompt:

```text
Build this in the MYKORA design system: warm ivory grid background, deep olive text (#3E3A17), vivid orange as the only strong action accent (#FF7F00), white/soft-white rounded panels, Unbounded for headings and UI labels, Libertinus Sans for body copy, orange rounded-square logo mark with MYKORÁ wordmark, calm editorial wellness tone, clear protocol/product/science cards, soft border-first depth, mobile-first layout with no overflow.
```

For an article or science page:

```text
Use MYKORA editorial article rhythm: back nav + mykora.ru link, meta line, compact Unbounded H1, hero image, orange-tinted lead block, chart card, practical explanation sections, FAQ, deep-forest CTA band. Use only MYKORA palette and keep the visual tone scientific, warm, and trustworthy.
```

For an app or assistant:

```text
Use MYKORA app shell: sticky light topbar with orange logo mark and wordmark, pill controls, white rounded panels, clear step states, orange active/CTA states, dense but calm cards, readable Libertinus Sans body, Unbounded labels, and warm ivory grid background unless it hurts scanability.
```

## 12. Implementation Snippets

### CSS Tokens

```css
:root {
  --deep-forest: #3E3A17;
  --soft-ivory: #F8EFCB;
  --vivid-orange: #FF7F00;
  --earthy-olive: #A3A58C;
  --misty-silver: #C8D2D5;
  --surface: #FFFFFF;
  --surface-soft: #FFFDF6;
  --line: #DCD7C2;
  --text-soft: #6D6854;
  --success: #3F7B4F;
  --danger: #B9473B;
  --shadow-soft: 0 18px 42px rgba(62, 58, 23, 0.07);
}
```

### Logo Lockup

```html
<div class="mykora-brand" aria-label="MYKORA">
  <span class="mykora-mark">
    <img src="mykora-protocol-flyers-site/assets/mykora-logo-mark-white.png" alt="">
  </span>
  <span class="mykora-wordmark">MYKORÁ</span>
</div>
```

```css
.mykora-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--deep-forest);
}

.mykora-mark {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 14px;
  background: var(--vivid-orange);
}

.mykora-mark img {
  width: 24px;
  height: auto;
}

.mykora-wordmark {
  font-family: "Unbounded", system-ui, sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.16em;
}
```

### Card Primitive

```css
.mykora-card {
  border: 1px solid rgba(62, 58, 23, 0.10);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 18px 42px rgba(62, 58, 23, 0.07);
  padding: 24px;
}
```

### Primary Button

```css
.mykora-button-primary {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--vivid-orange);
  border-radius: 999px;
  background: var(--vivid-orange);
  color: var(--surface-soft);
  padding: 0 18px;
  font-family: "Unbounded", system-ui, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```
