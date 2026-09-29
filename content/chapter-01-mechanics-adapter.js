(()=>{
'use strict';
const HM=window.HouseMechanics;if(!HM)return;
const cream='#f6f0e6';
function page(el){return el?.closest('.chapter-one-page')}
function rects(el){return [...el.getClientRects()].filter(r=>r.width&&r.height)}
function style(el){const s=getComputedStyle(el);return {font:s.font,fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,fontStyle:s.fontStyle,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,textTransform:s.textTransform,textAlign:s.textAlign,color:s.color}}
function layer(){let l=document.getElementById('ch1-mechanic-overlay');if(!l){l=document.createElement('div');l.id='ch1-mechanic-overlay';Object.assign(l.style,{position:'fixed',inset:'0',zIndex:'9000',pointerEvents:'none',overflow:'hidden'});document.body.appendChild(l)}return l}
function cloneFragments(el,cls){const rs=rects(el),st=style(el),text=el.textContent,out=[];rs.forEach((r,i)=>{const n=document.createElement('span');n.className='ch1-geo-clone '+cls;n.textContent=text;Object.assign(n.style,{position:'fixed',left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px',margin:'0',padding:'0',boxSizing:'border-box',whiteSpace:rs.length===1?'nowrap':'normal',overflow:'hidden',font:st.font,fontFamily:st.fontFamily,fontSize:st.fontSize,fontWeight:st.fontWeight,fontStyle:st.fontStyle,lineHeight:st.lineHeight,letterSpacing:st.letterSpacing,textTransform:st.textTransform,textAlign:st.textAlign,color:cream,transform:'none'});layer().appendChild(n);out.push(n)});return out}
function clean(nodes,ms){setTimeout(()=>nodes.forEach(n=>n.remove()),ms)}
function overlayCast(el){if(!page(el))return HM.__ch1OriginalCast(el);const nodes=cloneFragments(el,'ch1-cast-clone');nodes.forEach(n=>{n.dataset.hmText=n.textContent;n.classList.add('hm-target','hm-dark-cast');n.style.color='rgba(246,240,230,.055)';void n.offsetWidth;n.classList.add('live')});clean(nodes,5400);return el}
function overlayShutter(el){if(!page(el))return HM.__ch1OriginalShutter(el);const nodes=cloneFragments(el,'ch1-shutter-clone');nodes.forEach(n=>{n.dataset.hmText=n.textContent;n.classList.add('hm-target','hm-dark-shutter');n.style.color='rgba(246,240,230,.06)';void n.offsetWidth;n.classList.add('live')});clean(nodes,5000);return el}
function overlayPhosphor(el){if(!page(el))return HM.__ch1OriginalPhosphor(el);const nodes=cloneFragments(el,'ch1-phosphor-clone');nodes.forEach(n=>{const flash=n.cloneNode(true),ghost=n.cloneNode(true);flash.className='hm-dark-phosphor-flash';ghost.className='hm-dark-phosphor-ghost';n.textContent='';n.classList.add('hm-target','hm-dark-phosphor');n.append(flash,ghost);void n.offsetWidth;n.classList.add('live')});clean(nodes,6000);return el}
HM.__ch1OriginalCast=HM.__ch1OriginalCast||HM.cast;HM.__ch1OriginalShutter=HM.__ch1OriginalShutter||HM.shutter;HM.__ch1OriginalPhosphor=HM.__ch1OriginalPhosphor||HM.phosphor;
HM.cast=overlayCast;HM.shutter=overlayShutter;HM.phosphor=overlayPhosphor;
window.HouseChapterOneMechanicsAdapter={version:'1.0-v100',rule:'page owns geometry'};
})();