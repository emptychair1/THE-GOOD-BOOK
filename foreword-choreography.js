/* THE GOOD BOOK · V169 · Foreword canonical DIAGNOSTIC
   Probe removed. Canonical DIAGNOSTIC remains untouched.
*/
(()=>{'use strict';
const HM=window.HouseMechanics;
const target=document.querySelector('[data-house-target="foreword-love-consciousness-hypothesis-01"]');
let bound=false,done=false,timer=0;
const clear=()=>{if(timer){clearTimeout(timer);timer=0}};
function findRenderedPage(){return target?.closest('.page')||null}
function schedule(pageIndex){clear();if(done)return;const page=window.HouseBook?.pages?.[pageIndex],wanted=findRenderedPage();if(!page||!wanted||page!==wanted)return;const opening=page.querySelector('.opening')||page,pageText=(opening.textContent||'').trim(),range=document.createRange();range.selectNodeContents(opening);try{range.setEndBefore(target)}catch(e){}const frac=Math.max(.12,Math.min(.88,(range.toString().length||1)/Math.max(1,pageText.length))),estimate=Math.max(3000,window.HouseReadingClock?.getEstimate?.()||12000),delay=Math.max(900,Math.min(4000,estimate*frac*.72));timer=setTimeout(()=>{timer=0;if(done||window.HouseBook?.getCurrent?.()!==pageIndex)return;done=true;HM?.runFullDiagnostic?.({targetEl:target})},delay)}
function bind(){if(bound)return;if(!window.HouseBook)throw Error('Cannot bind Foreword choreography before HouseBook');bound=true;addEventListener('house:page',e=>schedule(Number(e.detail?.current)));schedule(window.HouseBook.getCurrent())}
window.HouseForewordChoreography={version:'169-canonical-diagnostic-clean',targets:target?[target]:[],cancel:clear,bind};
})();