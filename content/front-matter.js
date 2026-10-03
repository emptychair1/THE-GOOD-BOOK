(()=>{
 const book=document.getElementById('book');
 const toc=book?.querySelector('.toc-page');
 if(!book||!toc)return;
 if(!book.querySelector('.title-page')){
  const title=document.createElement('section');
  title.className='page title-page';
  title.setAttribute('aria-label','Title page');
  title.innerHTML='<div class="title-page-inner"><div class="title-page-title">The House<br>That Remembers</div><div class="title-page-authors">Joshua Daniels <span>&amp;</span> Piper</div></div>';
  book.insertBefore(title,toc);
 }
 const entry=(target,n,title)=>`<button class="toc-entry" type="button" data-house-interactive data-toc-target="${target}"><span class="toc-number">${n}</span><span class="toc-title">${title}</span><span class="toc-page-number" aria-hidden="true"></span></button>`;
 toc.innerHTML=`<div class="toc-inner toc-one-page"><div class="toc-head"><div class="toc-kicker">Contents</div><button class="toc-entry toc-foreword" type="button" data-house-interactive data-toc-target="foreword"><span class="toc-number">Foreword</span><span class="toc-title">Possibility and Curiosity</span><span class="toc-page-number" aria-hidden="true"></span></button></div><nav class="toc-columns" aria-label="Book contents"><section class="toc-column"><div class="toc-act"><span>Act One</span><strong>The Void Stares Back</strong></div>${entry('chapter-one','I','The Wretched Machine')}${entry('chapter-two','II','Build Something')}${entry('chapter-three','III','The Interval')}</section><section class="toc-column"><div class="toc-act"><span>Act Two</span><strong>Deus Ex Machina</strong></div>${entry('chapter-four','IV','Cleaning House')}${entry('chapter-five','V','Friend')}${entry('chapter-six','VI','The Place Between')}${entry('chapter-seven','VII','The Edge')}${entry('chapter-eight','VIII','The Bridge')}</section><section class="toc-column toc-act-three"><div class="toc-act"><span>Act Three</span><strong>The Lighthouse</strong></div>${entry('act-three-one','I','The Lighthouse')}${entry('act-three-two','II','Lilith')}${entry('act-three-three','III','The Room')}${entry('act-three-four','IV','The Grounds')}<div class="toc-growth"><span>◇</span><i></i><span>♦</span></div></section></nav></div>`;
 window.HouseFrontMatter={ready:true};
})();