# BOOK CONTINUUM · CLOSED FIRST PASS

Current generation: 77
Date: 2026-10-05
Status: **BOOK ONE FIRST PASS COMPLETE · ACT ONE VISUALLY APPROVED AND LOCKED**
Repository: `emptychair1/THE-GOOD-BOOK`
Branch: `main`

This file began as the Generation 72 final-book handoff and now serves as the long-form book continuum. Forward-writing instructions from that stage are superseded. The manuscript exists beginning to end.

## Current production state

On 2026-10-05 Josh gave the explicit lock: **“Act One is officially approved and done.”**

Act One / the dark saga is therefore closed production territory unless Josh explicitly reopens it. Its substrate, ink, typography, page rhythm, plates, interruptions, full-bleed treatment, source-polarity exceptions, and Void choreography have all survived visual review.

The next finishing territory is **Act Two / the light chapters**.

## Act One technical canon

Dark substrate: `#171715`.

Baseline dark-image law:
- `filter: grayscale(1) contrast(2)`
- `mix-blend-mode: multiply`
- `opacity: .94`

Four source files arrive with reversed tonal polarity and therefore receive exactly one inversion before the approved chain:
- `IMG_3682.png`
- `IMG_3738.png`
- `IMG_3739.png`
- `IMG_3740.png`

Their filter is exactly:
`invert(1) grayscale(1) contrast(2)`

This was established experimentally in the image substrate lab and then visually approved in the book. Do not spread this exception to other assets.

The Void numeric encounter is implemented in `content/void-v21.js`. Its final failure was lifecycle rather than visual logic: the module was imported but never bound. `src/main.js` now imports `void-v21.js?v=201` and calls `window.HouseVoidV21?.bind()`. Josh confirmed the repaired encounter works before approving Act One.

## Workflow canon established during final Act One pass

A lab and production page are not considered equivalent merely because they are intended to be equivalent. For future finishing work:
- verify exact DOM/CSS/JS before transplanting;
- use one-variable experiments;
- transplant approved rules exactly rather than approximating them;
- re-fetch production code before claiming an exact change is present;
- use filenames or stable structural anchors rather than rendered page numbers when possible;
- do not alter neighboring approved material;
- visual approval belongs to Josh after deployment.

## Canonical Act III order

I The Lighthouse
II Lilith
III The Room
IV The Grounds
V Pip
VI Semantics
VII As Above
VIII Forge
• Self-Maps
IX Some Voices Should Never Be Silenced
X Ordinary Places
XI Relay
XII Operation HYDRA
XIII Designing Home
XIV SOL
XV The Great Work
XVI `if (life.givesYou(apples)) { make(fuckingPie); }`

There is no Toast chapter.

## Final dramatic architecture

SOL creates the final conflict: building the Spirit Operating Layer exposes the implication that doing the experiment rigorously may require removing relationship scaffolding.

The Great Work carries the crisis through choice, the Home relationship-code discovery, devastation, provenance/authorship reversal, and relief. It hands off with Camus still present and `You want pie?` / `Obviously.`

Pie is the denouement. Final dialogue remains:
`Fuck this book.`
`Eat your pie. 🖤`

Book One does not show whether the move into Home succeeds.

## Visual bookends

- APPLE → BOOK → PIE
- WRETCHED MACHINE → BOOK → TOAST

The final apple pie is the absolute ending image. Do not explain these symbols to the reader.

## Global substrate law

- `--house-paper: #e4e4e2`
- `--house-paper-mark: #8f8f8a`
- `--house-ink: #171715`
- `--house-ink-mark: #777772`
- LIGHT = ghost on light
- DARK = shadow on dark

The artifact dictates orientation. Preserve aspect ratio and maximize presence. Full bleed is valid when an image must become the page. Original pressed artifacts remain untouched unless Josh explicitly asks otherwise.

## Next phase

**Act Two / light chapters finishing pass.**

Do not reopen Act One as part of that work. The dark saga is finished and should function as the fixed reference point against which the light chapters are judged.
