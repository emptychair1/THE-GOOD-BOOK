# THE GOOD BOOK

**The House That Remembers**

A self-contained, static, installable PWA for the book. The production reader is intentionally small: authored HTML content, a shared mechanics library, PageFlip, page-specific choreography/controllers, local assets, and a service worker. There is no application build step and no runtime package-manager dependency.

Production: `https://the-good-book.daniels-joshua100.workers.dev`

## Working method

The book is built in small, reversible bites:

1. Build/audition a mechanic or composition in `lab/`.
2. Deploy and inspect it on the real target device.
3. Josh explicitly approves or rejects it.
4. Approved reusable behavior is promoted into `house-mechanics.js`.
5. Choreography calls the library rather than rebuilding the effect locally.

**Commit ≠ approved. Deployment ≠ approved. Audition + explicit approval = approved.**

## Architecture

```text
index.html
  ├─ book.css
  ├─ vendor/page-flip.browser.js
  ├─ src/main.js
  ├─ content/
  ├─ house-mechanics.js       # executable reusable canon
  ├─ house-mechanics-runners.js
  ├─ book.js
  ├─ pages/ / choreography/   # page-specific what/where/when
  ├─ manifest.webmanifest
  └─ sw.js

lab/                        # audition/provenance artifacts
assets/                     # canonical media
HOUSE-MECHANICS.md          # mechanic semantics + approval record
```

### Responsibility boundaries

- `content/` owns authored manuscript markup.
- `house-mechanics.js` owns reusable visual behavior: **how it looks and moves**.
- choreography/page controllers own **what fires, where, and when**.
- `book.js` owns pagination, PageFlip initialization, navigation, folio state, and the `HouseBook` runtime contract.
- `book.css` owns shared reader/page presentation.
- `lab/` is for auditioning and recovering mechanics. A lab is not runtime authority after promotion.
- `HOUSE-MECHANICS.md` is the human-readable canonical mechanic record.

Do not privately reimplement an approved House Mechanic inside a page controller. If an approved mechanic looks wrong, diagnose wiring, target geometry, lifecycle, or anchoring first.

## House Mechanics Library

Current executable canon: **v1.2-approved-dark**.

### Core approved vocabulary

`DIAGNOSTIC`, `DISTANCE`, `FALL`, `ORGANIC` / `ORGANIC_FIELD`, `CHANGE` / `CHANGE_REORIENT`, `LOVE` / `LOVE_LEAN`, `CROSS_OUT`, `GLINT`, `M4_DIGITIZE`, `RETURN` / `RETURN_REGISTRATION`, `HAND`, `COMPILE` / `COMPILE_INTERPRET`, `AGENCY` / `AGENCY_GO`, and `ABSENCE`.

### Dark-room vocabulary

Approved 2026-09-28 after the dedicated dark-page audition series:

- `CAST` — moving light reveals nearly absent type.
- `SHUTTER` — aperture opens and closes across type.
- `PHOSPHOR` — exposure plus decaying silver afterimage.
- `PALIMPSEST` — damaged earlier language remains beneath the present text.
- `BEAM` — soft beam with the actual illuminated source text rendered hard white.
- `REAGENT` — selected terms chemically develop and recede.
- `ACCUMULATE` — repeated exposures build a registered record; choreography calls `expose()`.
- `REFLECTION` — low-opacity mirrored text with smooth continuous water displacement.
- `VERSO` — full registered page-under-page transmission; front remains present while the real underlying page bleeds through in cold silver.

`RELIEF` was explicitly rejected and is not part of the library.

The full semantics, provenance, API examples, and implementation constraints live in `HOUSE-MECHANICS.md`.

## Dark-page design language

Dark chapters use black paper with cream/white and, where photographic/radiographic behavior requires it, cold bluish silver-white. Behavior should create the intensity, not decorative color.

The dark-room set deliberately avoids repeating DIAGNOSTIC's scan motif. Its vocabulary is light, aperture, exposure, chemistry, accumulation, reflection, and transmission.

Approved dark mechanics are frozen unless Josh explicitly reopens them. Subsequent labs should normally show only unapproved candidates so auditioning stays fast and legible.

## HouseBook runtime contract

After `book.js` initializes it publishes:

```js
window.HouseBook = {
  book,
  pages,
  pf,
  getCurrent: () => current
}
```

It dispatches `house:ready`, and page changes dispatch `house:page`. Controllers should resolve targets against the current live page rather than retain stale PageFlip DOM references.

## PageFlip

Pinned dependency: `page-flip@2.0.7` at `vendor/page-flip.browser.js`.

The browser bundle must expose `window.St.PageFlip`. Keep it local and pinned. Do not introduce a CDN runtime dependency or upgrade it without a dedicated audition.

## PWA manuscript geometry restraint

The installed PWA can measure manuscript text differently from browser audition environments. Any mechanic that splits, spaces, transforms, or otherwise changes layout-bearing text can alter wrapping and pagination.

Treat manuscript geometry as sensitive. Verify the installed PWA whenever a mechanic can affect layout. Do not alter an approved mechanic merely to compensate for an unverified pagination symptom.

## Foreword checkpoint

`THE GOOD BOOK · V14 · CANONICAL FOREWORD` is the accepted finished Foreword checkpoint from 2026-09-27. The Foreword is closed unless Josh explicitly reopens it.

Page 05/chapter work continues after that checkpoint using the shared House Mechanics vocabulary and dedicated choreography.

## Current creative work

The dark-room mechanic pass is complete. Nine dark mechanics are now approved and promoted to the executable library.

The next mechanics family under development is the **manic-page vocabulary**: authored interventions such as negative marker/redaction, overtyping, margin invasion, correction history, pressure, run-on behavior, intrusion, and certainty overload. These are candidates only until separately auditioned and approved. Do not add them to executable canon merely because they appear in a lab.

A separate fourth-wall mechanic and post-glyph behavior are also planned for later audition.

## Assets and offline behavior

Canonical assets live under `assets/`. `manifest.webmanifest` defines the standalone PWA. `sw.js` caches the shell and provides offline fallback.

When adding a required runtime file, update the service-worker shell list. When a cache-breaking change requires forcing a fresh shell, bump the cache name.

## Deployment

Production is deployed as static assets on Cloudflare Workers from this repository. There is no application compilation step.

```sh
npx wrangler deploy --assets . --compatibility-date 2026-09-26
```

Production URL: `https://the-good-book.daniels-joshua100.workers.dev`

## Change discipline

- Preserve clean responsibility boundaries.
- Prefer surgical changes over wrapper stacking.
- Keep approved mechanics centralized in `house-mechanics.js`.
- Never silently redesign approved behavior while wiring it into a page.
- Keep third-party browser dependencies pinned and local.
- Preserve resting manuscript typography and pagination.
- Use labs for visual proof before promotion.
- Record approval/rejection decisions in `HOUSE-MECHANICS.md`.
- Approved specimens disappear from later audition labs unless intentionally retained as controls.
- Maintain Git history as the recovery path rather than layering speculative fixes over failed auditions.

## Definition of a safe baseline

A safe baseline is not merely committed code. It is a state that has been deployed and actually auditioned successfully: cover present, authored content present, assets resolving, PageFlip turning pages, expected mechanics/controllers running, and no boot failure badge.
