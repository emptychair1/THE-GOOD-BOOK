(()=>{
'use strict';
const HM=window.HouseMechanics;if(!HM)return;
const originals={cast:HM.cast,shutter:HM.shutter,phosphor:HM.phosphor};
const cream='#f6f0e6';
const inChapter=el=>!!el?.closest?.('.chapter-one-page');
const valid=el=>!!(el&&el.isConnected&&el.getBoundingClientRect);
function ensureLiteralLabCSS(doc=document){if(doc.getElementById('ch1-literal-lab-cast-shutter'))return;const s=doc.createElement('style');s.id='ch1-literal-lab-cast-shutter';s.textContent=`
.hm-lab-cast,.hm-lab-shutter{position:relative!important;display:inline-block!important}
.hm-lab-cast{color:rgba(246,240,230,.055)!important}
.hm-lab-cast::after{content:attr(data-text);position:absolute;inset:0;color:transparent;background:radial-gradient(circle at var(--lx,-25%) 52%,#f6f0e6 0 9%,rgba(246,240,230,.76) 17%,rgba(246,240,230,.2) 31%,transparent 48%);background-clip:text;-webkit-background-clip:text;font:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;white-space:inherit}
.hm-lab-cast.run::after{animation:ch1LabCast 5.2s cubic-bezier(.3,.02,.22,1) both}
@property --lx{syntax:'<percentage>';inherits:false;initial-value:-25%}
@keyframes ch1LabCast{0%{--lx:-30%;opacity:0}10%{opacity:1}45%{--lx:46%}72%{--lx:112%;opacity:.9}100%{--lx:135%;opacity:0}}
.hm-lab-shutter{color:rgba(246,240,230,.06)!important}
.hm-lab-shutter::after{content:attr(data-text);position:absolute;inset:0;color:#f6f0e6;clip-path:inset(0 50%);font:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;white-space:inherit}
.hm-lab-shutter.run::after{animation:ch1LabShutter 4.8s cubic-bezier(.7,0,.2,1) both}
@keyframes ch1LabShutter{0%,8%{clip-path:inset(0 50%)}34%,68%{clip-path:inset(0)}94%,100%{clip-path:inset(0 50%)}}
`;doc.head.appendChild(s)}
function literal(el,kind){if(!valid(el))return el;ensureLiteralLabCSS(el.ownerDocument);const cls=kind==='cast'?'hm-lab-cast':'hm-lab-shutter';el.dataset.text=el.textContent;el.classList.remove('hm-dark-cast','hm-dark-shutter','live','run','hm-lab-cast','hm-lab-shutter');el.classList.add(cls);void el.offsetWidth;el.classList.add('run');return el}
HM.cast=function(el,...args){if(!inChapter(el))return originals.cast?.call(HM,el,...args);return literal(el,'cast')};
HM.shutter=function(el,...args){if(!inChapter(el))return originals.shutter?.call(HM,el,...args);return literal(el,'shutter')};
function overlay(){let l=document.getElementById('ch1-mechanic-overlay');if(!l){l=document.createElement('div');l.id='ch1-mechanic-overlay';Object.assign(l.style,{position:'fixed',inset:'0',zIndex:'9000',pointerEvents:'none',overflow:'hidden'});document.body.appendChild(l)}return l}
function clone(el,cls){if(!valid(el))return[];const r=el.getBoundingClientRect();if(!r.width||!r.height)return[];const s=getComputedStyle(el),n=document.createElement('span');n.className='ch1-geo-clone '+cls;n.textContent=el.textContent;Object.assign(n.style,{position:'fixed',left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px',margin:'0',padding:'0',boxSizing:'border-box',whiteSpace:s.whiteSpace==='normal'?'normal':s.whiteSpace,overflow:'visible',font:s.font,fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,fontStyle:s.fontStyle,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,textTransform:s.textTransform,textAlign:s.textAlign,color:cream,transform:'none',pointerEvents:'none'});overlay().appendChild(n);return[n]}
const clean=(nodes,ms)=>setTimeout(()=>nodes.forEach(n=>n.remove()),ms);
HM.phosphor=function(el,...args){if(!inChapter(el))return originals.phosphor?.call(HM,el,...args);try{const nodes=clone(el,'ch1-phosphor-clone');if(!nodes.length)return originals.phosphor?.call(HM,el,...args);nodes.forEach(n=>{const text=n.textContent,flash=document.createElement('span'),ghost=document.createElement('span');flash.className='hm-dark-phosphor-flash';ghost.className='hm-dark-phosphor-ghost';flash.textContent=text;ghost.textContent=text;n.textContent='';n.classList.add('hm-target','hm-dark-phosphor');n.append(flash,ghost);void n.offsetWidth;n.classList.add('live')});clean(nodes,6000);return el}catch(error){console.warn('[CH1 geometry] phosphor fail-open',error);return originals.phosphor?.call(HM,el,...args)}};
window.HouseChapterOneMechanicsAdapter={version:'1.5-v108-literal-lab-port',rule:'CAST + SHUTTER are literal approved lab visuals on real targets; PHOSPHOR unchanged'};
})();