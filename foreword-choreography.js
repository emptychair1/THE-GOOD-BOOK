/* THE GOOD BOOK · V163 · Foreword House Notice
   Production vocabulary: DIAGNOSTIC only.
   The House notices the love/consciousness hypothesis once. Everything else stays still.
   Trigger timing follows the reader clock, but is bounded so the notice cannot miss a short page.
*/
(()=>{'use strict';
const HM=window.HouseMechanics;if(!HM)throw Error('Foreword House Notice requires HouseMechanics');
const target=document.querySelector('[data-house-target="foreword-love-consciousness-hypothesis-01"]');if(!target)throw Error('Foreword love/consciousness hypothesis target missing');
let bound=false,done=false,timer=0;
const clear=()=>{if(timer){clearTimeout(timer);timer=0}};
const targetPage=()=>target.closest('.page');
function schedule(pageIndex){
  clear();if(done)return;
  const page=window.HouseBook?.pages?.[pageIndex],wanted=targetPage();
  if(!page||!wanted||page!==wanted)return;
  const opening=page.querySelector('.opening')||page;
  const pageText=(opening.textContent||'').trim();
  const range=document.createRange();range.selectNodeContents(opening);
  try{range.setEndBefore(target)}catch{}
  const frac=Math.max(.12,Math.min(.88,(range.toString().length||1)/Math.max(1,pageText.length)));
  const estimate=Math.max(3000,window.HouseReadingClock?.getEstimate?.()||12000);
  /* Reading-clock driven, with a ceiling because sparse pages are read much faster than the
     previous prose-heavy page. This keeps the House near the target sentence instead of after exit. */
  const delay=Math.max(900,Math.min(4000,estimate*frac*.72));
  console.info('[FOREWORD] V163 diagnostic armed',{pageIndex,frac,estimate,delay});
  timer=setTimeout(()=>{
    timer=0;
    if(done||window.HouseBook?.getCurrent?.()!==pageIndex)return;
    done=true;
    console.info('[FOREWORD] V163 diagnostic firing');
    HM.runFullDiagnostic({targetEl:target});
  },delay);
}
function bind(){
  if(bound)return;if(!window.HouseBook)throw Error('Cannot bind Foreword House Notice before HouseBook');
  bound=true;
  addEventListener('house:page',e=>schedule(Number(e.detail?.current)));
  schedule(window.HouseBook.getCurrent());
  console.info('[FOREWORD] V163 single House Notice bound: love/consciousness hypothesis → canonical DIAGNOSTIC → UNRESOLVED');
}
window.HouseForewordChoreography={version:'163-love-consciousness-trigger-repair',targets:[target],cancel:clear,bind};
})();