(()=>{
'use strict';
const HM=window.HouseMechanics;if(!HM)return;
const originals={cast:HM.cast,shutter:HM.shutter,phosphor:HM.phosphor};
const cream='#f6f0e6';
const inChapter=el=>!!el?.closest?.('.chapter-one-page');
const valid=el=>!!(el&&el.isConnected&&el.getBoundingClientRect);
function ensureCSS(doc=document){if(doc.getElementById('ch1-forensic-registration'))return;const s=doc.createElement('style');s.id='ch1-forensic-registration';s.textContent=`
#ch1-mechanic-overlay{position:fixed;inset:0;z-index:9000;pointer-events:none;overflow:hidden}
.ch1-forensic-clone{position:fixed!important;display:block!important;margin:0!important;padding:0!important;box-sizing:border-box!important;transform:none!important;transform-origin:0 0!important;overflow:visible!important;pointer-events:none!important}
.ch1-forensic-clone.hm-dark-cast{color:rgba(246,240,230,.055)!important}
.ch1-forensic-clone.hm-dark-cast::after{content:attr(data-hm-text);position:absolute;inset:0;color:transparent;background:radial-gradient(circle at var(--hm-lx,-25%) 52%,#f6f0e6 0 9%,rgba(246,240,230,.76) 17%,rgba(246,240,230,.2) 31%,transparent 48%);background-clip:text;-webkit-background-clip:text;font:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;white-space:inherit}
.ch1-forensic-clone.hm-dark-cast.live::after{animation:hmDarkCast 5.2s cubic-bezier(.3,.02,.22,1) both}
.ch1-forensic-clone.hm-dark-shutter{color:rgba(246,240,230,.06)!important}
.ch1-forensic-clone.hm-dark-shutter::after{content:attr(data-hm-text);position:absolute;inset:0;color:#f6f0e6;clip-path:inset(0 50%);font:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;white-space:inherit}
.ch1-forensic-clone.hm-dark-shutter.live::after{animation:hmDarkShutter 4.8s cubic-bezier(.7,0,.2,1) both}
.ch1-forensic-clone.hm-dark-phosphor{color:rgba(246,240,230,.055)!important}
.ch1-forensic-clone .hm-dark-phosphor-flash,.ch1-forensic-clone .hm-dark-phosphor-ghost{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important;display:block!important;font:inherit!important;line-height:inherit!important;letter-spacing:inherit!important;text-align:inherit!important;white-space:inherit!important;transform:none!important;color:#f6f0e6!important}
`;doc.head.appendChild(s)}
function overlay(doc=document){ensureCSS(doc);let l=doc.getElementById('ch1-mechanic-overlay');if(!l){l=doc.createElement('div');l.id='ch1-mechanic-overlay';doc.body.appendChild(l)}return l}
function measuredClone(el,kind){if(!valid(el))return null;const r=el.getBoundingClientRect();if(!r.width||!r.height)return null;const s=getComputedStyle(el),n=document.createElement('span');n.className='ch1-forensic-clone hm-target hm-dark-'+kind;n.textContent=el.textContent;Object.assign(n.style,{left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px',font:s.font,fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,fontStyle:s.fontStyle,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,textTransform:s.textTransform,textAlign:s.textAlign,whiteSpace:s.whiteSpace,wordSpacing:s.wordSpacing});overlay(el.ownerDocument).appendChild(n);return n}
function dimOriginal(el,kind,ms){const prior=el.style.color;el.style.color=kind==='shutter'?'rgba(246,240,230,.06)':'rgba(246,240,230,.055)';setTimeout(()=>{if(el.isConnected)el.style.color=prior},ms)}
function runTextLight(el,kind){if(!valid(el))return el;const ms=kind==='cast'?5300:4900,n=measuredClone(el,kind);if(!n)return el;dimOriginal(el,kind,ms);n.dataset.hmText=n.textContent;void n.offsetWidth;n.classList.add('live');setTimeout(()=>n.remove(),ms+120);return el}
HM.cast=function(el,...args){if(!inChapter(el))return originals.cast?.call(HM,el,...args);return runTextLight(el,'cast')};
HM.shutter=function(el,...args){if(!inChapter(el))return originals.shutter?.call(HM,el,...args);return runTextLight(el,'shutter')};
HM.phosphor=function(el,...args){if(!inChapter(el))return originals.phosphor?.call(HM,el,...args);try{const n=measuredClone(el,'phosphor');if(!n)return originals.phosphor?.call(HM,el,...args);dimOriginal(el,'phosphor',5920);const text=n.textContent,flash=document.createElement('span'),ghost=document.createElement('span');flash.className='hm-dark-phosphor-flash';ghost.className='hm-dark-phosphor-ghost';flash.textContent=text;ghost.textContent=text;n.textContent='';n.append(flash,ghost);void n.offsetWidth;n.classList.add('live');setTimeout(()=>n.remove(),6040);return el}catch(error){console.warn('[CH1 forensic] phosphor fail-open',error);return originals.phosphor?.call(HM,el,...args)}};
window.HouseChapterOneMechanicsAdapter={version:'2.0-v110-forensic-registration',rule:'CAST/SHUTTER measured registration; PHOSPHOR ghost shares exact measured glyph box'};
})();