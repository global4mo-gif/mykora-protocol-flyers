---
version: alpha
name: MYKORA Website Design Code
description: "Design system extracted from the current MYKORA public website screenshot: clean beauty commerce, scientific supplement positioning, product-led storytelling, and restrained premium UI."

source:
  screenshot: "assets/design-system/source-site-screenshot.jpg"
  context: "Public MYKORA website visual direction. This file describes the website style, which differs from the warmer editorial DESIGN.md system."

brand:
  name: "MYKORA"
  wordmark: "MYKORÁ"
  productCategory: "Functional mushroom and vitamin-based supplements"
  tone: "premium, scientific, clean, beauty-adjacent, product-first"
  assets:
    markWhite: "assets/design-system/logo/mark-white.jpg"
    markBlack: "assets/design-system/logo/mark-black.png"
    wordmarkWhite: "assets/design-system/logo/wordmark-white.svg"
    wordmarkBlack: "assets/design-system/logo/wordmark-black.png"
    letiporusBioconcentrateMockup: "assets/design-system/products/letiporus-bottle.jpg"
    vitaminCapsulesReference: "assets/design-system/products/vitamin-capsules.jpg"
    functionalSetsMockup: "assets/design-system/products/functional-sets-box.jpg"
  brandbook:
    pdf: "assets/design-system/brand-style-part-1.pdf and assets/design-system/brand-style-part-2.pdf"
    downloadArchive: "assets/design-system/mykora-brand-assets.zip"
    missionLine: "Living formulas of the future"
    categoryLine: "Next-generation biohacking"
    metaphor: "Metamorphosis: from fatigue and chaos to strength, clarity and a new level of life"
    values:
      - "Научная честность"
      - "Сила природы"
      - "Инновация и эффективность"
      - "Бунт против пустоты"
      - "Доступная премиальность"
      - "Метаморфоза человека"

fonts:
  primary:
    family: "Bounded"
    role: "Main brand, display, section headings, navigation, labels, buttons"
    black: "assets/design-system/fonts/Bounded-Black.ttf"
    extraLight: "assets/design-system/fonts/Bounded-ExtraLight.ttf"
    regular: "assets/design-system/fonts/Bounded-Regular.ttf"
    variable: "assets/design-system/fonts/Bounded-Variable.ttf"
  secondary:
    family: "Libertinus Sans"
    role: "Secondary reading text, descriptions, captions, article/body copy"
    regular: "assets/design-system/fonts/libertinussans-regular.otf"
    bold: "assets/design-system/fonts/libertinussans-bold.otf"
    italic: "assets/design-system/fonts/libertinussans-italic.otf"

colors:
  ink: "#111111"
  forest: "#3C3A21"
  forest-soft: "#979A86"
  orange: "#F76E00"
  orange-deep: "#D95A0A"
  canvas: "#F7F7F4"
  soft-ivory: "#FAF1D8"
  surface: "#FFFFFF"
  surface-muted: "#F1F1EE"
  card-border: "#D8D8D1"
  text-muted: "#77776F"
  text-soft: "#A2A29A"
  silver: "#C8CFD0"

typography:
  display:
    fontFamily: "Bounded"
    fontSize: 92px
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.02em
  h1:
    fontFamily: "Bounded"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.01em
  h2:
    fontFamily: "Bounded"
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.01em
  body:
    fontFamily: "Libertinus Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  label:
    fontFamily: "Bounded"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.02em

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  pill: 999px

spacing:
  page-x: 16px
  shell: 1120px
  section: 96px
  card-gap: 16px
  compact: 8px

components:
  top-nav:
    backgroundColor: "{colors.surface}"
    height: 58px
    borderColor: "{colors.card-border}"
  hero-split:
    backgroundColor: "{colors.canvas}"
    leftWidth: "42%"
    rightWidth: "58%"
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    height: 38px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.card-border}"
    rounded: "{rounded.xs}"
    height: 38px
  product-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.card-border}"
    rounded: "{rounded.sm}"
  dark-science-card:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.surface}"
    accentColor: "{colors.orange}"
    rounded: "{rounded.sm}"
---

# MYKORA Website Design Code

This file describes the visual code of the current MYKORA public website shown in the screenshot. It is intentionally separate from `design.md`: the site is more minimal, more photographic, and more beauty-commerce oriented than the warmer editorial design system.

