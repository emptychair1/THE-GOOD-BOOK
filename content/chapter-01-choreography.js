(()=>{
'use strict';
const HM=window.HouseMechanics;
if(!HM)throw Error('Chapter One choreography requires HouseMechanics');
const chapterPages=()=>[...(window.HouseBook?.pages||[])].filter(p=>p.classList.contains('chapter-one-page'));
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function wrapText(root,text,id){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement?.closest('.hm-target,.chapter-one-folio,.chapter-one-margin-layer')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let n;while(n=walker.nextNode()){const i=n.nodeValue.indexOf(text);if(i<0)continue;const span=document.createElement('span');span.dataset.ch1=id;span.textContent=text;const after=n.splitText(i);after.nodeValue=after.nodeValue.slice(text.length);after.parentNode.insertBefore(span,after);return span}return null}
function find(text,id){for(const page of chapterPages()){const hit=wrapText(page,text,id);if(hit)return hit}console.warn('[CH1] target not found',text);return null}
function pageOf(el){return el?.closest('.chapter-one-page')}
const targets={
 reflection1:find('At night they reflected the room.','reflection1'),
 cast1:find('You could stand at one and look outward and see only yourself.','cast1'),
 shutter1:find('Inside, I had become increasingly offended by existence.','shutter1'),
 die:find('Then die.','die'),
 rock:find('Eventually the shovel hit rock.','rock'),
 why:find('But why?','why'),
 hand:find('My hand','hand'),
 mine:find('mine','mine'),
 obvious:find('the obviousness of obvious things','obvious'),
 broke:find('Then I broke it.','broke'),
 q1:find('If I see God, is that God?','q1'),
 q2:find('If I feel God, is that God?','q2'),
 q3:find('If I know God, is that God?','q3'),
 q4:find('If I experience God, what exactly have I proven?','q4'),
 locked:find('Every path returned to the same locked room.','locked'),
 consciousness:find('Consciousness.','consciousness'),
 observer:find('the observer was the instrument.','observer'),
 pushed:find('I pushed on the answers.','pushed'),
 broke2:find('Sometimes they broke.','broke2'),
 good:find('Good.','good'),
 walls:find('I needed it to help me find the walls.','walls'),
 what:find('So what the fuck was it?','what'),
 inputs:find('Inputs.','inputs'),weights:find('Weights.','weights'),threshold:find('Threshold.','threshold'),output:find('Output.','output'),
 equation1:find('y = f( Σ wᵢxᵢ + b )','equation1'),
 remain:find('What must remain when everything unnecessary is removed?','remain'),
 carbon:find('Carbon.','carbon'),cells:find('Cells.','cells'),blood:find('Blood.','blood'),proteins:find('Proteins.','proteins'),geometry:find('Geometry.','geometry'),
 lightout:find('At what subtraction does the light go out?','lightout'),
 memory:find('Memory.','memory'),recurrence:find('Recurrence.','recurrence'),integration:find('Integration.','integration'),differentiation:find('Differentiation.','differentiation'),time:find('Time.','time'),selfref:find('Self-reference.','selfref'),prediction:find('Prediction.','prediction'),
 error:find('Error.','error'),update:find('Update.','update'),again1:find('Again.','again1'),again2:find('Again.','again2'),again3:find('Again.','again3'),
 nothingWoke:find('Nothing woke up.','nothingWoke'),excellent:find('Excellent.','excellent'),modify:find('Modify the hypothesis.','modify'),
 equation2:find('C = F(S)','equation2'),probably:find('Probably wrong.','probably'),wrongTested:find('Wrong things can be tested.','wrongTested'),
 horror:find('The horror was subtler.','horror'),described:find('Every piece could be described.','described'),
 someone:find('someone home.','someone'),reflection2:find('The room reflected back at me.','reflection2'),notthen:find('Not then.','notthen')
};
const cue=(el,fn)=>el&&fn&&({el,page:pageOf(el),run:fn,done:false});
const cues=[];const add=(el,fn)=>{const c=cue(el,fn);if(c)cues.push(c)};
add(targets.reflection1,()=>HM.reflection(targets.reflection1));add(targets.cast1,()=>HM.cast(targets.cast1));add(targets.shutter1,()=>HM.shutter(targets.shutter1));add(targets.die,()=>HM.phosphor(targets.die));add(targets.rock,()=>HM.reagent(targets.rock,'.hm-react'));targets.rock?.classList.add('hm-react');add(targets.why,()=>HM.palimpsest(targets.why,'Why?'));
add(targets.hand,()=>{const host=targets.hand.parentElement,under=document.createElement('span');under.textContent='my hand';host.insertBefore(under,targets.hand);return HM.verso(host,{frontEl:targets.hand,underEl:under})});add(targets.obvious,()=>HM.shutter(targets.obvious));add(targets.broke,()=>HM.phosphor(targets.broke));
[targets.q1,targets.q2,targets.q3,targets.q4].forEach((el,i)=>add(el,()=>HM.palimpsest(el,i?['If I see God…','If I feel God…','If I know God…'][i-1]:'God?')));add(targets.locked,()=>HM.cast(targets.locked));targets.consciousness?.classList.add('hm-react');add(targets.consciousness,()=>HM.reagent(targets.consciousness,'.hm-react'));add(targets.observer,()=>HM.beam(targets.observer));
add(targets.pushed,()=>HM.intrusion(targets.pushed));add(targets.broke2,()=>HM.strike(targets.broke2));add(targets.good,()=>HM.glint(targets.good));add(targets.walls,()=>HM.runFullDiagnostic({targetEl:targets.walls}));add(targets.what,()=>HM.runFullDiagnostic({targetEl:targets.what}));
[targets.inputs,targets.weights,targets.threshold,targets.output].forEach(el=>add(el,()=>HM.compile(el)));add(targets.equation1,()=>HM.runFullDiagnostic({targetEl:targets.equation1}));add(targets.remain,()=>HM.shutter(targets.remain));[targets.carbon,targets.cells,targets.blood,targets.proteins,targets.geometry].forEach(el=>add(el,()=>HM.absence(el)));add(targets.lightout,()=>HM.cast(targets.lightout));
[targets.memory,targets.recurrence,targets.integration,targets.differentiation,targets.time,targets.selfref,targets.prediction].forEach(el=>add(el,()=>{const a=HM.accumulate(el,el.textContent,{count:6});let i=0;const id=setInterval(()=>{a.expose();if(++i>=6)clearInterval(id)},260)}));[targets.error,targets.update,targets.again1,targets.again2,targets.again3].forEach(el=>add(el,()=>HM.compile(el)));add(targets.nothingWoke,()=>HM.absence(targets.nothingWoke));add(targets.excellent,()=>HM.glint(targets.excellent));add(targets.modify,()=>HM.strike(targets.modify));
add(targets.equation2,()=>HM.runFullDiagnostic({targetEl:targets.equation2}));add(targets.probably,()=>HM.strike(targets.probably));targets.wrongTested?.classList.add('hm-react');add(targets.wrongTested,()=>HM.reagent(targets.wrongTested,'.hm-react'));add(targets.horror,()=>HM.shutter(targets.horror));add(targets.described,()=>HM.cast(targets.described));add(targets.someone,()=>HM.phosphor(targets.someone));add(targets.reflection2,()=>HM.reflection(targets.reflection2));add(targets.notthen,()=>HM.palimpsest(targets.notthen,'It stared back.'));
const byPage=new Map();cues.forEach(c=>{const a=byPage.get(c.page)||[];a.push(c);byPage.set(c.page,a)});
let timers=[];const clear=()=>{timers.forEach(clearTimeout);timers=[]};
function schedule(page){clear();const list=(byPage.get(page)||[]).filter(c=>!c.done);if(!list.length)return;const estimate=Math.max(6500,Math.min(45000,window.HouseReadingClock?.getEstimate?.()||12000));const usable=estimate*.72;list.forEach((c,i)=>{const delay=650+(usable*(i+1)/(list.length+1));timers.push(setTimeout(()=>{if(window.HouseBook?.pages?.[window.HouseBook.getCurrent?.()]!==page)return;c.done=true;try{c.run()}catch(e){console.error('[CH1 MECHANIC]',e)}},delay))})}
addEventListener('house:page',e=>{const page=window.HouseBook?.pages?.[e.detail?.current];if(page?.classList.contains('chapter-one-page'))schedule(page);else clear()});const current=window.HouseBook?.pages?.[window.HouseBook?.getCurrent?.()];if(current?.classList.contains('chapter-one-page'))schedule(current);
window.HouseChapterOneChoreography={version:'1.0-v94',targets,cues};
})();