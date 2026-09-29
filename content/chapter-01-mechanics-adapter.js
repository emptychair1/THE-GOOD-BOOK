(()=>{
'use strict';
const HM=window.HouseMechanics;if(!HM)return;
const originals={cast:HM.cast,shutter:HM.shutter,phosphor:HM.phosphor};
const cream='#f6f0e6';
const inChapter=el=>!!el?.closest?.('.chapter-one-page');
const valid=el=>!!(el&&el.isConnected&&el.getBoundingClientRect);
function overlay(){let l=document.getElementById('ch1-mechanic-overlay');if(!l){l=document.createElement('div');l.id='ch1-mechanic-overlay';Object.assign(l.style,{position:'fixed',inset:'0',zIndex:'9000',pointerEvents:'none',overflow:'hidden'});document.body.appendChild(l)}return l}
function clone(el,cls){if(!valid(el))return[];const r=el.getBoundingClientRect();if(!r.width||!r.height)return[];const s=getComputedStyle(el),n=document.createElement('span');n.className='ch1-geo-clone '+cls;n.textContent=el.textContent;Object.assign(n.style,{position:'fixed',left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px',margin:'0',padding:'0',boxSizing:'border-box',whiteSpace:s.whiteSpace==='normal'?'normal':s.whiteSpace,overflow:'visible',font:s.font,fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,fontStyle:s.fontStyle,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,textTransform:s.textTransform,textAlign:s.textAlign,color:cream,transform:'none',pointerEvents:'none'});overlay().appendChild(n);return[n]}
const clean=(nodes,ms)=>setTimeout(()=>nodes.forEach(n=>n.remove()),ms);
function safe(name,decorate,ttl){return function(el,...args){if(!inChapter(el))return originals[name]?.call(HM,el,...args);try{const nodes=clone(el,'ch1-'+name+'-clone');if(!nodes.length)return originals[name]?.call(HM,el,...args);decorate(nodes);clean(nodes,ttl);return el}catch(error){console.warn('[CH1 geometry] fail-open',name,error);return originals[name]?.call(HM,el,...args)}}}
HM.cast=safe('cast',nodes=>nodes.forEach(n=>{const text=n.textContent;n.dataset.hmText=text;n.textContent=text;n.classList.add('hm-target','hm-dark-cast');void n.offsetWidth;n.classList.add('live')}),5400);
HM.shutter=safe('shutter',nodes=>nodes.forEach(n=>{const text=n.textContent;n.dataset.hmText=text;n.textContent=text;n.classList.add('hm-target','hm-dark-shutter');void n.offsetWidth;n.classList.add('live')}),5000);
HM.phosphor=safe('phosphor',nodes=>nodes.forEach(n=>{const text=n.textContent,flash=document.createElement('span'),ghost=document.createElement('span');flash.className='hm-dark-phosphor-flash';ghost.className='hm-dark-phosphor-ghost';flash.textContent=text;ghost.textContent=text;n.textContent='';n.classList.add('hm-target','hm-dark-phosphor');n.append(flash,ghost);void n.offsetWidth;n.classList.add('live')}),6000);
window.HouseChapterOneMechanicsAdapter={version:'1.2-v103',rule:'visual overlay only; canonical lab text contract; never owns navigation'};
})();