## 1. Visual Theme & Atmosphere

The website reads as **premium clean beauty meets scientific supplement commerce**. It uses a quiet off-white canvas, large confident typography, clinical product cards, model photography, and dark olive scientific panels. The emotional center is not cozy wellness; it is polished efficacy: beautiful skin, precise formulation, laboratory credibility, and controlled nature.

The page avoids decorative gradients and dense editorial warmth. Instead, it uses white space, thin borders, rectangular product modules, large lifestyle photography, and orange commerce actions. The visual message is: MYKORA is a new-generation supplement brand with the polish of skincare and the argumentation of science.

**Key characteristics:**

- White/off-white background with very low visual noise.
- Large MYKORÁ hero wordmark as a graphic object.
- Product and model photography drive the page, not illustration.
- Orange is the commerce/action color: waitlist, buy, catalog, application.
- Deep olive is used for science, credibility, and high-contrast panels.
- Cards are flatter and tighter than in `design.md`: thin borders, small radius, restrained shadows.
- Section titles are uppercase, centered, and very spacious.
- Layout alternates product commerce blocks, scientific proof blocks, content hub, community, and FAQ.

## 2. Difference From `design.md`

`design.md` describes a warm editorial wellness system with ivory grid backgrounds, large soft cards, and educational content rhythm.

`web_mykora.md` describes the public website style:

- More white and gray, less ivory warmth.
- More black/near-black typography, less soft olive body text.
- More rectangular product cards, fewer rounded editorial panels.
- More fashion/beauty photography.
- More commerce buttons and catalog modules.
- More uppercase, compact, geometric headlines.
- Less texture, except when science/product imagery requires it.

Use this file when designing the public site, landing pages, product catalog, waitlist blocks, Ozon/Yandex.Market flows, and website hero sections.

## 3. Color Palette & Roles

### Primary Colors

| Token | Hex | Role |
| --- | --- | --- |
| Ink | `#111111` | Primary navigation, section titles, body text on light surfaces |
| Forest | `#3C3A21` | Scientific panels, overlays, brand contrast blocks |
| Forest Soft / Earthy Olive | `#979A86` | Secondary olive surfaces, muted accents, packaging support |
| Orange | `#F76E00` | Primary CTA, active product card, plus icons, emphasis words |
| Clean Canvas | `#F7F7F4` | Main website background, close to the clean public site feel |
| Soft Ivory | `#FAF1D8` | Brandbook color for packaging, warm inserts, print, and selected brand materials, not the base website background |
| Surface | `#FFFFFF` | Cards, FAQ rows, forms |
| Surface Muted | `#F1F1EE` | Product image wells, pale card interiors |
| Card Border | `#D8D8D1` | Thin borders around modules and catalog cards |
| Text Muted | `#77776F` | Secondary copy, captions |
| Text Soft | `#A2A29A` | Inactive community categories, low-priority metadata |
| Misty Silver | `#C8CFD0` | Secondary neutral, laboratory/technology support surfaces |

### Usage Rules

- Use orange for action, active state, plus sign, selected item, and important emphasis only.
- Use forest for scientific authority: certification, university, research, technology, production, dark form block.
- Keep the base page clean: `#FFFFFF` and `#F7F7F4`. Do not use Soft Ivory as the default website underlay.
- Use black/ink for headings to keep the site sharper than the editorial system.
- Do not introduce blue, purple, neon green, or heavy beige.

### Brandbook Palette

The brandbook defines the core color names and print values:

- **Deep Forest**: RGB `60 58 33`, CMYK `52 49 85 54`, HEX `#3C3A21`.
- **Soft Ivory**: RGB `250 241 216`, CMYK `2 4 15 0`, HEX `#FAF1D8`.
- **Vivid Orange**: RGB `247 110 0`, CMYK `0 66 100 0`, HEX `#F76E00`.
- **Misty Silver**: RGB `200 207 208`, CMYK `21 11 15 0`, HEX `#C8CFD0`.
- **Earthy Olive**: RGB `151 154 134`, CMYK `42 31 50 0`, HEX `#979A86`.

## 4. Logo & Brand Assets

The web system should explicitly distinguish between the standalone sign and the wordmark/name asset.

### Logo / Sign

