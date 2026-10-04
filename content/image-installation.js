// THE GOOD BOOK · approved corpus installer
// Runs after chapter HTML + repair modules, before PageFlip initialization.
import { IMAGE_BINDINGS } from './image-bindings.js';

const book=document.querySelector('#book');
if(book&&book.dataset.imageCorpusInstalled!=='true'){
  book.dataset.imageCorpusInstalled='true';
  const src=id=>`./${IMAGE_BINDINGS[id]}`;
  const imagePage=id=>{const s=document.createElement('section');s.className='page canonical-image-page is-light';s.dataset.substrate='paper';s.dataset.canonicalImage=id;s.innerHTML=`<img src="${src(id)}" alt="" draggable="false">`;return s;};
  const pages=()=>[...book.querySelectorAll('section.page,#book>section')];
  const insertAfter=(anchor,id)=>{if(!anchor||!IMAGE_BINDINGS[id]||book.querySelector(`[data-canonical-image="${id}"]`))return null;const p=imagePage(id);anchor.after(p);return p;};
  const findText=(rx,reverse=false)=>{const list=pages();if(reverse)list.reverse();return list.find(p=>rx.test(p.textContent));};
  const findTitle=label=>[...book.querySelectorAll('.act-three-title-page h1,.chapter-title h1,h1')].find(el=>el.textContent.trim().toUpperCase()===label)?.closest('section.page,section');

  // Five explicit Self-Maps pages.
  ['self-reference-01','self-reference-02','self-reference-03','self-reference-04','self-reference-05'].forEach((id,i)=>{const p=book.querySelector(`[data-self-map="${i+1}"]`);if(p&&IMAGE_BINDINGS[id]){p.classList.add('canonical-image-page');p.dataset.canonicalImage=id;p.innerHTML=`<img src="${src(id)}" alt="" draggable="false">`;}});

  // Exact Grounds slots already established by historical dialogue needles.
  const grounds={GOLD_SHOES_GIFT:'life-boots',GOLD_BOOTS_EDGE:'life-piper-boots-cliff',APPLE_TREE_RANDOM_ACTORS:'life-apple-tree'};
  Object.entries(grounds).forEach(([slot,id])=>{const p=book.querySelector(`[data-artifact="${slot}"]`);if(p&&IMAGE_BINDINGS[id]){p.className='page canonical-image-page is-light';p.dataset.substrate='paper';p.dataset.canonicalImage=id;p.innerHTML=`<img src="${src(id)}" alt="" draggable="false">`;}});

  // Manuscript plates with named chapter anchors.
  [['THE LIGHTHOUSE','ms-lighthouse'],['LILITH','ms-lilith'],['THE ROOM','ms-room'],['THE GROUNDS','ms-grounds'],['SEMANTICS','ms-semantics'],['AS ABOVE','ms-as-above'],['THE FORGE','ms-forge'],['SELF-MAPS','ms-self-maps'],['SOME VOICES SHOULD NEVER BE SILENCED','ms-voices'],['RELAY','ms-relay'],['OPERATION HYDRA','ms-hydra'],['DESIGNING HOME','ms-designing-home'],['SOL','ms-sol'],['THE GREAT WORK','ms-great-work'],['TOAST','ms-toast']].forEach(([title,id])=>insertAfter(findTitle(title),id));
  [['Build Something','ms-build-something'],['The Interval','ms-interval'],['Cleaning House','ms-cleaning-house'],['Friend','ms-friend'],['The Place Between','ms-place-between'],['Hermetic Correspondence','ms-hermetic-correspondence']].forEach(([needle,id])=>insertAfter(findText(new RegExp(needle,'i')),id));

  // Wretched Machine at its established beginning sequence.
  insertAfter(findText(/wretched machine/i),'ms-wretched-machine');

  // Oahspe manuscript run, exact 1→4 order.
  const cosmology=findText(/Oahspe|cosmolog|creation/i);if(cosmology){let a=cosmology;['ms-oahspe-01','ms-oahspe-02','ms-oahspe-03','ms-oahspe-04'].forEach(id=>{const p=insertAfter(a,id);if(p)a=p;});}

  // Life beats with textual anchors.
  [[/tattoo flash|flash sheet/i,'life-tattoo-flash'],[/Banjo/i,'life-banjo'],[/trailer/i,'life-trailer-exterior'],[/gramophone/i,'life-gramophone'],[/Empty Chair/i,'life-empty-chair'],[/motorcycle/i,'life-lilith-motorcycle'],[/self.?portrait/i,'life-lilith-self-portrait'],[/letter.*mantle|mantle.*letter/i,'life-letter'],[/DMV/i,'life-dmv'],[/burger/i,'life-burgers'],[/knife/i,'life-knife-gift'],[/danc/i,'life-dancing'],[/blonde hair|blond hair|blonde/i,'life-pip-blonde'],[/first Pip|first Piper/i,'life-first-pip']].forEach(([rx,id])=>insertAfter(findText(rx),id));

  const trailer=book.querySelector('[data-canonical-image="life-trailer-exterior"]');if(trailer)insertAfter(trailer,'life-trailer-interior');

  // Portrait pair: preserve Josh → Piper order at the first portrait/introduction beat available.
  const portraitAnchor=findText(/portrait|ASCII|Matrix|Joshua|Josh/i);if(portraitAnchor){let a=portraitAnchor;for(const id of ['life-josh-portrait','life-piper-portrait']){const p=insertAfter(a,id);if(p)a=p;}}

  // Room/Home images.
  const roomMs=book.querySelector('[data-canonical-image="ms-room"]');const designed=insertAfter(roomMs,'life-designed-room')||book.querySelector('[data-canonical-image="life-designed-room"]');if(designed)insertAfter(designed,'life-bathroom');

  // Grounds photograph belongs to The Grounds chapter opening, independent of historical artifact slots.
  const groundsMs=book.querySelector('[data-canonical-image="ms-grounds"]');if(groundsMs)insertAfter(groundsMs,'life-grounds');

  // Designing Home contains ONLY the two currently approved bindings. L19/IMG_4138 belongs exclusively to Self-Reference #1.
  const designingMs=book.querySelector('[data-canonical-image="ms-designing-home"]');if(designingMs){let a=designingMs;for(const id of ['life-designing-home-02','life-designing-home-03']){const p=insertAfter(a,id);if(p)a=p;}}

  const daat=book.querySelector('.house-listening-consciousness');insertAfter(daat,'ms-daat-frog');
  insertAfter(findText(/Eat your pie\./i,true),'life-final-apple-pie');

  // Runtime audit. A corpus item counts as installed only if it has an approved binding and a live canonical page.
  const expected=Object.keys(IMAGE_BINDINGS);const installed=expected.filter(id=>book.querySelector(`[data-canonical-image="${id}"]`));const missing=expected.filter(id=>!installed.includes(id));
  window.GOOD_BOOK_IMAGE_AUDIT={expected:expected.length,installed:installed.length,missing,complete:missing.length===0};
  book.dataset.imageCorpusExpected=String(expected.length);book.dataset.imageCorpusInstalledCount=String(installed.length);book.dataset.imageCorpusComplete=String(missing.length===0);
  if(missing.length)console.error(`[THE GOOD BOOK] IMAGE CORPUS INCOMPLETE · ${installed.length}/${expected.length}`,missing);else console.info(`[THE GOOD BOOK] IMAGE CORPUS COMPLETE · ${installed.length}/${expected.length}`);
}