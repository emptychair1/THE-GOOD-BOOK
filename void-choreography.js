(()=>{
  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const BASS_IN=8.06;
  const BASS_HITS=[8.098,8.379,8.638,8.841,9.038,9.239,9.506,9.781,9.985,10.220,10.426,10.678,10.934,11.140,11.346];
  const bind=()=>{
    const root=document.querySelector('.void-sound'),page=root?.closest('.void'),button=root?.querySelector('.sound-want'),question=root?.querySelector('.sound-question'),audio=document.querySelector('.void-audio'),word=page?.querySelector('.void-word');
    if(!root||!page||!button||!question||!audio||!word||button.dataset.voidBound)return;
    button.dataset.voidBound='1';
    const orbit=document.createElement('div');orbit.className='void-organisms';orbit.setAttribute('aria-hidden','true');
    for(let i=0;i<8;i++){const g=document.createElement('span');g.className='void-organism';g.textContent=PI[i];g.style.setProperty('--angle',`${i*45+hash(i+41)*18-9}deg`);g.style.setProperty('--radius',`${3.75+hash(i+81)*.8}rem`);g.style.setProperty('--size',`${.56+hash(i+121)*.28}rem`);g.style.setProperty('--alpha',`${.58+hash(i+161)*.34}`);g.style.setProperty('--scatter-x',`${(hash(i+201)*2-1)*9}rem`);g.style.setProperty('--scatter-y',`${(hash(i+241)*2-1)*7}rem`);g.style.setProperty('--delay',`${hash(i+281)*.08}s`);orbit.appendChild(g)}
    root.prepend(orbit);
    let flash=document.querySelector('.void-flash-screen');
    if(!flash){flash=document.createElement('div');flash.className='void-flash-screen';flash.setAttribute('aria-hidden','true');document.body.appendChild(flash)}
    let flashWord=document.querySelector('.void-flash-word');
    if(!flashWord){flashWord=document.createElement('div');flashWord.className='void-flash-word';flashWord.setAttribute('aria-hidden','true');flashWord.innerHTML='<div class="void-flash-stack"><span class="void-flash-the">THE</span><span class="void-flash-void">VOID</span></div>';document.body.appendChild(flashWord)}
    const fitVoid=()=>{page.style.setProperty('--void-fit','1');flashWord.style.setProperty('--void-fit','1');const box=word.getBoundingClientRect();const scale=Math.min(window.innerWidth/Math.max(box.width,1),window.innerHeight/Math.max(box.height,1));page.style.setProperty('--void-fit',scale);flashWord.style.setProperty('--void-fit',scale)};
    const ready=document.fonts?.ready||Promise.resolve();ready.then(fitVoid);window.addEventListener('resize',fitVoid,{passive:true});
    let flashTimer=0,bassRAF=0,nextHit=0,bassMode=false;
    const hitFlash=()=>{window.clearTimeout(flashTimer);flash.style.display='block';flash.classList.add('hit');flashWord.classList.add('hit');void flash.offsetWidth;flashTimer=window.setTimeout(()=>{flashWord.classList.remove('hit');flash.classList.remove('hit');flash.style.display='none'},90)};
    const watchBass=()=>{if(!bassMode)return;const t=audio.currentTime;while(nextHit<BASS_HITS.length&&t>=BASS_HITS[nextHit]-.018){hitFlash();nextHit++}if(nextHit<BASS_HITS.length&&t<BASS_HITS[BASS_HITS.length-1]+.2)bassRAF=requestAnimationFrame(watchBass);else bassMode=false};
    button.addEventListener('click',event=>{
      event.preventDefault();event.stopPropagation();if(root.classList.contains('is-awake'))return;fitVoid();audio.pause();
      try{audio.currentTime=.055}catch{}
      hitFlash();root.classList.add('is-awake');const play=audio.play();
      window.setTimeout(()=>{question.textContent='I want to go further';question.setAttribute('role','button');question.setAttribute('tabindex','0');question.classList.add('is-further')},2200);
      if(play?.catch)play.catch(error=>{console.error('[THE GOOD BOOK] VOID AUDIO FAIL',error);root.classList.remove('is-awake');flashWord.classList.remove('hit');flash.classList.remove('hit');flash.style.display='none'});
    });
    const goFurther=event=>{
      if(!question.classList.contains('is-further')||bassMode)return;if(event.type==='keydown'&&event.key!=='Enter'&&event.key!==' ')return;event.preventDefault();event.stopPropagation();
      fitVoid();cancelAnimationFrame(bassRAF);bassMode=true;nextHit=0;audio.pause();try{audio.currentTime=BASS_IN}catch{};const play=audio.play();bassRAF=requestAnimationFrame(watchBass);question.classList.add('is-gone');
      if(play?.catch)play.catch(error=>{bassMode=false;console.error('[THE GOOD BOOK] VOID BASS SEEK FAIL',error)});
    };
    question.addEventListener('click',goFurther);question.addEventListener('keydown',goFurther);
  };
  window.HouseVoid={bind};
})();
