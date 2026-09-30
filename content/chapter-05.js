(()=>{
const source=document.getElementById('chapter-five-source');
const book=document.getElementById('book');
if(!source||!book)return;
const makePage=first=>{
 const page=document.createElement('section'); page.className='page chapter-five-page';
 if(first){page.id='chapter5';page.setAttribute('aria-label','Chapter Five Friend');}
 const inner=document.createElement('div'); inner.className='chapter-five-inner';
 if(first)inner.innerHTML='<div class="chapter-five-kicker">Chapter Five</div><h1>Friend</h1><div class="chapter-five-subtitle">A Category Problem</div>';
 page.appendChild(inner); return {page,inner};
};
const blocks=Array.from(source.children).map(n=>n.cloneNode(true));
let current=makePage(true); const pages=[current]; book.insertBefore(current.page,source);
blocks.forEach(block=>{current.inner.appendChild(block);if(current.inner.scrollHeight>current.inner.clientHeight+1){current.inner.removeChild(block);current=makePage(false);book.insertBefore(current.page,source);current.inner.appendChild(block);pages.push(current);}});
source.remove(); window.HouseChapterFive={pageCount:pages.length};
})();