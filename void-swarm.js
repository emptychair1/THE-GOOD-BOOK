(()=>{
  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const GLYPHS=`π${PI}`,COUNT=1000,PERSIST_MS=110;

  /* V66: turbulent volume, not one traceable spiral. Same count, size, ghost behavior. */
  const makeLayer=(name,start,end)=>{
    const layer=document.createElement('div');layer.className=`void-glyph-swarm void-glyph-swarm-${name}`;layer.setAttribute('aria-hidden','true');
    for(let i=start;i<end;i++){
      const glyph=document.createElement('span');glyph.className='void-swarm-glyph';glyph.textContent=GLYPHS[i%GLYPHS.length];
      const y=.035+hash(i+17)*.93;
      const centerX=.56+(hash(i+23)-.5)*.055;
      const vertical=Math.abs(y-.5)*2;
      const envelope=.09+.24*(1-Math.pow(vertical,1.45));
      const lane=hash(i+31);
      const radius=envelope*(.12+.88*Math.pow(hash(i+37),.68));
      const theta=hash(i+43)*Math.PI*2 + (y-.5)*(2.2+hash(i+47)*5.8)*Math.PI;
      const eccentric=.52+hash(i+53)*.72;
      const turbulence=(hash(i+59)-.5)*.085;
      const x=centerX+Math.cos(theta)*radius+Math.sin(theta*2.7)*turbulence;
      const yy=y+Math.sin(theta)*radius*eccentric*.30+(hash(i+67)-.5)*.035;
      const rotate=(hash(i+71)*2-1)*42;
      glyph.style.setProperty('--swarm-x',`${(x*100).toFixed(2)}%`);
      glyph.style.setProperty('--swarm-y',`${(yy*100).toFixed(2)}%`);
      glyph.style.setProperty('--swarm-rotate',`${rotate.toFixed(1)}deg`);
      glyph.dataset.lane=lane<.34?'inner':lane<.78?'body':'ragged';
      layer.appendChild(glyph);
    }
    return layer;
  };

  const bind=()=>{
    const scene=document.querySelector('.void-scene-audition'),monolith=scene?.querySelector('.void-monolith-audition');if(!scene||!monolith||scene.dataset.swarmBound)return;scene.dataset.swarmBound='1';
    const back=makeLayer('back',0,500),front=makeLayer('front',500,COUNT);scene.insertBefore(back,monolith);scene.appendChild(front);
    const ghost=document.createElement('div');ghost.className='void-swarm-afterimage';ghost.setAttribute('aria-hidden','true');const ghostBack=back.cloneNode(true),ghostFront=front.cloneNode(true);ghostBack.className='void-glyph-swarm void-glyph-swarm-back';ghostFront.className='void-glyph-swarm void-glyph-swarm-front';ghost.append(ghostBack,ghostFront);document.body.appendChild(ghost);
    let timer=0,wasHit=false;const tick=()=>{const hit=scene.classList.contains('hit');if(hit){wasHit=true;ghost.classList.remove('show');clearTimeout(timer)}else if(wasHit){wasHit=false;ghost.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>ghost.classList.remove('show'),PERSIST_MS)}requestAnimationFrame(tick)};requestAnimationFrame(tick)
  };
  window.HouseVoidSwarm={bind};
})();