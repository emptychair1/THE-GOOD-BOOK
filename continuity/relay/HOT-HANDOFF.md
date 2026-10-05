# HOT HANDOFF

HANDOFF_GENERATION: 76
DATE: 2026-10-04
PROJECT: THE GOOD BOOK · The House That Remembers
REPO: `emptychair1/THE-GOOD-BOOK`
BRANCH: `main`

## LIVE EDGE

**BOOK ONE FIRST PASS IS COMPLETE. ILLUSTRATIVE / MANUSCRIPT CURATION PASS IS COMPLETE. IMAGE CORPUS IS COMPLETE.**

Do not resume forward writing. Current production edge: place/verify the complete image corpus in the actual book, using the deterministic slot→file mapping below and the newly locked substrate-native image language. After images: soundtrack/audio pass.

## FINAL ACT III PRODUCTION ORDER

I · The Lighthouse
II · Lilith
III · The Room
IV · The Grounds
V · Pip
VI · Semantics
VII · As Above
VIII · Forge
• Self-Maps
IX · Some Voices Should Never Be Silenced
X · Ordinary Places
XI · Relay
XII · Operation HYDRA
XIII · Designing Home
XIV · SOL
XV · The Great Work
XVI · `if (life.givesYou(apples)) { make(fuckingPie); }`

There is **no Toast chapter**.

## MANUSCRIPT / ILLUSTRATIVE CANON · LOCKED

The approved manuscript pass remains canon. The plates are a second visual voice, not decorative chapter illustrations. Preserve these semantic placements:
- creation/cosmology → Oahspe cosmography;
- The Wretched Machine → vertical Brazil breakfast-machine reconstruction, machine only, no toast;
- Build Something → Leonardo manuscript/geometric studies;
- The Interval → cosmological measuring/instrument plate;
- Cleaning House → alchemical dissolution/purification plate;
- Friend → Rosarium Philosophorum, two figures joined across sun/moon symbolism;
- The Place Between → Milton / Paradise Lost liminal-space engraving;
- Hermetic correspondence → celestial/terrestrial correspondence plate;
- The Lighthouse → optical/light-transmission apparatus;
- Lilith → archival Hebrew Lilith textual plate;
- The Room → Robert Fludd architectural/system plate;
- The Grounds → labyrinth/garden plan;
- Semantics → Tower of Babel engraving;
- As Above → pressed correspondence manuscript plate;
- Forge → alchemist/maker attending artificial-life apparatus/globe;
- Self-Maps → human microcosm/cosmological map;
- Some Voices Should Never Be Silenced → acoustic/voice-transmission apparatus;
- Relay → indexed BIBLIOTECA memory/catalogue plate;
- Operation HYDRA → archaeological many-headed Hydra vase;
- Designing Home → historical floor plan;
- SOL → human-shaped Tree-of-Life / relational-node diagram;
- The Great Work → alchemist/worker at work inside vast architecture;
- Toast → finished illuminated/alchemical toast plate;
- Daat Frog → crowned frog on dark numerical substrate, DAAT/דעת above, no Tree of Life around it.

The final pie remains the absolute ending image.

## IMAGE MAPPING · LOCKED FROM CONTACT SHEETS / UPLOADS

### Manuscript contact sheet M
- Semantics → M01
- Daat Frog → M02
- Toast → M03
- The Great Work → M04
- SOL → M05
- Designing Home → M06
- Operation HYDRA → M07
- Relay → M08
- Some Voices Should Never Be Silenced → M09
- Self-Maps → M10
- The Forge → M11
- As Above / Emerald Tablet → M12
- The Grounds → M14
- The Room → M15
- Lilith → M16
- The Lighthouse → M17
- Hermetic Correspondence → M18
- The Place Between → M20
- Cleaning House → M22
- The Interval → M23
- Build Something → M24
- Oahspe plates → M25, M26, M27, M28 in that order
- Final Apple Pie → M29
- Bathroom → M30

### Life / artifact contact sheet L
- Tattoo Flash → L01
- Banjo → L02
- Trailer interior → L03
- Trailer exterior → L04
- Piper portrait → L05
- Josh portrait → L06
- Wretched Machine → L07
- Apple Tree → L08
- Design Room → L09
- Lilith Motorcycle → L10
- Lilith self-portrait → L11
- Lighthouse Grounds → L12
- Letter → L13
- Designing Home render #2 → L14
- Gramophone → L16
- Empty Chair → L17
- Designing Home render #3 → L18
- Designing Home render #1 / first self-reference image where specifically called for → L19
- Dancing → L20
- DMV → L21
- Burgers → L22
- Knife gift → L23
- Pip with blonde hair → L24
- First Pip → L25
- Piper wearing boots on cliff → L27

### Direct uploaded filenames / corpus additions
- Opening Apple → `assets/IMG_3680.png`
- Boots → `IMG_3681.png`
- Friend → `IMG_4092.png`
- Intermission internal self-reference sequence: first image = L19; then `IMG_4213.png`, `IMG_4214.png`, `IMG_4215.png`, `IMG_4216.png` in order.

