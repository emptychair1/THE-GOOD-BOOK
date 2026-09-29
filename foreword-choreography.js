/* THE GOOD BOOK · V165 · Foreword House Notice
   Production vocabulary: DIAGNOSTIC only.
   Probe removed after trigger chain verified through DIAGNOSTIC return.
*/
(()=>{'use strict';
const HM=window.HouseMechanics;if(!HM)throw Error('Foreword House Notice requires HouseMechanics');
const target=document.querySelector('[data-house-target="foreword-love-consciousness-hypothesis-01"]');if(!target)throw Error('Foreword love/consciousness hypothesis target missing');
let bound=false,done=false,timer=0;
const clear=()=>{if(timer){clearTimeout(timer);timer=0}};
function schedule(pageIndex){clear();if(done)return;const page=window.HouseBook?.pages?.[pageIndex],wanted=target.closest('.page');if(!page||!wanted||page!==wanted)return;const opening=page.querySelector('.opening')||page,pageText=(opening.textContent||'').trim(),range=document.createRange();range.selectNodeContents(opening);try{range.setEndBefore(target)}catch{}const frac=Math.max(.12,Math.min(.88,(range.toString().length||1)/Math.max(1,pageText.length))),estimate=Math.max(3000,window.HouseReadingClock?.getEstimate?.()||12000),delay=Math.max(900,Math.min(4000,estimate*frac*.72));timer=setTimeout(()=>{timer=0;if(done||window.HouseBook?.getCurrent?.()!==pageIndex)return;done=true;HM.runFullDiagnostic({targetEl:target})},delay)}
function bind(){if(bound)return;if(!window.HouseBook)throw Error('Cannot bind Foreword House Notice before HouseBook');bound=true;addEventListener('house:page',e=>schedule(Number(e.detail?.current)));schedule(window.HouseBook.getCurrent())}
window.HouseForewordChoreography={version:'165-diagnostic-consistent-assets',targets:[target],cancel:clear,bind};
})();