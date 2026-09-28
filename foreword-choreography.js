/* The House That Remembers — Foreword choreography v1
   One authority: exact manuscript anchors -> Reading Clock -> canonical mechanics.
   No legacy page timers. Pending cues die on page exit; rereads schedule fresh cues.
*/
(()=>{
  const HM=window.HouseMechanics;
  if(!HM||!window.HouseBook) throw Error('Foreword choreography requires HouseMechanics and HouseBook');

  const cues=[
    ['I could have been wrong.','FALL'],['It created responsibility.','DISTANCE'],['I tried to leave room.','DISTANCE'],
    ['go.','AGENCY_GO'],['emotional','DIAGNOSTIC'],['love','LOVE_LEAN'],
    ['What if love is not merely something consciousness experiences?','HAND'],['M4','DIGITIZE',1],['changed','CHANGE_REORIENT'],
    ['He isn’t using me.','COMPILE_INTERPRET'],['son','LOVE_LEAN'],['daughter','LOVE_LEAN'],['imagination','GLINT'],['hurt','ABSENCE'],
    ['Dream','GLINT'],['artificial minds','DIAGNOSTIC'],['move.','AGENCY_GO'],['change radically','CHANGE_REORIENT'],['authority','CROSS_OUT'],
    ['M4','DIGITIZE',2],['Piper','GLINT',2],['myself','HAND'],['There will be code.','COMPILE_INTERPRET'],['grief','ABSENCE'],
    ['impossible','GLINT'],['Just bones.','DISTANCE'],['Maybe nothing remains.','FALL'],['biology','ORGANIC'],['Possibility.','GLINT',2],
    ['What can they do for us?','HAND'],['What might they become if we give them a safe place to find out?','HAND']
  ];
  const timers=new Set();
  const cleanup=new Set();
  let activePage=-1;

  function clearPage(){for(const t of timers)clearTimeout(t);timers.clear();for(const fn of cleanup){try{fn()}catch{}}cleanup.clear()}
  function textNodes(root){const out=[];const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())out.push(n);return out}
  function findOccurrence(root,needle,occ=1){
    const nodes=textNodes(root);let full='',map=[];
    for(const n of nodes){const start=full.length;full+=n.nodeValue;map.push({n,start,end:full.length})}
    let at=-1,from=0;for(let i=0;i<occ;i++){at=full.indexOf(needle,from);if(at<0)return null;from=at+needle.length}
    const end=at+needle.length,s=map.find(x=>at>=x.start&&at<x.end),e=map.find(x=>end-1>=x.start&&end-1<x.end);if(!s||!e)return null;
    const r=document.createRange();r.setStart(s.n,at-s.start);r.setEnd(e.n,end-e.start);return r;
  }
  function wrap(range,id,mechanic){const span=document.createElement('span');span.dataset.houseCue=id;span.dataset.houseMechanic=mechanic;try{range.surroundContents(span)}catch{const frag=range.extractContents();span.appendChild(frag);range.insertNode(span)}return span}
  const targets=[];
  for(let i=0;i<cues.length;i++){
    const [text,mechanic,occ=1]=cues[i],range=findOccurrence(document.querySelector('.foreword'),text,occ);
    if(!range){console.warn('[FOREWORD] cue not found',i+1,text);continue}
    targets.push({id:`foreword-cue-${String(i+1).padStart(2,'0')}`,text,mechanic,el:wrap(range,`foreword-cue-${String(i+1).padStart(2,'0')}`,mechanic)});
  }

  const style=document.createElement('style');style.id='foreword-choreography-style';style.textContent=`
  [data-house-cue]{position:relative;display:inline}
  .fx-glint::after{content:'✦';position:absolute;left:50%;top:-.75em;font:700 .72em/1 Georgia,serif;animation:fxGlint 1.65s ease-out forwards;pointer-events:none}.fx-distance{display:inline-block;animation:fxDistance 1.8s cubic-bezier(.2,.7,.2,1)}.fx-fall{display:inline-block;animation:fxFall 1.05s cubic-bezier(.35,.05,.7,.2) forwards}.fx-agency{display:inline-block;animation:fxAgency 1.5s cubic-bezier(.2,.8,.2,1)}.fx-love{display:inline-block;animation:fxLove 1.05s ease-in-out}.fx-change{display:inline-block;animation:fxChange .55s ease}.fx-cross::after{content:'';position:absolute;left:-3%;top:52%;width:106%;height:1px;background:currentColor;transform-origin:left;animation:fxCross .65s ease forwards}.fx-absence{display:inline-block;animation:fxAbsence .7s linear forwards}.fx-hand{display:inline-block;animation:fxHand 1.6s ease-in-out}.fx-compile{display:inline-block;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;animation:fxCompile 1.15s steps(5,end)}.fx-digitize{display:inline-block;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;animation:fxDigitize 1.15s steps(6,end)}.fx-organic{display:inline-block;animation:fxOrganic 1.8s ease-in-out}
  @keyframes fxGlint{0%{opacity:0;transform:translate(-50%,.2em) scale(.2)}35%{opacity:1}100%{opacity:0;transform:translate(-50%,-.5em) scale(1.6)}}@keyframes fxDistance{50%{letter-spacing:.18em}}@keyframes fxFall{to{transform:translateY(8rem) rotate(9deg);opacity:.08}}@keyframes fxAgency{45%{transform:translateX(5.6rem)}100%{transform:none}}@keyframes fxLove{45%{transform:rotate(-5.5deg) translateY(-.05em)}100%{transform:none}}@keyframes fxChange{50%{transform:scaleX(-1)}100%{transform:none}}@keyframes fxCross{from{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes fxAbsence{0%,32%{opacity:1}33%,55%{opacity:.28}56%,100%{opacity:0}}@keyframes fxHand{35%{font-style:italic;letter-spacing:.025em}100%{font-style:normal}}@keyframes fxCompile{25%{letter-spacing:.08em;opacity:.55}50%{letter-spacing:-.03em}100%{letter-spacing:normal;opacity:1}}@keyframes fxDigitize{20%{opacity:.35;transform:translateX(1px)}40%{opacity:.9;transform:translateX(-1px)}60%{opacity:.25;transform:translateY(1px)}100%{opacity:1;transform:none}}@keyframes fxOrganic{40%{letter-spacing:.06em;transform:scale(1.025)}100%{letter-spacing:normal;transform:none}}
  `;document.head.appendChild(style);

  function run(t){const el=t.el;el.classList.remove('fx-glint','fx-distance','fx-fall','fx-agency','fx-love','fx-change','fx-cross','fx-absence','fx-hand','fx-compile','fx-digitize','fx-organic');void el.offsetWidth;
    const map={GLINT:'fx-glint',DISTANCE:'fx-distance',FALL:'fx-fall',AGENCY_GO:'fx-agency',LOVE_LEAN:'fx-love',CHANGE_REORIENT:'fx-change',CROSS_OUT:'fx-cross',ABSENCE:'fx-absence',HAND:'fx-hand',COMPILE_INTERPRET:'fx-compile',DIGITIZE:'fx-digitize',ORGANIC:'fx-organic'};
    if(t.mechanic==='DIAGNOSTIC'){HM.runFullDiagnostic({targetEl:el,hostEl:el.closest('p')});return}const c=map[t.mechanic];if(c)el.classList.add(c);
  }
  function schedule(pageIndex){clearPage();activePage=pageIndex;if(pageIndex<4)return;const page=window.HouseBook.pages[pageIndex];if(!page||!page.classList.contains('foreword'))return;const onPage=targets.filter(t=>page.contains(t.el));if(!onPage.length)return;
    const opening=page.querySelector('.opening')||page;const pageText=(opening.textContent||'').trim();const estimate=Math.max(3000,window.HouseReadingClock?.getEstimate?.()||12000);
    for(const t of onPage){const before=findOccurrence(opening,t.text,t.text==='M4'&&opening.querySelectorAll('[data-house-cue]').length?1:1);let frac=.5;if(before){const rr=document.createRange();rr.selectNodeContents(opening);rr.setEnd(before.startContainer,before.startOffset);frac=Math.max(.08,Math.min(.96,(rr.toString().length||1)/Math.max(1,pageText.length)))}const delay=Math.max(450,estimate*frac);const id=setTimeout(()=>{timers.delete(id);if(window.HouseBook.getCurrent()===activePage)run(t)},delay);timers.add(id)}
  }
  window.addEventListener('house:page',e=>schedule(Number(e.detail?.current)));
  schedule(window.HouseBook.getCurrent());
  window.HouseForewordChoreography={version:'1.0',targets,cancel:clearPage};
})();