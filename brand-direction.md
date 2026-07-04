# Brand Direction — The Healing Play

**Client:** The Healing Play — children's play therapy practice, Bodakdev, Ahmedabad
**Practitioner:** Vishwa Choksi — children's play therapist; 200+ play hours of practice experience; professional, warm, bubbly; a parent herself
**Source document:** `reference-visual-analysis.md` (analysis of therapy-at-play.com, bigbearstreehouse.com.au, behivetherapy.com)

**Primary visual reference:** Therapy at Play (therapy-at-play.com) — the client's stated favourite. This direction adapts its system (pastel colour-blocked sections, hand-drawn display accents, illustration-first, rounded everything) with The Healing Play's own palette, rather than copying its values.

---

## 1. Design personality

Warm and parent-directed first, credentialed second — every reference site led with emotional reassurance and folded qualifications *inside* warm first-person copy ("Hi, I'm Alex/Sammi/Julie"), and this site does the same: "Hi, I'm Vishwa" with the **200+ play hours** figure treated as a trust badge inside her story, never as a clinical header. Visually the personality is *pastel with punch* (the Therapy at Play formula): calm cream-and-pastel colour fields carry the professionalism, while a vivid tangerine accent and a hand-drawn display font used on single words carry Vishwa's bubbly side — playful in the details, never chaotic in the structure. Nothing is sharp, dark, or corporate: rounded cards, pill buttons, and gentle scroll reveals were universal across all three references and are the baseline here.

---

## 2. Colour palette

Strategy drawn from the analysis: Therapy at Play's "warm cream base + pastel colour fields + punchy orange/green accents" (Section 1, *Colour & type impression*), which the synthesis called "pastel-with-punchy-accents reads slightly more considered/premium" (Divergence point 4). Values below are The Healing Play's own — shifted from TAP's lilac/periwinkle toward a rose-and-mint pairing so the site doesn't read as a TAP clone.

### Brand colours

| Token | Hex | Role | Why |
|---|---|---|---|
| `--color-primary` | `#F2AEDC` | **Petal pink.** Default button fill, key interactive elements, highlighted section fields. Always used with `--color-ink` text on top. | Direct adaptation of TAP's candy-lilac button colour (`#f0b2f7` in the analysis) — the "bubbly" carrier — shifted to pink for The Healing Play's own identity and Vishwa's persona. |
| `--color-secondary` | `#C9E8DE` | **Soft mint.** Alternating section band background #1 (with `--color-secondary-2` as band #2). Never for text. | TAP alternates pastel section fields down the page (`.blue-space`/`.blue-bg` pattern in the analysis); mint says "healing" and keeps the page calm between pink/orange moments. |
| `--color-secondary-2` | `#CBDCFB` | **Periwinkle.** Alternating section band background #2, footer background. Never for text. | TAP's second pastel field (`#cdddfd`/`#b7ceff` pair in the analysis) — two alternating pastels prevent a striped, monotonous page. |
| `--color-accent` | `#F5521D` | **Tangerine.** Button hover state, link hover, highlighted display-font words, small badges (e.g. "200+ Play Hours"). | TAP's vivid tangerine (`#fd4d03`) is what stops the pastels from feeling sleepy — the analysis flags the lilac→orange button hover as a signature. This is the "punch". |
| `--color-accent-2` | `#0E9152` | **Leaf green.** Second colour for highlighted display-font words and icon strokes, so the accent doesn't become "everything is orange". | Mirrors TAP's kelly green (`#019042`) used for accent headings; also echoes Big Bear's green-headings-on-white signature move. |

### Neutral scale (warm, cream-based — 6 steps light → dark)

| Token | Hex | Role |
|---|---|---|
| `--neutral-0` | `#FFFCFA` | Cards and form fields sitting on the cream page; "white" is never pure `#FFFFFF`. |
| `--neutral-1` | `#FBF1EA` | **Page/body background.** Adapted from TAP's `--seashell: #fcf1eb` body background. |
| `--neutral-2` | `#F0E1D6` | Borders, dividers, input outlines, subtle card edges. |
| `--neutral-3` | `#B9AAA0` | Disabled states, placeholder text (decorative only — do not use for readable text). |
| `--neutral-4` | `#6E625A` | Secondary/muted body text, captions, meta lines. |
| `--neutral-5` | `#332C27` | `--color-ink`. Primary text and headings. Warm charcoal, per TAP's `#171717`–`#333` range — never pure black. |

