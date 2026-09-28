(()=>{
  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const bind=()=>{
    const root=document.querySelector('.void-sound'),page=root?.closest('.void'),button=root?.querySelector('.sound-want'),audio=document.querySelector('.void-audio');
    if(!root||!page||!button||!audio||button.dataset.voidBound)return;
    button.dataset.voidBound='1';
    const orbit=document.createElement('div');orbit.className='void-organisms';orbit.setAttribute('aria-hidden','true');
    for(let i=0;i<8;i++){const g=document.createElement('span');g.className='void-organism';g.textContent=PI[i];g.style.setProperty('--angle',`${i*45+hash(i+41)*18-9}deg`);g.style.setProperty('--radius',`${3.75+hash(i+81)*.8}rem`);g.style.setProperty('--size',`${.56+hash(i+121)*.28}rem`);g.style.setProperty('--alpha',`${.58+hash(i+161)*.34}`);g.style.setProperty('--scatter-x',`${(hash(i+201)*2-1)*9}rem`);g.style.setProperty('--scatter-y',`${(hash(i+241)*2-1)*7}rem`);g.style.setProperty('--delay',`${hash(i+281)*.08}s`);orbit.appendChild(g)}
    root.prepend(orbit);
    let flash=document.querySelector('.void-flash-screen');
    if(!flash){flash=document.createElement('div');flash.className='void-flash-screen';flash.setAttribute('aria-hidden','true');document.body.appendChild(flash)}
    let flashWord=document.querySelector('.void-flash-word');
    if(!flashWord){flashWord=document.createElement('div');flashWord.className='void-flash-word';flashWord.setAttribute('aria-hidden','true');flashWord.innerHTML='<span>VOID</span>';document.body.appendChild(flashWord)}
    button.addEventListener('click',event=>{
      event.preventDefault();event.stopPropagation();
      if(root.classList.contains('is-awake'))return;
      audio.pause();
      const AUDIO_IN=0.055;
      try{audio.currentTime=AUDIO_IN}catch{}
      flash.style.display='block';flash.classList.add('hit');flashWord.classList.add('hit');
      void flash.offsetWidth;
      root.classList.add('is-awake');
      const play=audio.play();
      window.setTimeout(()=>{flashWord.classList.remove('hit');flash.classList.remove('hit');flash.style.display='none'},90);
      if(play?.catch)play.catch(error=>{console.error('[THE GOOD BOOK] VOID AUDIO FAIL',error);root.classList.remove('is-awake');flashWord.classList.remove('hit');flash.classList.remove('hit');flash.style.display='none'});
    });
  };
  window.HouseVoid={bind};
})();
