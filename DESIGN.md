---
name: N°55 Laboratorium
description: Quiet clinical skincare, formulated for skin equilibrium.
colors:
  ink: "#2A2620"
  graphite: "#3D3327"
  signal: "#31594D"
  surface: "#FAF8F3"
  surface-strong: "#FFFDF9"
  surface-sage: "#E4E8DF"
  paper: "#EFE7D2"
  paper-deep: "#E8DFC6"
  paper-pressed: "#DDD2B5"
  taupe: "#6F624B"
  mist: "#BFB59C"
  hairline: "#D4C8AC"
  sage: "#92957C"
  sku-cleanser: "#9AA48E"
  sku-toner: "#8FA6B4"
  sku-mask: "#C49098"
  sku-rav-serum: "#C4A878"
  sku-moisturiser: "#A89CB8"
  sku-sunscreen: "#BCB09C"
  sku-glod-serum: "#C4AA60"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 6.5vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 4.5vw, 3.625rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Playfair Display, Times New Roman, serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.005em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: "0.005em"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  none: "0"
  bottle-sm: "4px"
  bottle-md: "6px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  2xl: "40px"
  3xl: "60px"
  section: "100px"
  page-gutter: "clamp(20px, 4vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.surface-strong}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "20px 42px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "20px 54px 20px 42px"
  sku-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  product-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "50px 36px 44px"
---

# Design System: N°55 Laboratorium

## Overview

**Creative North Star: "Quiet Calibration"**

The interface should feel like Copenhagen quiet utility translated into an Australian skincare system: clear roles, tactile restraint, and function before decoration. Quiet neutral surfaces keep the laboratory language humane; graphite typography supplies authority; measured Morandi accents identify formulas without turning the routine into a color-coded toy.

The system is precise and tactile. Depth comes from tonal shifts, hairline rules, scale, and generous spacing rather than ornamental effects. Product objects and claim logic receive the strongest emphasis. The existing cream-paper identity is intentional, but contrast must remain decisive so the surface never collapses into beige-on-beige softness.

It must never resemble a sterile clinic, generic clean-beauty store, loud social campaign, black-and-gold perfume counter, or default ecommerce template.

**Key Characteristics:**

- Quiet neutral field with dark, readable ink
- Product-first editorial pacing and large negative space
- Fine laboratory rules and structured formula metadata
- Muted SKU colors paired with names and numbers
- Flat, responsive surfaces with restrained motion
- Copenhagen-inspired design cues with Australian formulation origin stated clearly

**The Calibration Rule.** Every decorative choice must clarify product, routine, or evidence. If it does none of those jobs, remove it.

## Logo System

- **Full lockup:** `logo.svg` retains the complete N°55 Laboratorium identity for large-format brand use.
- **Navigation mark:** `nav-logo.svg` removes the Laboratorium line, enlarges N° and uses a heavier 55 for clear recognition below 50px high.
- Do not reduce the full lockup into navigation-scale placements. Use the compact mark whenever fine lettering would become illegible.

## Colors

The palette combines warm paper neutrals with graphite text and a controlled Morandi spectrum for product identification.

### Primary

- **Northern Ink:** The decisive text, primary action, and selection color. It carries authority and must anchor every screen.

### Secondary

- **Barrier Sage:** A quiet biological accent for barrier care and general system cues.
- **Formula Morandi Accents:** Cleanser green, toner blue, mask rose, Rav amber, moisturiser mauve, sunscreen stone, Glød ochre, and PinPerle dusty rose identify individual formulas. Always pair them with a product name, formula number, or step label.

### Neutral

- **Calibrated Paper:** The main page field and inverse primary-button text.
- **Pressed Paper:** Alternating sections and hover states.
- **Deep Paper:** Reserved for stronger tonal separation and quiet object fields.
- **Graphite:** Long-form secondary text and supporting claims.
- **Laboratory Taupe:** Metadata, breadcrumbs, and short labels only.
- **Mist and Hairline:** Dividers, calibration marks, and low-emphasis boundaries.

**The Ink First Rule.** Body copy uses Northern Ink or Graphite. Taupe is never body text and must not carry essential information.

**The Named Formula Rule.** Color never communicates an SKU, serum choice, or routine step on its own.

## Typography

**Display Font:** Archivo (with Helvetica Neue and Arial fallbacks)
**Body Font:** Archivo (with Helvetica Neue and Arial fallbacks)
**Product Accent Font:** Playfair Display (with Times New Roman fallback)

**Character:** The sans leads navigation, explanation, and decisions. The serif is reserved for product names and carefully chosen brand moments, preserving tactile warmth without making every section read like a poster.

### Hierarchy

- **Display** (500, `clamp(3rem, 6.5vw, 5.5rem)`, 0.98): Page-opening statements and primary customer decisions.
- **Headline** (500, `clamp(2.125rem, 4.5vw, 3.625rem)`, 1.04): Section propositions and routine explanations.
- **Title** (500, 1.75rem, 1.1): Product names, pairing titles, and compact content anchors.
- **Body** (300, 1rem, 1.75): Claims, guidance, and formula explanations. Keep prose between 42ch and 65ch.
- **Label** (600, 0.8125rem, 0.02em tracking): Formula roles, navigation, controls, and compact metadata. Labels use sentence case.

