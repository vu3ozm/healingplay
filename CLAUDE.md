# The Healing Play — Website Build Instructions

You are building a single-page marketing website in plain HTML, CSS, and JS.
No framework, no build step. Read this whole file before writing any code, and
follow it on every section.

## Source of truth (read these, do not skip)

- **content-final.md** — the only content source. Every headline, paragraph,
  card, step, question, and label comes from here, word for word.
- **brand-direction.md** — the design decisions (colour rules, type rules,
  section rhythm, spacing logic). Follow its hard rules exactly.
- **tokens.css** — the values (colours, fonts, sizes, spacing, radius, shadow,
  motion). Reference these variables only. Never edit this file. Never hardcode
  a colour, size, space, or radius that duplicates a token.

## Files you create and maintain

- **index.html** — the single page. All sections live here.
- **styles.css** — all styling. Organise it with clear `/* === SECTION === */`
  comment banners in build order, so a future developer can navigate it.
- **main.js** — all interactivity.

Link tokens.css before styles.css.

## Global rules (apply to every section, no exceptions)

1. **Copy is exact.** Use the text from content-final.md as written. Do not
   paraphrase, shorten, or "improve" it.

2. **Accent font mapping.** Any word wrapped in *asterisks* in content-final.md
   renders in the Chewy accent font. Colour it with `--color-accent`,
   `--color-accent-2`, or `--color-primary`, rotating the choice across
   sections. Never put Chewy on a word that is not starred in the content file.
   Never use it on body text, buttons, or navigation.

3. **Placeholders, never invented content.** Anything marked
   `[NEEDS CLIENT INPUT]` or carrying a warning flag in content-final.md renders
   as a clearly visible placeholder, for example a dashed-border box that reads
   "TODO: confirm clinic address". Do not invent an address, a fee, a phone
   number, a testimonial, a statistic, or a date to fill a gap. If content-final
   gives a value with a "verify" note (like the "200+ Play Hours" badge), use
   the value as written and tell me it needs confirming.

4. **Primary CTA is fixed.** The button text is exactly "Book a Consultation".
   It appears only three times: in the hero, after Meet Vishwa, and in the
   contact section. Do not rename it (not "Enquire Now" or anything else) and
   do not add it elsewhere.

5. **Photos for humans, illustration for everything else.** Real photos only for
   Vishwa and the playroom. Concepts, services, and decoration are SVG
   illustration or icons. Final photos are not available yet, so wherever a photo
   belongs, insert a labelled placeholder with the correct shape and aspect ratio
   (Vishwa's headshot is a circle, using `--radius-circle`) plus a comment saying
   what photo goes there.

6. **Section band rhythm.** Page background is `--neutral-1`. Sections alternate
   `--neutral-1` and a pastel band (`--color-secondary` or `--color-secondary-2`).
   Never place two pastel bands of the same colour next to each other. Footer is
   `--color-secondary-2`.

7. **Text on pastels is always `--color-ink`, never white.** (brand-direction.md
   hard rule.)

8. **Mobile-first.** Build for small screens first. After each section, show me
   how it looks at 375px and at 1440px.

9. **Motion is gentle and varied.** Scroll reveals use roughly 0.4 to 0.6s ease,
   nothing bouncy or attention-grabbing. Button hover is the pink-to-tangerine
   transition already in tokens.css. Each section uses the specific
   micro-interaction assigned in the build map below, so the page does not repeat
   the same effect everywhere. Wrap all decorative motion so it is disabled under
   `prefers-reduced-motion`.

10. **After every section, pause and report** in plain language: what you built,
    which words you set in Chewy, which placeholders you left and why, and what
    micro-interaction you added. Wait for me to confirm before moving on. Do not
    build multiple sections in one go.

## Build map (build in this order)

Build the shell first, then work down the sections one at a time.

| # | Build step | Content source | Assigned micro-interaction |
|---|---|---|---|
| 0 | **Shell**: HTML boilerplate, font links, semantic landmarks, empty section anchors (ids: hero, concerns, approach, services, how-it-works, meet-vishwa, testimonials, faq, contact), sticky nav, footer, and the prefers-reduced-motion stub | Footer copy from Section 10 | Nav: subtle shadow on scroll; links hover to tangerine |
| 1 | **Hero** | Section 1 | Soft fade-and-rise of headline and CTA on load. Badge reads "200+ Play Hours" (flag it as needing confirmation). This is CTA #1 |
| 2 | **Concerns** (6 cards) | Section 2 | Card lifts on hover (shadow-card to shadow-hover), small icon nudge |
| 3 | **Approach** | Section 3 | The four values fade in staggered as they scroll into view |
| 4 | **Services** (5 cards) | Section 4 | Card lift on hover, plus an accent underline that draws in under the card title |
| 5 | **How It Works** (4 steps) | Section 5 | Numbered steps reveal in sequence on scroll; the connecting line draws in |
| 6 | **Meet Vishwa** | Section 6 | Circular photo gently scales up on load; credentials fade in staggered. This is CTA #2 |
| 7 | **What Parents Say** (3 testimonials) | Section 7 | Quiet fade-in; if you make it a slider, a soft cross-fade between quotes |
| 8 | **FAQ** (8 Q&As, accordion) | Section 8 | Smooth accordion open and close, chevron rotates. Must be keyboard operable |
| 9 | **Contact** (form) | Section 9 | Input focus states shift border to petal pink; button hover; light inline validation feedback. Form delivery is unresolved, so use a clearly marked placeholder submit handler, not a fake endpoint. This is CTA #3 |

## Optional signature element

After the Approach section (step 3), I may ask you to add a small "have a go"
drawing canvas, echoing the idea that children express themselves through play.
Only build it when I explicitly ask. Plain canvas API, no library, works with
mouse and touch, a Clear button plus the 'C' key to clear.