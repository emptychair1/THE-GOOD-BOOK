# HOUSE MECHANICS — APPROVED CANON

Status: LOCKED CREATIVE SOURCE OF TRUTH  
Core approved: 2026-09-27  
Dark-room expansion approved: 2026-09-28  
Manic expansion approved: 2026-09-28  
Glyph-light expansion approved: 2026-09-29  
Runtime sources: `house-mechanics.js` + `house-mechanics-manic.js` + `house-mechanics-glyphs.js`  
Foreword adapter: `house-mechanics-runners.js`

## Non-negotiable rule
Do not redesign, approximate, duplicate, or locally reimplement an approved mechanic inside page choreography. Choreography owns what/where/when; the mechanics runtime owns how it looks and moves.

## Approved core mechanics
`DIAGNOSTIC`, `DISTANCE`, `FALL`, `ORGANIC` / `ORGANIC_FIELD`, `CHANGE` / `CHANGE_REORIENT`, `LOVE` / `LOVE_LEAN`, `CROSS_OUT`, `GLINT`, `M4_DIGITIZE`, `RETURN` / `RETURN_REGISTRATION`, `HAND`, `COMPILE` / `COMPILE_INTERPRET`, `AGENCY` / `AGENCY_GO`, `ABSENCE`.

## Approved dark-room mechanics
`CAST`, `SHUTTER`, `PHOSPHOR`, `PALIMPSEST`, `BEAM`, `REAGENT`, `ACCUMULATE`, `REFLECTION`, `VERSO`. Rejected: `RELIEF`.

## Approved manic mechanics
`STRIKE`, `CORRECTION`, `PRESSURE`, `INTRUSION`, `OVERTYPE`, `SCRAWL`, `CERTAINTY`. Rejected: `MARGIN`, `RUNON`.

CERTAINTY targets authored additions/anchors only; it does not split whole paragraphs. Footnotes belong in the real bottom page field.

## Approved glyph-light capability
Approved from `lab/glyph-glow.html` on 2026-09-29. Placeholder glyph shapes in the lab are NOT canon; behavior is canon and must be applied to the book's actual glyph vocabulary.

- `LUMINOUS` — cream/white glyph with controlled visible emission. Approved.
- `RADIANT` — cream/white glyph with larger soft bloom. Approved.
- `WHISPER` — rejected/dead.
- Dynamic assignment — glyphs may receive LUMINOUS or RADIANT individually or randomly. Approved motion audition used random assignment; choreography controls population, timing, paths, and density.
- `REVEAL` — a glowing moving glyph can reveal already-present hidden material with a soft radial CSS mask following the glyph center. It does not summon/reflow content and requires no canvas/shader/physics simulation. Approved.

Runtime namespace: `window.HouseGlyphs` in `house-mechanics-glyphs.js`.

```js
HouseGlyphs.LIGHT(glyph, 'luminous');
HouseGlyphs.LIGHT(glyph, 'radiant');
HouseGlyphs.LIGHT(glyph, 'random');
HouseGlyphs.LIGHT_MANY(glyphs, { mode: 'random' });
const stopReveal = HouseGlyphs.REVEAL(glyph, hiddenCopyLayer, pageHost, { radius: 72 });
stopReveal();
```

The glyph capability is dynamic by design: the same actual glyph may be unlit, LUMINOUS, or RADIANT according to choreography. REVEAL is optional and should remain special rather than becoming default behavior.

## Fourth-wall smoke candidate
`lab/josh-smoke.html` Whisper Audition 6 was explicitly approved 2026-09-29 as the Josh-page fourth-wall candidate: Pixabay diagonal smoke, full-width field, screen blend, opacity `.035`, persistent across Josh page turns. Approval is for the auditioned candidate; integration in the live PageFlip reader remains unproven and must be tested before declaring production-safe.

## Runtime structure
`house-mechanics.js` contains core/dark-room canon. `house-mechanics-manic.js` extends manic behavior. `house-mechanics-glyphs.js` owns approved glyph-light capabilities. These are shared runtime vocabulary, never page-local replacements.

## Recovery/audition artifacts
- `lab/recovered-approved-mechanics.html` — recovered core mechanics.
- `lab/hand-compile.html` — Hand / Compile selection.
- `lab/recovered-agency-absence.html` — Agency / Absence recovery.
- `lab/dark-mechanics.html` — dark-room development.
- `lab/manic-mechanics.html` — manic development.
- `lab/josh-smoke.html` — fourth-wall smoke development; Whisper 6 approved candidate.
- `lab/glyph-glow.html` — glyph-light development; LUMINOUS, RADIANT, dynamic light assignment, motion behavior, and REVEAL approved; WHISPER rejected.

## Foreword checkpoint
`THE GOOD BOOK · V14 · CANONICAL FOREWORD` remains closed unless Josh explicitly reopens it.

## Rules for future mechanics work
- Never invent a replacement merely because an approved mechanic looks broken in production.
- Search historical code first when a previously approved mechanic is missing.
- Use actual book typography/context in visual labs.
- After approval, promote the exact auditioned behavior into canonical capability.
- Preserve resting manuscript typography and pagination.
- Animation scaffolding must not distort the book at rest.
- Timing is authored; functional defaults are not automatically aesthetically approved.
- Labs are provenance after promotion, not runtime authority.
