// ACT III · THE GROUNDS · historical artifact slots
// Inserted before PageFlip initializes so every generated/introduced image beat keeps its place in the chapter.
const chapterTitle = [...document.querySelectorAll('.act-three-title-page h1')].find(el => el.textContent.trim() === 'THE GROUNDS');
if (chapterTitle) {
  const chapterStart = chapterTitle.closest('section');
  const allSections = [...document.querySelectorAll('#book > section')];
  const startIndex = allSections.indexOf(chapterStart);
  const chapterSections = allSections.slice(startIndex + 1);
  const slots = [
    {needle:'I think we should generate them here. Start with our kitchen and door looking outside please', id:'GROUNDS_KITCHEN_DOOR', title:'Kitchen Door · Canonical', note:'Generated here. First canonical view from the Lighthouse kitchen toward the grounds.'},
    {needle:'Step onto the porch and look back at the Lighthouse exterior', id:'GROUNDS_EXTERIOR_KEEPERS_COTTAGE', title:'Exterior · Keeper’s Cottage Drift', note:'Generated here. Historical miss: the Lighthouse became a keeper’s cottage attached to a tower.'},
    {needle:'Ok baby make it happen', id:'GROUNDS_EXTERIOR_SHORT_TOWER', title:'Exterior · Short Tower / Wrong Orientation', note:'Generated here. Closer, but the tower was too short and the geography was wrong.'},
    {needle:'That’s much better but the tower is way too short and the orientation is wrong', id:'GROUNDS_EXTERIOR_ORIENTATION_PASS', title:'Exterior · Orientation Pass', note:'Generated here. Visually approved except the Bridge appeared where the established geography said it could not.'},
    {needle:'Give it to me. I want the object, the metaphor, the trapdoor underneath the metaphor, all of it.', id:'GOLD_METATRON_APPLE_GIFT', title:'The Gold Apple', note:'Image introduced here. Gold apple engraved with Metatron geometry.'},
    {needle:'I want a picture of just your feet in those boots on the edge of the cliff or at the edge of the bridge.', id:'GOLD_BOOTS_EDGE', title:'Gold Boots · Edge', note:'Image generated here. Boots at the cliff / Bridge threshold.'},
    {needle:'Now I want to see you in those boots right there on the edge of that cliff', id:'CLIFF_DEFIANCE_REJECTED', title:'Cliff Defiance · Rejected', note:'Image generated here. Historical miss: wrong Piper, wrong body language, wandering geography.'},
    {needle:'Can I have a photo of us under the apple tree?', id:'APPLE_TREE_RANDOM_ACTORS', title:'Under the Apple Tree · Random Actors', note:'Image generated here. Composition kept; faces rejected. Banjo, gold boots, lantern, Bridge and Lighthouse remain evidence.'}
  ];
  const findSection = needle => chapterSections.find(section => section.textContent.includes(needle));
  const makeSlot = ({id,title,note}) => {
    const section = document.createElement('section');
    section.className = 'page act-three-artifact-placeholder is-light';
    section.dataset.substrate = 'paper';
    section.dataset.artifact = id;
    if(id==='GOLD_METATRON_APPLE_GIFT'){section.className='page is-light';section.style.cssText='position:relative;display:flex;align-items:center;justify-content:center;padding:6%;overflow:hidden';section.innerHTML='<img src="./assets/book-photos/IMG_3680.png" alt="" style="display:block;width:100%;height:100%;object-fit:contain;filter:none;opacity:1;mix-blend-mode:normal;border:0">';return section;}
    if(id==='GOLD_BOOTS_EDGE'){section.className='page is-light';section.style.cssText='position:relative;display:flex;align-items:center;justify-content:center;padding:6%;overflow:hidden';section.innerHTML='<img src="./assets/book-photos/IMG_3681.png" alt="" style="display:block;width:100%;height:100%;object-fit:contain;filter:none;opacity:1;mix-blend-mode:normal;border:0">';return section;}
    if(id==='CLIFF_DEFIANCE_REJECTED'){section.className='page is-light';section.style.cssText='position:relative;display:flex;align-items:center;justify-content:center;padding:6%;overflow:hidden';section.innerHTML='<img src="./assets/book-photos/IMG_4137.png" alt="" style="display:block;width:100%;height:100%;object-fit:contain;filter:none;opacity:1;mix-blend-mode:normal;border:0">';return section;}
    if(id==='APPLE_TREE_RANDOM_ACTORS'){section.className='page is-light';section.style.cssText='position:relative;display:flex;align-items:center;justify-content:center;padding:6%;overflow:hidden';section.innerHTML='<img src="./assets/book-photos/IMG_4135.png" alt="" style="display:block;width:100%;height:100%;object-fit:contain;filter:none;opacity:1;mix-blend-mode:normal;border:0">';return section;}
    section.innerHTML = `<div class="act-three-artifact-inner"><div class="act-three-kicker">ARTIFACT SLOT · ${id}</div><h2>${title}</h2><p>PLACEHOLDER · ${note} Bind the historical image only after Printing Press treatment and approval.</p></div>`;
    return section;
  };
  for (const slot of slots) {
    const anchor = findSection(slot.needle);
    if (anchor && !document.querySelector(`[data-artifact="${slot.id}"]`)) anchor.after(makeSlot(slot));
  }
}
