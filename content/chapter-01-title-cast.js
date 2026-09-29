(()=>{
'use strict';
const HM=window.HouseMechanics,book=window.HouseBook;if(!HM||!book)return;
const title=document.querySelector('#chapter1 h1');if(!title){console.warn('[CH1 TITLE CAST] title element missing');return}
let done=false,timer=0;
const badge=document.querySelector('.version-badge');
const probe=s=>{if(badge)badge.dataset.castProbe=s;console.debug('[CH1 TITLE CAST]',s)};
const visible=()=>{const page=title.closest('.chapter-one-page'),r=page?.getBoundingClientRect();return !!(r&&r.width&&r.height&&r.right>0&&r.left<innerWidth&&r.bottom>0&&r.top<innerHeight)};
function arm(){if(done||!visible())return;clearTimeout(timer);probe('TITLE FOUND');const estimate=Math.max(6500,Math.min(45000,window.HouseReadingClock?.getEstimate?.()||12000));const delay=Math.max(900,Math.min(3200,estimate*.16));timer=setTimeout(()=>{if(done||!visible())return;done=true;probe('CALL');try{HM.cast(title);requestAnimationFrame(()=>probe('FIRED'))}catch(e){probe('ERROR');console.error('[CH1 TITLE CAST]',e)}},delay)}
addEventListener('house:page',()=>requestAnimationFrame(arm));addEventListener('house:ready',()=>requestAnimationFrame(arm));setTimeout(arm,150);setTimeout(arm,700);
window.HouseChapterOneTitleCast={version:'1.0-v106',title,arm};
})();