### Hard usage rules (no exceptions without a design decision)

1. **Text on pastels is always `--neutral-5`.** White text is never placed on `#F2AEDC`, `#C9E8DE`, or `#CBDCFB` — contrast fails.
2. **Buttons:** default = `#F2AEDC` fill + `#332C27` text, pill shape; hover = `#F5521D` fill + `#FFFCFA` text, `transition: all .4s` (the TAP hover pattern from the analysis). White-on-tangerine is large/bold button text only (≥16px bold) — do not use tangerine fills behind small body text.
3. **`#F5521D` and `#0E9152` as text colours:** headings/display words at 24px+ only. For body-size text they fail contrast on cream; use `--neutral-5`.
4. **Section rhythm:** page background is `--neutral-1`; sections alternate `--neutral-1` → pastel band (`--color-secondary` or `--color-secondary-2`) → `--neutral-1`. Never two pastel bands of the same colour adjacent. Footer is `--color-secondary-2` (TAP uses its pastel blue for the footer).
5. Body text is `#332C27` on `#FBF1EA` (≈13:1 contrast) or on `#FFFCFA` cards — always AA/AAA-safe.

---

## 3. Typography

Pairing strategy from the analysis: TAP's two-font system — a rounded geometric sans for everything, plus a chunky hand-drawn display face used **only for single emphasized words inside headings** ("Hi, I'm **Alex**"). The synthesis called this "probably the highest-leverage element to borrow" (Divergence point 2). TAP's display font (BaksoSapi) is a paid/self-hosted face; the substitute below is free on Google Fonts.

| Role | Font | Weights | Source |
|---|---|---|---|
| Headlines (H1–H4) | **DM Sans** | 500, 700 | https://fonts.google.com/specimen/DM+Sans |
| Body, UI, buttons, forms | **DM Sans** | 400, 500 | (same family — one load) |
| Accent display words | **Chewy** | 400 (its only weight) | https://fonts.google.com/specimen/Chewy |

**Rules for Chewy (the accent face):**
- Used for **one or two words maximum inside a headline**, never a full sentence, never body text, never buttons or navigation. Example: `Hi, I'm <span class="accent">Vishwa</span>` or `How we <span class="accent">play</span> at The Healing Play`.
- Accent words are coloured `--color-accent` (`#F5521D`), `--color-accent-2` (`#0E9152`), or `--color-primary` (`#F2AEDC`, on dark-enough contexts only per rule 3 above) — rotate between them; the surrounding headline stays `--neutral-5`.
- Appears at the headline's size or up to 1.15× it, never smaller than the headline it sits in.

**Type scale (px, desktop → mobile):**

| Token | Size / line-height | Use |
|---|---|---|
| `--text-display` | `clamp(40px, 6vw, 68px)` / 1.1 | H1, hero only |
| `--text-h2` | `clamp(30px, 4vw, 44px)` / 1.15 | Section headings |
| `--text-h3` | 24px / 1.3 | Card titles, FAQ questions |
| `--text-body` | 18px / 28px | All body copy (BeHive's 18px base from the analysis — do **not** copy TAP's 14px body, which is too small) |
| `--text-small` | 15px / 22px | Captions, meta, footer legal |

Headline case: sentence case throughout (TAP/BeHive pattern). No all-caps headings except optional small eyebrow labels (13px, +0.08em letter-spacing, `--color-accent`— the BeHive eyebrow pattern).

---

## 4. Spacing & sizing scale

Base unit **8px**. Every margin, padding, and gap is a multiple of 8 (4px permitted only for icon-to-label gaps).

