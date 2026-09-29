/* THE GOOD BOOK — approved glyph-light capability
   Provenance: lab/glyph-glow.html, approved 2026-09-29.
   Choreography owns which glyphs receive capabilities and when.
*/
(()=>{
  const STYLE_ID='house-glyph-light-styles';
  function ensureStyles(){
    if(document.getElementById(STYLE_ID))return;
    const s=document.createElement('style');s.id=STYLE_ID;s.textContent=`
.house-glyph-luminous{color:#f2ede2;text-shadow:0 0 3px rgba(255,250,239,.78),0 0 9px rgba(255,250,239,.52),0 0 22px rgba(255,250,239,.28),0 0 42px rgba(255,250,239,.12)}
.house-glyph-radiant{color:#f2ede2;text-shadow:0 0 2px rgba(255,252,244,.95),0 0 7px rgba(255,250,239,.82),0 0 15px rgba(255,250,239,.58),0 0 32px rgba(255,250,239,.38),0 0 62px rgba(255,250,239,.22),0 0 96px rgba(255,250,239,.12)}
.house-glyph-reveal{pointer-events:none;-webkit-mask-image:radial-gradient(circle var(--house-glyph-reveal-radius,72px) at var(--house-glyph-reveal-x,50%) var(--house-glyph-reveal-y,50%),#000 0,#000 26%,rgba(0,0,0,.78) 47%,rgba(0,0,0,.28) 72%,transparent 100%);mask-image:radial-gradient(circle var(--house-glyph-reveal-radius,72px) at var(--house-glyph-reveal-x,50%) var(--house-glyph-reveal-y,50%),#000 0,#000 26%,rgba(0,0,0,.78) 47%,rgba(0,0,0,.28) 72%,transparent 100%)}
`;document.head.appendChild(s);
  }
  function light(glyph,mode='random'){
    if(!glyph)return null;ensureStyles();
    glyph.classList.remove('house-glyph-luminous','house-glyph-radiant');
    const resolved=mode==='random'?(Math.random()<.62?'luminous':'radiant'):mode;
    if(resolved!=='luminous'&&resolved!=='radiant')return null;
    glyph.classList.add(`house-glyph-${resolved}`);glyph.dataset.houseGlyphLight=resolved;return resolved;
  }
  function lightMany(glyphs,{mode='random'}={}){return Array.from(glyphs||[]).map(g=>light(g,mode));}
  function reveal(glyph,revealEl,host,{radius=72}={}){
    if(!glyph||!revealEl||!host)return()=>{};ensureStyles();revealEl.classList.add('house-glyph-reveal');revealEl.style.setProperty('--house-glyph-reveal-radius',`${radius}px`);
    let raf=0,live=true;
    const tick=()=>{if(!live)return;const gr=glyph.getBoundingClientRect(),hr=host.getBoundingClientRect();revealEl.style.setProperty('--house-glyph-reveal-x',`${gr.left+gr.width/2-hr.left}px`);revealEl.style.setProperty('--house-glyph-reveal-y',`${gr.top+gr.height/2-hr.top}px`);raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);
    return()=>{live=false;cancelAnimationFrame(raf);revealEl.classList.remove('house-glyph-reveal')};
  }
  function clear(glyph){if(!glyph)return;glyph.classList.remove('house-glyph-luminous','house-glyph-radiant');delete glyph.dataset.houseGlyphLight;}
  window.HouseGlyphs=Object.freeze({version:'1.0-approved-light',LIGHT:light,LIGHT_MANY:lightMany,REVEAL:reveal,CLEAR_LIGHT:clear,luminous:g=>light(g,'luminous'),radiant:g=>light(g,'radiant')});
})();
