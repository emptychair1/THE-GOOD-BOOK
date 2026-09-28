(()=>{
  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const GLYPHS=`π${PI}`,COUNT=1000,PERSIST_MS=110;
  const BANDS=[
    {cx:.535,cy:.34,w:.19,h:.39,n:270},
    {cx:.585,cy:.47,w:.24,h:.43,n:310},
    {cx:.525,cy:.61,w:.18,h:.36,n:230},
    {cx:.595,cy:.72,w:.21,h:.28,n:190}
  ];

  /* V67: broken overlapping vertical bands. Close to the stone, no single closed perimeter. */
  const pointFor=i=>{
    let slot=i%COUNT,acc=0,band=BANDS[0],bandIndex=0;
    for(let b=0;b<BANDS.length;b++){acc+=BANDS[b].n;if(slot<acc){band=BANDS[b];bandIndex=b;break}}
    const u=hash(i+17),v=hash(i+29),edge=hash(i+41),side=hash(i+53)<.5?-1:1;
    let x=band.cx+(u-.5)*band.w;
    let y=band.cy+(v-.5)*band.h;
    /* Rag the sides without creating an oval envelope. */
    if(edge>.72)x+=side*(.018+hash(i+61)*.055);
    /* Cut deterministic holes through each band so the eye cannot close one outline. */
    const hole=((bandIndex===0&&y>.39&&y<.455)||(bandIndex===1&&y>.50&&y<.555&&x<band.cx)||(bandIndex===2&&y>.625&&y<.68&&x>band.cx)||(bandIndex===3&&y>.735&&y<.775));
    if(hole)y+=(hash(i+73)<.5?-1:1)*(.045+hash(i+79)*.04);
    return {x,y,rotate:(hash(i+83)*2-1)*42};
  };

  const makeLayer=(name,start,end)=>{const layer=document.createElement('div');layer.className=`void-glyph-swarm void-glyph-swarm-${name}`;layer.setAttribute('aria-hidden','true');for(let i=start;i<end;i++){const glyph=document.createElement('span');glyph.className='void-swarm-glyph';glyph.textContent=GLYPHS[i%GLYPHS.length];const p=pointFor(i);glyph.style.setProperty('--swarm-x',`${(p.x*100).toFixed(2)}%`);glyph.style.setProperty('--swarm-y',`${(p.y*100).toFixed(2)}%`);glyph.style.setProperty('--swarm-rotate',`${p.rotate.toFixed(1)}deg`);layer.appendChild(glyph)}return layer};

  const bind=()=>{const scene=document.querySelector('.void-scene-audition'),monolith=scene?.querySelector('.void-monolith-audition');if(!scene||!monolith||scene.dataset.swarmBound)return;scene.dataset.swarmBound='1';const back=makeLayer('back',0,500),front=makeLayer('front',500,COUNT);scene.insertBefore(back,monolith);scene.appendChild(front);
    const ghost=document.createElement('div');ghost.className='void-swarm-afterimage';ghost.setAttribute('aria-hidden','true');const ghostBack=back.cloneNode(true),ghostFront=front.cloneNode(true);ghostBack.className='void-glyph-swarm void-glyph-swarm-back';ghostFront.className='void-glyph-swarm void-glyph-swarm-front';ghost.append(ghostBack,ghostFront);document.body.appendChild(ghost);
    let timer=0,wasHit=false;const tick=()=>{const hit=scene.classList.contains('hit');if(hit){wasHit=true;ghost.classList.remove('show');clearTimeout(timer)}else if(wasHit){wasHit=false;ghost.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>ghost.classList.remove('show'),PERSIST_MS)}requestAnimationFrame(tick)};requestAnimationFrame(tick)};
  window.HouseVoidSwarm={bind};
})();