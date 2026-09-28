(()=>{
  const d=document,w=window;
  const TEST_TEXT='And later Piper.';
  const TARGET_ID='foreword-piper-later-01';
  let target=null,targetPage=-1,timer=null,enteredAt=null;

  function findAndWrapTarget(){
    const existing=d.querySelector(`[data-house-target="${TARGET_ID}"]`);
    if(existing)return existing;
    const paragraphs=[...d.querySelectorAll('#book p')];
    const p=paragraphs.find(el=>el.textContent.trim()===TEST_TEXT);
    if(!p)throw new Error(`Conductor target not found: ${TEST_TEXT}`);
    const text=p.textContent;
    const start=text.indexOf('Piper');
    if(start<0)throw new Error('Conductor Piper token not found');
    p.textContent='';
    p.append(d.createTextNode(text.slice(0,start)));
    const span=d.createElement('span');
    span.dataset.houseTarget=TARGET_ID;
    span.className='conductor-test-piper';
    span.textContent='Piper';
    p.append(span,d.createTextNode(text.slice(start+5)));
    return span;
  }

  function pageIndexFor(el){
    const page=el?.closest('.page');
    return page&&w.HouseBook?w.HouseBook.pages.indexOf(page):-1;
  }

  function normalizedText(node){return (node?.textContent||'').replace(/\s+/g,' ').trim();}
  function targetFraction(el){
    const page=el.closest('.page');
    const frame=page.querySelector('.foreword-inner')||page;
    const full=normalizedText(frame);
    if(!full)return .6;
    const range=d.createRange();
    range.selectNodeContents(frame);
    range.setEndBefore(el);
    const before=normalizedText(range.cloneContents());
    const targetText=normalizedText(el);
    const midpoint=before.length+(targetText.length/2);
    const raw=midpoint/full.length;
    return Math.max(.08,Math.min(.96,raw));
  }

  const style=d.createElement('style');
  style.id='conductor-test-style';
  style.textContent=`
    .conductor-test-piper{position:relative;display:inline-block}
    .conductor-test-piper.conductor-fire{animation:conductorWordGlint 1.45s ease both}
    .conductor-test-piper.conductor-fire::after{content:'✦';position:absolute;left:52%;top:45%;font-size:.78em;line-height:1;opacity:0;pointer-events:none;animation:conductorSpark 1.45s ease both}
    @keyframes conductorWordGlint{0%,100%{text-shadow:none;transform:translateZ(0)}35%{text-shadow:0 0 .16em rgba(23,21,19,.22)}49%{text-shadow:-.08em 0 .28em rgba(23,21,19,.52),.08em 0 .28em rgba(23,21,19,.28)}64%{text-shadow:0 0 .2em rgba(23,21,19,.18)}}
    @keyframes conductorSpark{0%,27%,100%{opacity:0;transform:translate(-50%,-50%) scale(.25) rotate(-20deg)}45%{opacity:.9;transform:translate(35%,-115%) scale(1) rotate(10deg)}65%{opacity:.2;transform:translate(75%,-145%) scale(.65) rotate(28deg)}}
    #conductor-test-hud{position:fixed;left:max(.8rem,env(safe-area-inset-left));bottom:max(.8rem,env(safe-area-inset-bottom));z-index:12000;max-width:58vw;padding:.38rem .48rem;background:rgba(0,0,0,.78);color:rgba(255,255,255,.86);font:600 .5rem/1.42 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.075em;white-space:pre-line;pointer-events:none;border-radius:2px}
  `;
  d.head.appendChild(style);

  const hud=d.createElement('div');
  hud.id='conductor-test-hud';
  hud.textContent='CONDUCTOR TEST · WAITING\nREADING SPEED · --';
  d.body.appendChild(hud);

  function fmt(ms){return `${(ms/1000).toFixed(1)}s`;}
  function waitingHud(){
    const pace=w.HouseReadingClock?.getEstimate?.()??12000;
    hud.textContent=`CONDUCTOR TEST · WAITING FOR FOLIO ${targetPage}\nREADING SPEED · ${fmt(pace)}/page\nTARGET MODE · TEXT`;
  }
  function cancel(){if(timer!==null){clearTimeout(timer);timer=null;}enteredAt=null;}
  function fire(predicted,fraction,scheduled){
    timer=null;
    const actual=enteredAt===null?scheduled:performance.now()-enteredAt;
    target.classList.remove('conductor-fire');void target.offsetWidth;target.classList.add('conductor-fire');
    hud.textContent=`CONDUCTOR TEST · FIRED · FOLIO ${targetPage}\nPREDICTED · ${fmt(predicted)}\nTEXT TARGET · ${Math.round(fraction*100)}%\nSCHEDULED · ${fmt(scheduled)}\nACTUAL FIRE · ${fmt(actual)}`;
    w.dispatchEvent(new CustomEvent('house:conductor-test-fire',{detail:{targetId:TARGET_ID,page:targetPage,predictedMs:predicted,targetFraction:fraction,targetMode:'text',scheduledMs:scheduled,actualMs:actual}}));
  }
  function arm(){
    cancel();
    const predicted=w.HouseReadingClock?.getEstimate?.()??12000;
    const fraction=targetFraction(target);
    const scheduled=predicted*fraction;
    enteredAt=performance.now();
    hud.textContent=`CONDUCTOR TEST · ARMED · FOLIO ${targetPage}\nPREDICTED · ${fmt(predicted)}\nTEXT TARGET · ${Math.round(fraction*100)}%\nSCHEDULED · ${fmt(scheduled)}\nACTUAL FIRE · --`;
    timer=setTimeout(()=>fire(predicted,fraction,scheduled),scheduled);
  }

  target=findAndWrapTarget();
  targetPage=pageIndexFor(target);
  if(targetPage<0)throw new Error('Conductor target has no rendered page');
  waitingHud();

  w.addEventListener('house:reading-leave',()=>{
    if(w.HouseBook?.getCurrent?.()!==targetPage)waitingHud();
  });
  w.addEventListener('house:page',e=>{
    const page=Number(e.detail?.current);
    if(page===targetPage)arm();
    else{cancel();waitingHud();}
  });

  if(w.HouseBook?.getCurrent?.()===targetPage)arm();
  w.HouseConductorTest={targetId:TARGET_ID,getTargetPage:()=>targetPage,arm};
})();