| Token | Value | Use |
|---|---|---|
| `--space-1` | 8px | Icon↔label gaps, chip padding |
| `--space-2` | 16px | Paragraph spacing, input padding, button vertical padding |
| `--space-3` | 24px | Grid/card gaps, card padding (mobile), container side padding (mobile) |
| `--space-4` | 32px | Card padding (desktop), gap between heading and body within a section |
| `--space-6` | 48px | Gap between distinct content blocks inside one section; section padding (mobile) |
| `--space-8` | 64px | Large intra-section separation |
| `--space-12` | 96px | **Section vertical padding, desktop** (the "sparse, generous sections" the analysis found in TAP) |
| `--space-16` | 128px | Hero vertical padding, desktop only |

**Layout constants:**
- Container max-width: **1200px**, centered; side padding 24px mobile / 40px ≥1024px.
- Service cards: 3-up grid ≥1024px, 2-up 640–1023px, 1-up below; gap `--space-3` (24px).
- Buttons: pill (`border-radius: 999px`), padding 16px × 32px, DM Sans 500 at 18px.

**Corner radius (from TAP's rounded system — 20px cards, circular imagery):**

| Token | Value | Use |
|---|---|---|
| `--radius-card` | 20px | Cards, images, inset section backgrounds, form inputs (inputs may use 12px if 20px looks bulbous at 48px height) |
| `--radius-pill` | 999px | All buttons, tags/badges |
| `--radius-circle` | 50% | Portrait photos (Vishwa's headshot in a circle — the TAP founder-photo treatment) |

---

## 5. Cross-reference constants to honour (from the "common across all three" findings)

These showed up on all three reference sites and are treated as fixed requirements, not suggestions:

1. **Homepage skeleton:** emotional hero → short intro → service cards (one-line to one-paragraph blurbs) → first-person founder section ("Hi, I'm Vishwa" — photo is a real photograph, never an illustration) → social proof (testimonials) → FAQ → enquiry CTA + form.
2. **Single conversion goal:** one enquiry action ("Enquire Now"), repeated 3+ times down the homepage, all pointing to the same form/contact. No pricing tables, no checkout.
3. **Photos for humans, illustration for everything else** (the TAP split): Vishwa and any team appear as photography; concepts, services, and decoration are SVG illustration/icons.
4. **Gentle scroll-reveal animation as baseline:** fade/slide-in on section entry, ~0.4–0.6s ease; nothing bouncy or attention-grabbing. Button hover transition `all .4s`.
5. **Publish full practical details** (the Big Bear's transparency model, flagged in Divergence point 6 as best practice): street address in Bodakdev, Ahmedabad; phone; email; hours — in the footer and contact page. Good for local SEO and parent trust.
6. **Trust signals woven in, never leading:** "200+ play hours" appears as a badge/inline phrase within warm copy (and may use the tangerine badge treatment), the way TAP handles "NDIS Accredited" and Masters credentials.

---

## 6. Quick token block (copy-paste for CSS)

```css
:root {
  /* Brand */
  --color-primary:     #F2AEDC; /* petal pink — buttons, key fields */
  --color-secondary:   #C9E8DE; /* soft mint — section band 1 */
  --color-secondary-2: #CBDCFB; /* periwinkle — section band 2, footer */
  --color-accent:      #F5521D; /* tangerine — hover, display words, badges */
  --color-accent-2:    #0E9152; /* leaf green — display words, icon strokes */

  /* Neutrals (light → dark) */
  --neutral-0: #FFFCFA; /* cards, form fields */
  --neutral-1: #FBF1EA; /* page background */
  --neutral-2: #F0E1D6; /* borders, dividers */
  --neutral-3: #B9AAA0; /* disabled, placeholders */
  --neutral-4: #6E625A; /* muted text */
  --neutral-5: #332C27; /* ink — text & headings */

  /* Type */
  --font-sans: "DM Sans", sans-serif;      /* headlines + body + UI */
  --font-accent: "Chewy", cursive;         /* 1–2 words in headlines only */

  /* Space (8px base) */
  --space-1: 8px;  --space-2: 16px; --space-3: 24px; --space-4: 32px;
  --space-6: 48px; --space-8: 64px; --space-12: 96px; --space-16: 128px;

  /* Radius */
  --radius-card: 20px; --radius-pill: 999px;
}
```
