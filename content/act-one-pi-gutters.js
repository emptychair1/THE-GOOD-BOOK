(()=>{'use strict';
const page=document.querySelector('.act-one-tree-page');
const frame=page?.querySelector('.act-one-tree-frame');
const image=frame?.querySelector('img');
if(!page||!frame||!image)return;
const PI='314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';
const makeSide=(side,offset)=>{const el=document.createElement('div');el.className=`pi-gutter pi-gutter-${side}`;el.setAttribute('aria-hidden','true');let out='';for(let i=0;i<1500;i++)out+=PI[(i+offset)%PI.length]+((i%11===10)?'\n':' ');el.textContent=out;page.insertBefore(el,frame);return el};
const left=makeSide('left',0),right=makeSide('right',73);
function sync(){const pr=page.getBoundingClientRect(),ir=image.getBoundingClientRect();if(!pr.width||!ir.width)return;const leftWidth=Math.max(0,ir.left-pr.left),rightWidth=Math.max(0,pr.right-ir.right);left.style.width=`${leftWidth+3}px`;right.style.width=`${rightWidth+3}px`;left.style.right='auto';right.style.left='auto'}
if(image.complete)requestAnimationFrame(sync);else image.addEventListener('load',()=>requestAnimationFrame(sync),{once:true});
addEventListener('resize',()=>requestAnimationFrame(sync),{passive:true});addEventListener('house:page',e=>{if(window.HouseBook?.pages?.[e.detail?.current]===page)requestAnimationFrame(sync)});
window.HouseActOnePiGutters={sync};
})();