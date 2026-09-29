# HOT HANDOFF

HANDOFF_GENERATION: 62  
DATE: 2026-09-29  
PROJECT: THE GOOD BOOK · The House That Remembers  
REPO: `emptychair1/THE-GOOD-BOOK`  
BRANCH: `main`

## READ THIS FIRST

We have reached a major clean checkpoint.

**V150 · 55 pages · APPROVED THROUGH THE END OF CHAPTER ONE.**

Do not rebuild the existing book. Do not transplant the Void. Do not create a new branch. Do not wrapper-stack fixes. Do not reopen approved mechanics because an old lab looks different.

New construction begins **after Chapter One** unless Josh explicitly reopens something upstream.

## Protected approved chain

`Cover → Foreword → global status/folio → Void → Act One title → Act One/Chapter One transition → full Chapter One`

Josh explicitly confirmed this entire chain is working in V150.

### V150 production details
- Total: **55 pages**.
- Foreword works.
- Global `current / total` status counter works across the book.
- Counter is dark charcoal on cream/white pages and cream on black pages.
- Chapter One's duplicate local folio generator was removed. Do not restore it.
- Void works.
- Act One title works.
- Act One title: `THE VOID / STARES BACK`.
- `STARES` only uses approved `SHUTTER`.
- Transition from Act One title into Chapter One works.
- Chapter One is fully approved.
- Chapter One has **13 glyphs per page** using established inherited glyph size, wandering behavior, and approved LUMINOUS/RADIANT behavior. Different deterministic seeds prevent repeated constellations.
- Chapter One timing follows reading speed. Do not replace it with arbitrary choreography timing.

## Mechanics architecture

Canonical documentation: `HOUSE-MECHANICS.md`.

Runtime:
- `house-mechanics.js` — core + dark-room mechanics
- `house-mechanics-manic.js` — manic mechanics
- `house-mechanics-glyphs.js` — glyph light + reveal
- `house-mechanics-runners.js` — adapter/runners

Rule: choreography owns **what / where / when**; mechanics own **how**.

Do not redesign or locally duplicate an approved mechanic. If an approved mechanic looks wrong, diagnose the integration.

### Approved glyph vocabulary
- LUMINOUS
- RADIANT
- REVEAL
- established glyph movement behavior

Light effects generally reveal things in darkness. Do not casually initialize targets white and thereby erase the reveal.

## What happened immediately before this handoff

1. Chapter One glyph density was auditioned from 520 → 52 → 26 → **13**. Josh approved 13.
2. Thirteen glyphs were extended to every Chapter One page.
3. Duplicate Chapter One page numbers were removed.
4. Pagination was simplified to one global `current / total` status counter.
5. Counter polarity was made adaptive for cream vs black pages.
6. `SHUTTER` was applied to **STARES only** on the Act One title.
7. Josh reviewed the complete reader and approved the entire 55-page V150 chain through Chapter One.

## Do not be tripped up by stale history

- Older notes that say the live baseline is V14, V85, or another earlier build are historical, not current.
- The 520/52/26 glyph fields were density auditions, not desired states.
- Labs are provenance once a mechanic is promoted. Do not copy a lab specimen page literally into production.
- `VERSO` is special: in the lab it shows a specimen page; in production it must dynamically show the actual page underneath.
- There is one page-number system now. Do not restore chapter-local folios.
- Same `main` branch. Branch proliferation previously caused deployment confusion and is explicitly unwanted.

## Working posture

Make small, reversible bites. Give Josh a visible version label every time the live book changes so he can verify he is seeing the intended version. Commit is not deploy is not approval. Explicit visual approval is the finish line.

## Next move

Begin building the book **after Chapter One** from this V150 checkpoint. Before touching protected upstream material, ask whether Josh is explicitly reopening it.