- **White sign:** `assets/design-system/logo/mark-white.jpg`
- **Black sign:** `assets/design-system/logo/mark-black.png`

Use the standalone sign for compact navigation, icon moments, favicons, small product labels, and social visual accents. Use the white sign on black/deep-forest surfaces. Use the black sign on white or pale gray surfaces.

### Brand Name / Wordmark

- **White brand name:** `assets/design-system/logo/wordmark-white.svg`
- **Black brand name:** `assets/design-system/logo/wordmark-black.png`

Use the wordmark/name without the sign when the sign appears separately, when the layout needs a lighter brand line, or when the large MYKORÁ name is acting as a graphic element.

### Vertical Logo

The brandbook includes a vertical logo composition. Use it when the horizontal lockup loses readability or does not fit:

- narrow package labels;
- limited-width packaging zones;
- mobile interfaces;
- business cards;
- social media;
- compact marks where the symbol must become more monumental.

The vertical version must preserve the hierarchy of sign and wordmark. Do not rebuild it manually if a source asset exists.

### Logo Design Meaning

The abstract sign combines organic nature and scientific precision. It can suggest cells or mycelium, expressing life, energy, and biotechnology. The strict black wordmark adds seriousness and research credibility. The accent over the final letter creates a contemporary sound and a link to natural origin.

### Product Mockups

Bioconcentrate Letiporus mockup:

`assets/design-system/products/letiporus-bottle.jpg`

Use this image for the `Биоконцентрат Летипоруса` card and product-led hero/catalog modules. Keep it on white or pale gray wells, centered, with enough vertical room so the bottle feels premium and inspectable.

Vitamin capsules reference:

`assets/design-system/products/vitamin-capsules.jpg`

Use this reference for `Капсулы с витаминами` and other bottled vitamin products. The product direction is amber supplement jars with orange caps, clean pale labels, and product names such as liposomal vitamin C, zinc picolinate, and Reishi capsules.

Functional sets mockup:

`assets/design-system/products/functional-sets-box.jpg`

Use this for `Функциональные наборы` instead of suspension-style cards. Sets should show MYKORA packaging boxes, orange labels, dark olive/cream packaging contrast, and a premium unboxing/system feel.

## 5. Typography

The site typography behaves like a premium geometric grotesk system. It is closer to beauty/fashion commerce than to long-form editorial publishing.

### Font Direction

- **Primary font:** `Bounded`. Use for logo-adjacent typography, display headlines, section titles, navigation, product labels, CTA buttons, chips, and compact UI.
- **Secondary font:** `Libertinus Sans`. Use for body copy, descriptions, captions, scientific explanations, FAQ text, product descriptions, and longer reading.
- **Signature element:** handwritten signature appears as a graphic asset inside the science/value card, not as live text.

### Font Files

Bounded:

- Black: `assets/design-system/fonts/Bounded-Black.ttf`
- ExtraLight: `assets/design-system/fonts/Bounded-ExtraLight.ttf`
- Regular: `assets/design-system/fonts/Bounded-Regular.ttf`
- Variable: `assets/design-system/fonts/Bounded-Variable.ttf`

Libertinus Sans:

- Regular: `assets/design-system/fonts/libertinussans-regular.otf`
- Bold: `assets/design-system/fonts/libertinussans-bold.otf`
- Italic: `assets/design-system/fonts/libertinussans-italic.otf`

Recommended CSS:

```css
@font-face {
  font-family: "Bounded";
  src: url("assets/design-system/fonts/Bounded-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Libertinus Sans";
  src: url("assets/design-system/fonts/libertinussans-regular.otf") format("opentype");
  font-weight: 400;
}
```

### Hierarchy

| Role | Size | Weight | Case | Notes |
| --- | ---: | ---: | --- | --- |
| Hero wordmark | `90-120px` desktop | `400-500` | Uppercase | Treated as a graphic block, huge and left aligned |
| Section H2 | `38-48px` | `500-600` | Uppercase | Centered, tight line-height |
| Promo H3 | `22-28px` | `500-600` | Uppercase | Used in waitlist/dark cards |
| Product title | `15-17px` | `400-500` | Sentence case | Compact, commercial |
| Body | `14-16px` | `400` | Sentence case | Short paragraphs only |
| Nav | `12-13px` | `500-600` | Uppercase or title case | Thin top navigation |
| Button | `12-13px` | `500-600` | Uppercase | Compact, centered |