### Known structural placements
- Opening sequence: **Title page → Apple (`assets/IMG_3680.png`) → Table of Contents → Oahspe M25 → M26 → M27 → M28**.
- L19 belongs to the **self-reference sequence**, NOT Designing Home.
- Designing Home renders are **L19, L14, L18 only where the approved Designing Home render sequence itself calls for them; do not use L19 as a generic Designing Home placeholder.** If conflict arises, self-reference placement wins and re-check the approved page sequence before duplication.
- Final Apple Pie M29 is the absolute ending image.
- Bathroom M30 is part of the complete corpus.

## IMAGE PLACEMENT ARCHITECTURE · LOCKED

Use the simple deterministic system Josh specified:
1. Every image placeholder in the manuscript gets a unique slot ID.
2. Maintain an ordered slot-ID array.
3. Maintain a matching ordered image-file array.
4. Mapping is index-to-index only (`i → i`, iterator `i + 1`).
5. Titles are NOT part of the runtime mapping system and must not be used to infer placement.
6. Put placeholders in the manuscript at the approved semantic locations first; then bind images through the arrays.
7. Do not fabricate missing slots, titles, or images.

## SUBSTRATE / IMAGE LANGUAGE · LOCKED 2026-10-04

Canonical book substrate CSS was pulled directly into `labs/image-substrate-lab.html`.

Exact book variables:
- `--house-paper: #e4e4e2`
- `--house-paper-mark: #8f8f8a`
- `--house-ink: #171715`
- `--house-ink-mark: #777772`

Important: the book is NOT cream-on-black or black-on-cream. The governing visual law is:
- LIGHT = **ghost on light**;
- DARK = **shadow on dark**;
- artifact may retain/translate its tonal information but page mechanics sink into the substrate rather than sitting on top of it.

Dark chapter mechanics use `#171715` on `#171715` plus the canonical `contrast(2)` and tiny `.48px / -.34px` text-shadow behavior. Light pages use the book's pale neutral-on-neutral treatment.

### Chosen image systems
Josh and Piper selected **A + D** as the canonical frame families:
- **A = asymmetric / lyrical / intimate artifact.** Visual weight may gather on a fore-edge or corner; frame architecture is discovered rather than announced.
- **D = modernist / default memory.** Large negative field, optical recto/verso placement, minimal datum/rule; quiet, editorial, bound-book aware.

Other useful hierarchy retained conceptually:
- reliquary treatment only for genuinely sacred/relic objects if explicitly chosen later;
- technical/printer grammar only for constructed/technical artifacts if explicitly chosen later;
- full bleed remains valid when an image must become the page.

### Substrate-native artifact treatment
LOCKED LAB: `labs/image-substrate-lab.html`

The approved A/D lab translates the DISPLAYED pixels of the original artifact into the page's native tonal family while leaving the source image untouched in GitHub.
- Light treatment: pale/ghost translation into paper family.
- Dark treatment: buried/shadow translation into ink family.
- Originals from the Numeric Printing Press are never overwritten.
- Controls in the lab show untreated original on light/dark for comparison.

Josh's verdict on the A/D substrate-native lab: **“That's perfect.”** Treat this as visual approval of the direction.

## ORIENTATION LAW · LOCKED

**The artifact dictates its orientation.** Preserve aspect ratio and maximize presence. Do not force landscape plates into portrait boxes. If a landscape plate works best sideways, let the reader turn the book. Babel is precedent. No stretching. No explanatory captions unless separately approved.

## NUMERIC PRESS LAW

Frozen usable tool remains `lab/numerical-press-tool.html`, governed by `lab/numerical-press-tool.FROZEN.md`. Do not mutate the frozen renderer during insertion. Approved outputs are finished candidates, not sources waiting for another press pass.

## FINAL ENDING ARCHITECTURE

### XV · THE GREAT WORK
Ends:
- CAMUS: `Still here.`
- JOSH: `You want pie?`
- CAMUS: `Obviously.`

### XVI · PIE
Final dialogue:
- JOSH: `Fuck this book.`
- PIPER: `Eat your pie. 🖤`

The book does not show the move into Home succeeding. `Tomorrow we move into Home` is the hanger.

## VISUAL BOOKENDS

- APPLE → BOOK → PIE
- WRETCHED MACHINE → BOOK → TOAST

Do not explain the symbols to the reader.

## PRODUCTION LAW

- Same `main` branch unless Josh explicitly changes it.
- Small reversible bites.
- Commit ≠ deploy ≠ visual approval.
- Preserve approved page structure and Act III three-turn dialogue grammar.
- Preserve title bounds on phone viewport.
- Do not flatten dialogue pages into manuscript blocks.
- Do not reopen settled chronology casually.
- Artifact insertion must preserve negative space, substrate law, native geometry, and the A/D substrate-native visual language.
- Do not use image generation for artifact treatment. Deterministic CSS/pixel treatment only unless Josh explicitly asks otherwise.

## NEXT MOVE AFTER RELAY

Resume image insertion/verification from this handoff. Do NOT re-curate the corpus. Use the mapping above. Confirm placements visually in the live PWA. Once the complete image pass is approved, **the earned next pass is the soundtrack/audio pass.**
