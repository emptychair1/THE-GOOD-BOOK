// THE GOOD BOOK · image slots
// Placement pass only. File binding stays empty until Josh approves the skeleton.
// Mapping law: slots[i] <-> BOOK_IMAGE_FILES[i]. Nothing semantic participates in binding.

export const BOOK_IMAGE_FILES = [];

const book = document.querySelector('#book');
if (book && book.dataset.imageSlotsInstalled !== 'true') {
  book.dataset.imageSlotsInstalled = 'true';

  const makeSlot = () => {
    const page = document.createElement('section');
    page.className = 'page book-image-slot is-light';
    page.dataset.substrate = 'paper';
    page.dataset.bookImage = '';
    page.innerHTML = '<div class="book-image-slot-label"></div>';
    return page;
  };

  const pages = () => [...book.querySelectorAll('section.page')];
  const after = (anchor) => {
    if (!anchor) return null;
    const slot = makeSlot();
    anchor.after(slot);
    return slot;
  };
  const title = (value) => [...book.querySelectorAll('h1')].find(h => h.textContent.trim().toUpperCase() === value.toUpperCase())?.closest('section.page');
  const text = (rx, reverse = false) => {
    const list = pages();
    if (reverse) list.reverse();
    return list.find(p => rx.test(p.textContent));
  };

  // Physical placement skeleton. These anchors only decide where a blank page lives.
  // They do NOT identify or bind an image.
  let a = text(/Oahspe|cosmolog|creation/i);
  if (a) for (let n = 0; n < 4; n += 1) a = after(a);
  after(text(/wretched machine/i));
  after(text(/Build Something/i));
  after(text(/The Interval/i));
  after(text(/Cleaning House/i));
  after(text(/\bFriend\b/i));
  after(text(/The Place Between/i));
  after(text(/Hermetic Correspondence/i));

  [
    'THE LIGHTHOUSE','LILITH','THE ROOM','THE GROUNDS','SEMANTICS','AS ABOVE','FORGE',
    'SOME VOICES SHOULD NEVER BE SILENCED','RELAY','OPERATION HYDRA','DESIGNING HOME',
    'SOL','THE GREAT WORK','TOAST'
  ].forEach(t => after(title(t)));

  const selfIntro = book.querySelector('.self-map-intermission-intro');
  if (selfIntro) selfIntro.before(makeSlot());
  after(book.querySelector('.house-listening-consciousness'));

  [
    /tattoo flash|flash sheet/i,/Banjo/i,/trailer/i,/gramophone/i,/Empty Chair/i,
    /letter.*mantle|mantle.*letter/i,/danc/i,/knife/i,/blonde/i,/first Pip|first Piper/i
  ].forEach(rx => after(text(rx)));

  const trailerSlot = [...book.querySelectorAll('.book-image-slot')].find(s => {
    const prev = s.previousElementSibling;
    return prev && /trailer/i.test(prev.textContent);
  });
  if (trailerSlot) after(trailerSlot);

  const portrait = text(/portrait|ASCII|Matrix|Joshua|Josh/i);
  if (portrait) { const p = after(portrait); after(p); }

  let lilith = title('LILITH');
  if (lilith) { const p = after(lilith); after(p); }
  let room = title('THE ROOM');
  if (room) { const p = after(room); after(p); }
  const grounds = title('THE GROUNDS');
  if (grounds) after(grounds);

  ['GOLD_SHOES_GIFT','GOLD_BOOTS_EDGE','APPLE_TREE_RANDOM_ACTORS'].forEach(id => after(book.querySelector(`[data-artifact="${id}"]`)));

  after(text(/DMV/i));
  after(text(/burger/i));

  // Designing Home has exactly two approved render slots. L19 belongs to Self-Reference, not here.
  const home = title('DESIGNING HOME');
  if (home) { const p = after(home); after(p); }

  // Existing five Self-Map pages ARE the five ordered self-reference slots.
  [...book.querySelectorAll('[data-self-map]')].forEach(p => {
    p.dataset.bookImage = '';
    p.classList.add('book-image-slot');
    p.innerHTML = '<div class="book-image-slot-label"></div>';
  });

  after(text(/Eat your pie\./i, true));

  // The only visible identity is final book order: IMAGE 01, IMAGE 02, ...
  const slots = [...book.querySelectorAll('[data-book-image]')];
  slots.forEach((slot, i) => {
    slot.id = `book-image-${String(i + 1).padStart(2, '0')}`;
    slot.dataset.bookImageIndex = String(i);
    const label = slot.querySelector('.book-image-slot-label');
    if (label) label.textContent = `IMAGE ${String(i + 1).padStart(2, '0')}`;
  });

  if (BOOK_IMAGE_FILES.length) {
    if (BOOK_IMAGE_FILES.length !== slots.length) throw new Error(`Book image arrays differ: ${slots.length} slots / ${BOOK_IMAGE_FILES.length} files`);
    slots.forEach((slot, i) => {
      slot.innerHTML = `<img src="./assets/book-photos/${BOOK_IMAGE_FILES[i]}" alt="" draggable="false">`;
    });
  }

  window.GOOD_BOOK_IMAGE_SLOTS = {
    count: slots.length,
    files: BOOK_IMAGE_FILES.length,
    ready: BOOK_IMAGE_FILES.length === slots.length
  };
}
