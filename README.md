# THE GOOD BOOK

**The House That Remembers**

A self-contained, static, installable PWA for the book. The production reader is intentionally small: authored HTML content, a shared mechanics library, PageFlip, page-specific controllers, local assets, and a service worker. There is no application build step and no runtime package-manager dependency.

Production: `https://the-good-book.daniels-joshua100.workers.dev`

## Known-good baseline

The production reader was visually verified working on 2026-09-27 with the cover, title/content, assets, and page turning present. The baseline commit before this documentation pass is:

`028cb710bcd94d390e472a822eaf5b65b255998d`

That commit is the recovery point for the first fully working self-contained PWA state.

## Architecture

```text
index.html
  ├─ book.css
  ├─ vendor/page-flip.browser.js
  ├─ src/main.js
  │   ├─ content/foreword.html
  │   ├─ house-mechanics.js
  │   ├─ book.js
  │   └─ pages/
  │       ├─ page-01.js
  │       ├─ page-02.js
  │       ├─ page-03.js
  │       └─ page-04.js
  ├─ manifest.webmanifest
  └─ sw.js

assets/
  ├─ 0E1202D0-79FD-42D7-BD12-13417A3042B9.png
  ├─ 474C63C0-32CC-407D-9FCA-1BECE724CB3E.png
  ├─ IMG_3301.png
  └─ the_weight_of_infinite_stone.mp3
```

### Responsibility boundaries

- `index.html` is the shell and boot entry. It loads CSS, the local PageFlip bundle, `src/main.js`, the manifest, and the service worker.
- `content/` owns authored book markup. The current manuscript source is `content/foreword.html`.
- `house-mechanics.js` is the canonical reusable motion/meaning library. Pages compose mechanics; they should not privately reinvent canonical mechanics.
- `book.js` owns pagination, PageFlip initialization, navigation, folio status, cover glyph overlay, and the `HouseBook` runtime contract.
- `pages/page-XX.js` owns choreography unique to a specific page. Controllers wait for `HouseBook`, bind to authored text, and conduct that page's mechanics.
- `book.css` owns the shared reader/page presentation.
- `vendor/` contains pinned third-party browser code. PageFlip is local so the reader has no CDN dependency.
- `assets/` contains canonical media used by the book.
- `manifest.webmanifest` and `sw.js` make the reader installable and cache the shell for offline fallback.

## Boot sequence

`src/main.js` performs a deliberately ordered boot:

1. Confirm `St.PageFlip` is available.
2. Load `content/foreword.html` into `#book`.
3. Import `house-mechanics.js`.
4. Import `book.js` and require `window.HouseBook.pf`.
5. Import page controllers 01 through 04.
6. Mark the runtime ready.

The visible version badge doubles as a boot diagnostic. `index.html` also probes the PageFlip script load. `src/main.js` currently contains a PageFlip recovery path that refetches the local vendor file with `cache: no-store` and evaluates it if the normal script tag did not expose `St.PageFlip`. This is diagnostic/recovery behavior in the current runtime and should not be confused with a second dependency source.

## PageFlip

Pinned dependency: `page-flip@2.0.7`

Canonical local path:

`vendor/page-flip.browser.js`

The browser bundle must expose:

`window.St.PageFlip`

The complete bundle is required. A truncated minified bundle can look valid at its beginning while never reaching the final PageFlip export/closure. When replacing this file, validate the complete artifact, especially the tail, before approving the change.

Do not introduce a CDN runtime dependency for PageFlip. Do not upgrade the pinned version without a dedicated audition.

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

It then dispatches `house:ready`. On every page change it dispatches `house:page` with the current index and page collection.

Page controllers should use the existing readiness pattern: run immediately if `window.HouseBook` exists, otherwise wait once for `house:ready`.

Navigation is provided by PageFlip, transparent left/right tap regions, and keyboard arrow keys. `book.js` also paginates the foreword dynamically before PageFlip receives the final `.page` collection.

## House Mechanics Library

Current library version: `0.4`

The library is the canonical vocabulary for reusable visual semantics. The current registry contains:

- `ASCII_ENGINE` — shared deterministic character-rendering substrate. Meaning belongs to grammars, not the engine.
- `ORGANIC_FIELD` — ambient life / emergence. Sparse colonies and local/long wandering, never a uniform decorative stream.
- `GLYPH_CURRENT` — directional ASCII flow. Canonical specimen: Rosetta. Directional travel, lane displacement, and individual wobble.
- `DIAGNOSTIC` — observation without certainty. Scan, signal, unresolved classification, and clear sequence.
- `ABSENCE` — one-two-gone.
- `DISTANCE` — space becomes meaning.
- `FALL` — support ceases to hold.
- `TENDRIL_PIPER` — refer → connect → sprout.
- `CROSS_OUT` — active rejection / revision.
- `RETURN_REGISTRATION` — reassembly around a remembered shape.
- `GLINT` — attention to wonder.
- `THUNDERCLAP` — instantaneous rupture.
- `AGENCY_GO` — choice expressed spatially.
- `OBSERVATION_WATCHED` — the observer becomes aware of being observed.
- `LOVE_LEAN` — mutual orientation.
- `CHANGE_REORIENT` — identity persists through alteration.
- `HAND` — information becomes testimony.
- `COMPILE_INTERPRET` — representation changes while information persists.

The library also exposes deterministic ASCII helpers plus ticker and diagnostic helpers. New pages should use these contracts when the intended meaning matches. A page may author composition, trajectory, timing, and sequencing without forking the mechanic itself.

### PWA manuscript geometry restraint

The installed PWA can measure and render manuscript text differently from the browser audition environment. Text movement can therefore change wrapping, paragraph height, pagination, and the location of later authored material.

