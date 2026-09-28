(()=>{
  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const GLYPHS=`π${PI}`;
  const COUNT=1000;
  const PERSIST_MS=110;

  const makeLayer=(name,start,end)=>{
    const layer=document.createElement('div');
    layer.className=`void-glyph-swarm void-glyph-swarm-${name}`;
    layer.setAttribute('aria-hidden','true');
    for(let i=start;i<end;i++){
      const glyph=document.createElement('span');
      glyph.className='void-swarm-glyph';
      glyph.textContent=GLYPHS[i%GLYPHS.length];

      const t=(i-start)/Math.max(1,end-start-1);
      const turns=8.5;
      const angle=t*Math.PI*2*turns+hash(i+11)*1.15;
      const y=.045+t*.91+(hash(i+21)-.5)*.075;
      const waist=Math.sin(Math.PI*t);
      const radius=.10+.26*waist+hash(i+31)*.10;
      const x=.56+Math.cos(angle)*radius;
      const alpha=.32+hash(i+51)*.58;
      const rotate=(hash(i+61)*2-1)*34;

      glyph.style.setProperty('--swarm-x',`${(x*100).toFixed(2)}%`);
      glyph.style.setProperty('--swarm-y',`${(y*100).toFixed(2)}%`);
      glyph.style.setProperty('--swarm-alpha',alpha.toFixed(2));
      glyph.style.setProperty('--swarm-rotate',`${rotate.toFixed(1)}deg`);
      layer.appendChild(glyph);
    }
    return layer;
  };

  const bind=()=>{
    const scene=document.querySelector('.void-scene-audition');
    const monolith=scene?.querySelector('.void-monolith-audition');
    if(!scene||!monolith||scene.dataset.swarmBound)return;
    scene.dataset.swarmBound='1';
    const back=makeLayer('back',0,500);
    const front=makeLayer('front',500,COUNT);
    scene.insertBefore(back,monolith);
    scene.appendChild(front);

    let persistenceTimer=0;
    const syncPersistence=()=>{
      if(scene.classList.contains('hit')){
        window.clearTimeout(persistenceTimer);
        scene.classList.add('swarm-persist');
      }else if(scene.classList.contains('swarm-persist')){
        window.clearTimeout(persistenceTimer);
        persistenceTimer=window.setTimeout(()=>scene.classList.remove('swarm-persist'),PERSIST_MS);
      }
    };
    const observer=new MutationObserver(syncPersistence);
    observer.observe(scene,{attributes:true,attributeFilter:['class']});
  };

  window.HouseVoidSwarm={bind};
})();
