# HOUSE MECHANICS — APPROVED CANON

Status: LOCKED CREATIVE SOURCE OF TRUTH  
Approved through: 2026-09-29  
Live approved book baseline: **V150 · 55 pages · approved through Chapter One**  
Runtime sources: `house-mechanics.js` + `house-mechanics-manic.js` + `house-mechanics-glyphs.js`  
Foreword adapter: `house-mechanics-runners.js`

## The rule
Do not redesign, approximate, duplicate, or locally reimplement an approved mechanic inside page choreography. Choreography owns **what / where / when**. The mechanics runtime owns **how it looks and moves**.

When an approved mechanic appears wrong in production, diagnose the integration first. Do not invent a replacement.

## Approved core mechanics
`DIAGNOSTIC`, `DISTANCE`, `FALL`, `ORGANIC` / `ORGANIC_FIELD`, `CHANGE` / `CHANGE_REORIENT`, `LOVE` / `LOVE_LEAN`, `CROSS_OUT`, `GLINT`, `M4_DIGITIZE`, `RETURN` / `RETURN_REGISTRATION`, `HAND`, `COMPILE` / `COMPILE_INTERPRET`, `AGENCY` / `AGENCY_GO`, `ABSENCE`.

## Approved dark-room mechanics
`CAST`, `SHUTTER`, `PHOSPHOR`, `PALIMPSEST`, `BEAM`, `REAGENT`, `ACCUMULATE`, `REFLECTION`, `VERSO`.

`SHUTTER` is live in V150 on **STARES only** in the Act One title `THE VOID / STARES BACK`.

`VERSO` uses the real page underneath in production. Do not replace that with the fixed specimen page shown in the lab.

## Approved manic mechanics
`STRIKE`, `CORRECTION`, `PRESSURE`, `INTRUSION`, `OVERTYPE`, `SCRAWL`, `CERTAINTY`.

`CERTAINTY` targets authored additions/anchors only; it does not split whole paragraphs. Footnotes belong in the real bottom page field.

## Approved glyph-light system
Runtime namespace: `window.HouseGlyphs` in `house-mechanics-glyphs.js`.

- `LUMINOUS` — controlled cream/white emission.
- `RADIANT` — larger soft cream/white bloom.
- `REVEAL` — a moving glowing glyph can reveal already-present hidden material through a soft radial CSS mask that follows the glyph center. It does not summon or reflow content.
- A glyph may be unlit, LUMINOUS, or RADIANT according to choreography.

```js
HouseGlyphs.LIGHT(glyph, 'luminous');
HouseGlyphs.LIGHT(glyph, 'radiant');
HouseGlyphs.LIGHT(glyph, 'random');
HouseGlyphs.LIGHT_MANY(glyphs, { mode: 'random' });
const stopReveal = HouseGlyphs.REVEAL(glyph, hiddenCopyLayer, pageHost, { radius: 72 });
stopReveal();
```

### Chapter One glyph integration, approved V150
Every Chapter One page carries **13 glyphs**. This density is approved. They use the established inherited swarm sizing formula, established wandering behavior, and the approved LUMINOUS/RADIANT vocabulary. Each page uses a different deterministic seed so the field does not repeat as a stamped constellation.

Do not return to the 520 / 52 / 26 density auditions unless Josh explicitly reopens density. Thirteen per page is the approved result.

## Light-on-dark principle
Many mechanics reveal something in darkness. Their resting state should not casually begin white merely because the effect ultimately produces light. Preserve darkness first; let the mechanic create the reveal. This is a visual principle, not permission to rewrite an approved mechanic.

## Production integration notes
- Foreword choreography is approved in the V150 chain.
- The global page status counter is the only page-number system. Chapter-local folios are removed.
- Status polarity follows the page: dark charcoal on cream/white pages, cream on black pages.
- The Void, Act One title, Act One → Chapter One transition, and full Chapter One are approved together in V150.
- Chapter One choreography timing follows reading speed. Do not replace it with arbitrary fixed choreography timing.

## Labs and provenance
Labs are useful for recovering and understanding approved behavior, but after promotion they are **provenance, not runtime authority**. The live shared mechanic is the source used by choreography.

Important provenance:
- `lab/recovered-approved-mechanics.html` — recovered core mechanics.
- `lab/hand-compile.html` — Hand / Compile selection.
- `lab/recovered-agency-absence.html` — Agency / Absence recovery.
- `lab/dark-mechanics.html` and approved dark-mechanics artifacts — dark-room development.
- `lab/manic-mechanics.html` — manic development.
- `lab/glyph-glow.html` — LUMINOUS, RADIANT, movement behavior, and REVEAL provenance.

Do not treat rejected lab variants as candidates merely because the files still exist. Git history is the archaeology layer.

## Current freeze line
**V150 · 55 pages is approved through the end of Chapter One.**

Protected chain:
`Cover → Foreword → global folio/status → Void → Act One title → Act One/Chapter One transition → Chapter One`

Do not alter anything in that chain unless Josh explicitly reopens it. New book work begins **after Chapter One**.

## Rules for future mechanics work
- Same `main` branch unless Josh explicitly requests otherwise.
- Small, reversible bites.
- Never wrapper-stack speculative fixes.
- Never invent a replacement for a mechanic that already exists in the shared library.
- Search the shared runtime and historical code before concluding something is missing.
- Use actual book typography/context when auditioning visual behavior.
- Promote approved reusable behavior into shared runtime; choreography calls it.
- Preserve resting manuscript typography and pagination.
- Animation scaffolding must not distort the book at rest.
- Commit/deploy does not equal approval. Josh's explicit approval does.
- Always give Josh a visible version label after a live change so he can confirm he is looking at the intended build.
