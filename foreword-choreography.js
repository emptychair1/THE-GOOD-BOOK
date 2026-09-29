/* THE GOOD BOOK · V157 · Foreword House Notice
   Production vocabulary: DIAGNOSTIC only.
   The House notices "Consciousness" once. Everything else stays still.
*/
(()=>{'use strict';
const HM=window.HouseMechanics;if(!HM)throw Error('Foreword House Notice requires HouseMechanics');
const target=document.querySelector('[data-house-target="foreword-consciousness-01"]');if(!target)throw Error('Foreword consciousness target missing');
let bound=false,done=false,timer=0;
const pageOf=()=>target.closest('.foreword');
const clear=()=>{if(timer){clearTimeout(timer);timer=0}};
function schedule(pageIndex){clear();if(done)return;const page=window.HouseBook?.pages?.[pageIndex];if(!page||page!==pageOf())return;const opening=page.querySelector('.opening')||page,pageText=(opening.textContent||'').trim();const range=document.createRange();range.selectNodeContents(opening);try{range.setEnd(target,0)}catch{}const frac=Math.max(.08,Math.min(.96,(range.toString().length||1)/Math.max(1,pageText.length)));const estimate=Math.max(3000,window.HouseReadingClock?.getEstimate?.()||12000);const delay=Math.max(450,estimate*frac);timer=setTimeout(()=>{timer=0;if(done||window.HouseBook?.getCurrent?.()!==pageIndex)return;done=true;HM.runFullDiagnostic({targetEl:target})},delay)}
function bind(){if(bound)return;if(!window.HouseBook)throw Error('Cannot bind Foreword House Notice before HouseBook');bound=true;addEventListener('house:page',e=>schedule(Number(e.detail?.current)));schedule(window.HouseBook.getCurrent());console.info('[FOREWORD] V157 single House Notice bound: Consciousness → DIAGNOSTIC → UNRESOLVED')}
window.HouseForewordChoreography={version:'157-single-house-notice',targets:[target],cancel:clear,bind};
})();