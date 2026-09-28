# HOUSE MECHANICS — APPROVED CANON

Status: LOCKED CREATIVE SOURCE OF TRUTH
Approved: 2026-09-27
Runtime source: `house-mechanics.js`
Foreword adapter: `house-mechanics-runners.js`

## Non-negotiable rule

Do not redesign, approximate, duplicate, or locally reimplement an approved mechanic inside page choreography. Pages/conductors identify a target and mechanic; the adapter calls the executable mechanic in `house-mechanics.js`.

If a mechanic appears wrong in production, diagnose targeting, lifecycle, CSS anchoring, or adapter wiring before changing the mechanic itself.

`locked: true` in the runtime is a logical/provenance marker, not GitHub permission enforcement. Treat changes to `house-mechanics.js` as requiring explicit Josh approval.

## Why this document exists

During Foreword work, the project incorrectly assumed earlier pages were calling a complete executable mechanics library. They were not. Many approved mechanics still lived as executable code inside page controllers, while a later `house-mechanics.js` migration preserved mostly parameters/descriptions. Deleting old page controllers exposed that migration error.

Recovery rule learned: when an approved visual seems to have disappeared, recover the literal historical executable implementation before inventing anything new.

## Approved mechanics

1. `DIAGNOSTIC`
   - Approved recovered diagnostic scan + tickered readout.
   - Current readout includes `DIAGNOSTIC // SIGNAL`, `SIGNAL DETECTED`, `CLASSIFICATION: UNRESOLVED`.
   - Scanner sweep intentionally slowed to 2.05s after final audition.

2. `DISTANCE`
   - Recovered approved spacing/separation implementation.

3. `FALL`
   - Recovered approved character fall implementation.

4. `ORGANIC` / `ORGANIC_FIELD`
   - Biological mechanic.
   - Recovered Page 3 life-particle implementation.

5. `CHANGE` / `CHANGE_REORIENT`
   - Recovered approved reorientation mechanic.

6. `LOVE` / `LOVE_LEAN`
   - Recovered approved paired lean mechanic.

7. `CROSS_OUT`
   - Recovered approved strike-through mechanic.

8. `GLINT`
   - Canonical specimen is the recovered Page 3 Glint, not the Page 4 alternative.
   - Page 4 Glint was explicitly rejected/removed during recovery.

9. `M4_DIGITIZE`
   - Recovered approved ticker/digitize behavior used for M4.

10. `RETURN` / `RETURN_REGISTRATION`
    - Recovered approved registration/return behavior.

11. `HAND`
    - Canonical specimen: H1 Quick Ink.
    - Approved in the dedicated Hand/Compile lab.

12. `COMPILE` / `COMPILE_INTERPRET`
    - Canonical specimen: C3 Cell Lock.
    - Generic mechanic; must not require hard-coded output for every new word/phrase.

13. `AGENCY` / `AGENCY_GO`
    - Recovered from the historical Sept. 26 House Mechanics Lab in `emptychair1/the-house-that-remembers`.
    - Choice expressed spatially: target commits to direction and leaves.
    - Approved implementation: 1.5s movement to `translateX(90px)` with `cubic-bezier(.2,.8,.2,1)`.

14. `ABSENCE`
    - Recovered from the historical Sept. 26 House Mechanics Lab.
    - Canonical meaning: one-two-gone.
    - Approved implementation: `.7s steps(1,end)`: present → partial → absent, then remains absent.

## Shared structural requirement

Approved lab specimens were auditioned on a positioned inline target. Production originally omitted that anchor, which made child-element mechanics such as GLINT and ORGANIC appear not to fire even though their JavaScript executed.

Every mechanic routed through the shared `live()` helper must receive `hm-target`, which supplies:

```css
position: relative;
display: inline-block;
```

Do not remove this casually. It is part of the production environment required by approved specimens.

## Foreword architecture

The Foreword does not own visual implementations.

Flow:

`phrase → unique data-house-cue identifier → live-page resolution → HouseMechanicsRunner → HouseMechanics executable mechanic`

The conductor dynamically creates stable cue IDs such as `foreword-cue-01`. A bug was found where IDs were created but ignored later in favor of retained pre-PageFlip DOM references. That was corrected: targets are resolved by `data-house-cue` against the current live page when scheduling/firing.

This matters because PageFlip may clone/replace DOM nodes. Never return to retained stale target references.

## Foreword checkpoint

`THE GOOD BOOK · V14 · CANONICAL FOREWORD` is the accepted finished Foreword checkpoint as of 2026-09-27.

Josh explicitly declared: **the Foreword is done.**

Do not reopen Foreword prose, choreography, glyph escalation, or mechanics unless Josh explicitly asks.

## Recovery/audition artifacts

- `lab/recovered-approved-mechanics.html` — recovered core mechanic audition lab.
- `lab/hand-compile.html` — H1 Hand / C3 Compile selection work.
- `lab/recovered-agency-absence.html` — exact historical Agency and Absence recovery audition.

Labs are provenance/audition artifacts. Runtime authority is `house-mechanics.js` after approval.

## Rules for future mechanics work

- Never invent a replacement for a mechanic merely because the current call looks broken.
- Search historical code first when a previously approved mechanic is missing.
- Use actual book typography/context in visual labs.
- After approval, promote the exact auditioned implementation into the canonical library.
- Choreography owns *what, where, and when*. The mechanics library owns *how it looks/moves*.
- Keep one source of truth.
- Preserve resting manuscript typography and pagination. Animation scaffolding must not distort the book at rest.
- Timing is authored. Functional defaults are not automatically aesthetically approved.
