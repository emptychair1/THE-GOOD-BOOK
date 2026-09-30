(()=>{
  const book=window.HouseBook;if(!book)return;
  const toc=document.querySelector('.toc-page');if(!toc)return;
  const resolveTarget=key=>{
    const pages=book.pages||[];
    if(key==='foreword')return pages.findIndex(p=>p.classList.contains('foreword'));
    if(key==='act-one')return pages.findIndex(p=>p.classList.contains('void-act-page'));
    if(key==='chapter-one')return pages.findIndex(p=>p.classList.contains('chapter-one-page'));
    if(key==='chapter-two')return pages.findIndex(p=>p.classList.contains('chapter-two-page'));
    if(key==='chapter-three')return pages.findIndex(p=>p.classList.contains('chapter-three-page'));
    return -1;
  };
  const go=key=>{const index=resolveTarget(key);if(index<0)return;book.goToPage?.(index)};
  toc.querySelectorAll('[data-toc-target]').forEach(entry=>entry.addEventListener('pointerup',event=>{event.preventDefault();event.stopPropagation();go(entry.dataset.tocTarget)}));
  window.HouseTOC={resolveTarget,go};
})();