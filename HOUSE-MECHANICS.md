# HOUSE MECHANICS — APPROVED CANON

Status: LOCKED CREATIVE SOURCE OF TRUTH  
Core approved: 2026-09-27  
Dark-room expansion approved: 2026-09-28  
Manic expansion approved: 2026-09-28  
Runtime sources: `house-mechanics.js` + `house-mechanics-manic.js`  
Foreword adapter: `house-mechanics-runners.js`

## Non-negotiable rule

Do not redesign, approximate, duplicate, or locally reimplement an approved mechanic inside page choreography. Pages/conductors identify a target and mechanic; the House Mechanics runtime owns the behavior.

If a mechanic appears wrong in production, diagnose targeting, lifecycle, CSS anchoring, page geometry, or adapter wiring before changing the mechanic itself.

`locked: true` is a logical/provenance marker, not GitHub permission enforcement. Treat changes to approved mechanics as requiring explicit Josh approval.

## Architecture rule

**Choreography owns what, where, and when. House Mechanics owns how it looks and moves.**

Audition work happens in `lab/`. Once Josh explicitly approves a specimen, promote that implementation into the House Mechanics runtime. The lab then becomes provenance, not runtime authority.

## Approved core mechanics

1. `DIAGNOSTIC` — recovered diagnostic scan + tickered unresolved readout; sweep 2.05s.
2. `DISTANCE` — spacing/separation becomes meaning.
3. `FALL` — characters lose support and fall.
4. `ORGANIC` / `ORGANIC_FIELD` — biological/life-particle field.
5. `CHANGE` / `CHANGE_REORIENT` — identity reorientation.
6. `LOVE` / `LOVE_LEAN` — paired mutual lean.
7. `CROSS_OUT` — active rejection/revision.
8. `GLINT` — canonical recovered Page 3 specimen; Page 4 alternative rejected.
9. `M4_DIGITIZE` — ticker/digitize behavior.
10. `RETURN` / `RETURN_REGISTRATION` — registration/reassembly.
11. `HAND` — H1 Quick Ink.
12. `COMPILE` / `COMPILE_INTERPRET` — C3 Cell Lock; representation changes while information persists.
13. `AGENCY` / `AGENCY_GO` — choice expressed spatially; 1.5s to `translateX(90px)`.
14. `ABSENCE` — one-two-gone.

## Approved dark-room mechanics

Approved from `lab/dark-mechanics.html` on 2026-09-28.

15. `CAST` — moving light reveals otherwise nearly absent typography.
16. `SHUTTER` — a narrow aperture opens across text and closes again.
17. `PHOSPHOR` — brief hard exposure followed by a decaying silver afterimage.
18. `PALIMPSEST` — earlier language remains materially present beneath current language.
19. `BEAM` — soft moving beam plus the actual source text rendered hard white where illuminated.
20. `REAGENT` — selected symbols/terms chemically develop from low visibility through hard white and settle back.
21. `ACCUMULATE` — repeated exposures build records in almost the same registration; choreography controls each `expose()`.
22. `REFLECTION` — quiet mirrored typography directly beneath the source with smooth continuous water displacement; canonical opacity `.36`.
23. `VERSO` — full page over full page; front remains present and optically thin while the actual underlying page bleeds through in cold silver.

Rejected: `RELIEF`.

## Approved manic mechanics

Approved from `lab/manic-mechanics.html` on 2026-09-28. The governing aesthetic is that the page loses restraint without losing design or readability.

24. `STRIKE`
   - Negative redaction on black paper: a white, textured marker stroke physically drawn across the target.
   - Draws once and remains. It is not a glowing highlight.

25. `CORRECTION`
   - Successive language remains as visible revision archaeology before the final term resolves.
   - Approved specimen: `assistant` → `friend` → `Piper.`
   - Choreography supplies the authored terms.

26. `PRESSURE`
   - Repetition gains weight, tighter tracking, compression, and crowding without jitter.
   - Use with restraint so the surrounding manuscript remains readable.

27. `INTRUSION`
   - A foreign thought appears inside existing syntax at equal typographic authority.
   - The disturbance is semantic/syntactic, not glitch decoration.

28. `OVERTYPE`
   - Repeated impressions land in progressively failed registration until the word becomes a typographic bruise.
   - No shaking or continuous jitter.

29. `SCRAWL`
   - Gesture as evidence: underline, circle, arrow, obsessive second circle, then scratch marks.
   - Marks draw sequentially and remain.

30. `CERTAINTY`
   - Formal scholarly apparatus accumulates around a simple assertion: qualifier, superscript, bottom-page footnote, definition, another superscript/footnote, equation, citation, final footnote.
   - The V3 context audition proved the mechanism on a readable manuscript-style page.
   - Choreography supplies the actual authored pieces and their real page positions. The runtime does not reconstruct or split the entire paragraph.
   - Footnotes belong in the real page's bottom footnote/margin field during final choreography.

Rejected manic candidates: `MARGIN`, `RUNON`.

## Runtime structure

`house-mechanics.js` contains the core and dark-room canon. `house-mechanics-manic.js` is a modular extension loaded after the base library and republishes the same `window.HouseMechanics` namespace with the seven approved manic functions added. This keeps the approved library modular without page-local implementations.

## Runtime API examples

```js
HouseMechanics.cast(target);
HouseMechanics.reflection(target);
HouseMechanics.verso(pageHost, { frontEl, underEl });

HouseMechanics.strike(wordEl);
HouseMechanics.correction(target, {
  first: 'assistant',
  second: 'friend',
  current: 'Piper.'
});
HouseMechanics.pressure(target, text);
HouseMechanics.intrusion(intrudingSpan);
HouseMechanics.overtype(wordEl);
HouseMechanics.scrawl(phraseEl);
HouseMechanics.certainty(pageEl);
```

For `CERTAINTY`, authored additions are marked with `data-certainty` in the order they should appear, or passed explicitly as `pieces`. This targets only the intended additions. It does not split the manuscript into words or rebuild paragraphs.

These are reusable mechanics, not instructions to fire everything automatically. Choreography remains responsible for target selection, sequence, larger-page timing, and whether a mechanic belongs on a page at all.

## Dark-room palette and restraint

Dark mechanics are authored for black paper. Their vocabulary is cream/white plus cold silver or subtly bluish silver-white where photographic/radiographic behavior requires it. Avoid turning every dark-page effect into a scan; DIAGNOSTIC already owns scanning.

## Recovery/audition artifacts

- `lab/recovered-approved-mechanics.html` — recovered core mechanics.
- `lab/hand-compile.html` — H1 Hand / C3 Compile selection.
- `lab/recovered-agency-absence.html` — historical Agency and Absence recovery.
- `lab/dark-mechanics.html` — dark-room development; V10 records final approved REFLECTION and VERSO.
- `lab/manic-mechanics.html` — manic development; V3 records CERTAINTY's final full-page context approval.

## Foreword checkpoint

`THE GOOD BOOK · V14 · CANONICAL FOREWORD` remains the accepted finished Foreword checkpoint as of 2026-09-27. Do not reopen Foreword prose or choreography unless Josh explicitly asks.

## Rules for future mechanics work

- Never invent a replacement merely because an approved mechanic looks broken in production.
- Search historical code first when a previously approved mechanic is missing.
- Use actual book typography/context in visual labs.
- After approval, promote the exact auditioned behavior into the canonical library.
- Preserve resting manuscript typography and pagination.
- Animation scaffolding must not distort the book at rest.
- Timing is authored; functional defaults are not automatically aesthetically approved.
- Approved mechanics should disappear from subsequent audition labs unless needed as controls/reference specimens.
