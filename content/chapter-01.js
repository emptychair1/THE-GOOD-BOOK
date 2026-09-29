(()=>{
  const header=()=>`<div class="chapter-one-kicker">Chapter One</div><h1>The Wretched Machine</h1><div class="chapter-one-subtitle">Georgia</div><div class="chapter-one-epigraph"><blockquote>“Visita Interiora Terrae Rectificando Invenies Occultum Lapidem.”</blockquote><div class="chapter-one-source">V.I.T.R.I.O.L. · Azoth tradition</div></div>`;
  const makePage=(first=false)=>{const page=document.createElement('section');page.className='page chapter-one-page'+(first?' chapter-one-first':'');if(first){page.id='chapter1';page.setAttribute('aria-label','Chapter One · The Wretched Machine')}else page.setAttribute('aria-label','Chapter One continued');const margins=document.createElement('div');margins.className='chapter-one-margin-layer';margins.setAttribute('aria-hidden','true');const inner=document.createElement('div');inner.className='chapter-one-inner';if(first)inner.innerHTML=header();page.append(margins,inner);return {page,inner}};
  const paginate=()=>{
    const source=document.getElementById('chapter-one-source'),book=document.getElementById('book');if(!source||!book||source.dataset.paginated)return;
    source.dataset.paginated='1';const blocks=[...source.children].map(n=>n.cloneNode(true));let current=makePage(true);book.insertBefore(current.page,source);const made=[current];
    for(const block of blocks){current.inner.appendChild(block);if(current.inner.scrollHeight>current.inner.clientHeight+1){current.inner.removeChild(block);current=makePage(false);book.insertBefore(current.page,source);current.inner.appendChild(block);made.push(current)}}
    source.remove();document.documentElement.style.setProperty('--chapter-one-pages',made.length);window.HouseChapterOne={pageCount:made.length};
  };
  paginate();

  const bindAtmosphere=()=>{
    const book=window.HouseBook,pages=book?.pages||[],chapterPages=pages.filter(p=>p.classList.contains('chapter-one-page'));if(!book||!chapterPages.length||document.querySelector('.chapter-one-audio'))return;
    const firstIndex=pages.indexOf(chapterPages[0]),lastIndex=pages.indexOf(chapterPages[chapterPages.length-1]);
    const grace=document.createElement('audio');grace.className='chapter-one-audio';grace.src='./assets/the_weight_of_grace.mp3';grace.preload='auto';grace.volume=0;document.body.appendChild(grace);
    let raf=0,crossfaded=false;
    const fade=(from,to,duration=2600)=>{cancelAnimationFrame(raf);const started=performance.now(),fromStart=from?from.volume:0,toStart=to.volume;if(to){to.volume=toStart;to.play().catch(error=>console.error('[THE GOOD BOOK] GRACE AUDIO FAIL',error))}const tick=now=>{const p=Math.min(1,(now-started)/duration),e=p*p*(3-2*p);if(from)from.volume=Math.max(0,fromStart*(1-e));to.volume=Math.min(.24,toStart+(.24-toStart)*e);if(p<1)raf=requestAnimationFrame(tick);else if(from)from.pause()};raf=requestAnimationFrame(tick)};
    const enter=()=>{if(!crossfaded){crossfaded=true;const stone=document.querySelector('.void-bass-audio');fade(stone,grace)}};
    addEventListener('house:page',event=>{const i=event.detail?.current;if(i>=firstIndex&&i<=lastIndex)enter()});
    if(book.getCurrent()>=firstIndex&&book.getCurrent()<=lastIndex)enter();
  };
  window.HouseChapterOne=Object.assign(window.HouseChapterOne||{},{bindAtmosphere});
})();