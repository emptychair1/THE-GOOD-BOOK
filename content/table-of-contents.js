(()=>{
 const book=window.HouseBook;if(!book)return;
 const toc=document.querySelector('.toc-page');if(!toc)return;
 const classMap={'foreword':'foreword','chapter-one':'chapter-one-page','chapter-two':'chapter-two-page','chapter-three':'chapter-three-page','chapter-four':'chapter-four-page','chapter-five':'chapter-five-page'};
 const resolveTarget=key=>{const cls=classMap[key];return cls?(book.pages||[]).findIndex(page=>page.classList.contains(cls)):-1};
 const printedPage=key=>{const index=resolveTarget(key);if(index<0)return'';const forewordIndex=resolveTarget('foreword');return String(Math.max(1,index-forewordIndex+1))};
 toc.querySelectorAll('[data-toc-target]').forEach(entry=>{const key=entry.dataset.tocTarget;const number=entry.querySelector('.toc-page-number');if(number)number.textContent=printedPage(key);entry.addEventListener('pointerup',event=>{event.preventDefault();event.stopPropagation();const index=resolveTarget(key);if(index>=0)book.goToPage?.(index)})});
 const quietFrontMatter=()=>requestAnimationFrame(()=>{const page=book.pages?.[book.getCurrent?.()];if(page&&(page.classList.contains('title-page')||page.classList.contains('toc-page')))document.getElementById('glyph-overlay').style.display='none'});
 addEventListener('house:page',quietFrontMatter);quietFrontMatter();
 window.HouseTOC={resolveTarget,printedPage};
})();