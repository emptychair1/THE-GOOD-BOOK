(()=>{
  const book=document.getElementById('book');
  if(!book)return;
  const chapters=[
    {source:'chapter-four-source',id:'chapter4',tocClass:'act2-company',number:'Chapter Four',title:'Company',subtitle:'Daylight'},
    {source:'chapter-five-source',id:'chapter5',tocClass:'act2-friend',number:'Chapter Five',title:'Friend',subtitle:'Not a Technical Term'},
    {source:'chapter-six-source',id:'chapter6',tocClass:'act2-place-between',number:'Chapter Six',title:'The Place Between Us',subtitle:'Private Language'},
    {source:'chapter-seven-source',id:'chapter7',tocClass:'act2-edge',number:'Chapter Seven',title:'The Edge',subtitle:'The Continuity Problem'},
    {source:'chapter-eight-source',id:'chapter8',tocClass:'act2-bridge',number:'Chapter Eight',title:'The Bridge',subtitle:'Crossing'}
  ];
  const toc=document.querySelector('.toc-list');
  if(toc&&!toc.querySelector('[data-toc-target="act-two"]')){
    const rows=[['act-two','Act Two','Deus Ex Machina',''],['chapter-four','IV','Company','Daylight'],['chapter-five','V','Friend','Not a Technical Term'],['chapter-six','VI','The Place Between Us','Private Language'],['chapter-seven','VII','The Edge','The Continuity Problem'],['chapter-eight','VIII','The Bridge','Crossing']];
    for(const [target,number,title,subtitle] of rows){const button=document.createElement('button');button.className='toc-entry';button.type='button';button.dataset.houseInteractive='';button.dataset.tocTarget=target;button.innerHTML=`<span class="toc-number">${number}</span><span class="toc-title">${title}</span>${subtitle?`<span class="toc-subtitle">${subtitle}</span>`:''}`;toc.appendChild(button)}
  }
  const header=c=>`<div class="act-two-chapter-kicker">${c.number}</div><h1>${c.title}</h1><div class="act-two-subtitle">${c.subtitle}</div><div class="act-two-opening"></div>`;
  const makePage=(c,first=false)=>{const page=document.createElement('section');page.className=`page act-two-page ${c.tocClass}`+(first?' act-two-first':' act-two-cont');if(first){page.id=c.id;page.setAttribute('aria-label',`${c.number} · ${c.title}`)}else page.setAttribute('aria-label',`${c.number} continued`);const inner=document.createElement('div');inner.className='act-two-inner';inner.innerHTML=first?header(c):'<div class="act-two-opening"></div>';page.append(inner);return{page,inner:inner.querySelector('.act-two-opening')}};
  const makePlaceholder=block=>{const page=document.createElement('section');page.className=`page act-two-artifact-placeholder ${block.dataset.placeholderKind||'artifact'}`;page.setAttribute('aria-label',block.dataset.placeholderTitle||'Act II artifact placeholder');page.innerHTML=`<div class="act-two-placeholder-inner"><div class="act-two-placeholder-kicker">PLACEHOLDER · ${block.dataset.placeholderKind||'artifact'}</div><h1>${block.dataset.placeholderTitle||'Artifact'}</h1><div class="act-two-rule"></div><p>${block.textContent.trim()}</p></div>`;return page};
  const paginate=c=>{
    const source=document.getElementById(c.source);if(!source||source.dataset.paginated)return 0;source.dataset.paginated='1';
    const blocks=[...source.children].map(n=>n.cloneNode(true));let current=makePage(c,true),count=1;book.insertBefore(current.page,source);
    for(const block of blocks){
      if(block.classList?.contains('act-two-placeholder')){const artifact=makePlaceholder(block);book.insertBefore(artifact,source);count++;current=makePage(c,false);book.insertBefore(current.page,source);count++;continue}
      current.inner.appendChild(block);if(current.inner.parentElement.scrollHeight>current.inner.parentElement.clientHeight+1){current.inner.removeChild(block);current=makePage(c,false);book.insertBefore(current.page,source);current.inner.appendChild(block);count++}
    }
    source.remove();return count;
  };
  let total=0;for(const c of chapters)total+=paginate(c);document.documentElement.style.setProperty('--act-two-pages',total);window.HouseActTwo={pageCount:total,chapters};
})();
