(()=>{
  const PI='π31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const PERSIST_MS=110;
  /* V70: strict full-width sky grid, enough rows to reach the actual horizon mask. */
  const buildGrid=()=>{const grid=document.createElement('div');grid.className='void-pi-grid';grid.setAttribute('aria-hidden','true');const cols=34,rows=40,total=cols*rows;for(let i=0;i<total;i++){const g=document.createElement('span');g.className='void-grid-glyph';g.textContent=PI[i%PI.length];grid.appendChild(g)}return grid};
  const bind=()=>{const scene=document.querySelector('.void-scene-audition'),monolith=scene?.querySelector('.void-monolith-audition'),landscape=scene?.querySelector('.void-landscape-audition');if(!scene||!monolith||!landscape||scene.dataset.swarmBound)return;scene.dataset.swarmBound='1';const grid=buildGrid();scene.insertBefore(grid,landscape);
    const ghost=document.createElement('div');ghost.className='void-grid-afterimage';ghost.setAttribute('aria-hidden','true');ghost.appendChild(grid.cloneNode(true));document.body.appendChild(ghost);
    let timer=0,wasHit=false;const tick=()=>{const hit=scene.classList.contains('hit');if(hit){wasHit=true;ghost.classList.remove('show');clearTimeout(timer)}else if(wasHit){wasHit=false;ghost.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>ghost.classList.remove('show'),PERSIST_MS)}requestAnimationFrame(tick)};requestAnimationFrame(tick)};
  window.HouseVoidSwarm={bind};
})();