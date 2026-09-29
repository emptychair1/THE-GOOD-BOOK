# THE GOOD BOOK

**The House That Remembers**

Static installable PWA. Production: `https://the-good-book.daniels-joshua100.workers.dev`

## CURRENT SAVE POINT — DO NOT DRIFT

**V150 · 55 pages · APPROVED THROUGH THE END OF CHAPTER ONE**

Protected working chain:

`Cover → Foreword → global status/folio → Void → Act One title → Act One/Chapter One transition → Chapter One`

All of that is working and explicitly approved. New book construction starts **after Chapter One**. Do not rebuild, transplant, clean up, modernize, or otherwise touch the protected chain unless Josh explicitly reopens a specific part.

The Act One title currently reads `THE VOID / STARES BACK`; **STARES only** uses the approved `SHUTTER` mechanic.

## Working method
1. Audition genuinely new reusable visual behavior in `lab/` when an audition is needed.
2. Inspect on the target device.
3. Josh explicitly approves or rejects.
4. Promote approved reusable behavior into shared runtime.
5. Choreography calls the shared capability rather than rebuilding it.

**Commit ≠ approved. Deployment ≠ approved. Audition + explicit approval = approved.**

For mechanics that are already approved, do **not** make a new lab. Use the existing shared mechanic exactly, then audition its placement/context in the book.

## Architecture
```text
index.html
  ├─ book.css
  ├─ vendor/page-flip.browser.js
  ├─ src/main.js
  ├─ content/
  ├─ house-mechanics.js
  ├─ house-mechanics-manic.js
  ├─ house-mechanics-glyphs.js
  ├─ house-mechanics-runners.js
  ├─ book.js
  ├─ choreography/
  ├─ manifest.webmanifest
  └─ sw.js
lab/                            # audition/provenance; not live authority after promotion
HOUSE-MECHANICS.md              # approved mechanics semantics + integration notes
```

Choreography owns **what, where, when**. Shared mechanics own **how it looks and moves**.

## Current mechanics vocabulary
Core: `DIAGNOSTIC`, `DISTANCE`, `FALL`, `ORGANIC`, `CHANGE`, `LOVE`, `CROSS_OUT`, `GLINT`, `M4_DIGITIZE`, `RETURN`, `HAND`, `COMPILE`, `AGENCY`, `ABSENCE`.

Dark room: `CAST`, `SHUTTER`, `PHOSPHOR`, `PALIMPSEST`, `BEAM`, `REAGENT`, `ACCUMULATE`, `REFLECTION`, `VERSO`.

Manic: `STRIKE`, `CORRECTION`, `PRESSURE`, `INTRUSION`, `OVERTYPE`, `SCRAWL`, `CERTAINTY`.

Glyph light: `LUMINOUS`, `RADIANT`, dynamic assignment, movement behavior, and moving-light `REVEAL`. API: `window.HouseGlyphs` in `house-mechanics-glyphs.js`.

Full semantics live in `HOUSE-MECHANICS.md`.

## V150 production facts
- Total reader length: **55 pages**.
- Chapter One is fully approved.
- Chapter One uses **13 wandering glyphs per page**, with established size and approved LUMINOUS/RADIANT behavior. Density is approved; do not reopen it casually.
- The page-to-page glyph seed varies so the same constellation is not repeated.
- The global `current / total` status counter is the only page-number system.
- Counter polarity is adaptive: dark on cream/white pages, cream on black pages.
- Chapter One local folios are gone.
- Void sequence works.
- Act One title works.
- Transition from Act One into Chapter One works.
- Foreword and Chapter One choreography work.

## Runtime / safety
`window.HouseBook` publishes the PageFlip runtime and dispatches `house:ready` / `house:page`. Resolve targets against the current live page rather than retaining stale PageFlip DOM references.

PageFlip remains pinned locally at `vendor/page-flip.browser.js` (`page-flip@2.0.7`). No CDN runtime dependency.

Manuscript geometry is sensitive in the installed PWA. Mechanics must not casually alter wrapping or pagination. Preserve resting typography.

Light effects generally reveal material **from darkness**. Do not make targets begin white by default unless that is part of the approved mechanic/context.

## Change discipline
- Work on `main`. Do not create branches unless Josh explicitly asks.
- Small reversible bites.
- Give every live change a visible version label.
- Approved behavior is centralized.
- Labs are provenance after promotion, not live authority.
- Verify the live integration, not merely the commit.
- Git history is the recovery path.
- Do not wrapper-stack speculative fixes.
- Do not infer that an old README/version note outranks the current approved V150 save point.

## Next construction boundary
The next content work begins **after Chapter One**. Preserve V150 as the known-good 55-page checkpoint while building forward.