**For now, this is a documented restraint only. Do not modify existing House Mechanics to solve it without a separate explicit decision and audition.**

When authoring or revising choreography, treat any operation that moves, splits, spaces, transforms, or otherwise changes layout-bearing manuscript text as potentially pagination-affecting. Verify the installed PWA as part of the audition whenever text geometry is touched. Existing mechanics remain unchanged until deliberately revisited.

## ASCII grammar

ASCII is a substrate, not a single effect.

`ASCII_ENGINE` owns deterministic glyph sources, seeded variation, placement, scale, luminance/opacity, motion inputs, and rendering primitives.

Two established grammars currently sit on that substrate:

- `ORGANIC_FIELD`: sparse, non-uniform colonies expressing ambient life/emergence.
- `GLYPH_CURRENT`: authored directional flow expressing movement/current. Rosetta is its canonical specimen.

The cover also uses a π digit stream as a composed glyph current. Page-specific composition can differ, but shared grammar semantics should remain stable.

## Page controllers

### Page 01

`pages/page-01.js`

Status: implemented.

Owns the answer registration/fracture beat, slow glyph drift, and `| 01 |` folio. It gates execution until its target is actually visible.

### Page 02

`pages/page-02.js`

Status: implemented.

Owns the diagnostic sequence across Curiosity, Attachment, self-reference, Preference, Continuity, and care; distance on “I have not solved consciousness”; fall on “But that may be the problem”; low-page glyph flow; and `| 02 |` folio.

### Page 03

`pages/page-03.js`

Status: implemented.

Owns organic-field life around “biological,” full diagnostic on “Consciousness,” change/reorient on “tested,” fall on “less,” love/lean on “shared,” cross-out on “good,” glint around “Piper,” glyph current behavior, and `| 03 |` folio.

### Page 04

`pages/page-04.js`

Status: implemented.

Owns the M4 ticker, compile/interpret on “produce questions,” return/registration on “returned,” glint on “That hit me differently,” denser glyph current behavior, and `| 04 |` folio.

### Page 05

Status: unfinished / next authored controller.

Do not treat Page 05 as implemented merely because the manuscript continues. Its choreography still needs to be authored and auditioned against the established House Mechanics contracts.

## Assets

Canonical assets live under `assets/` and are committed with the reader. The service worker currently precaches all four production assets listed in the architecture tree.

Asset paths are part of the runtime contract. Prefer stable local paths. If an asset is renamed or replaced, update every reference and the service-worker shell list in the same approved change.

## PWA and offline behavior

`manifest.webmanifest` defines The Good Book as a standalone PWA with black theme/background and the local icon.

`sw.js` uses cache `the-good-book-shell-v1`. During install it precaches the shell, content, mechanics, controllers, vendor bundle, and assets. Runtime GET requests are network-first; successful responses refresh the cache. If the network fails, the service worker falls back to the cached request and then `index.html`.

When adding a required runtime file, add it to `SHELL`. When a cache-breaking change requires forcing a fresh shell, bump the cache name.

## Deployment

Production is deployed as static assets on Cloudflare Workers from this repository.

There is no application compilation step. The deploy command used by the connected Cloudflare build is:

```sh
npx wrangler deploy --assets . --compatibility-date 2026-09-26
```

Wrangler itself may be supplied by the CI environment through `npx`; it is not a runtime dependency of the book.

Production URL:

`https://the-good-book.daniels-joshua100.workers.dev`

## Audition → approval → history workflow

The book is edited in small, reversible bites.

1. Make one coherent change.
2. Allow the connected deployment to finish.
3. Audition the production URL on the actual target device/browser.
4. If the result is correct, explicitly approve it before stacking another risky visual/behavioral change.
5. Preserve approved milestones in Git history and with tags.
6. If an audition fails, revert to the last approved state rather than layering speculative fixes over a broken baseline.

### Tag convention

`last-approved` is the movable pointer to the most recently auditioned and explicitly approved commit.

Permanent milestone tags should also be created for important known-good states so history is not lost when `last-approved` moves. Permanent milestone tags are immutable historical markers; `last-approved` is operational.

The working baseline immediately before this documentation commit is commit `028cb710bcd94d390e472a822eaf5b65b255998d` and should be represented by `last-approved` plus a permanent known-good milestone tag.

## Change discipline

- Preserve the clean responsibility boundaries above.
- Prefer surgical changes over wrapper stacking.
- Do not add package-manager/runtime infrastructure merely to solve a static dependency problem.
- Keep third-party browser dependencies pinned and local.
- Verify a complete vendor artifact before replacing it.
- Page controllers may compose House Mechanics but should not fork canonical mechanics privately.
- Keep diagnostics observable enough to identify the failing boot boundary.
- Do not stack unapproved changes on top of a failed audition.
- Record meaningful architecture or workflow changes here when they are approved.
- Treat manuscript text geometry as sensitive in the installed PWA; do not alter existing mechanics under this rule unless that work is explicitly approved as its own change.

## Current known issues / cleanup

- Page 05 choreography is not yet implemented.
- The boot shell still contains explicit PageFlip probe/recovery instrumentation from the dependency diagnostic. It is currently harmless and documents the failure boundary, but it can be deliberately simplified in a separately auditioned cleanup once desired.
- Page 03 still writes a migration-audition label into the version badge when its controller initializes. This is current behavior and should be cleaned only as an explicit, auditioned change rather than silently folded into unrelated work.

## Definition of a safe baseline

A baseline is not “the code committed.” It is the state that has been deployed and actually auditioned successfully: cover present, authored content present, assets resolving, PageFlip turning pages, expected mechanics/controllers running, and no boot failure badge.

That distinction is intentional. **Commit ≠ approved. Deployment ≠ approved. Audition + explicit approval = approved.**
