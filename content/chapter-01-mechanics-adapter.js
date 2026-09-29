(()=>{
'use strict';
const HM=window.HouseMechanics;if(!HM)return;
const originalCast=HM.cast,originalReagent=HM.reagent;
const inChapter=el=>!!el?.closest?.('.chapter-one-page');
function ensureCSS(){if(document.getElementById('ch1-mechanics-registration'))return;const s=document.createElement('style');s.id='ch1-mechanics-registration';s.textContent=`
/* CAST: literal forensic-lab specimen rules. Only .phrase target is generalized. */
.ch1-lab-cast{position:relative!important;color:rgba(246,240,230,.055)!important}
.ch1-lab-cast:after{content:attr(data-text);position:absolute;inset:0;color:transparent;background:radial-gradient(circle at var(--lx,-25%) 52%,#f6f0e6 0 9%,rgba(246,240,230,.76) 17%,rgba(246,240,230,.2) 31%,transparent 48%);background-clip:text;-webkit-background-clip:text}
.ch1-lab-cast.run:after{animation:ch1LabCast 5.2s cubic-bezier(.3,.02,.22,1) both}
@property --lx{syntax:'<percentage>';inherits:false;initial-value:-25%}
@keyframes ch1LabCast{0%{--lx:-30%;opacity:0}10%{opacity:1}45%{--lx:46%}72%{--lx:112%;opacity:.9}100%{--lx:135%;opacity:0}}
#ch1-reagent-overlay{position:fixed;inset:0;z-index:8990;pointer-events:none;overflow:hidden}.ch1-reagent-flashfield{position:fixed;pointer-events:none;width:min(90vw,560px);height:62svh;transform:translate(-50%,-50%);background:radial-gradient(ellipse,rgba(246,240,230,.12),transparent 68%);opacity:0}.ch1-reagent-flashfield.live{animation:ch1ReagentField 5.8s both}@keyframes ch1ReagentField{0%,14%{opacity:0}16%{opacity:1}20%,100%{opacity:0}}
`;document.head.appendChild(s)}
function layer(id){ensureCSS();let l=document.getElementById(id);if(!l){l=document.createElement('div');l.id=id;document.body.appendChild(l)}return l}
function cast(el){
  ensureCSS();
  /* The production node itself becomes the lab .phrase. No clone, no registration layer, no visual reinterpretation. */
  const prior={color:el.style.color,position:el.style.position};
  el.dataset.text=el.textContent;
  el.classList.add('ch1-lab-cast');
  el.classList.remove('run');
  void el.offsetWidth;
  el.classList.add('run');
  setTimeout(()=>{if(!el.isConnected)return;el.classList.remove('run','ch1-lab-cast');delete el.dataset.text;el.style.color=prior.color;el.style.position=prior.position},5420);
  return el;
}
function reagent(el,selector='.hm-react'){const result=originalReagent.call(HM,el,selector),r=el.getBoundingClientRect();if(!r.width||!r.height)return result;const field=document.createElement('div');field.className='ch1-reagent-flashfield';field.style.left=(r.left+r.width/2)+'px';field.style.top=(r.top+r.height/2)+'px';layer('ch1-reagent-overlay').appendChild(field);void field.offsetWidth;field.classList.add('live');setTimeout(()=>field.remove(),5920);return result}
HM.cast=function(el,...args){if(!el?.isConnected||!inChapter(el))return originalCast.call(HM,el,...args);return cast(el)};
HM.reagent=function(el,...args){if(!el?.isConnected||!inChapter(el))return originalReagent.call(HM,el,...args);return reagent(el,...args)};
window.HouseChapterOneCastAdapter={version:'2.0-v126-literal-lab-cast'};
})();