# Design Plan — The Vancouver Ledger (working nameplate)

*A broadsheet, not a website wearing a serif font.*

---

## 1. Palette

| Token | Hex | Name | Role |
|---|---|---|---|
| `--paper` | `#EBE5D6` | Newsprint Pulp | Primary page stock — warm, low-chroma tan-grey. Real groundwood newsprint is never neutral white; it yellows toward tan within days of pressing. |
| `--paper-shadow` | `#DDD6C4` | Newsprint Shade | Vignette/edge darkening, box-shadow under the masthead, the crease shadow at the fold (see §4 Signature). Never used as a flat fill on its own. |
| `--ink` | `#1C1A17` | Cold-Press Black | Body/headline text. Warm near-black — offset ink sits slightly brown against pulp, never true `#000`, which would read as a screen, not a page. |
| `--ink-faded` | `#4A453D` | Second-Run Grey | Bylines, datelines, jump lines, captions, disabled/visited states. Mimics a ribbon running low on a second pass. |
| `--rule` | `#B7AE99` | Hairline Grey | Structural rules only: column dividers, table gridlines. Never decorative. |
| `--spot` | `#B23A2E` | Masthead Red | The one spot color. See justification below. |

**Spot color justification**: pre-offset two-color broadsheets ran black on the main pass and a second color — almost always a brick/oxide red, never a clean CMYK red — on a separate pass for the masthead, breaking-news flags, and market gains. That second pass was mechanically imprecise: the plates didn't always sit flush. I'm using `--spot` exactly where a real second-run color would've appeared (masthead rule, kicker tags, the Markets ticker rule, up-arrows in the stock table) and giving it a **1px red ghost offset** (a `text-shadow`/`box-shadow` duplicate nudged 0.5px down-right at low opacity) wherever it sits directly on black rules, so it reads as slightly misregistered rather than perfectly vector-aligned. That imprecision is the whole justification for spending a spot color at all — a perfectly registered red would just be "brand color."

No section gets its own paper-stock tint (I considered a blush stock for the Markets/Business page, FT-style) — it would push past "one spot color" in spirit even if the letter of the rule survives, so I dropped it.

---

## 2. Type

Three roles plus one utility face. None of these is Playfair Display, and no two are from the same superfamily or foundry story.

| Role | Face | Source | Why |
|---|---|---|---|
| **Masthead** | **Fraunces** (Black, `opsz` cranked to max, plus its soft/wonky italic for the dateline slash) | Google Fonts, self-hosted subset (Latin only) | A high-contrast display serif with real ink-trap detailing at large sizes — reads as a nameplate cut for print, not a body font blown up. Underused relative to the Didone/Playfair default. |
| **Headline** | **Besley** (SemiBold/Bold/ExtraBold) | Google Fonts, self-hosted subset | A slab serif with enough weight to hold a one-column brief headline and enough condensed range to hold a six-column lead headline without the browser making the line-break decisions. Deliberately a different serif *family character* from Fraunces — slab vs. Didone — so masthead and headline don't read as the same voice at different sizes. |
| **Body** | **Newsreader** (400/500, italic for decks and pull quotes, `opsz` axis on) | Google Fonts, self-hosted subset | Built specifically for long-form justified reading with real optical sizing — it gets heavier and more open at small sizes instead of just scaling down, which is what makes justified 11px column text stay readable instead of turning to soup. |
| **Utility** (captions, bylines, datelines, classifieds, the Markets ticker/table) | **IBM Plex Mono** (400/500) | Google Fonts, self-hosted subset | Tabular lining figures for the stock table and ticker (numbers must align in a monospace grid, not proportionally), and doubles as the small-caps caption face. Gives the data pages a wire-service/typewriter register distinct from editorial copy. |

**Multiscript caveat**: the masthead's dateline strip cycles the byline name through Devanagari and Gurmukhi (see Signature, §4), carried over from an existing detail on the live site. None of the four faces above cover those scripts. I'll self-host a minimal **Noto Sans Devanagari** / **Noto Sans Gurmukhi** subset (just the glyphs those two strings need — under 5KB each) as fallback for that one element only, not as a general utility face.

All faces load as self-hosted `woff2`, subsetted to the glyphs actually used (Latin + punctuation + the two script subsets above), `font-display: swap`, with system-serif/system-mono fallback stacks defined for every role so there's no invisible-text flash and no layout still breaks if a font fails to load.

---

## 3. Grid

