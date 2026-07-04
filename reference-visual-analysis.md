# Reference Site Analysis — Play Therapy Marketing Websites

Analysis of three client-provided reference sites for the marketing website project.

1. [therapy-at-play.com](https://www.therapy-at-play.com/) — client's favourite visual language
2. [bigbearstreehouse.com.au](https://www.bigbearstreehouse.com.au/)
3. [behivetherapy.com](https://www.behivetherapy.com/)

> **Method note:** This analysis comes from each site's actual fetched HTML/CSS and copy, so copy quotes, palette values, fonts, and animation markers are factual. The *feel in motion* (animation timing, parallax subtlety) is inferred from code, not observed in a rendered browser.

---

## 1. Therapy at Play (therapy-at-play.com)

**Platform:** Webflow, agency-built (footer credit: "Site by Studio-Barrie"). Extras: Google Fonts loader, GA4, and **sketch.js** (soulwire's creative-coding library) powering an interactive drawing canvas on the homepage. This is the only one of the three that's a bespoke design system rather than a themed template.

### Section-by-section homepage copy inventory

1. **Hero** — H1: *"A safe space for children to explore their inner world."* Body: short paragraph — *"At Therapy at Play, we use play therapy to support children with a variety of needs, whether they be social, emotional, behavioural or neurological."* CTA: **"Enquire Now"**. Tone: warm, reassuring, parent-directed.
2. **Intro statement** — no heading; long paragraph, mildly clinical-warm: *"Children communicate through the natural language of play, and use it as a vehicle to overcome trauma, emotional hardships, and other challenges associated with childhood."*
3. **"Our Services"** — short intro paragraph + 7 service cards (Child Centred Play Therapy, AutPlay Therapy, Learn to Play, Preppin' Preppies, Lego Play, Filial Therapy, Parenting Support), each one line, e.g. *"A non-directive approach, supporting children to explore their inner world and emotions."* Card CTA: "Learn More." Tone: concise, lightly clinical (modality names), softened by playful program names ("Preppin' Preppies").
4. **"Out Reach or In Clinic"** — short paragraph: *"Outreach is a big part of what we do. We are happy to work from your child's educational setting, and in some cases your home."* CTA: "Enquire Now". Practical, accommodating tone.
5. **Founder bio — "Hi, I'm Alex"** (with "Alex" set in the display font) — subhead: *"Therapy At Play Founder & Play Therapist (Masters of Child Play Therapy)"*. Long paragraph, first-person, credential-plus-warmth: *"I am a qualified therapist, having completed a Masters of Child Play Therapy at Deakin University. Most importantly, I am passionate about working with children and their families…"* CTA: "Meet The Rest Of Our Team".
6. **"NDIS Accredited Practitioner"** — one line, functional/credential tone. CTA: "Book Now".
7. **"How we play at Therapy at play"** — 4 sub-points ("We build relationships", "We create a safe environment", "We colour outside the lines", "Whole system approach") with long-paragraph body, e.g. *"The most important focus at Therapy at Play, is the therapeutic relationship between the child and therapist."* CTA: "Enquire Now". Tone: values-led, strengths-based language.
8. **Interactive drawing box** — heading: *"Have a go at drawing with your mouse in this box!"* plus *"Press the letter 'C' to clear and start again!"* Body: *"…we allow your child to play in whatever way they want - no rules or boundaries…"* Tone: overtly playful; the site literally demonstrates its philosophy.
9. **Testimonial** — single quote: *"Alex has been pivotal in our child's development… Play Therapy has been the perfect vehicle for our family's growth." — Previous Client.*
10. **"FAQ's"** — 6 Q&As, short-to-long paragraphs, practical parent-anxiety questions (*"Do I come into the playroom with my child?"*, *"How many sessions will it take…"*). Tone: gently instructive, expectation-setting.
11. **"Book a session with Therapy at Play!"** — short paragraph + form (Name, Email, Phone, "What's the best time to call?") + address (490 High Street, Preston 3072), phone, email.

**Subpages checked:** `/about-us` (founder bio + "Meet our amazing Play Therapists" — 3 therapists with headshots and Masters credentials, "THERAPY AT PLAY MODALITIES & TRAINING", NDIS block, booking form repeat) and `/contact` ("Book a session with therapy at play" + same form/details + "Out Reach or In Clinic" repeat). Nav also links 7 individual service pages.

### Visual approach

- **Overwhelmingly illustration/SVG-led.** The homepage loads ~40 CDN images and virtually all are SVGs ("Artboard N.svg", "Asset N.svg", plus a matched set of 16 "…Icon.svg" files — a coherent custom icon system). Exactly **one photograph** on the homepage (a responsive-srcset .jpg, likely Alex's portrait); the About page adds one headshot per therapist. Photography is reserved for humans/trust; illustration carries everything else.
- Decorative full-bleed SVG backgrounds (e.g. a `.blue-hole` class with a 100vw/100vh SVG background image), circular imagery (`border-radius: 100%`/`50%` rules), and rounded cards/buttons (20px radius; one 60px).
- Layout reads as sparse, generous sections stacked in alternating pastel colour fields (`.blue-space`, `.blue-bg`, `.service-wrapper`, `.about`, `.footer` all share the pale-blue background variable).

### Colour & type impression

From `:root` in the Webflow CSS — the palette is named in the stylesheet itself:

| Variable | Value | Description |
|---|---|---|
| `--seashell` | `#fcf1eb` | warm cream/blush — the **body background** |
| `--light-steel-blue` | `#cdddfd` | soft pastel periwinkle blue (section backgrounds) |
| `--light-steel-blue-2` | `#b7ceff` | second pastel blue (footer, service wrapper) |
| `--plum` | `#f0b2f7` | candy lilac-pink (default **button** colour) |
| `--orange-red` | `#fd4d03` | vivid tangerine (hover state, accent headings) |
| `--sea-green` | `#019042` | kelly green (accent headings) |
| `--black` | `#171717` / `#2e2e2e` / `#333` | near-black/charcoal text |

**Feel:** warm cream base + pastel blue/lilac fields + punchy orange/green accents — kindergarten-bright but pastel-tempered, not clinical.

**Type pairing:** body/UI is **DM Sans** (300–700, Google Fonts) — rounded-geometric, friendly sans. Display accents use **"BaksoSapi"**, a self-hosted OTF applied via a `.bakso` class at 60px — a chunky playful hand-drawn display face used for single emphasized words inside headings ("Hi, I'm **Alex**", "How we play at **Therapy at play**"), often coloured orange/green/blue. Base body size is small (14px/20px Webflow default).

### Interaction / animation patterns

- **Webflow native interactions (IX2)**, not GSAP/AOS — no data-aos, no gsap. 26 `data-w-id` attributes; head `<style>` blocks pre-position at least one element at `translate3d(50vw,0,0)` (an off-screen slide-in on load/scroll, desktop and tablet).
- **Lottie**: `data-animation-type="lottie"` on the nav — an animated burger-menu JSON (`33460-burger-menu.json`).
- **Scroll-driven sticky effect**: `.blue-hole` is `position: sticky; top: 0; 100vh` inside a `200vh` `.zoom-in-circle` container with `overflow: hidden` — markup for a scroll-pinned circular zoom/reveal sequence. No marquees found.
- **Interactive canvas**: sketch.js drawing box ("press C to clear") — a genuinely unusual, on-brand play element.
- **Hover**: 22 `:hover` rules; buttons transition `all .4s` from plum to orange-red; nav links hover to orange-red. One `@keyframes spin` (likely form loader).

### Site structure

- **Nav:** Services (7 items: Child Centred Play Therapy, Learn To Play Therapy, AutPlay Therapy, Preppin' Preppies, Lego Play, Filial Therapy, Parenting Support — each its own page), About Us, FAQ's, Contact.
- **Primary CTA:** enquiry/booking. "Enquire Now" appears 3× on the homepage, plus "Book Now" and the embedded contact form at the bottom of homepage, About, and Contact — the same form (Name/Email/Phone/best-time-to-call) repeats site-wide.
- **Footer:** pastel-blue background; First Nations acknowledgement (Wurundjeri People of the Kulin Nation), medical disclaimer, copyright ("The Playroom Therapist" — apparently the legal/former entity name), agency credit "Site by Studio-Barrie", contact details (490 High Street Preston 3072, 0435 990 498, alex@therapy-at-play.com).

**Summary take:** a Webflow site whose design system literally encodes its therapy philosophy — pastel crayon palette with named CSS variables, a hand-drawn display font for single warm words, illustration-first with photos only for the humans, and a playable drawing canvas as the centerpiece interaction. Copy is warm-parent-facing with credentials (Masters, NDIS) woven in as trust signals rather than leading.

---

## 2. Big Bear's Treehouse (bigbearstreehouse.com.au)

**Platform:** Squarespace 7.1 (squarespace-cdn asset URLs, universal scripts, section-theme system), built by a small studio ("Website by Seed Web Design" credit in footer).

### Section-by-section homepage copy inventory

1. **Hero** — H1: *"A PLACE TO SLOW DOWN, FEEL SAFE & FIND YOUR WAY FORWARD"* (all-caps), sub: *"Trauma-Informed Counselling and Play Therapy for Children, Families and Adults"*. Short paragraph naming audiences + location ("Supporting Children, Preteens, Teens, Adults, Families and Parents in Tweed Heads…"). CTA: **"Make an Enquiry"**. Tone: warm, safety-first, zero jargon.
2. **Intro** — *"A Gentle Place to Land"*. Long paragraph: *"…a counselling and play-based therapy practice for children, adults, and families who need space to slow down, feel safe, and reconnect - sometimes without needing words."* CTA: "Book Appointment". Tone: gentle, sensory, permission-giving.
3. **Marquee strip** — scrolling text: *"Children • Teens • Adults • Families • Parents"* (Squarespace scrolling/marquee block, one line).
4. **Approach** — *"How the Treehouse Works"*. Long paragraph ("…a calm, thoughtful approach to counselling and play-based therapy."). CTA: "Find Out More".
5. **Tagline band** — one line: *"A treehouse is a sanctuary for healing & growth — safe, elevated & filled with the spirit of curiosity & comfort."* Poetic brand-metaphor moment.
6. **Services overview** — *"How Big Bear's Treehouse Can Help"*. Long paragraph + bulleted reasons families seek support; practical NDIS note ("self-managed and plan-managed"). Tone shifts slightly pragmatic here.
7. **5 service cards** — *"Play Therapy for Children"*, *"Counselling for Adults"*, *"Family & Caregiver Therapy"*, *"Outreach & Community-Based Sessions"*, *"Foster & Kinship Carer Support"*. Each a short paragraph + "Discover More". Representative: *"My work with adults is grounded in safety, respect, and collaboration."* Notably first-person voice, not clinical third-person.
8. **Practitioner bio** — *"Hi there, I'm Julie Anderson."* Long paragraph; the only credential-forward moment ("registered Counsellor and Play Therapist with training in trauma-informed child and family therapy"). CTA: "Get to Know Julie". Tone: personal, conversational.
9. **Therapy dog** — *"Meet Big Bear's Therapy Dog"* — *"Izzy is our therapy dog in training and a gentle presence…"* Short paragraph, CTA "Find Out More About Izzy". Playful/endearing.
10. **Blog** — *"Read Our Latest Blogs"*, 3 post cards (e.g. "When Helping Too Much Doesn't Actually Help").
11. **FAQs** — *"Your Questions Answered"*, 5 accordion items ("What happens in a first appointment?", "Do I need a referral?"…), CTA "FAQs".
12. **Final CTA** — *"Slow down & heal with Big Bear"* + one line ("Get in touch for more information or to arrange an appointment"), CTA "Contact Us".

**Overall tone:** consistently warm/soft/trauma-informed, first-person practitioner voice, short paragraphs, almost no credential-stacking. Recurring vocabulary: *slow down, safe, gentle, land, without needing words*.

**Subpages:** About = origin story ("Bear wasn't a symbol or a character. He was steady, calm, and deeply attuned") + values tagline *"Big Love • Safe Space • Gentle Growth"*; service page = educational-but-soft ("Play therapy is a gentle, evidence-based way of supporting children… when words are hard to find"); Contact includes crisis lines (Lifeline, Kids Helpline) and expectation-setting ("responded to within 1–2 business days").

### Visual approach

- **Photography-led, sparse imagery:** only 14 `<img>` tags on the whole homepage. Assets are clinic/branding photos (`BigBearTreeHouse-27.jpg`, `BigBearTreeHouse-51.jpg`), Izzy the dog (`Izzy.jpg`), a large portrait (4000×6000, presumably Julie), a webp of an "open window from BBT website", plus **one AI-generated image** (filename literally `ChatGPT+Image May 10, 2026….png`) — so mostly real photos with at least one illustration-style AI image. No SVG illustration system, no blob shapes.
- **Layout:** copy-heavy, colour-block-driven rather than image-dense. Sections use **inset backgrounds with 10px rounded corners** (custom CSS: `.page-section.background-width--inset .section-background{border-radius:10px}`) — i.e. rounded colour "cards" floating on the page rather than full-bleed. Images use Squarespace "fluid" layout blocks, positioned center/left within sections.
- The playfulness comes mainly from colour blocking, the marquee strip, and micro-details (custom cursor, house-icon menu) rather than from illustration.

### Colour & type impression

Palette (from theme HSL variables in site.css — a bright, crayon-warm kids palette on white):

| Role | Value | Description |
|---|---|---|
| Accent | hsl(32, 95%, 61%) ≈ `#faa43f` | vivid marigold/tangerine orange (a bolder `#fd8d09` also appears once, likely logo/icon) |
| Dark accent | hsl(91, 54%, 49%) ≈ `#7bc03a` | fresh leaf/apple green — default heading colour on white sections (a signature move) |
| Light accent | hsl(340, 60%, 57%) ≈ `#d3517d` | raspberry/watermelon pink — heading colour in "light-bold" sections |
| Section bgs | white; hsl(40,100%,75%) ≈ `#ffd580`; hsl(39,94%,65%) ≈ `#fbbd50`; leaf green @ 78% opacity; hsl(291,50%,66%) ≈ `#c77fd4` | pale golden apricot, golden orange, green, lilac/orchid purple (with white text, used twice) |
| (Unused on home) | ≈ `#fcd44e` | sunny yellow theme exists in palette but not on homepage |
| Text | black | plain black |

**Feel:** warm sherbet brights — marigold, apricot, leaf green, raspberry, lilac — on white; more "cheerful primary-school" than the muted-sage pastel look common in therapy sites.

**Type:** **Poppins only** (Google Fonts, weights 300/400/500/700 + italics) for headings, body, and meta alike — confirmed by `--heading-font-font-family:"Poppins"` etc. A single geometric-rounded sans; character comes from all-caps hero headings, weight contrast, and colour rather than a display/serif pairing. No serif anywhere.

### Interaction / animation patterns

- **Global scroll-reveal animations enabled:** body classes `animations-enabled`, `tweak-global-animations-animation-type-fade`, `-style-fade`, `-curve-ease`, `complexity-level-detailed`; `data-animation-role` on 24 header elements, 16 images, 13 buttons, 5 content blocks → fade-in-on-scroll site-wide (Squarespace native, not GSAP/AOS).
- **Marquee:** Squarespace `website.components.scrolling` block scrolling "Children • Teens • Adults • Families • Parents" as SVG textPath.
- **Custom micro-interactions** (from appended custom CSS): a **custom cursor** — a black dot SVG replaces the pointer site-wide; **social icons flip horizontally on hover** (`scaleX(-1)` with 0.5s ease); **mobile hamburger replaced with a little house icon** PNG (close state = custom close icon); pill-shaped buttons (`primary-button-shape-pill`); rounded cookie banner.
- `parallax.js` is loaded in the Squarespace bundle, but no `"parallax":true` section flags were found — cannot confirm parallax is actually active anywhere.

### Site structure

- **Nav:** Home · What We Do (6 service children) · About Us (About / Meet Julie / Meet Izzy) · The Treehouse Library (~10 resource categories: grief, neurodiversity, body safety, parent-carer resources, safety & trauma healing…) · Getting Started (FAQs, Fees, Blog, Contact) · **Book Appointment** (header CTA, bordered pill button).
- **Primary CTA:** contact/enquiry — `/contact` is linked **10 times** on the homepage alone, under rotating labels ("Make an Enquiry", "Book Appointment", "Contact Us", "Submit Enquiry"). Secondary CTAs: "Discover More" on every service card, "Find Out More", "Get to Know Julie".
- **Footer:** two link columns (Explore: About/Julie/Izzy/Blog/Fees/FAQs; Services: all 6); clinic address (Shop 10, 2–8 Blundell Boulevard, Tweed Heads NSW 2486) + outreach area (Northern NSW & SE QLD) + hours (Mon–Thu 8am–5pm); email hello@bigbearstreehouse.com, phone 0407 012 913; Instagram + Facebook; a **Bundjalung country Acknowledgement of Country**; legal links (Privacy, Terms, Disclaimer, Social Media Policy) and designer credit.
- Small inconsistency observed: footer says hours 8am–5pm, contact page says 10am–5pm.

---

## 3. BeHive Therapy (behivetherapy.com)

**Platform:** Squarespace 7.1 (Fluid Engine) — 214+ "squarespace" markers, sqspcdn component bundles, versioned-site-css.

### Section-by-section homepage copy inventory

1. **Hero / Welcome** — Heading (H2): *"BeHive. A place of fun, empowerment, and bee-ing yourself."* Body: long paragraph block (3 paragraphs). Tone: warm, playful, mission-driven, heavy on bee/hive wordplay. Verbatim:
   - *"BeHive is a private play therapy practice with one simple goal: Empowering every child to spread their wings and soar to new heights."*
   - *"Our hive is a space where children can play to express themselves, explore emotions, and tackle life's challenges in a safe and encouraging environment."*
   - *"Of course, every bee is unique, which is why we offer a truly customized and client-centered approach…build a buzzing support system that allows kids to thrive."*
   - CTA: button "Join Us" → /contact-us
2. **Our Services** (eyebrow label "Our Services" in orange `#FF9A60`) — Heading (H2, orange `#E85400`, bold): *"At BeHive, treatment feels like play, not work."* Followed by 4 service cards, each H4 + one short paragraph. Tone: encouraging, benefit-led, light clinical vocabulary wrapped in playfulness:
   - **"Play Therapy"** — *"…explore challenges, build emotional awareness, and develop coping skills, all while doing what they do best: playing!"*
   - **"Play Groups"** — *"For our younger bees (ages 2-4), play groups are an excellent way to learn social, emotional, and play skills…while also making new friends!"*
   - **"School Services"** — *"By collaborating with local educators…giving your child the tools to succeed in one of their most familiar environments."*
   - **"Social Skills Support"** — *"All social skills sessions are uniquely tailored to the age, interests, and goals of the child."*
   - CTA: "Explore Our Services" → /our-services
3. **Meet Our Founder** — Heading (H2): *"Hi, I'm Sammi. Nice to meet you!"* (eyebrow "Meet Our Founder"). Body: short paragraph, first person, warm + credentialed in one breath: *"I am a New York State Licensed Clinical Social Worker who is passionate about empowering kids to reach their potential. Above all, I practice with empathy, warmth, a sense of humor, and of course, a playful presence."* / *"I'm so excited to work with you!"* CTA: "More About Sammi" → /about-us#founders-experience
4. **Testimonials** — no section heading; 4 parent quotes set as large H2s with attribution lines like "Deb (parent of 5 year old)", "Allison (parent of 7 year olds)", "Carly". Tone: emotional, trust-building. E.g. *"She brought a sense of confidence, warmth and positivity each day. She was also dependable and trustworthy."*
5. **Social feed** — Heading (H2): *"Follow us on social @behivetherapy"* — Instagram gallery (10+ lazy-loaded image-asset.jpeg thumbnails). Link: "Instagram".
6. **Closing CTA band** — Heading (H2): *"Bee a part of our hive."* — one line, appears as the pre-footer band on every fetched page.

**Subpages:**
- **/about-us:** sections "About Us" ("When we work together, awesome things can happen." / "The BeHive philosophy is based on collaboration and teamwork."), "Our Approach" ("A comprehensive approach to child therapy."), "Who we treat" ("BeHive Therapy proudly empowers children aged 2-10 across the NYC area"), "What we treat" ("From challenges to triumphs." + bulleted list of 14 conditions), Founder's experience ("Nurturing every child's unique journey." — the credential-heavy section: "Prior to BeHive, Sammi spent over a decade working with children"), and a 6-question FAQ (accordion) covering intake/scheduling/location. Longest, most informational page.
- **/our-services:** hero "A place where kids can just be kids." then three service families with subsections — Individual Therapy (Play Therapy; 1:1 Social Skills & Executive Functioning Support; Facilitated Playdates and Dyads; School-Based Services) ~550 words; Groups (Play Groups ages 2-4; Social Groups ages 4+; "BEE Ready for Camp" ages 3-4) ~450 words; School Partnerships ~350 words. No pricing anywhere. No in-section CTAs.
- **/contact-us:** heading "Contact Us" / H2 "Let's Connect!" plus a Squarespace form (First Name, Last Name, Email, Phone, Message). No phone number, email address, or street address published anywhere fetched.

**Overall tone:** warm, playful, parent-directed, bee-pun-saturated ("bee-ing yourself", "younger bees", "Bee a part of our hive", "BEE Ready for Camp"), with credentials (LCSW, NY State) woven in lightly rather than leading. Not clinical; no insurance/pricing/modality-jargon on the homepage.

### Visual approach

- **Photography-led, not illustration.** Hero photo (`hero-home.jpg`), a designed graphic (`Artboard+2.jpg`), two Adobe Stock photos (`AdobeStock_247493031.jpeg`, `AdobeStock_237330844.jpeg`), candid founder/session photos (`P1090184.JPG`), and an Instagram thumbnail grid. Only 6 inline SVGs, and those are UI chrome (logo/cart/icons) — no illustration system or blob shapes detected in markup.
- Layout is Squarespace 7.1 Fluid Engine (CSS grid, `grid-template-rows: repeat(10,…)` per section) — moderately sparse, colour-blocked sections rather than dense content. Section themes alternate: `bright`, `dark`, `dark-bold`, `light-bold`, `white-bold` — i.e., alternating light/dark colour bands down the page.
- Custom mobile treatment: a media query swaps in a dedicated `Mobile-Homepage-2.png` background for the hero block and hides the desktop image — hand-tuned responsive hero.
- Alt text is nearly all empty (14 of 16 `alt=""`); only the logo has `alt="BeHive"`.
- Exact cropping/organic-shape treatment cannot be determined from HTML alone.

### Colour & type impression

Theme palette from `site.css` root variables (Squarespace colour theme):

| Role | Value | Description |
|---|---|---|
| Light accent | hsl(56.47, 100%, 93.33%) ≈ `#fffbdd` | pale honey-cream yellow — the signature "hive" background tint (`#fffddd` also forced as mobile menu background) |
| Accent | hsl(197.94, 100%, 80.98%) ≈ `#9edfff` | light sky blue |
| Dark accent | hsl(201.48, 100%, 34.51%) ≈ `#0074b0` | deep cerulean blue |
| Black | hsl(240, 4%, 9.8%) ≈ `#18181a` | near-black charcoal text (plus pure white) |
| Custom inline | `#FF9A60` | soft peach-orange — eyebrow/section labels |
| Custom inline | `#E85400` | burnt honey-orange — key section headings |

**Feel:** sunny honey-yellow + sky blue + warm orange accents on charcoal — cheerful, primary-ish, kid-friendly rather than muted/earthy.

**Type:** Squarespace theme sets heading/body/meta all to **Work Sans** (Google Fonts, 400–800 + italics), but `custom.css` overrides the entire site with `body *{font-family:"Public Sans",sans-serif !important}` — so the rendered face is **Public Sans everywhere** (a clean, neutral geometric-grotesque sans). Single-family, sans-only system: no serif, no display font; hierarchy is carried by size/weight/colour, not typeface contrast. Base font size 18px; body ~0.9em.

### Interaction / animation patterns

- Native Squarespace scroll-reveal animations enabled: body classes `animations-enabled`, `animations-complexity-level-detailed`, global `animation-style-fade`, `animation-curve-ease`, with per-element `data-animation-role="header-element"` (14), `data-animation-role="image"` (7), `data-animation-role="button"` (7) → fade-in reveals on headers, images, and buttons as they enter the viewport.
- **Parallax:** `image-effect-parallax.js` (Squarespace imageFluid component) is loaded — parallax image effect on image blocks.
- **Sticky header:** `tweak-fixed-header` + `tweak-fixed-header-style-basic`, solid header style.
- No third-party animation libraries: no AOS, GSAP, Lottie, or marquee markers. Remaining `@keyframes` in site.css are stock Squarespace UI (lightbox, spinners, bounceIn/Out).

### Site structure

- **Nav:** About Us · Our Services · The Team · Contact us (styled as a button) · Cart (commerce enabled but no products surfaced on fetched pages).
- **Primary CTA:** "Contact us" — the header button, plus homepage "Join Us" also points to /contact-us; the contact page is targeted 4× from the homepage alone. Secondary CTAs: "Explore Our Services", "More About Sammi". Every page ends with the "Bee a part of our hive." band before the footer.
- **Footer:** minimal — Instagram link, Privacy Policy, "Copyright © 2024 BeHive Therapy - All Rights Reserved." No address, phone, email, hours, or insurance info in the footer.
- **Notable gaps (factual observations):** `<title>` is just "BeHive"; no published phone/email/address anywhere fetched; near-universal empty alt text; no pricing on services.

---

## What's common across all three (safe to reuse)

1. **Warm, parent-directed, jargon-light voice.** All three talk to the worried parent, not the referring clinician. Clinical modality names exist but are always wrapped in plain-language benefit copy.
2. **The first-person founder section.** "Hi, I'm Alex" / "Hi, I'm Sammi" / "Hi there, I'm Julie" — all three humanize the practice with a named, photographed founder, credentials folded *inside* a warm paragraph rather than leading. This is clearly the genre's trust pattern; use it.
3. **Photos for humans, regardless of overall visual strategy.** Even the illustration-heavy site uses real photography for the founder/team. Faces = trust; don't illustrate the people.
4. **Homepage structure is nearly identical:** emotional hero → short intro → service cards with one-line/one-paragraph blurbs → founder bio → social proof (testimonials or Instagram) → FAQ (2 of 3) → contact/enquiry CTA. Treat this as the canonical page skeleton.
5. **Single repeated conversion goal:** every CTA funnels to one enquiry form ("Enquire Now" / "Contact Us" / "Book Appointment"), repeated 3–10 times per page. No pricing, no online checkout, no multi-step funnels.
6. **Colour-blocked sections on a warm light base.** All three alternate coloured section bands down the page instead of using imagery-dense layouts. Rounded corners and pill buttons everywhere; nothing sharp or corporate.
7. **Gentle scroll-reveal animation as the baseline.** Fade/slide-in on scroll is universal; none of them are static, none are flashy.
8. **Sans-serif, rounded/geometric type.** DM Sans / Poppins / Public Sans — no serifs anywhere in the genre set.

## Where they genuinely diverge (decision points)

### 1. Illustration system vs photography — the biggest fork

Therapy at Play is built on a bespoke SVG illustration and icon system with one photo; the other two are photo-led with zero illustration. This is also the single largest cost/effort difference: a custom illustration system needs design investment up front but frees you from needing good clinic photography; photo-led is cheaper to design but lives or dies on the quality of photos the client can supply. Since Therapy at Play is the favourite visual language, ask early whether the client's budget covers custom illustration (or a well-curated illustration library).

### 2. One typeface vs a display-font accent

Big Bear's and BeHive run a single sans and get hierarchy from weight/colour. Therapy at Play adds the hand-drawn display face for single highlighted words — and that trick carries a disproportionate amount of its charm. It's cheap to replicate (one display font, used sparingly) and is probably the highest-leverage element to borrow.

### 3. Copy density and register

- **Therapy at Play:** tight, functional warmth — one-liners on cards, longer copy only for values/bio.
- **Big Bear's:** longest and most lyrical — poetic taglines, sensory language, a brand metaphor spelled out.
- **BeHive:** medium length but voice-branded — the pun motif does the personality work.

The client needs to pick a register: *punchy* (TAP), *poetic* (BBT), or *themed wordplay* (BeHive). Wordplay only works if the brand name supports it.

### 4. Palette temperature

All warm, but distinctly: TAP is pastel (cream/periwinkle/lilac with hot accents), BBT is saturated sherbet brights on white, BeHive is honey-yellow + blue. Pastel-with-punchy-accents reads slightly more "considered/premium"; full brights read more "playgroup".

### 5. Interaction ambition

- **BeHive:** template defaults only.
- **Big Bear's:** template + charming micro-details (custom cursor, house-icon menu, marquee).
- **Therapy at Play:** bespoke interactions including a scroll-pinned zoom and a playable drawing canvas.

The drawing canvas is the one idea here that *is* the brand message — if the client's positioning is play-based, one signature interactive moment is worth more than site-wide animation polish.

### 6. Practical-info transparency

Big Bear's publishes everything (address, phone, hours, fees page, crisis lines, acknowledgement of country); TAP publishes contact details and NDIS status; BeHive publishes nothing but a form. For a client site, follow Big Bear's here regardless of visual direction — it's better for local SEO and trust (both Australian sites also carry First Nations acknowledgements, which matters if the client is in Australia).

---

## Overall recommendation

The genre skeleton (structure, voice, founder section, single enquiry funnel) is settled — reuse it wholesale. The real choices are **#1 (illustration vs photography)** and **#3 (copy register)**, and both depend on the client's assets and budget more than on taste.

If you want the Therapy at Play feel on a smaller budget, the cheapest 80% is:

- pastel colour-blocked sections
- one hand-drawn display font for highlighted words
- rounded everything (cards, buttons, section insets)
- one signature playful interaction

— even over a photo-led layout.
