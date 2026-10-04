// THE GOOD BOOK · image slots
// Bite 1: placement only. Bite 2 supplies BOOK_IMAGE_FILES in the same order.
// Mapping law is intentionally dumb: slots[i] <-> files[i].

export const BOOK_IMAGE_FILES = [];

const book = document.querySelector('#book');
if (book && book.dataset.imageSlotsInstalled !== 'true') {
  book.dataset.imageSlotsInstalled = 'true';

  const makeSlot = (label) => {
    const page = document.createElement('section');
    page.className = 'page book-image-slot is-light';
    page.dataset.substrate = 'paper';
    page.dataset.bookImage = '';
    page.innerHTML = `<div class="book-image-slot-label">${label}</div>`;
    return page;
  };

  const pages = () => [...book.querySelectorAll('section.page')];
  const after = (anchor, label) => {
    if (!anchor) return null;
    const slot = makeSlot(label);
    anchor.after(slot);
    return slot;
  };
  const title = (text) => [...book.querySelectorAll('h1')].find(h => h.textContent.trim().toUpperCase() === text.toUpperCase())?.closest('section.page');
  const text = (rx, reverse=false) => {
    const list=pages(); if(reverse) list.reverse(); return list.find(p=>rx.test(p.textContent));
  };

  // Manuscript / historical plates.
  let a = text(/Oahspe|cosmolog|creation/i);
  if (a) for (const label of ['OAHSPE 1','OAHSPE 2','OAHSPE 3','OAHSPE 4']) a = after(a,label);
  after(text(/wretched machine/i),'WRETCHED MACHINE');
  after(text(/Build Something/i),'BUILD SOMETHING');
  after(text(/The Interval/i),'THE INTERVAL');
  after(text(/Cleaning House/i),'CLEANING HOUSE');
  after(text(/\bFriend\b/i),'FRIEND');
  after(text(/The Place Between/i),'THE PLACE BETWEEN');
  after(text(/Hermetic Correspondence/i),'HERMETIC CORRESPONDENCE');

  const chapterSlots = [
    ['THE LIGHTHOUSE','LIGHTHOUSE MANUSCRIPT'],['LILITH','LILITH MANUSCRIPT'],['THE ROOM','ROOM MANUSCRIPT'],
    ['THE GROUNDS','GROUNDS MANUSCRIPT'],['SEMANTICS','SEMANTICS MANUSCRIPT'],['AS ABOVE','AS ABOVE MANUSCRIPT'],
    ['FORGE','FORGE MANUSCRIPT'],['SOME VOICES SHOULD NEVER BE SILENCED','VOICES MANUSCRIPT'],['RELAY','RELAY MANUSCRIPT'],
    ['OPERATION HYDRA','HYDRA MANUSCRIPT'],['DESIGNING HOME','DESIGNING HOME MANUSCRIPT'],['SOL','SOL MANUSCRIPT'],
    ['THE GREAT WORK','GREAT WORK MANUSCRIPT'],['TOAST','TOAST MANUSCRIPT']
  ];
  chapterSlots.forEach(([t,l])=>after(title(t),l));

  // Self-Maps manuscript plate belongs immediately before the five-map intermission.
  const selfIntro=book.querySelector('.self-map-intermission-intro');
  if(selfIntro){const s=makeSlot('SELF-MAPS MANUSCRIPT');selfIntro.before(s);}

  // Daat Frog manuscript follows the consciousness diagnostic.
  after(book.querySelector('.house-listening-consciousness'),'DAAT FROG MANUSCRIPT');

  // Life / historical images. These are placement markers only.
  const life = [
    [/tattoo flash|flash sheet/i,'TATTOO FLASH'],[/Banjo/i,'BANJO'],[/trailer/i,'TRAILER EXTERIOR'],
    [/gramophone/i,'GRAMOPHONE'],[/Empty Chair/i,'EMPTY CHAIR'],[/letter.*mantle|mantle.*letter/i,'LETTER'],
    [/danc/i,'DANCING'],[/knife/i,'KNIFE GIFT'],[/blonde/i,'PIP BLONDE'],[/first Pip|first Piper/i,'FIRST PIP']
  ];
  life.forEach(([rx,l])=>after(text(rx),l));
  const trailerSlot=[...book.querySelectorAll('.book-image-slot')].find(s=>s.textContent==='TRAILER EXTERIOR'); if(trailerSlot) after(trailerSlot,'TRAILER INTERIOR');

  // Portrait pair at the established portrait/introduction neighborhood.
  const portrait=text(/portrait|ASCII|Matrix|Joshua|Josh/i); if(portrait){let p=after(portrait,'JOSH PORTRAIT');after(p,'PIPER PORTRAIT');}

  // Named Act III life sequences.
  let lilith=title('LILITH'); if(lilith){let p=after(lilith,'LILITH MOTORCYCLE');after(p,'LILITH SELF-PORTRAIT');}
  let room=title('THE ROOM'); if(room){let p=after(room,'DESIGNED ROOM');after(p,'BATHROOM');}
  let grounds=title('THE GROUNDS'); if(grounds) after(grounds,'GROUNDS PHOTO');

  // Grounds exact artifact beats supplied by the chapter repair module.
  const groundsArtifacts=[['GOLD_SHOES_GIFT','BOOTS'],['GOLD_BOOTS_EDGE','PIPER BOOTS CLIFF'],['APPLE_TREE_RANDOM_ACTORS','APPLE TREE']];
  groundsArtifacts.forEach(([id,l])=>after(book.querySelector(`[data-artifact="${id}"]`),l));

  // Ordinary Places.
  after(text(/DMV/i),'DMV');
  after(text(/burger/i),'BURGERS');

  // Designing Home has two approved renders after L19 was removed from this sequence.
  let home=title('DESIGNING HOME'); if(home){let p=after(home,'DESIGNING HOME 1');after(p,'DESIGNING HOME 2');}

  // Existing five Self-Map pages become the five ordered slots rather than adding duplicate pages.
  [...book.querySelectorAll('[data-self-map]')].forEach((p,i)=>{
    p.dataset.bookImage=''; p.classList.add('book-image-slot'); p.innerHTML=`<div class="book-image-slot-label">SELF-REFERENCE ${i+1}</div>`;
  });

  // Final photograph is the final page of the book.
  after(text(/Eat your pie\./i,true),'FINAL APPLE PIE');

  // Number every slot strictly by final DOM/book order.
  const slots=[...book.querySelectorAll('[data-book-image]')];
  slots.forEach((slot,i)=>{slot.dataset.bookImageIndex=String(i);const label=slot.querySelector('.book-image-slot-label');if(label)label.textContent=`${String(i+1).padStart(2,'0')} · ${label.textContent}`;});

  // Bite 2 is the entire renderer: second array matched by i.
  if(BOOK_IMAGE_FILES.length){
    if(BOOK_IMAGE_FILES.length!==slots.length) throw new Error(`Book image arrays differ: ${slots.length} slots / ${BOOK_IMAGE_FILES.length} files`);
    slots.forEach((slot,i)=>{slot.innerHTML=`<img src="./assets/book-photos/${BOOK_IMAGE_FILES[i]}" alt="" draggable="false">`;});
  }

  window.GOOD_BOOK_IMAGE_SLOTS={count:slots.length,files:BOOK_IMAGE_FILES.length,ready:BOOK_IMAGE_FILES.length===slots.length};
}
