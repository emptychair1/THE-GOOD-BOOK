// THE GOOD BOOK · approved corpus installer
// Runs after chapter HTML + repair modules, before PageFlip initialization.
import { IMAGE_BINDINGS } from './image-bindings.js';

const book = document.querySelector('#book');
if (!book || book.dataset.imageCorpusInstalled === 'true') {
  // idempotent under hot reloads / repeated imports
} else {
  book.dataset.imageCorpusInstalled = 'true';

  const src = id => `../${IMAGE_BINDINGS[id]}`;
  const imagePage = (id, path = IMAGE_BINDINGS[id]) => {
    const section = document.createElement('section');
    section.className = 'page canonical-image-page is-light';
    section.dataset.substrate = 'paper';
    section.dataset.canonicalImage = id;
    section.innerHTML = `<img src="../${path}" alt="" draggable="false">`;
    return section;
  };

  // Exact existing five-page intermission.
  const selfMapIds = ['self-reference-01','self-reference-02','self-reference-03','self-reference-04','self-reference-05'];
  [...book.querySelectorAll('[data-self-map]')].forEach((page, i) => {
    const id = selfMapIds[i];
    if (!id || !IMAGE_BINDINGS[id]) return;
    page.classList.add('canonical-image-page');
    page.dataset.canonicalImage = id;
    page.innerHTML = `<img src="${src(id)}" alt="" draggable="false">`;
  });

  // Exact pre-existing Grounds artifact slots.
  const groundsBindings = {
    GOLD_SHOES_GIFT: 'life-boots',
    GOLD_BOOTS_EDGE: 'life-piper-boots-cliff',
    APPLE_TREE_RANDOM_ACTORS: 'life-apple-tree'
  };
  Object.entries(groundsBindings).forEach(([artifact,id]) => {
    const page = book.querySelector(`[data-artifact="${artifact}"]`);
    if (!page || !IMAGE_BINDINGS[id]) return;
    page.className = 'page canonical-image-page is-light';
    page.dataset.substrate = 'paper';
    page.dataset.canonicalImage = id;
    page.innerHTML = `<img src="${src(id)}" alt="" draggable="false">`;
  });

  // Named chapter/sequence anchors. These insert one page immediately after the title page.
  const named = [
    ['THE LIGHTHOUSE','ms-lighthouse'],
    ['LILITH','ms-lilith'],
    ['THE ROOM','ms-room'],
    ['THE GROUNDS','ms-grounds'],
    ['SEMANTICS','ms-semantics'],
    ['AS ABOVE','ms-as-above'],
    ['THE FORGE','ms-forge'],
    ['SELF-MAPS','ms-self-maps'],
    ['SOME VOICES SHOULD NEVER BE SILENCED','ms-voices'],
    ['RELAY','ms-relay'],
    ['OPERATION HYDRA','ms-hydra'],
    ['DESIGNING HOME','ms-designing-home'],
    ['SOL','ms-sol'],
    ['THE GREAT WORK','ms-great-work'],
    ['TOAST','ms-toast']
  ];
  const titles = [...book.querySelectorAll('.act-three-title-page h1, .chapter-title h1, h1')];
  named.forEach(([label,id]) => {
    if (!IMAGE_BINDINGS[id] || book.querySelector(`[data-canonical-image="${id}"]`)) return;
    const h = titles.find(el => el.textContent.trim().toUpperCase() === label);
    const titlePage = h?.closest('section.page, section');
    if (titlePage) titlePage.after(imagePage(id));
  });

  // Exact text anchors for earlier named sequences where title markup varies.
  const textAnchors = [
    ['Build Something','ms-build-something'],
    ['The Interval','ms-interval'],
    ['Cleaning House','ms-cleaning-house'],
    ['Friend','ms-friend'],
    ['The Place Between','ms-place-between'],
    ['Hermetic Correspondence','ms-hermetic-correspondence']
  ];
  const pages = () => [...book.querySelectorAll('section.page, #book > section')];
  textAnchors.forEach(([needle,id]) => {
    if (!IMAGE_BINDINGS[id] || book.querySelector(`[data-canonical-image="${id}"]`)) return;
    const anchor = pages().find(p => p.textContent.includes(needle));
    if (anchor) anchor.after(imagePage(id));
  });

  // Oahspe / cosmology: preserve approved internal order 1→4.
  const cosmology = pages().find(p => /Oahspe|cosmolog|creation/i.test(p.textContent));
  if (cosmology) {
    let anchor = cosmology;
    ['ms-oahspe-01','ms-oahspe-02','ms-oahspe-03','ms-oahspe-04'].forEach(id => {
      if (!book.querySelector(`[data-canonical-image="${id}"]`)) {
        const page = imagePage(id); anchor.after(page); anchor = page;
      }
    });
  }

  // Life-image exact dialogue / chapter beats. First matching page wins; no global visual inference.
  const life = [
    [/tattoo flash|flash sheet/i,'life-tattoo-flash'],
    [/Banjo/i,'life-banjo'],
    [/trailer/i,'life-trailer-exterior'],
    [/gramophone/i,'life-gramophone'],
    [/Empty Chair/i,'life-empty-chair'],
    [/motorcycle/i,'life-lilith-motorcycle'],
    [/self.?portrait/i,'life-lilith-self-portrait'],
    [/letter.*mantle|mantle.*letter/i,'life-letter'],
    [/DMV/i,'life-dmv'],
    [/burger/i,'life-burgers'],
    [/knife/i,'life-knife-gift']
  ];
  life.forEach(([rx,id]) => {
    if (book.querySelector(`[data-canonical-image="${id}"]`)) return;
    const anchor = pages().find(p => rx.test(p.textContent));
    if (anchor) anchor.after(imagePage(id));
  });

  // Trailer interior follows exterior when the trailer beat exists.
  const trailerExterior = book.querySelector('[data-canonical-image="life-trailer-exterior"]');
  if (trailerExterior && !book.querySelector('[data-canonical-image="life-trailer-interior"]')) trailerExterior.after(imagePage('life-trailer-interior'));

  // Designing Home approved three-image run, directly after its manuscript plate.
  const designingMs = book.querySelector('[data-canonical-image="ms-designing-home"]');
  if (designingMs) {
    let anchor = designingMs;
    ['life-designing-home-01','life-designing-home-02','life-designing-home-03'].forEach(id => {
      if (!book.querySelector(`[data-canonical-image="${id}"]`)) { const page=imagePage(id); anchor.after(page); anchor=page; }
    });
  }

  // Daat manuscript adjacent to the existing House Listening consciousness diagnostic.
  const daat = book.querySelector('.house-listening-consciousness');
  if (daat && !book.querySelector('[data-canonical-image="ms-daat-frog"]')) daat.after(imagePage('ms-daat-frog'));

  // Contact-sheet IDs M29/M30 are canonical identities; resolve by the uploaded corpus ordering aliases at runtime only when filenames are supplied in markup.
  // Final pie deliberately remains a named slot if its filename has not been translated from M29 yet.
  const finalDialogue = [...pages()].reverse().find(p => p.textContent.includes('Eat your pie.'));
  if (finalDialogue && !book.querySelector('[data-canonical-image="life-final-apple-pie"]')) {
    const slot=document.createElement('section');
    slot.className='page canonical-image-page canonical-contact-slot is-light';
    slot.dataset.substrate='paper'; slot.dataset.canonicalImage='life-final-apple-pie'; slot.dataset.contactSheet='M29';
    finalDialogue.after(slot);
  }
}