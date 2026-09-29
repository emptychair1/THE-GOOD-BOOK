# HOUSE MECHANICS — APPROVED CANON

Status: LOCKED CREATIVE SOURCE OF TRUTH  
Core approved: 2026-09-27  
Dark-room expansion approved: 2026-09-28  
Runtime source: `house-mechanics.js`  
Foreword adapter: `house-mechanics-runners.js`

## Non-negotiable rule

Do not redesign, approximate, duplicate, or locally reimplement an approved mechanic inside page choreography. Pages/conductors identify a target and mechanic; adapters call the executable mechanic in `house-mechanics.js`.

If a mechanic appears wrong in production, diagnose targeting, lifecycle, CSS anchoring, page geometry, or adapter wiring before changing the mechanic itself.

`locked: true` in the runtime is a logical/provenance marker, not GitHub permission enforcement. Treat changes to approved mechanics as requiring explicit Josh approval.

## Architecture rule

**Choreography owns what, where, and when. House Mechanics owns how it looks and moves.**

Audition work happens in `lab/`. Once Josh explicitly approves a specimen, promote that implementation into `house-mechanics.js`. The lab then becomes provenance, not runtime authority.

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

These were developed and repeatedly auditioned on black pages in `lab/dark-mechanics.html` and explicitly approved on 2026-09-28. They are now executable canon in House Mechanics v1.2.

15. `CAST`
   - A moving light field reveals otherwise nearly absent typography.
   - The light moves; the text does not.

16. `SHUTTER`
   - A narrow aperture opens across text and closes again.
   - The shutter can later host authored shadows/figures/glyph silhouettes in choreography without changing the canonical opening mechanic.

17. `PHOSPHOR`
   - Brief hard exposure followed by a decaying silver afterimage.
   - Darkroom/photo-memory vocabulary, not a scanner.

18. `PALIMPSEST`
   - Earlier language remains materially present beneath the current language.
   - Uses damaged/partial silver visibility rather than a scanning reveal.

19. `BEAM`
   - Approved final behavior: soft moving beam plus the **actual source text rendered hard white** where illuminated.
   - Do not substitute glyph fragments for the source text.
   - Glow is secondary; hard white text is the illumination event.

20. `REAGENT`
   - Selected symbols/terms chemically develop from low visibility through hard white and settle back.
   - No diagnostic scan motif.

21. `ACCUMULATE`
   - Repeated exposures build records in almost the same registration.
   - Runtime returns an `expose()` control so choreography owns when each exposure is added.

22. `REFLECTION`
   - Approved V10 reflection: quiet mirrored typography directly beneath the source with continuous smooth water displacement.
   - Canon opacity is intentionally low (`.36`).
   - Do not replace the smooth displacement with strip slicing/pixelated movement.

23. `VERSO`
   - Approved V10 architecture: **full page over full page**, registered in the same page box.
   - During exposure the front remains present and optically thin while the actual underlying page bleeds through in cold bluish-silver density.
   - It is not a page swap and not an inset card.
   - Runtime requires `frontEl` and `underEl`; choreography supplies the real page surfaces.

### Rejected dark-room mechanic

`RELIEF` is explicitly rejected. Multiple auditions failed to make the black-on-black embossed/debossed treatment communicate strongly enough. Do not quietly resurrect it. A future reconsideration would be a new audition, not continuation of the approved dark-room set.

## Dark-room palette and restraint

Dark mechanics are authored for black paper. Their visual vocabulary is cream/white plus cold silver or very subtly bluish silver-white where photographic/radiographic behavior requires it. Do not drift into decorative color.

Avoid turning every dark-page effect into a scan. DIAGNOSTIC already owns scanning. Dark-room mechanics should remain materially distinct: light, aperture, exposure, chemistry, accumulation, reflection, transmission.

## Shared structural requirement

Mechanics routed through `live()` receive `hm-target`:

```css
position: relative;
display: inline-block;
```

This anchor is part of the approved production environment. Child/overlay mechanics depend on it.

Some dark mechanics require larger composition hosts rather than a single inline word. In particular, `VERSO` requires a positioned host containing full registered `frontEl` and `underEl` page surfaces. Do not squeeze page-level mechanics into inline geometry.

## Runtime API examples

```js
HouseMechanics.cast(target);
HouseMechanics.shutter(target);
HouseMechanics.phosphor(target);
HouseMechanics.palimpsest(target, previousText);
HouseMechanics.beam(target);
HouseMechanics.reagent(equationEl, '.hm-react');

const record = HouseMechanics.accumulate(target);
record.expose();

HouseMechanics.reflection(target);
HouseMechanics.verso(pageHost, { frontEl, underEl });
```

These are reusable mechanics, not instructions to fire everything automatically. Choreography remains responsible for target selection, sequence, timing, duration in the larger page composition, and whether a mechanic belongs on a page at all.

## Foreword checkpoint

`THE GOOD BOOK · V14 · CANONICAL FOREWORD` remains the accepted finished Foreword checkpoint as of 2026-09-27. Do not reopen Foreword prose or choreography unless Josh explicitly asks.

## Recovery/audition artifacts

- `lab/recovered-approved-mechanics.html` — recovered core mechanics.
- `lab/hand-compile.html` — H1 Hand / C3 Compile selection.
- `lab/recovered-agency-absence.html` — historical Agency and Absence recovery.
- `lab/dark-mechanics.html` — dark-room development; V10 contains the final approved REFLECTION and VERSO audition and records the end of the dark-room pass.

## Rules for future mechanics work

- Never invent a replacement merely because an approved mechanic looks broken in production.
- Search historical code first when a previously approved mechanic is missing.
- Use actual book typography/context in visual labs.
- After approval, promote the exact auditioned behavior into the canonical library.
- Keep one runtime source of truth.
- Preserve resting manuscript typography and pagination.
- Animation scaffolding must not distort the book at rest.
- Timing is authored; functional defaults are not automatically aesthetically approved.
- Approved mechanics should disappear from subsequent audition labs unless they are needed as controls/reference specimens.
