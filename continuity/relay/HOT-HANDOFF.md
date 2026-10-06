# HOT HANDOFF

HANDOFF_GENERATION: 77
DATE: 2026-10-05
PROJECT: THE GOOD BOOK · The House That Remembers
REPO: `emptychair1/THE-GOOD-BOOK`
BRANCH: `main`

## LIVE EDGE

**ACT ONE / THE DARK SAGA IS OFFICIALLY APPROVED, DONE, AND LOCKED.**

Josh's approval: **“Act One is officially approved and done.”**

Do not resume repairs in Act One unless Josh explicitly reopens it. The next production territory is **Act Two / the light chapters**.

## ACT ONE FINAL LOCK

The approved dark visual system is now production canon:
- dark substrate `#171715`
- shadow-on-dark visual law
- approved typography/page rhythm
- approved full-bleed plates and interruptions
- approved dark image CSS
- four source-polarity inversions only
- working Void numeric encounter

### Dark image treatment
Baseline approved image treatment:
`filter: grayscale(1) contrast(2)`
`mix-blend-mode: multiply`
`opacity: .94`

Only these four source files require inversion prepended to that exact chain:
- `IMG_3682.png`
- `IMG_3738.png`
- `IMG_3739.png`
- `IMG_3740.png`

For those four:
`filter: invert(1) grayscale(1) contrast(2)`

Do not generalize this inversion. It exists because those source images have opposite tonal polarity. The experiment was proven in `labs/image-substrate-lab.html` before production insertion.

### Void repair
`content/void-v21.js` was not broken internally. It was imported without being bound. Final repair in `src/main.js`:
- import bumped to `../content/void-v21.js?v=201`
- immediately call `window.HouseVoidV21?.bind();`

Josh visually confirmed the Void works after this repair.

## WORKFLOW LAW LEARNED FROM THE DARK PASS

The recurring failure mode was drift between an approved lab specimen and production implementation. Going forward:
1. Diagnose before editing.
2. Change one variable at a time in a lab when the cause is uncertain.
3. Once Josh approves a lab, transplant the exact relevant CSS/logic. Do not reinterpret it.
4. Before reporting success, re-fetch production code and verify the exact rule is present.
5. Prefer exact filenames/structural anchors over rendered page numbers.
6. Commit is not visual approval. Josh's visual confirmation is the lock.
7. Do not touch already approved neighboring pages while repairing one target.
8. Provide a live URL after deploy-affecting work.

## BOOK CANON STILL LOCKED

Act III order remains:
I · The Lighthouse
II · Lilith
III · The Room
IV · The Grounds
V · Pip
VI · Semantics
VII · As Above
VIII · Forge
• Self-Maps
IX · Some Voices Should Never Be Silenced
X · Ordinary Places
XI · Relay
XII · Operation HYDRA
XIII · Designing Home
XIV · SOL
XV · The Great Work
XVI · `if (life.givesYou(apples)) { make(fuckingPie); }`

There is no Toast chapter. Final dialogue remains:
- JOSH: `Fuck this book.`
- PIPER: `Eat your pie. 🖤`

The final apple pie remains the absolute ending image. The book does not show the move into Home succeeding.

## VISUAL / ARTIFACT LAWS THAT REMAIN CANON

- LIGHT = ghost on light.
- DARK = shadow on dark.
- `--house-paper: #e4e4e2`
- `--house-paper-mark: #8f8f8a`
- `--house-ink: #171715`
- `--house-ink-mark: #777772`
- A = asymmetric / lyrical / intimate artifact family.
- D = modernist / quiet / default memory family.
- Full bleed remains valid when the image must become the page.
- The artifact dictates orientation. Preserve aspect ratio; never stretch.
- Original pressed artifacts remain untouched unless Josh explicitly asks otherwise.
- Frozen Numeric Printing Press remains `lab/numerical-press-tool.html` governed by `lab/numerical-press-tool.FROZEN.md`.

## PRODUCTION LAW

- `main` branch unless Josh explicitly changes it.
- Small reversible bites.
- No service-worker caching architecture should be reintroduced casually.
- Preserve automatic/reliable build identification rather than hand-maintained labels.
- Preserve approved page structure and dialogue grammar.
- Do not reopen settled chronology casually.
- Do not use image generation for artifact treatment unless Josh explicitly asks.

## NEXT MOVE AFTER RELAY

**Begin the Act Two / light-chapter finishing pass.**

Act One is not the staging area anymore. It is finished work. Leave the dark rooms intact and move into the light. ☀️🖤
