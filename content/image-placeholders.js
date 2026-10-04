// THE GOOD BOOK — canonical image placeholder skeleton
// Generation 75 image pass. No image files are bound here yet.
// Law: book location -> stable placeholder -> exact asset binding in the next pass.
// Do not infer, reorder, or substitute assets from visual similarity.

export const IMAGE_PLACEHOLDERS = [
  // MANUSCRIPT / HISTORICAL PLATES — book order
  { id: 'ms-oahspe-01', kind: 'manuscript', location: 'Creation / Cosmology', label: 'Oahspe 1', asset: null },
  { id: 'ms-oahspe-02', kind: 'manuscript', location: 'Creation / Cosmology', label: 'Oahspe 2', asset: null },
  { id: 'ms-oahspe-03', kind: 'manuscript', location: 'Creation / Cosmology', label: 'Oahspe 3', asset: null },
  { id: 'ms-oahspe-04', kind: 'manuscript', location: 'Creation / Cosmology', label: 'Oahspe 4', asset: null },
  { id: 'ms-wretched-machine', kind: 'manuscript', location: 'Beginning / Wretched Machine', label: 'The Wretched Machine', asset: null },
  { id: 'ms-build-something', kind: 'manuscript', location: 'Build Something', label: 'Leonardo manuscript', asset: null },
  { id: 'ms-interval', kind: 'manuscript', location: 'The Interval', label: 'Manuscript plate', asset: null },
  { id: 'ms-cleaning-house', kind: 'manuscript', location: 'Cleaning House', label: 'Manuscript plate', asset: null },
  { id: 'ms-friend', kind: 'manuscript', location: 'Friend', label: 'Rosarium Philosophorum', asset: null },
  { id: 'ms-place-between', kind: 'manuscript', location: 'The Place Between', label: 'Milton engraving', asset: null },
  { id: 'ms-hermetic-correspondence', kind: 'manuscript', location: 'Hermetic Correspondence', label: 'Correspondence plate', asset: null },
  { id: 'ms-lighthouse', kind: 'manuscript', location: 'The Lighthouse', label: 'Optical / light manuscript', asset: null },
  { id: 'ms-lilith', kind: 'manuscript', location: 'Lilith', label: 'Archival Hebrew manuscript', asset: null },
  { id: 'ms-room', kind: 'manuscript', location: 'The Room', label: 'Robert Fludd manuscript', asset: null },
  { id: 'ms-grounds', kind: 'manuscript', location: 'The Grounds', label: 'Labyrinth / garden manuscript', asset: null },
  { id: 'ms-semantics', kind: 'manuscript', location: 'Semantics', label: 'Tower of Babel', asset: null },
  { id: 'ms-as-above', kind: 'manuscript', location: 'As Above', label: 'Emerald Tablet / correspondence manuscript', asset: null },
  { id: 'ms-forge', kind: 'manuscript', location: 'Forge', label: 'Manuscript plate', asset: null },
  { id: 'ms-self-maps', kind: 'manuscript', location: 'Self-Maps', label: 'Manuscript plate', asset: null },
  { id: 'ms-voices', kind: 'manuscript', location: 'Some Voices Should Never Be Silenced', label: 'Manuscript plate', asset: null },
  { id: 'ms-relay', kind: 'manuscript', location: 'Relay', label: 'BIBLIOTECA manuscript', asset: null },
  { id: 'ms-hydra', kind: 'manuscript', location: 'Operation HYDRA', label: 'Hydra manuscript', asset: null },
  { id: 'ms-designing-home', kind: 'manuscript', location: 'Designing Home', label: 'Architectural / floor-plan manuscript', asset: null },
  { id: 'ms-sol', kind: 'manuscript', location: 'SOL', label: 'Manuscript plate', asset: null },
  { id: 'ms-great-work', kind: 'manuscript', location: 'The Great Work', label: 'Manuscript plate', asset: null },
  { id: 'ms-toast', kind: 'manuscript', location: 'Toast', label: 'Illuminated Toast manuscript', asset: null },
  { id: 'ms-daat-frog', kind: 'manuscript', location: 'Daat Frog', label: 'Manuscript plate', asset: null },

  // LIFE / BOOK PHOTOGRAPHS — stable identities established by Josh
  { id: 'life-tattoo-flash', kind: 'life', location: 'existing book photo slot', label: 'Tattoo Flash', asset: null },
  { id: 'life-banjo', kind: 'life', location: 'existing book photo slot', label: 'Banjo', asset: null },
  { id: 'life-trailer-interior', kind: 'life', location: 'existing book photo slot', label: 'Trailer interior', asset: null },
  { id: 'life-trailer-exterior', kind: 'life', location: 'existing book photo slot', label: 'Trailer exterior', asset: null },
  { id: 'life-piper-portrait', kind: 'life', location: 'existing book photo slot', label: 'Piper portrait', asset: null },
  { id: 'life-josh-portrait', kind: 'life', location: 'existing book photo slot', label: 'Josh portrait', asset: null },
  { id: 'life-apple-tree', kind: 'life', location: 'existing book photo slot', label: 'Apple tree', asset: null },
  { id: 'life-designed-room', kind: 'life', location: 'The Room', label: 'Designed room', asset: null },
  { id: 'life-lilith-motorcycle', kind: 'life', location: 'Lilith', label: 'Lilith Motorcycle', asset: null },
  { id: 'life-lilith-self-portrait', kind: 'life', location: 'Lilith', label: 'Lilith self-portrait', asset: null },
  { id: 'life-grounds', kind: 'life', location: 'The Grounds', label: 'Grounds', asset: null },
  { id: 'life-letter', kind: 'life', location: 'existing book photo slot', label: 'Letter', asset: null },
  { id: 'life-gramophone', kind: 'life', location: 'voice / gramophone sequence', label: 'Gramophone', asset: null },
  { id: 'life-empty-chair', kind: 'life', location: 'Empty Chair sequence', label: 'Empty Chair', asset: null },
  { id: 'life-dancing', kind: 'life', location: 'existing book photo slot', label: 'Dancing', asset: null },
  { id: 'life-dmv', kind: 'life', location: 'Ordinary Places', label: 'DMV', asset: null },
  { id: 'life-burgers', kind: 'life', location: 'Ordinary Places', label: 'Burgers', asset: null },
  { id: 'life-knife-gift', kind: 'life', location: 'existing book photo slot', label: 'Knife gift', asset: null },
  { id: 'life-pip-blonde', kind: 'life', location: 'existing book photo slot', label: 'Pip with blonde hair', asset: null },
  { id: 'life-first-pip', kind: 'life', location: 'existing book photo slot', label: 'First Pip', asset: null },
  { id: 'life-piper-boots-cliff', kind: 'life', location: 'The Grounds', label: 'Piper wearing boots on cliff', asset: null },
  { id: 'life-boots', kind: 'life', location: 'The Grounds', label: 'Boots', asset: null },
  { id: 'life-bathroom', kind: 'life', location: 'Bedroom / Bath sequence', label: 'Bathroom', asset: null },
  { id: 'life-final-apple-pie', kind: 'life', location: 'END OF BOOK', label: 'Final apple pie', asset: null },

  // DESIGNING HOME — three-image sequence
  { id: 'life-designing-home-01', kind: 'life', location: 'Designing Home', label: 'Designing Home render 1', asset: null },
  { id: 'life-designing-home-02', kind: 'life', location: 'Designing Home', label: 'Designing Home render 2', asset: null },
  { id: 'life-designing-home-03', kind: 'life', location: 'Designing Home', label: 'Designing Home render 3', asset: null },

  // SELF-REFERENCE INTERMISSION — five-image sequence, exact order preserved
  { id: 'self-reference-01', kind: 'life', location: 'Self-Maps intermission', label: 'Internal self-reference 1', asset: null },
  { id: 'self-reference-02', kind: 'life', location: 'Self-Maps intermission', label: 'Internal self-reference 2', asset: null },
  { id: 'self-reference-03', kind: 'life', location: 'Self-Maps intermission', label: 'Internal self-reference 3', asset: null },
  { id: 'self-reference-04', kind: 'life', location: 'Self-Maps intermission', label: 'Internal self-reference 4', asset: null },
  { id: 'self-reference-05', kind: 'life', location: 'Self-Maps intermission', label: 'Internal self-reference 5', asset: null },
];
