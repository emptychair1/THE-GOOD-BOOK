# THE GOOD BOOK

**The House That Remembers**

A self-contained, static, installable PWA for the book. The production reader is intentionally small: authored HTML content, a shared mechanics library, PageFlip, page-specific choreography/controllers, local assets, and a service worker. There is no application build step and no runtime package-manager dependency.

Production: `https://the-good-book.daniels-joshua100.workers.dev`

## Working method

The book is built in small, reversible bites:

1. Build/audition a mechanic or composition in `lab/`.
2. Deploy and inspect it on the real target device.
3. Josh explicitly approves or rejects it.
4. Approved reusable behavior is promoted into the House Mechanics runtime.
5. Choreography calls the library rather than rebuilding the effect locally.

**Commit ≠ approved. Deployment ≠ approved. Audition + explicit approval = approved.**

## Architecture

```text
index.html
  ├─ book.css
  ├─ vendor/page-flip.browser.js
  ├─ src/main.js
  ├─ content/
  ├─ house-mechanics.js          # core + dark-room executable canon
  ├─ house-mechanics-manic.js    # approved manic extension, same namespace
  ├─ house-mechanics-runners.js
  ├─ book.js
  ├─ pages/ / choreography/      # page-specific what/where/when
  ├─ manifest.webmanifest
  └─ sw.js

lab/                           # audition/provenance artifacts
assets/                        # canonical media
HOUSE-MECHANICS.md             # mechanic semantics + approval record
```

### Responsibility boundaries

- `content/` owns authored manuscript markup.
- House Mechanics owns reusable visual behavior: **how it looks and moves**.
- choreography/page controllers own **what fires, where, and when**.
- `book.js` owns pagination, PageFlip initialization, navigation, folio state, and the `HouseBook` runtime contract.
- `book.css` owns shared reader/page presentation.
- `lab/` is for auditioning and recovering mechanics. A lab is not runtime authority after promotion.
- `HOUSE-MECHANICS.md` is the human-readable canonical mechanic record.

Do not privately reimplement an approved House Mechanic inside a page controller. If an approved mechanic looks wrong, diagnose wiring, target geometry, lifecycle, or anchoring first.

## House Mechanics Library

Current canon: **v1.3-approved-manic**.

`house-mechanics.js` provides the base/core and dark-room vocabulary. `house-mechanics-manic.js` loads after it and extends the same frozen `window.HouseMechanics` namespace. This is one logical mechanics library with modular source sections, not page-local animation code.

### Core approved vocabulary

`DIAGNOSTIC`, `DISTANCE`, `FALL`, `ORGANIC` / `ORGANIC_FIELD`, `CHANGE` / `CHANGE_REORIENT`, `LOVE` / `LOVE_LEAN`, `CROSS_OUT`, `GLINT`, `M4_DIGITIZE`, `RETURN` / `RETURN_REGISTRATION`, `HAND`, `COMPILE` / `COMPILE_INTERPRET`, `AGENCY` / `AGENCY_GO`, and `ABSENCE`.

### Dark-room vocabulary

Approved 2026-09-28:

`CAST`, `SHUTTER`, `PHOSPHOR`, `PALIMPSEST`, `BEAM`, `REAGENT`, `ACCUMULATE`, `REFLECTION`, `VERSO`.

`RELIEF` was rejected.

### Manic vocabulary

Approved 2026-09-28:

- `STRIKE` — textured white negative-marker redaction drawn once and left on black paper.
- `CORRECTION` — successive rejected terms remain as revision archaeology before the final term resolves.
- `PRESSURE` — repetition becomes heavier, tighter, and more compressed without jitter.
- `INTRUSION` — a foreign thought enters existing syntax at equal typographic authority.
- `OVERTYPE` — repeated failed-registration impressions accumulate into a typographic bruise.
- `SCRAWL` — sequential hand gesture: underline, circle, arrow, second circle, scratch; every mark remains.
- `CERTAINTY` — scholarly apparatus progressively overdetermines a simple assertion through qualifiers, superscripts, footnotes, definitions, equation, and citation while preserving readable manuscript context.

Rejected manic candidates: `MARGIN`, `RUNON`.

CERTAINTY does not require splitting whole paragraphs into words. Final choreography marks only the intended additions/anchors and places footnotes in the real bottom page field.

Full semantics, provenance, API examples, and constraints live in `HOUSE-MECHANICS.md`.

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

## Current creative work

The dark-room and manic mechanic passes are complete and promoted to canon.

Next planned mechanics work: the **fourth-wall mechanic**, followed by the **post-glyph behavior** already identified for later audition. Those remain candidates until separately auditioned and approved.

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
- Keep approved mechanics centralized in the House Mechanics runtime.
- Never silently redesign approved behavior while wiring it into a page.
- Keep third-party browser dependencies pinned and local.
- Preserve resting manuscript typography and pagination.
- Use labs for visual proof before promotion.
- Record approval/rejection decisions in `HOUSE-MECHANICS.md`.
- Approved specimens disappear from later audition labs unless intentionally retained as controls.
- Maintain Git history as the recovery path rather than layering speculative fixes over failed auditions.

## Definition of a safe baseline

A safe baseline is not merely committed code. It is a state that has been deployed and actually auditioned successfully: cover present, authored content present, assets resolving, PageFlip turning pages, expected mechanics/controllers running, and no boot failure badge.
