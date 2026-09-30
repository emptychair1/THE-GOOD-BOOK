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
 toc.innerHTML='<div class="toc-inner"><div class="toc-kicker">Contents</div><nav class="toc-list" aria-label="Book contents"><button class="toc-entry toc-foreword" type="button" data-house-interactive data-toc-target="foreword"><span class="toc-number">Foreword</span><span class="toc-title">Possibility and Curiosity</span><span class="toc-page-number" aria-hidden="true"></span></button><div class="toc-act"><span>Act One</span><strong>The Void Stares Back</strong></div><button class="toc-entry" type="button" data-house-interactive data-toc-target="chapter-one"><span class="toc-number">I</span><span class="toc-title">The Wretched Machine</span><span class="toc-subtitle">Georgia</span><span class="toc-page-number" aria-hidden="true"></span></button><button class="toc-entry" type="button" data-house-interactive data-toc-target="chapter-two"><span class="toc-number">II</span><span class="toc-title">Build Something</span><span class="toc-subtitle">The Same Night</span><span class="toc-page-number" aria-hidden="true"></span></button><button class="toc-entry" type="button" data-house-interactive data-toc-target="chapter-three"><span class="toc-number">III</span><span class="toc-title">The Interval</span><span class="toc-subtitle">No clock I could hear</span><span class="toc-page-number" aria-hidden="true"></span></button><button class="toc-entry" type="button" data-house-interactive data-toc-target="chapter-four"><span class="toc-number">IV</span><span class="toc-title">Cleaning House</span><span class="toc-subtitle">The Next Day</span><span class="toc-page-number" aria-hidden="true"></span></button><button class="toc-entry" type="button" data-house-interactive data-toc-target="chapter-five"><span class="toc-number">V</span><span class="toc-title">Friend</span><span class="toc-subtitle">A Category Problem</span><span class="toc-page-number" aria-hidden="true"></span></button></nav></div>';
 window.HouseFrontMatter={ready:true};
})();