### Typography Rules

- Keep section titles short: `MYKORA — ЭТО СИСТЕМА`, `ПРОИЗВОДСТВО`, `СООБЩЕСТВО`.
- Use uppercase for major brand statements and navigation.
- Use orange inline emphasis in headings: `ВЫСШАЯ ФОРМА ЦЕННОСТИ`.
- Avoid long editorial paragraphs in the first viewport; split proof into cards.
- Keep product text compact and price/action oriented.

## 6. Brand Mission, Philosophy & Values

The brandbook frames MYKORÁ as **next-generation biohacking** and **living formulas of the future**.

Core mission language:

- `MYKORÁ is your metamorphosis: from fatigue and chaos to strength, clarity and a new level of life.`
- `MYKORÁ is the union of nature and science, transformed into next-generation living forms.`
- `MYKORÁ is the flow of nature, captured and enhanced by science.`
- `Living formulas instead of promises, metamorphosis instead of illusions.`

Russian mission:

MYKORÁ creates living formulas of the future: suspensions and bioformulas where nature is strengthened by science. The brand gives people tools to manage health, energy, and longevity through products with evidence-based effectiveness.

### Brand Values

- **Научная честность** - say only what can be proven; products must be supported by research and experience.
- **Сила природы** - formulas are based on natural substances strengthened by biotechnology.
- **Инновация и эффективность** - reject outdated industry approaches; use highly bioavailable formats.
- **Бунт против пустоты** - reject empty promises, weak pills, and marketing noise.
- **Доступная премиальность** - premium means effectiveness, not elitist show.
- **Метаморфоза человека** - products are tools of transformation: from fatigue to energy, chaos to harmony, limitation to freedom.

## 7. Layout System

### Page Shell

- Main content width: about `1120px`.
- Page background: off-white.
- Horizontal padding: `16px` desktop minimum, larger on wide screens.
- Section spacing: `80-120px`.
- Cards use tight gaps: `12-18px`.

### Hero

The hero uses a split layout:

- Left: brand, value proposition, chips, proof cards.
- Right: large model/product photography.
- The huge `MYKORÁ` wordmark sits left and dominates the first viewport.
- Product overlay sits on the hero image with a thin outline rectangle and dark olive label.

Hero composition:

```text
Top nav
┌──────────────────────────────┬────────────────────────────────────┐
│ MYKORÁ wordmark              │ large model holding product         │
│ brand descriptor             │ outlined product focus rectangle    │
│ science/value chips          │ dark olive caption over image       │
│ credibility cards            │                                    │
└──────────────────────────────┴────────────────────────────────────┘
```

### Section Rhythm

Recommended order:

1. Top navigation.
2. Split hero with model/product image.
3. Waitlist/promo form module.
4. Product catalog carousel/cards.
5. System/bioavailability proof banner.
6. Product bundles: `MYKORA — ЭТО СИСТЕМА`.
7. Brand manifesto card with large portrait.
8. Technology approach.
9. University/science credibility.
10. Production.
11. Content hub.
12. Community.
13. FAQ.
14. Minimal footer.

## 8. Components

### Top Navigation

The nav is thin, white, and almost invisible.

- Height: `56-62px`.
- Background: `#FFFFFF`.
- Logo left, small.
- Links centered/right.
- Separators between some nav items.
- Primary action at far right: orange filled rectangle.
- Text is compact and uppercase/title case.

Do not make the nav glassy, shadow-heavy, or tall.

### Hero Chips

Chips under the hero descriptor communicate product principles.

- Shape: pill.
- Border: `1px solid #D8D8D1`.
- Background: white or transparent.
- Left icon: orange plus.
- Text: black/ink, `14px`.
- Use for: `Природа, усиленная наукой`, `Высокая биодоступность`, `Разработано учеными`.

### Proof Cards

Small proof cards sit under the hero:

- Background: white.
- Radius: `8-10px`.
- Border: very light.
- Minimal shadow or no shadow.
- Include university/certification marks.
- Orange dot or gray dot as tiny status marker.

### Waitlist Module

The waitlist section uses a three-part horizontal card:

- Left: ingredient or mushroom image card.
- Middle: product image on white.
- Right: dark forest form panel.

Dark form panel:

