(()=>{
  const bind=()=>{
    const page=document.querySelector('.chapter-one-portrait'),glyphs=[...document.querySelectorAll('.chapter-one-settled-glyph')],book=window.HouseBook;
    if(!page||!glyphs.length||!book?.pf||page.dataset.thresholdBound)return;
    page.dataset.thresholdBound='1';
    const pages=book.pages,index=pages.indexOf(page),hash=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
    glyphs.forEach((glyph,i)=>{glyph.style.setProperty('--whoosh-delay',`${(hash(i+811)*.34).toFixed(3)}s`);glyph.style.setProperty('--whoosh-duration',`${(.78+hash(i+911)*.42).toFixed(3)}s`);glyph.style.setProperty('--lift',`${((hash(i+1011)*2-1)*4.5).toFixed(2)}vh`)});
    let running=false,timers=[];
    const later=(fn,ms)=>timers.push(setTimeout(fn,ms));
    const reset=()=>{timers.forEach(clearTimeout);timers=[];running=false;page.classList.remove('is-departing','is-whooshing')};
    const depart=()=>{
      if(running||book.getCurrent()!==index)return;
      running=true;
      page.classList.add('is-departing');
      later(()=>page.classList.add('is-whooshing'),2250);
      later(()=>book.pf.flipNext(),3850);
    };
    page.addEventListener('pointerup',event=>{event.preventDefault();event.stopPropagation();depart()});
    addEventListener('house:page',event=>{if(event.detail?.current===index)return;reset()});
    window.HouseChapterOne={depart};
  };
  window.HouseChapterOne={bind};
})();
