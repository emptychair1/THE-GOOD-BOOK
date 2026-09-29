(()=>{
  const header=()=>`<div class="chapter-one-kicker">Chapter One</div><h1>The Wretched Machine</h1><div class="chapter-one-subtitle">Georgia</div><div class="chapter-one-epigraph"><blockquote>“Visita Interiora Terrae Rectificando Invenies Occultum Lapidem.”</blockquote><div class="chapter-one-source">V.I.T.R.I.O.L. · Azoth tradition</div></div>`;
  const makePage=(first=false)=>{const page=document.createElement('section');page.className='page chapter-one-page'+(first?' chapter-one-first':'');if(first){page.id='chapter1';page.setAttribute('aria-label','Chapter One · The Wretched Machine')}else page.setAttribute('aria-label','Chapter One continued');const inner=document.createElement('div');inner.className='chapter-one-inner';if(first)inner.innerHTML=header();page.appendChild(inner);return {page,inner}};
  const paginate=()=>{
    const source=document.getElementById('chapter-one-source'),book=document.getElementById('book');if(!source||!book||source.dataset.paginated)return;
    source.dataset.paginated='1';const blocks=[...source.children].map(n=>n.cloneNode(true));let current=makePage(true);book.insertBefore(current.page,source);let pageCount=1;
    for(const block of blocks){current.inner.appendChild(block);if(current.inner.scrollHeight>current.page.clientHeight){current.inner.removeChild(block);current=makePage(false);book.insertBefore(current.page,source);current.inner.appendChild(block);pageCount++}}
    source.remove();document.documentElement.style.setProperty('--chapter-one-pages',pageCount);window.HouseChapterOne={pageCount};
  };
  paginate();
})();