| | Desktop ≥1024px | Tablet 700–1023px | Mobile <700px |
|---|---|---|---|
| Columns | **6** | **3** | **1** |
| Column gutter | 18px | 16px | — |
| Outer margin | 40px | 28px | 20px |
| Page max-width | 1320px | fluid | fluid |
| Baseline unit | 8px | 8px | 8px |
| Body line-height | 24px (3×8) | 24px | 26px (type gets to breathe, not shrink) |

**Rule weights** (the actual variation the brief calls for, not one hairline everywhere):
- Column dividers: **1px** hairline, `--rule`
- Masthead bottom rule: **double rule** — 4px solid `--ink`, 2px gap, 1px hairline `--ink`
- Section divider (between e.g. Front Page and Business): **3px** solid `--ink` with a 1px hairline sitting 4px above it
- Pull-quote bracket rule: **2px**, `--spot`
- Markets ticker rule: **2px dashed**, `--spot`, running the full width under the stock table like ticker tape

Tablet folds to 3 columns (literally: "half the broadsheet," as if the page were folded in from both edges). Mobile is not a shrunk 6-column grid — it's a real single-column redesign: type scales up, not down, and the masthead nameplate stays full-width and legible rather than getting cropped.

---

## 4. Signature: The Fold

A real broadsheet is a physical object folded in half — "above the fold" is a spatial fact before it's an idiom. I'm making that literal: a persistent horizontal crease — a soft `--paper-shadow` gradient band with a 1px hard edge, roughly 2px tall, sitting at a fixed point in the front page (positioned so the lead headline + deck land above it, business/markets/classifieds land below) — runs the full width of the page. It's not decorative chrome; it's the thing that makes "above the fold" mean something again, and it's where the lead story (who I am, what I do) has to live, which forces the content hierarchy rather than just illustrating it.

The one orchestrated motion moment: on first load, the page **unfolds** — it starts compressed to a horizontal seam at the fold line and opens upward and downward over ~600ms with a slight paper-settle easing, revealing masthead-down and lead-story-up simultaneously. `prefers-reduced-motion` collapses this to a plain opacity fade, no transform. Every other interaction on the page (hover states, the Markets ticker scroll) stays still — no scattered micro-animations competing with this one moment.

---

## Critique against the generic-AI-newspaper warning

> The generic AI version is: cream `#F4F1EA`, Playfair Display, hairline borders, three CSS columns, done.

Checked against that, point by point:

- **Palette**: not cream-and-white — newsprint pulp tone with a justified, historically-grounded spot color, not "pick a nice red."
- **Type**: not Playfair. Three genuinely different serif/slab characters plus a monospace utility face, each chosen for a functional reason (optical sizing for justified body, tabular figures for the stock table), not just "looks old."
- **Columns**: not three flat CSS columns — a numeric 6/3/1 grid with five distinct rule weights doing hierarchy work, plus a physical fold.
- **Hairline borders everywhere**: rejected — rules vary from 1px hairlines to a 4px double rule, and two of them are the spot color.

**What I changed after running this critique against my first draft:**
1. Originally reached for Playfair Display for the masthead out of habit — replaced with Fraunces, and made sure the headline face (Besley) is a *different* serif character entirely rather than two cuts of the same story.
2. Originally planned flat `column-count: 3` CSS columns for the front page — replaced with an explicit numeric grid (6/3/1) so gutters, rules, and the fold are all placed deliberately instead of left to browser reflow.
3. Added the rule-weight table explicitly (§3) after noticing my first pass used one hairline value everywhere — that's exactly the "hairline borders, done" failure mode called out in the warning.
4. Added kickers (small-caps, utility face, above every headline), bylines + datelines on every article, pull quotes that break the column via negative margins, and jump lines ("Continued on A4 →" anchor-linking to the relevant section) as structural requirements for Phase 3, not optional garnish — none of these existed in my first pass.
5. Committed to `text-wrap: balance` plus manual `<wbr>` hints at natural phrase breaks for headlines, so line breaks land where a copy editor would put them across breakpoints, instead of either hard-coding breaks (which fights responsive reflow) or leaving it entirely to the browser.
6. Dropped a second paper-stock tint I'd considered for the Markets page — decided it violated the spirit of "one spot color maximum" even though it's technically a background, not an ink.

Every fact this design will carry is already inventoried in `content-inventory.md` — nothing above is proposing new content, only how the existing content gets dressed.

**Waiting on your go-ahead before Phase 2 (section mapping) and Phase 3 (build).**