**The Evidence Reads Easily Rule.** Instructions, claims, and ingredient explanations never use mono, italics, or low-contrast taupe as their primary style.

**The Controlled Italic Rule.** Italics add one moment of warmth or emphasis, not a repeated cadence across every heading.

## Elevation

The system is tonally layered and flat. It uses no decorative box-shadow vocabulary. Depth comes from paper-tone changes, 1px rules, object scale, and the fixed navigation's restrained translucent field. Frosted effects are functional and limited to navigation or overlays where separation from moving content is necessary.

**The Flat by Default Rule.** Cards and product fields sit on the page plane. Hover changes tone or spacing; it never introduces a wide ambient shadow.

**The One Hairline Rule.** Boundaries use a single 1px Hairline stroke. Do not combine decorative borders with drop shadows.

## Components

Components feel precise and tactile: square structure, fine rules, measured spacing, and clear state changes.

### Buttons

- **Shape:** Architectural and square (`0px` radius).
- **Primary:** Northern Ink field with Calibrated Paper text and generous horizontal padding (`20px 42px`).
- **Hover / Focus:** Hover reverses to paper with an ink boundary and extends the directional edge. Keyboard focus uses a visible 2px ink outline with a 3px offset. Motion uses the standard 350ms state transition and is removed when reduced motion is requested.
- **Text CTA:** Underlined mono label with a directional arrow. The gap may widen on hover, but the label itself must remain stationary and readable.

### Chips

- **Style:** Fully rounded formula tags (`100px`) with a 1px formula-colored or Hairline boundary. The fill remains paper or a very light formula tint.
- **State:** Tags are descriptive, not the sole control for selection. Selected states include text or icon confirmation in addition to color.

### Cards / Containers

- **Corner Style:** Square (`0px`) for interface containers. Small radii belong to illustrated packaging forms, not cards.
- **Background:** Calibrated Paper at rest, Pressed Paper on hover or for alternating layers.
- **Shadow Strategy:** No shadows. Use a 1px Hairline grid or full boundary.
- **Border:** Shared grid rules are preferred to isolated floating cards.
- **Internal Padding:** Product cards use `50px 36px 44px`; compact routine cells use `40px 28px`.

### Navigation

The fixed navigation uses a three-part desktop grid, quiet mono links, and a translucent paper field with a 1px bottom rule. Hover and active states reveal an ink underline. On narrow screens, preserve the brand and replace hidden destinations with a real accessible menu control; navigation must not simply disappear.

### Product Calibration Field

The product hero field uses a Pressed Paper surface, a single boundary, subtle crosshair marks, and corner calibration details. It frames real product photography or accurate product art. It must never become an empty decorative placeholder in production.

### Routine Tile

Routine tiles form a continuous ruled sequence rather than a collection of floating cards. Step number, product name, purpose, and action remain visually distinct. The cleanser-plus-moisturiser starting path must be apparent before the complete routine is introduced.

## Do's and Don'ts

### Do:

- **Do** maintain WCAG 2.2 AA contrast, visible keyboard focus, semantic structure, and comfortable mobile touch targets.
- **Do** pair each Morandi SKU accent with product name, formula number, and routine role.
- **Do** use the cleanser-plus-moisturiser pairing as the clearest starting route for reactive or compromised skin.
- **Do** give product photography decisive space and write useful, specific alternative text.
- **Do** use Calibrated Paper, Graphite, and fine rules with enough contrast to remain readable.
- **Do** respect `prefers-reduced-motion`; content must remain visible without animation.
- **Do** keep formula metadata concise and use mono labels as a functional laboratory layer.

### Don't:

- **Don't** use sterile dermatology-clinic aesthetics, cold medical blue, stock model imagery, or hospital-like interfaces.
- **Don't** use generic clean-beauty imagery such as leaves, water splashes, beige bottles, or vague sustainability claims.
- **Don't** use loud pastel beauty styling, cute icons, TikTok gradients, glow effects, excessive motion, or inflated claims.
- **Don't** use black-and-gold luxury clichés, ornate perfume-counter decoration, or prestige styling without substance.
- **Don't** directly imitate Aesop or Le Labo through dense apothecary labels or copied packaging logic.
- **Don't** use low-contrast beige-on-beige styling. Taupe is metadata, never essential body copy.
- **Don't** fall back to a purely functional ecommerce template with no brand world-building.
- **Don't** make the experience cold, celebrity-led, fragrance-oriented, or emotionally vague.
- **Don't** rely on color alone to distinguish Rav Perle from Glød or any other SKU.
- **Don't** use repeated tiny uppercase eyebrows, numbered section scaffolding, decorative glass cards, gradient text, wide soft shadows, or side-stripe card accents.
- **Don't** hide content behind reveal classes or remove navigation links on mobile without an accessible replacement.
