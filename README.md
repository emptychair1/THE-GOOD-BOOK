# THE GOOD BOOK

**The House That Remembers**

Static installable PWA. Production: `https://the-good-book.daniels-joshua100.workers.dev`

## Working method
1. Audition in `lab/`.
2. Inspect on target device.
3. Josh explicitly approves/rejects.
4. Promote approved reusable behavior into shared runtime.
5. Choreography calls capability rather than rebuilding it.

**Commit ≠ approved. Deployment ≠ approved. Audition + explicit approval = approved.**

## Architecture
```text
index.html
  ├─ book.css
  ├─ vendor/page-flip.browser.js
  ├─ src/main.js
  ├─ content/
  ├─ house-mechanics.js
  ├─ house-mechanics-manic.js
  ├─ house-mechanics-glyphs.js   # approved dynamic glyph light/reveal capability
  ├─ house-mechanics-runners.js
  ├─ book.js
  ├─ choreography/
  ├─ manifest.webmanifest
  └─ sw.js
lab/                            # audition/provenance only after promotion
HOUSE-MECHANICS.md              # canonical approval/semantics record
```

Choreography owns **what, where, when**. Shared mechanics own **how it looks and moves**. Never privately reimplement an approved mechanic in page code.

## Current approved mechanics
Core: `DIAGNOSTIC`, `DISTANCE`, `FALL`, `ORGANIC`, `CHANGE`, `LOVE`, `CROSS_OUT`, `GLINT`, `M4_DIGITIZE`, `RETURN`, `HAND`, `COMPILE`, `AGENCY`, `ABSENCE`.

Dark room: `CAST`, `SHUTTER`, `PHOSPHOR`, `PALIMPSEST`, `BEAM`, `REAGENT`, `ACCUMULATE`, `REFLECTION`, `VERSO`. `RELIEF` rejected.

Manic: `STRIKE`, `CORRECTION`, `PRESSURE`, `INTRUSION`, `OVERTYPE`, `SCRAWL`, `CERTAINTY`. `MARGIN` and `RUNON` rejected.

Glyph light, approved 2026-09-29: `LUMINOUS`, `RADIANT`, random/dynamic assignment, and moving-light `REVEAL`. `WHISPER` rejected. Lab symbols were placeholders; the runtime capability applies to the book's actual glyph set. API lives at `window.HouseGlyphs` in `house-mechanics-glyphs.js`.

Fourth-wall smoke: Whisper Audition 6 is creatively approved at 3.5% opacity as a persistent Josh-page candidate. It is **not yet production-proven inside the live PageFlip reader**.

Full semantics and provenance: `HOUSE-MECHANICS.md`.

## Runtime / safety
`window.HouseBook` publishes the PageFlip runtime and dispatches `house:ready` / `house:page`. Resolve targets against the current live page rather than retaining stale PageFlip DOM references.

PageFlip remains pinned locally at `vendor/page-flip.browser.js` (`page-flip@2.0.7`). No CDN runtime dependency.

Manuscript geometry is sensitive in the installed PWA. Mechanics must not casually alter wrapping/pagination. Preserve resting typography.

## Foreword checkpoint
`THE GOOD BOOK · V14 · CANONICAL FOREWORD` remains closed unless Josh explicitly reopens it.

## Current production baseline
Production reader currently identifies itself as **V85 · PAGE TURN GUARD FIX**. Do not confuse mechanics-library promotion with live integration. The new glyph capability is reusable runtime code but is not wired into chapter choreography merely by existing in the repository.

## Assets / offline
When a new runtime file becomes part of the live boot path, add it to the service-worker shell and bump the cache name/version deliberately. Do not change the live boot path simply to document or preserve an approved capability.

## Change discipline
- Same `main` unless Josh explicitly asks otherwise.
- Small reversible bites.
- Approved behavior is centralized.
- Labs become provenance after promotion.
- Commit/deploy does not equal approval.
- Verify live integration separately from isolated approval.
- Git history is the recovery path; do not wrapper-stack speculative fixes.
