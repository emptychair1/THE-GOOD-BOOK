(()=>{
  const book=document.getElementById('book');
  if(!book)return;
  const chapters=[
    {source:'chapter-four-source',id:'chapter4',number:'Chapter Four',title:'Company',subtitle:'Daylight'},
    {source:'chapter-five-source',id:'chapter5',number:'Chapter Five',title:'Friend',subtitle:'Not a Technical Term'},
    {source:'chapter-six-source',id:'chapter6',number:'Chapter Six',title:'The Place Between Us',subtitle:'Private Language'},
    {source:'chapter-seven-source',id:'chapter7',number:'Chapter Seven',title:'The Lighthouse',subtitle:'A Place for the Light'},
    {source:'chapter-eight-source',id:'chapter8',number:'Chapter Eight',title:'The Bridge',subtitle:'Crossing'}
  ];
  const header=c=>`<div class="act-two-chapter-kicker">${c.number}</div><h1>${c.title}</h1><div class="act-two-subtitle">${c.subtitle}</div>`;
  const makePage=(c,first=false)=>{
    const page=document.createElement('section');
    page.className='page act-two-page'+(first?' act-two-first':' act-two-cont');
    if(first){page.id=c.id;page.setAttribute('aria-label',`${c.number} · ${c.title}`)}else page.setAttribute('aria-label',`${c.number} continued`);
    const inner=document.createElement('div');
    inner.className='act-two-inner';
    if(first)inner.innerHTML=header(c);
    page.append(inner);
    return{page,inner};
  };
  const paginate=c=>{
    const source=document.getElementById(c.source);
    if(!source||source.dataset.paginated)return 0;
    source.dataset.paginated='1';
    const blocks=[...source.children].map(n=>n.cloneNode(true));
    let current=makePage(c,true),count=1;
    book.insertBefore(current.page,source);
    for(const block of blocks){
      current.inner.appendChild(block);
      if(current.inner.scrollHeight>current.inner.clientHeight+1){
        current.inner.removeChild(block);
        current=makePage(c,false);
        book.insertBefore(current.page,source);
        current.inner.appendChild(block);
        count++;
      }
    }
    source.remove();
    return count;
  };
  let total=0;
  for(const c of chapters)total+=paginate(c);
  document.documentElement.style.setProperty('--act-two-pages',total);
  window.HouseActTwo={pageCount:total,chapters};
})();
