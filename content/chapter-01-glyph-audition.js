/* THE GOOD BOOK · V146 · Chapter One glyph field
   Approved density: 13 glyphs per Chapter One page.
   Established inherited size, wandering behavior, and approved luminous/radiant distribution remain unchanged.
   Each page gets its own deterministic field so the pattern does not visibly repeat page-to-page.
*/
(()=>{
  const book=window.HouseBook,HG=window.HouseGlyphs;
  if(!book||!HG)return;
  const pages=book.pages.filter(p=>p.classList.contains('chapter-one-page'));
  if(!pages.length)return;

  const PI='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  const COUNT=13;
  const hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
  const allGlyphs=[];

  pages.forEach((page,pageIndex)=>{
    if(page.querySelector('.ch1-glyph-audition'))return;
    const seed=pageIndex*2003;
    const field=document.createElement('div');
    field.className='ch1-glyph-audition';field.setAttribute('aria-hidden','true');
    Object.assign(field.style,{position:'absolute',inset:'0',overflow:'hidden',pointerEvents:'none',zIndex:'5'});
    page.style.isolation='isolate';

    const glyphs=[];
    const pageWidth=Math.max(1,page.getBoundingClientRect().width||innerWidth);
    for(let i=0;i<COUNT;i++){
      const g=document.createElement('span');
      g.className='ch1-wander-glyph';g.textContent=PI[(i+pageIndex*13)%PI.length];
      const x=hash(seed+i+701)*100,y=hash(seed+i+801)*100;
      const inheritedSize=.72+hash(seed+i+301)*.72;
      const size=Math.max(6,pageWidth*.0102*inheritedSize);
      const alpha=.10+hash(seed+i+401)*.42;
      Object.assign(g.style,{position:'absolute',left:`${x}%`,top:`${y}%`,font:`${size}px ui-monospace,SFMono-Regular,Menlo,monospace`,lineHeight:'1',color:`rgba(246,240,230,${alpha})`,willChange:'transform',transform:'translate3d(-50%,-50%,0)'});
      field.appendChild(g);glyphs.push(g);allGlyphs.push(g);
      const dx=(hash(seed+i+901)-.5)*52,dy=(hash(seed+i+1001)-.5)*44,rot=(hash(seed+i+1101)-.5)*34,duration=9000+hash(seed+i+1201)*17000,delay=-hash(seed+i+1301)*duration;
      g.animate([
        {transform:'translate3d(-50%,-50%,0) translate3d(0,0,0) rotate(0deg)'},
        {transform:`translate3d(-50%,-50%,0) translate3d(${dx}px,${dy}px,0) rotate(${rot}deg)`},
        {transform:`translate3d(-50%,-50%,0) translate3d(${-dx*.45}px,${-dy*.55}px,0) rotate(${-rot*.6}deg)`},
        {transform:'translate3d(-50%,-50%,0) translate3d(0,0,0) rotate(0deg)'}
      ],{duration,delay,iterations:Infinity,easing:'ease-in-out'});
    }
    page.prepend(field);

    glyphs.forEach((g,i)=>{
      const r=hash(seed+i+1401);
      if(r<.18)HG.radiant(g);
      else if(r<.48)HG.luminous(g);
    });
  });

  window.HouseChapterOneGlyphAudition={version:'146-thirteen-every-page',pages,glyphs:allGlyphs};
})();