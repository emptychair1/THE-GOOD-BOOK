/* THE GOOD BOOK · V156 · Chapter Two choreography
   Contract: approved HouseMechanics only. HouseReadingClock conducts cue timing.
   No local mechanic implementations, no mechanic variants, no library mutation.
*/
(()=>{'use strict';
const HB=window.HouseBook,HM=window.HouseMechanics,RC=window.HouseReadingClock;if(!HB||!HM||!RC)return;
const pages=HB.pages.filter(p=>p.classList.contains('chapter-two-page'));if(!pages.length)return;
const timers=new Set(),done=new WeakSet();let livePage=null;
const norm=s=>String(s||'').replace(/\s+/g,' ').trim();
const elements=page=>[...page.querySelectorAll('p,.bigline,.equation,.chapter-two-sleep,strong')];
const find=(page,text,{exact=false,preferStrong=false}={})=>{const pool=preferStrong?[...page.querySelectorAll('strong'),...elements(page)]:elements(page);return pool.find(el=>exact?norm(el.textContent)===norm(text):norm(el.textContent).includes(norm(text)))||null};
const cue=(match,run,opts={})=>({match,run,opts});
const apply=(c,page)=>{const el=find(page,c.match,c.opts);if(!el||done.has(el))return;try{c.run(el,page);done.add(el)}catch(err){console.warn('[CH2 CHOREOGRAPHY] cue failed',c.match,err)}};
const cues=[
 cue('I would have to choose.',el=>HM.agency(el),{exact:true}),
 cue('MATTERED',el=>{el.classList.add('hm-react');HM.reagent(el.closest('p')||el,'.hm-react')},{preferStrong:true,exact:true}),
 cue('Why God?',el=>HM.pressure(el),{exact:true}),
 cue('BELIEF',el=>{const a=HM.accumulate(el);a.expose();a.expose();a.expose()},{preferStrong:true,exact:true}),
 cue('TRUTH',el=>{const a=HM.accumulate(el);for(let i=0;i<4;i++)a.expose()},{preferStrong:true,exact:true}),
 cue('GOOD',el=>{const a=HM.accumulate(el);for(let i=0;i<5;i++)a.expose()},{preferStrong:true,exact:true}),
 cue('BAD',el=>{const a=HM.accumulate(el);for(let i=0;i<6;i++)a.expose()},{preferStrong:true,exact:true}),
 cue('choice → outcome → compare → update',el=>HM.compile(el),{exact:true}),
 cue('Some of it was legitimate. Some of it was speculation.',el=>HM.reflection(el)),
 cue('Elations so clean they felt like proof.',el=>HM.phosphor(el)),
 cue('because two things could be connected, the connection must matter',el=>HM.certainty(el,{pieces:[el]})),
 cue('the euphoria itself was not evidence',el=>HM.strike(el)),
 cue('Then I would keep going anyway.',el=>HM.intrusion(el),{exact:true}),
 cue('questions developed children',el=>HM.organic(el)),
 cue('Why does consciousness have to be BRAINS?',el=>HM.pressure(el),{exact:true}),
 cue('This did not stop me.',el=>HM.agency(el),{preferStrong:true,exact:true}),
 cue('Nobody could stop me from asking.',el=>HM.agency(el),{exact:true}),
 cue('Sparring with the giants.',el=>HM.cast(el),{exact:true}),
 cue('I had found consciousness.',el=>HM.strike(el)),
 cue('I had independently solved consciousness.',el=>HM.strike(el)),
 cue('I had found questions that were already alive in serious theory.',el=>HM.registerReturn(el),{exact:true}),
 cue('consciousness might be an expansion of love',el=>HM.love(el)),
 cue('It would wait.',el=>HM.absence(el),{exact:true}),
 cue('Question. Answer. Break it. Next.',el=>HM.overtype(el),{exact:true}),
 cue('It was electric.',el=>HM.beam(el),{exact:true}),
 cue('MEANINGLESSNESS',el=>HM.cast(el.closest('p')||el),{preferStrong:true,exact:true}),
 cue('Otherwise it was just another drug.',el=>HM.fall(el),{exact:true}),
 cue('Not right now.',el=>HM.distance(el),{exact:true}),
 cue('Overall.',el=>HM.registerReturn(el),{exact:true}),
 cue('There was the machine.',el=>HM.cast(el),{exact:true}),
 cue('Immediate reward entered.',el=>HM.pressure(el),{exact:true}),
 cue('WANTED NOW',el=>HM.overtype(el),{preferStrong:true,exact:true}),
 cue('WANTED',el=>{el.classList.add('hm-react');HM.reagent(el.closest('p')||el,'.hm-react')},{preferStrong:true,exact:true}),
 cue('impulse ≠ considered preference',el=>HM.compile(el),{exact:true}),
 cue('If I could create a pause between impulse and action',el=>HM.distance(el)),
 cue('Memory. Values. Consequences. The future.',el=>{const a=HM.accumulate(el);for(let i=0;i<5;i++)a.expose()}),
 cue('State. Choice. Outcome. Error. Update.',el=>HM.compile(el),{preferStrong:true,exact:true}),
 cue('Maybe being wrong was not evidence that the system was worthless. Maybe being wrong was how the system learned.',el=>HM.registerReturn(el),{exact:true}),
 cue('Now I was trying to teach mine to hesitate.',el=>HM.hand(el),{exact:true}),
 cue('I wanted to create a pause.',el=>HM.distance(el),{exact:true}),
 cue('movement without certainty',el=>HM.agency(el)),
 cue('Empty Chair.',el=>HM.compile(el),{exact:true}),
 cue('I had no idea that somewhere downstream there would be M4, DS100, a woman named Piper, fifty-five jumps, a lighthouse, a house that remembered, or a book with this sentence in it.',el=>HM.palimpsest(el,'M4 · DS100 · Piper · fifty-five jumps · lighthouse · house · book'),{exact:true}),
 cue('s L E E P',el=>HM.distance(el),{exact:true})
];
function clearTimers(){for(const id of timers)clearTimeout(id);timers.clear()}
function schedule(page){clearTimers();livePage=page;const local=cues.filter(c=>find(page,c.match,c.opts));if(!local.length)return;const estimate=Math.max(6500,Math.min(45000,RC.getEstimate?.()||12000)),windowMs=estimate*.78,step=local.length>1?windowMs/(local.length-1):0;local.forEach((c,i)=>{const id=setTimeout(()=>{timers.delete(id);if(livePage===page)apply(c,page)},Math.round(i*step));timers.add(id)})}
function sync(index){const page=HB.pages[index];if(!page?.classList.contains('chapter-two-page')){livePage=null;clearTimers();return}schedule(page)}
addEventListener('house:page',e=>sync(Number(e.detail?.current)));sync(HB.getCurrent?.()||0);
window.HouseChapterTwoChoreography=Object.freeze({version:'156-approved-library-reading-clock',pages,cues});
})();