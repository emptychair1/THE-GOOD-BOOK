(()=>{
'use strict';
const HM=window.HouseMechanics;if(!HM)return;
const originals={cast:HM.cast,shutter:HM.shutter,phosphor:HM.phosphor};
const cream='#f6f0e6';
const probe=(stage,data={})=>{const payload={stage,at:performance.now(),...data};window.__CH1_CAST_PROBE=payload;console.info('[CH1 CAST PROBE]',payload);const b=document.querySelector('.version-badge');if(b)b.dataset.castProbe=stage};
const inChapter=el=>!!el?.closest?.('.chapter-one-page');
const valid=el=>!!(el&&el.isConnected&&el.getBoundingClientRect);
function overlay(){let l=document.getElementById('ch1-mechanic-overlay');if(!l){l=document.createElement('div');l.id='ch1-mechanic-overlay';Object.assign(l.style,{position:'fixed',inset:'0',zIndex:'9000',pointerEvents:'none',overflow:'hidden'});document.body.appendChild(l)}return l}
function clone(el,cls){if(!valid(el))return[];const r=el.getBoundingClientRect();if(!r.width||!r.height)return[];const s=getComputedStyle(el),n=document.createElement('span');n.className='ch1-geo-clone '+cls;n.textContent=el.textContent;Object.assign(n.style,{position:'fixed',left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px',margin:'0',padding:'0',boxSizing:'border-box',whiteSpace:s.whiteSpace==='normal'?'normal':s.whiteSpace,overflow:'visible',font:s.font,fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,fontStyle:s.fontStyle,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,textTransform:s.textTransform,textAlign:s.textAlign,color:cream,transform:'none',pointerEvents:'none'});overlay().appendChild(n);return[n]}
const clean=(nodes,ms)=>setTimeout(()=>nodes.forEach(n=>n.remove()),ms);
/* V107 experiment: CAST and SHUTTER use the untouched canonical HouseMechanics implementation directly on the real book target, exactly as the approved Safari lab does. */
HM.cast=function(el,...args){probe('CANONICAL CALL',{text:el?.textContent||'',connected:!!el?.isConnected,inChapter:inChapter(el)});const result=originals.cast?.call(HM,el,...args);requestAnimationFrame(()=>probe('CANONICAL FRAME',{className:el?.className||'',animation:getComputedStyle(el,'::after')?.animationName||'none'}));return result};
HM.shutter=function(el,...args){return originals.shutter?.call(HM,el,...args)};
/* PHOSPHOR remains geometry-overlaid for this audition; do not mix experiments. */
HM.phosphor=function(el,...args){if(!inChapter(el))return originals.phosphor?.call(HM,el,...args);try{const nodes=clone(el,'ch1-phosphor-clone');if(!nodes.length)return originals.phosphor?.call(HM,el,...args);nodes.forEach(n=>{const text=n.textContent,flash=document.createElement('span'),ghost=document.createElement('span');flash.className='hm-dark-phosphor-flash';ghost.className='hm-dark-phosphor-ghost';flash.textContent=text;ghost.textContent=text;n.textContent='';n.classList.add('hm-target','hm-dark-phosphor');n.append(flash,ghost);void n.offsetWidth;n.classList.add('live')});clean(nodes,6000);return el}catch(error){console.warn('[CH1 geometry] phosphor fail-open',error);return originals.phosphor?.call(HM,el,...args)}};
window.HouseChapterOneMechanicsAdapter={version:'1.4-v107-canonical-cast-shutter',rule:'CAST + SHUTTER canonical direct; PHOSPHOR overlay only'};
})();