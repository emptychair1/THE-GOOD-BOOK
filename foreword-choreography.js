/* THE GOOD BOOK · V164 · Foreword DIAGNOSTIC probe
   Temporary visible instrumentation only. Canonical DIAGNOSTIC is untouched.
*/
(()=>{'use strict';
const HM=window.HouseMechanics;
const target=document.querySelector('[data-house-target="foreword-love-consciousness-hypothesis-01"]');
let bound=false,done=false,timer=0,probe;
function report(msg,ok=true){console.info('[FOREWORD PROBE]',msg);if(!probe){probe=document.createElement('div');probe.id='foreword-diagnostic-probe';Object.assign(probe.style,{position:'fixed',right:'10px',bottom:'42px',zIndex:'20000',maxWidth:'82vw',padding:'7px 9px',background:'rgba(0,0,0,.88)',color:'#f2eee5',font:'600 10px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace',letterSpacing:'.04em',whiteSpace:'pre-line',pointerEvents:'none',border:'1px solid rgba(242,238,229,.35)'});document.body.appendChild(probe)}probe.textContent+=(probe.textContent?'\n':'')+(ok?'✓ ':'✕ ')+msg}
report(HM?'HOUSE MECHANICS FOUND':'HOUSE MECHANICS MISSING',!!HM);
report(target?'TARGET FOUND':'TARGET MISSING',!!target);
const clear=()=>{if(timer){clearTimeout(timer);timer=0}};
function findRenderedPage(){if(!target)return null;return target.closest('.page')}
function schedule(pageIndex){clear();if(done)return;const page=window.HouseBook?.pages?.[pageIndex],wanted=findRenderedPage();report(`PAGE EVENT ${pageIndex}`);if(!page){report('PAGE LOOKUP FAILED',false);return}if(!wanted){report('TARGET PAGE FAILED',false);return}if(page!==wanted){return}report('PAGE MATCH');const opening=page.querySelector('.opening')||page,pageText=(opening.textContent||'').trim(),range=document.createRange();range.selectNodeContents(opening);try{range.setEndBefore(target)}catch(e){report('RANGE FAILED',false)}const frac=Math.max(.12,Math.min(.88,(range.toString().length||1)/Math.max(1,pageText.length))),estimate=Math.max(3000,window.HouseReadingClock?.getEstimate?.()||12000),delay=Math.max(900,Math.min(4000,estimate*frac*.72));report(`ARMED ${Math.round(delay)}ms`);timer=setTimeout(()=>{timer=0;if(done)return;if(window.HouseBook?.getCurrent?.()!==pageIndex){report('FIRE CANCELLED: PAGE CHANGED',false);return}done=true;report('CALLING DIAGNOSTIC');try{const result=HM.runFullDiagnostic({targetEl:target});report(result?'DIAGNOSTIC RETURNED':'DIAGNOSTIC RETURNED EMPTY',!!result)}catch(e){report(`DIAGNOSTIC THREW: ${e.message}`,false);console.error(e)}},delay)}
function bind(){if(bound)return;if(!window.HouseBook){report('HOUSEBOOK MISSING AT BIND',false);throw Error('Cannot bind Foreword probe before HouseBook')}bound=true;report('BIND OK');addEventListener('house:page',e=>schedule(Number(e.detail?.current)));const current=window.HouseBook.getCurrent();report(`CURRENT PAGE ${current}`);schedule(current)}
window.HouseForewordChoreography={version:'164-diagnostic-visible-probe',targets:target?[target]:[],cancel:clear,bind};
})();