(()=>{
  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const GLYPHS=`π${PI}`;
  const COUNT=128;

  const makeLayer=(name,start,end)=>{
    const layer=document.createElement('div');
    layer.className=`void-glyph-swarm void-glyph-swarm-${name}`;
    layer.setAttribute('aria-hidden','true');
    for(let i=start;i<end;i++){
      const glyph=document.createElement('span');
      glyph.className='void-swarm-glyph';
      glyph.textContent=GLYPHS[i%GLYPHS.length];

      const t=(i-start)/Math.max(1,end-start-1);
      const turns=3.35;
      const angle=t*Math.PI*2*turns+hash(i+11)*.7;
      const y=.10+t*.82+(hash(i+21)-.5)*.055;
      const waist=Math.sin(Math.PI*t);
      const radius=.13+.23*waist+hash(i+31)*.075;
      const x=.56+Math.cos(angle)*radius;
      const depth=Math.sin(angle);
      const size=.56+hash(i+41)*1.18+(depth+1)*.12;
      const alpha=.34+hash(i+51)*.54;
      const rotate=(hash(i+61)*2-1)*34;

      glyph.style.setProperty('--swarm-x',`${(x*100).toFixed(2)}%`);
      glyph.style.setProperty('--swarm-y',`${(y*100).toFixed(2)}%`);
      glyph.style.setProperty('--swarm-size',`${size.toFixed(2)}rem`);
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
    const back=makeLayer('back',0,64);
    const front=makeLayer('front',64,COUNT);
    scene.insertBefore(back,monolith);
    scene.appendChild(front);
  };

  window.HouseVoidSwarm={bind};
})();
