# V288 Image Corpus Installation Audit

Forensic pass only. This file does not change the live book.

## Root failure
`content/image-installation.js` writes every corpus image URL as `../assets/book-photos/...` into the document DOM. DOM `<img src>` values resolve against the document URL, not the JavaScript module URL. The production book is served from the site root, so these URLs resolve one directory above the PWA root instead of to `/assets/book-photos/...`.

**Result: every image that the V288 installer successfully inserts receives a broken URL.** This explains why the corpus is not visible even where an insertion anchor succeeds.

Correct document-relative form: `./assets/book-photos/...` (or `assets/book-photos/...`).

## Second failure: seven corpus identities are never installed by V288
The installer contains no insertion rule for:
- `ms-wretched-machine`
- `life-piper-portrait`
- `life-josh-portrait`
- `life-grounds`
- `life-dancing`
- `life-pip-blonde`
- `life-first-pip`

These cannot appear even after the URL bug is fixed until exact insertion anchors are added.

## Anchor-dependent corpus
The remaining identities have installer rules, but most are conditional. If a guessed title/text needle does not exist exactly in the assembled DOM, the installer silently skips the image. V288 has no failure report or completeness assertion.

### Exact structural slots
- `self-reference-01` → Self-Map slot 1
- `self-reference-02` → Self-Map slot 2
- `self-reference-03` → Self-Map slot 3
- `self-reference-04` → Self-Map slot 4
- `self-reference-05` → Self-Map slot 5

### Grounds artifact slots
- `life-boots` → `GOLD_SHOES_GIFT`
- `life-piper-boots-cliff` → `GOLD_BOOTS_EDGE`
- `life-apple-tree` → `APPLE_TREE_RANDOM_ACTORS`

### Exact-title conditional manuscript rules
- `ms-lighthouse` → THE LIGHTHOUSE
- `ms-lilith` → LILITH
- `ms-room` → THE ROOM
- `ms-grounds` → THE GROUNDS
- `ms-semantics` → SEMANTICS
- `ms-as-above` → AS ABOVE
- `ms-forge` → THE FORGE
- `ms-self-maps` → SELF-MAPS
- `ms-voices` → SOME VOICES SHOULD NEVER BE SILENCED
- `ms-relay` → RELAY
- `ms-hydra` → OPERATION HYDRA
- `ms-designing-home` → DESIGNING HOME
- `ms-sol` → SOL
- `ms-great-work` → THE GREAT WORK
- `ms-toast` → TOAST

### Text-needle conditional manuscript rules
- `ms-build-something` → first page containing “Build Something”
- `ms-interval` → first page containing “The Interval”
- `ms-cleaning-house` → first page containing “Cleaning House”
- `ms-friend` → first page containing “Friend”
- `ms-place-between` → first page containing “The Place Between”
- `ms-hermetic-correspondence` → first page containing “Hermetic Correspondence”

### Oahspe conditional run
First page matching `/Oahspe|cosmolog|creation/i`, then:
- `ms-oahspe-01`
- `ms-oahspe-02`
- `ms-oahspe-03`
- `ms-oahspe-04`

### Life-photo text-needle rules
- `life-tattoo-flash` → first tattoo-flash/flash-sheet match
- `life-banjo` → first “Banjo” match
- `life-trailer-exterior` → first “trailer” match
- `life-trailer-interior` → immediately after exterior if exterior was installed
- `life-gramophone` → first “gramophone” match
- `life-empty-chair` → first “Empty Chair” match
- `life-lilith-motorcycle` → first “motorcycle” match
- `life-lilith-self-portrait` → first self-portrait match
- `life-letter` → first mantle/letter regex match
- `life-dmv` → first “DMV” match
- `life-burgers` → first “burger” match
- `life-knife-gift` → first “knife” match

### Dependent sequence rules
- `life-designing-home-01` → after `ms-designing-home`
- `life-designing-home-02` → after image 1
- `life-designing-home-03` → after image 2
- `life-designed-room` → after `ms-room`
- `life-bathroom` → after designed room
- `ms-daat-frog` → after `.house-listening-consciousness`
- `life-final-apple-pie` → after final page containing “Eat your pie.”

## Important duplicate binding
`life-designing-home-01` and `self-reference-01` both currently bind to `assets/book-photos/IMG_4138.png`. This reflects the approved contact-sheet statement that Self-Reference #1 is L19, which was also identified as the first Designing Home render. Do not silently change this; confirm whether the same image is intentionally used twice.

## V288 verdict
- Corpus identities documented: 59
- Identities with no V288 insertion rule: 7
- Identities with some insertion rule: 52
- Visible corpus images reliably produced by the V288 installer: **0**, because all installer-generated image URLs are one directory too high.
- Of the 52 ruled identities, many are additionally vulnerable to silent skip because their insertion anchors are heuristic text/title matches.

## Required repair order
1. Fix the URL constructor globally.
2. Add explicit anchors for the seven identities V288 never installs.
3. Replace heuristic/silent matching with deterministic chapter-local anchors or explicit source placeholders.
4. Add a pre-PageFlip completeness assertion that reports every missing corpus ID and refuses to label the build “CORPUS COMPLETE” unless all intended IDs are present.
5. Only then bump/deploy and visually inspect crop, adjacency, parity, and substrate.