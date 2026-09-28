(()=>{
  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const BASS_IN=25.54;
  const BASS_HITS=[25.587,26.087,26.586,27.086,27.586,28.086,28.586,29.086,29.586,30.086,30.586,31.086,31.586,32.086,32.586,33.086,33.586,34.086,34.586,35.086,35.586,36.086];
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
    let further=document.querySelector('.void-further-button');
    if(!further){further=document.createElement('button');further.type='button';further.className='void-further-button';further.textContent='I want to go further';Object.assign(further.style,{display:'none',position:'fixed',left:'50%',bottom:'max(calc(env(safe-area-inset-bottom) + 4.6rem), 5rem)',transform:'translateX(-50%)',zIndex:'2147483645',border:'0',background:'transparent',color:'#fff',padding:'1.25rem 1.5rem',fontFamily:'"Geist Pixel", monospace',fontSize:'.78rem',fontWeight:'400',lineHeight:'1.15',whiteSpace:'nowrap',cursor:'pointer',touchAction:'manipulation',WebkitTapHighlightColor:'transparent'});document.body.appendChild(further)}
    const fitVoid=()=>{page.style.setProperty('--void-fit','1');flashWord.style.setProperty('--void-fit','1');const box=word.getBoundingClientRect();const scale=Math.min(window.innerWidth/Math.max(box.width,1),window.innerHeight/Math.max(box.height,1));page.style.setProperty('--void-fit',scale);flashWord.style.setProperty('--void-fit',scale)};
    const ready=document.fonts?.ready||Promise.resolve();ready.then(fitVoid);window.addEventListener('resize',fitVoid,{passive:true});
    let flashTimer=0,bassRAF=0,nextHit=0,bassMode=false;
    const hitFlash=()=>{window.clearTimeout(flashTimer);flash.style.display='block';flash.classList.add('hit');flashWord.classList.add('hit');void flash.offsetWidth;flashTimer=window.setTimeout(()=>{flashWord.classList.remove('hit');flash.classList.remove('hit');flash.style.display='none'},90)};
    const watchBass=()=>{if(!bassMode)return;const t=audio.currentTime;while(nextHit<BASS_HITS.length&&t>=BASS_HITS[nextHit]){hitFlash();nextHit++}if(nextHit<BASS_HITS.length){bassRAF=requestAnimationFrame(watchBass)}else{bassMode=false}};
    button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();if(root.classList.contains('is-awake'))return;fitVoid();audio.pause();try{audio.currentTime=.055}catch{}hitFlash();root.classList.add('is-awake');const play=audio.play();window.setTimeout(()=>{question.classList.add('is-gone');further.style.display='block'},2200);if(play?.catch)play.catch(error=>{console.error('[THE GOOD BOOK] VOID AUDIO FAIL',error);root.classList.remove('is-awake');flashWord.classList.remove('hit');flash.classList.remove('hit');flash.style.display='none'})});
    const goFurther=event=>{if(bassMode)return;event.preventDefault();event.stopPropagation();fitVoid();cancelAnimationFrame(bassRAF);bassMode=true;nextHit=0;audio.pause();try{audio.currentTime=BASS_IN}catch{}const play=audio.play();const startClockWatch=()=>{cancelAnimationFrame(bassRAF);bassRAF=requestAnimationFrame(watchBass)};if(play?.then)play.then(startClockWatch).catch(error=>{bassMode=false;further.style.display='block';console.error('[THE GOOD BOOK] VOID BASS SEEK FAIL',error)});else startClockWatch();further.style.display='none'};
    further.addEventListener('pointerup',goFurther,{passive:false});further.addEventListener('click',event=>{if(event.detail===0)goFurther(event)});
  };
  window.HouseVoid={bind};
})();
