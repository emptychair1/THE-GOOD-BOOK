// THE GOOD BOOK · approved corpus installer
// Runs after chapter HTML + repair modules, before PageFlip initialization.
import { IMAGE_BINDINGS } from './image-bindings.js';

const book = document.querySelector('#book');
if (!book || book.dataset.imageCorpusInstalled === 'true') {
} else {
  book.dataset.imageCorpusInstalled = 'true';
  const src = id => `../${IMAGE_BINDINGS[id]}`;
  const imagePage = (id, path = IMAGE_BINDINGS[id]) => { const section=document.createElement('section'); section.className='page canonical-image-page is-light'; section.dataset.substrate='paper'; section.dataset.canonicalImage=id; section.innerHTML=`<img src="../${path}" alt="" draggable="false">`; return section; };

  const selfMapIds=['self-reference-01','self-reference-02','self-reference-03','self-reference-04','self-reference-05'];
  [...book.querySelectorAll('[data-self-map]')].forEach((page,i)=>{const id=selfMapIds[i];if(!id||!IMAGE_BINDINGS[id])return;page.classList.add('canonical-image-page');page.dataset.canonicalImage=id;page.innerHTML=`<img src="${src(id)}" alt="" draggable="false">`;});

  const groundsBindings={GOLD_SHOES_GIFT:'life-boots',GOLD_BOOTS_EDGE:'life-piper-boots-cliff',APPLE_TREE_RANDOM_ACTORS:'life-apple-tree'};
  Object.entries(groundsBindings).forEach(([artifact,id])=>{const page=book.querySelector(`[data-artifact="${artifact}"]`);if(!page||!IMAGE_BINDINGS[id])return;page.className='page canonical-image-page is-light';page.dataset.substrate='paper';page.dataset.canonicalImage=id;page.innerHTML=`<img src="${src(id)}" alt="" draggable="false">`;});

  const named=[['THE LIGHTHOUSE','ms-lighthouse'],['LILITH','ms-lilith'],['THE ROOM','ms-room'],['THE GROUNDS','ms-grounds'],['SEMANTICS','ms-semantics'],['AS ABOVE','ms-as-above'],['THE FORGE','ms-forge'],['SELF-MAPS','ms-self-maps'],['SOME VOICES SHOULD NEVER BE SILENCED','ms-voices'],['RELAY','ms-relay'],['OPERATION HYDRA','ms-hydra'],['DESIGNING HOME','ms-designing-home'],['SOL','ms-sol'],['THE GREAT WORK','ms-great-work'],['TOAST','ms-toast']];
  const titles=[...book.querySelectorAll('.act-three-title-page h1, .chapter-title h1, h1')];
  named.forEach(([label,id])=>{if(!IMAGE_BINDINGS[id]||book.querySelector(`[data-canonical-image="${id}"]`))return;const h=titles.find(el=>el.textContent.trim().toUpperCase()===label);const titlePage=h?.closest('section.page, section');if(titlePage)titlePage.after(imagePage(id));});

  const textAnchors=[['Build Something','ms-build-something'],['The Interval','ms-interval'],['Cleaning House','ms-cleaning-house'],['Friend','ms-friend'],['The Place Between','ms-place-between'],['Hermetic Correspondence','ms-hermetic-correspondence']];
  const pages=()=>[...book.querySelectorAll('section.page, #book > section')];
  textAnchors.forEach(([needle,id])=>{if(!IMAGE_BINDINGS[id]||book.querySelector(`[data-canonical-image="${id}"]`))return;const anchor=pages().find(p=>p.textContent.includes(needle));if(anchor)anchor.after(imagePage(id));});

  const cosmology=pages().find(p=>/Oahspe|cosmolog|creation/i.test(p.textContent));
  if(cosmology){let anchor=cosmology;['ms-oahspe-01','ms-oahspe-02','ms-oahspe-03','ms-oahspe-04'].forEach(id=>{if(!book.querySelector(`[data-canonical-image="${id}"]`)){const page=imagePage(id);anchor.after(page);anchor=page;}});}

  const life=[[/tattoo flash|flash sheet/i,'life-tattoo-flash'],[/Banjo/i,'life-banjo'],[/trailer/i,'life-trailer-exterior'],[/gramophone/i,'life-gramophone'],[/Empty Chair/i,'life-empty-chair'],[/motorcycle/i,'life-lilith-motorcycle'],[/self.?portrait/i,'life-lilith-self-portrait'],[/letter.*mantle|mantle.*letter/i,'life-letter'],[/DMV/i,'life-dmv'],[/burger/i,'life-burgers'],[/knife/i,'life-knife-gift']];
  life.forEach(([rx,id])=>{if(book.querySelector(`[data-canonical-image="${id}"]`))return;const anchor=pages().find(p=>rx.test(p.textContent));if(anchor)anchor.after(imagePage(id));});

  const trailerExterior=book.querySelector('[data-canonical-image="life-trailer-exterior"]');
  if(trailerExterior&&!book.querySelector('[data-canonical-image="life-trailer-interior"]'))trailerExterior.after(imagePage('life-trailer-interior'));

  const designingMs=book.querySelector('[data-canonical-image="ms-designing-home"]');
  if(designingMs){let anchor=designingMs;['life-designing-home-01','life-designing-home-02','life-designing-home-03'].forEach(id=>{if(!book.querySelector(`[data-canonical-image="${id}"]`)){const page=imagePage(id);anchor.after(page);anchor=page;}});}

  // Bathroom belongs to the Home/room visual sequence, immediately after the designed-room image when present;
  // otherwise it follows the Room manuscript plate. No invented caption or dialogue.
  const roomMs=book.querySelector('[data-canonical-image="ms-room"]');
  if(roomMs&&!book.querySelector('[data-canonical-image="life-designed-room"]'))roomMs.after(imagePage('life-designed-room'));
  const designedRoom=book.querySelector('[data-canonical-image="life-designed-room"]');
  if(designedRoom&&!book.querySelector('[data-canonical-image="life-bathroom"]'))designedRoom.after(imagePage('life-bathroom'));

  const daat=book.querySelector('.house-listening-consciousness');
  if(daat&&!book.querySelector('[data-canonical-image="ms-daat-frog"]'))daat.after(imagePage('ms-daat-frog'));

  // M29 is the final Apple Pie photograph. It is the literal final page after the final dialogue.
  const finalDialogue=[...pages()].reverse().find(p=>p.textContent.includes('Eat your pie.'));
  if(finalDialogue&&!book.querySelector('[data-canonical-image="life-final-apple-pie"]'))finalDialogue.after(imagePage('life-final-apple-pie'));
}