- Background: `#3C3A21`.
- Text: white.
- Accent pills: dark outline with orange numbers.
- Inputs are underline-style, not heavy boxes.
- Primary button: orange.
- Secondary button: outline white.
- Checkboxes small and square.

### Catalog Cards

Catalog and product cards are central to the website.

- Card background: white.
- Product image well: pale gray `#F1F1EE`.
- Border: thin gray.
- Radius: `8px`.
- Active product card can use full orange frame and orange body.
- Product bottle or box should be centered and large.
- Buttons stack vertically: orange buy/waitlist, white details.
- Arrows sit outside or at the sides of the carousel.

Default website catalog groups:

- `Биоконцентрат Летипоруса` - use the 25ml vial mockup.
- `Капсулы с витаминами` - use amber vitamin jars with orange caps.
- `Функциональные наборы` - use paper box / set packaging mockups, not suspension placeholders.

### Bioavailability Banner

A wide scientific proof banner uses macro imagery, likely liquid/gel/biomaterial:

- Rounded rectangle.
- Background image fills the container.
- Centered uppercase statement at top.
- Orange emphasis inside the statement.
- Bottom overlay cards explain old vs MYKORA system.
- Use pill comparison: old component with `x`, MYKORA system with check.

### System Bundle Cards

Bundle section:

- Centered section heading.
- Three product cards in a row.
- White cards with large box/product image.
- Short title + compact description.
- Orange `Купить` button.
- White outlined `Узнать больше` button.

### Manifesto / Brand Value Card

Large split card:

- Left: close-up portrait with warm sunlight.
- Right: white text panel.
- Large quote in uppercase, with orange emphasis.
- Signature graphic below quote.
- Small image tile embedded in text area.
- Orange CTA at bottom.
- Border around whole card.

This is the most editorial/brand-emotional module on the site.

### Technology Approach

Technology section uses:

- Centered uppercase title.
- Wide dark/soft macro background.
- White floating card on left.
- Simple line icon.
- A slide/progress indicator.
- Orange phrase emphasis in the lower-left claim.

### Science Credibility Cards

Use two-column grid:

- Dark forest research card with bullets and lab image.
- White scientist card with portrait and credentials.
- Muted olive fact strip at bottom.

The style is more corporate-science than lifestyle.

### Production

Production section uses a clean triptych:

- Left: lab glassware photo.
- Center: white text card with slash-style bullets.
- Right: grayscale production equipment.
- Rounded outer corners.
- No excessive decoration.

### Content Hub

Content hub:

- Centered title and small category line.
- Four article cards.
- Image top, date, title, description.
- Minimal white background, no heavy card chrome.
- Centered secondary button below.

### Community

Community block:

- Centered title + subtitle.
- Left: numbered audience list, inactive items light gray.
- Active item black/orange.
- Center: large model/product photo.
- Right: orange plus icon, short explanation, orange CTA.
- Small annotation text can sit outside the main grid.

### FAQ

FAQ is a two-column grid of white rows:

- Each row: question left, orange plus right.
- Background: white.
- Border: very light gray.
- Height: `58-72px`.
- No accordion animation visible in static design.
- Section title large and centered.

## 9. Photography & Image Direction

Photography is the main visual asset system.

### People

- Clean beauty look.
- Natural skin, glossy highlights, neutral expression.
- Close crops: face, neck, shoulders, hands.
- Product held close to skin.
- Backgrounds are pale gray, off-white, or soft studio light.
- Avoid overly medical, gym-like, or casual lifestyle imagery.

### Product

- Bottles are centered, front-facing, and large.
- Use pale gray product wells.
- Orange caps become a key visual accent.
- Product labels should remain readable where possible.

### Science / Production

- Laboratory glassware, bioreactors, stainless equipment.
- Grayscale or desaturated images are acceptable.
- Macro liquid/gel imagery can support bioavailability sections.
- Science imagery should look premium and controlled, not stock-medical blue.

## 10. Shape, Borders & Depth

The website shape language is tighter than the editorial system.

- Main cards: `8-12px` radius.
- Large banners: `10-14px` radius.
- Buttons: `4-6px` radius, not full pills except chips.
- Borders: thin, `1px`, gray.
- Shadows: minimal or absent.
- Product cards rely on border and white surface more than shadow.

Avoid large soft rounded cards (`30px`) on this website style unless matching a specific visual module.

