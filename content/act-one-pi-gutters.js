(()=>{'use strict';
const page=document.querySelector('.act-one-tree-page');
const frame=page?.querySelector('.act-one-tree-frame');
const image=frame?.querySelector('img');
if(!page||!frame||!image)return;
const PI='314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';
const rng=seed=>()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
const makeSide=(side,offset,seed)=>{const el=document.createElement('div');el.className=`pi-gutter pi-gutter-${side}`;el.setAttribute('aria-hidden','true');const random=rng(seed);for(let row=0;row<190;row++){const line=document.createElement('div');line.className='pi-gutter-line';const count=5+Math.floor(random()*8);let text='';for(let i=0;i<count;i++){text+=PI[(offset+row*13+i)%PI.length];if(i<count-1)text+=random()>.18?' ':'  '}line.textContent=text;line.style.opacity=String(.38+random()*.48);line.style.transform=`translateX(${(random()*9-4.5).toFixed(2)}px)`;line.style.letterSpacing=`${(.015+random()*.07).toFixed(3)}em`;el.appendChild(line)}page.insertBefore(el,frame);return el};
const left=makeSide('left',0,314159),right=makeSide('right',73,271828);
function sync(){const pr=page.getBoundingClientRect(),ir=image.getBoundingClientRect();if(!pr.width||!ir.width)return;const leftWidth=Math.max(0,ir.left-pr.left),rightWidth=Math.max(0,pr.right-ir.right);left.style.width=`${leftWidth+4}px`;right.style.width=`${rightWidth+4}px`}
if(image.complete)requestAnimationFrame(sync);else image.addEventListener('load',()=>requestAnimationFrame(sync),{once:true});
addEventListener('resize',()=>requestAnimationFrame(sync),{passive:true});addEventListener('house:page',e=>{if(window.HouseBook?.pages?.[e.detail?.current]===page)requestAnimationFrame(sync)});
window.HouseActOnePiGutters={sync};
})();