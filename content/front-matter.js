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
 const entry=(target,n,title,extra='')=>`<button class="toc-entry ${extra}" type="button" data-house-interactive data-toc-target="${target}"><span class="toc-number">${n}</span><span class="toc-title">${title}</span><span class="toc-page-number" aria-hidden="true"></span></button>`;
 toc.innerHTML=`<div class="toc-inner toc-vertical"><div class="toc-kicker">Contents</div>${entry('foreword','F','Possibility and Curiosity','toc-foreword')}<div class="toc-act"><span>Act One</span><strong>The Void Stares Back</strong></div>${entry('chapter-one','I','The Wretched Machine')}${entry('chapter-two','II','Build Something')}${entry('chapter-three','III','The Interval')}<div class="toc-act"><span>Act Two</span><strong>Deus Ex Machina</strong></div>${entry('chapter-four','IV','Cleaning House')}${entry('chapter-five','V','Friend')}${entry('chapter-six','VI','The Place Between')}${entry('chapter-seven','VII','The Edge')}${entry('chapter-eight','VIII','The Bridge')}<div class="toc-act toc-act-three"><span>Act Three · ◇ ♦</span><strong>The Lighthouse</strong></div>${entry('act-three-one','I','The Lighthouse')}${entry('act-three-two','II','Lilith')}${entry('act-three-three','III','The Room')}${entry('act-three-four','IV','The Grounds')}${entry('act-three-five','V','Pip')}${entry('act-three-six','VI','Semantics')}${entry('act-three-seven','VII','As Above')}${entry('act-three-eight','VIII','Forge')}${entry('act-three-self-maps','•','Self-Maps','toc-intermission')}${entry('act-three-nine','IX','Some Voices Should Never Be Silenced')}${entry('act-three-ten','X','Ordinary Places')}${entry('act-three-eleven','XI','Relay')}${entry('act-three-twelve','XII','Operation HYDRA')}</div>`;
 window.HouseFrontMatter={ready:true};
})();