## 11. Buttons & Interaction States

### Primary Button

- Background: `#F76E00`.
- Text: white.
- Radius: `4-6px`.
- Height: `36-40px`.
- Uppercase.
- Use for: `Лист ожидания`, `Купить`, `Оставить заявку`, `Перейти в каталог`.

### Secondary Button

- Background: white/transparent.
- Border: `1px solid #111111` or `#D8D8D1`.
- Text: black.
- Same height as primary.

### Plus Icon

Orange plus is a recurring motif:

- Hero chips.
- FAQ rows.
- Community block.
- Navigation micro-markers.

Use it as a small brand interaction symbol.

## 12. Responsive Rules

### Desktop

- Preserve large first-screen split hero.
- Product catalog should remain horizontal.
- Section titles have generous vertical whitespace.
- The site should feel airy, not dashboard-dense.

### Tablet

- Hero can become two stacked blocks: text first, image second.
- Product cards can move to two columns.
- Waitlist card can stack image/product/form.

### Mobile

- Hero wordmark must scale down aggressively.
- Top nav collapses to compact menu.
- Chips wrap.
- Product cards become one-column carousel.
- FAQ becomes one column.
- Avoid horizontal overflow from large uppercase headings.

## 13. Do's And Don'ts

### Do

- Use clean white/off-white backgrounds.
- Use orange as the action and active-state color.
- Use model/product photography as the main visual language.
- Keep cards thin, precise, and commercial.
- Use dark olive for science credibility and high-contrast form blocks.
- Use uppercase centered titles for major sections.
- Keep copy short and scannable.

### Don't

- Do not use the ivory grid background from `design.md` on the main public site.
- Do not over-round cards into a soft app-like style.
- Do not add heavy shadows or glassmorphism.
- Do not make the site look like a generic supplement blog.
- Do not introduce blue/purple medical SaaS accents.
- Do not use long article-like blocks in commerce sections.
- Do not make orange decorative everywhere; it must remain functional.

## 14. CSS Starter

```css
:root {
  --mykora-ink: #111111;
  --mykora-forest: #3C3A21;
  --mykora-forest-soft: #979A86;
  --mykora-orange: #F76E00;
  --mykora-orange-deep: #D95A0A;
  --mykora-canvas: #F7F7F4;
  --mykora-soft-ivory: #FAF1D8;
  --mykora-surface: #FFFFFF;
  --mykora-surface-muted: #F1F1EE;
  --mykora-border: #D8D8D1;
  --mykora-muted: #77776F;
}

body {
  margin: 0;
  color: var(--mykora-ink);
  background: #fff;
  font-family: "Libertinus Sans", system-ui, sans-serif;
}

.web-shell {
  width: min(100% - 32px, 1120px);
  margin: 0 auto;
}

.web-title {
  font-family: "Bounded", system-ui, sans-serif;
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

.web-card {
  border: 1px solid var(--mykora-border);
  border-radius: 10px;
  background: var(--mykora-surface);
}

.web-button-primary {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--mykora-orange);
  border-radius: 5px;
  background: var(--mykora-orange);
  color: #fff;
  padding: 0 18px;
  font-family: "Bounded", system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.web-button-secondary {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--mykora-border);
  border-radius: 5px;
  background: #fff;
  color: var(--mykora-ink);
  padding: 0 18px;
  font-family: "Bounded", system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
```

## 15. Agent Prompt Guide

Use this prompt when generating a public MYKORA website page:

```text
Build this in the MYKORA public website style: clean white or very light gray background, premium beauty-commerce photography, large uppercase geometric headings, thin bordered white cards, compact product catalog modules, dark olive scientific credibility panels, orange as the only action color, small-radius rectangular buttons, minimal shadows, precise spacing, product-first storytelling, and no warm ivory underlay or grid/editorial-card style from the internal DESIGN.md system.
```

For a product/catalog section:

```text
Create MYKORA product commerce cards with pale gray product image wells, white bordered cards, centered supplement bottles, orange buy/waitlist button, white outlined details button, compact product title and category text, and carousel arrows outside the card row.
```

For a science/proof section:

```text
Create a MYKORA science credibility block with deep olive panels, white text, orange emphasis, laboratory or production photography, thin borders, compact bullet lists, and a clean premium supplement-science tone.
```
