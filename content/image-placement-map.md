# THE GOOD BOOK — Canonical Image Placement Map

Discovery pass only. No images installed by this file.

## Runtime architecture
The live book is assembled from chapter HTML in `src/main.js`, then repair/artifact modules mutate the assembled DOM before PageFlip initializes. Therefore installation must target those real HTML/JS surfaces, not the standalone placeholder manifest.

## Direct, already-explicit insertion surfaces

### Self-Maps intermission
Source: `content/act-three-intermission-self-maps.html`
Existing five sequential placeholder pages map directly:
1. `self-reference-01` → existing SELF-MAP 01 page
2. `self-reference-02` → existing SELF-MAP 02 page
3. `self-reference-03` → existing SELF-MAP 03 page
4. `self-reference-04` → existing SELF-MAP 04 page
5. `self-reference-05` → existing SELF-MAP 05 page

### The Grounds
Source/insertion engine: `content/act-three-grounds-artifacts.js`
The module already anchors historical artifact pages to exact dialogue needles. Approved corpus identities attach to the corresponding established beats rather than creating a second chronology.
- `life-boots` → GOLD_SHOES_GIFT / boots gift beat
- `life-piper-boots-cliff` → approved boots-at-edge / cliff sequence
- `life-apple-tree` → APPLE_TREE_RANDOM_ACTORS beat
- `life-grounds` → Grounds exterior sequence
- `ms-grounds` → chapter manuscript plate, adjacent to Grounds chapter opening

### Apple Pie / end of book
Source: `content/act-three-chapter-16.html`
- `life-final-apple-pie` → final artifact page after the final dialogue page (`Eat your pie. 🖤`). This is the end-of-book photograph.
- `ms-daat-frog` → Daat/consciousness sequence, adjacent to the existing HOUSE LISTENING diagnostic beat.

## Chapter-title / named-location placements
These use the named chapter/sequence locations already established in `image-placeholders.js`; installation should anchor to the matching chapter title or exact dialogue sequence in the live HTML, never by global visual inference.

### Manuscript plates
- `ms-oahspe-01` … `ms-oahspe-04` → Creation / Cosmology sequence, preserved 1→4
- `ms-wretched-machine` → beginning / Wretched Machine sequence
- `ms-build-something` → Build Something
- `ms-interval` → The Interval
- `ms-cleaning-house` → Cleaning House
- `ms-friend` → Friend
- `ms-place-between` → The Place Between
- `ms-hermetic-correspondence` → Hermetic Correspondence
- `ms-lighthouse` → The Lighthouse
- `ms-lilith` → Lilith
- `ms-room` → The Room
- `ms-semantics` → Semantics
- `ms-as-above` → As Above
- `ms-forge` → Forge
- `ms-self-maps` → Self-Maps
- `ms-voices` → Some Voices Should Never Be Silenced
- `ms-relay` → Relay
- `ms-hydra` → Operation HYDRA
- `ms-designing-home` → Designing Home
- `ms-sol` → SOL
- `ms-great-work` → The Great Work
- `ms-toast` → Toast

### Life photographs / generated-life artifacts
- `life-tattoo-flash` → established tattoo-flash life beat
- `life-banjo` → established Banjo life beat
- `life-trailer-interior` → trailer sequence, interior
- `life-trailer-exterior` → trailer sequence, exterior
- `life-piper-portrait` → Piper portrait beat
- `life-josh-portrait` → Josh portrait beat
- `life-designed-room` → The Room
- `life-lilith-motorcycle` → Lilith
- `life-lilith-self-portrait` → Lilith
- `life-letter` → established letter/mantle beat
- `life-gramophone` → voice / gramophone sequence
- `life-empty-chair` → Empty Chair sequence
- `life-dancing` → established dancing life beat
- `life-dmv` → Ordinary Places / DMV
- `life-burgers` → Ordinary Places / burgers
- `life-knife-gift` → established knife-gift beat
- `life-pip-blonde` → established Piper/blonde image beat
- `life-first-pip` → first-Piper image beat
- `life-bathroom` → Bedroom / Bath sequence

### Designing Home
- `life-designing-home-01` → Designing Home sequence image 1
- `life-designing-home-02` → Designing Home sequence image 2
- `life-designing-home-03` → Designing Home sequence image 3
The existing Hydra naming repair remains chronology-preserving and must not be displaced by image installation.

## Installation law
1. Use only the approved bindings in `content/image-bindings.js` and the two approved contact-sheet identities M29/M30.
2. Preserve Oahspe and Self-Maps internal order exactly.
3. Existing exact artifact needles win over broad chapter-title placement.
4. Add no captions, interpretation, dates, or chronology claims to image-only pages unless already canonical.
5. Do not remove dialogue or repair modules to make room for an image.
6. Install before PageFlip initialization so pagination sees every image page.
7. After installation, bump the visible build and visually inspect crop, substrate, page parity, and chapter adjacency.