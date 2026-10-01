(()=>{
  const book=document.getElementById('book');
  if(!book)return;
  const chapters=[
    {source:'chapter-four-source',id:'chapter4',tocClass:'chapter-four-page',number:'Chapter Four',title:'Company',subtitle:'Daylight'},
    {source:'chapter-five-source',id:'chapter5',tocClass:'chapter-five-page',number:'Chapter Five',title:'Friend',subtitle:'Not a Technical Term'},
    {source:'chapter-six-source',id:'chapter6',tocClass:'chapter-six-page',number:'Chapter Six',title:'The Place Between Us',subtitle:'Private Language'},
    {source:'chapter-seven-source',id:'chapter7',tocClass:'chapter-seven-page',number:'Chapter Seven',title:'The Lighthouse',subtitle:'A Place for the Light'},
    {source:'chapter-eight-source',id:'chapter8',tocClass:'chapter-eight-page',number:'Chapter Eight',title:'The Bridge',subtitle:'Crossing'}
  ];
  const glyphField=()=>`<svg class="foreword-glyph-test act-two-glyph-field" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><text class="field-digit" x="6" y="14">314</text><text class="field-pi" x="13" y="18">π</text><text class="field-digit" x="18" y="12">159</text><text class="field-digit" x="11" y="25">26</text><text class="field-pi" x="79" y="9">π</text><text class="field-digit" x="84" y="14">5358</text><text class="field-pi" x="90" y="20">π</text><text class="field-digit" x="82" y="25">979</text><text class="field-digit" x="93" y="30">323</text><text class="field-pi" x="7" y="58">π</text><text class="field-digit" x="13" y="63">84</text><text class="field-digit" x="18" y="69">626</text><text class="field-pi" x="10" y="73">π</text><text class="field-digit" x="72" y="66">4338</text><text class="field-digit" x="79" y="72">327</text><text class="field-pi" x="86" y="68">π</text><text class="field-digit" x="82" y="79">9502</text><text class="field-digit" x="91" y="76">88</text><text class="field-pi" x="30" y="90">π</text><text class="field-digit" x="34" y="94">4197</text><text class="field-digit" x="40" y="89">169</text><text class="field-pi" x="47" y="93">π</text><text class="field-digit" x="55" y="91">399</text></svg>`;
  const toc=document.querySelector('.toc-list');
  if(toc&&!toc.querySelector('[data-toc-target="act-two"]')){
    const rows=[['act-two','Act Two','Deus Ex Machina',''],['chapter-four','IV','Company','Daylight'],['chapter-five','V','Friend','Not a Technical Term'],['chapter-six','VI','The Place Between Us','Private Language'],['chapter-seven','VII','The Lighthouse','A Place for the Light'],['chapter-eight','VIII','The Bridge','Crossing']];
    for(const [target,number,title,subtitle] of rows){const button=document.createElement('button');button.className='toc-entry';button.type='button';button.dataset.houseInteractive='';button.dataset.tocTarget=target;button.innerHTML=`<span class="toc-number">${number}</span><span class="toc-title">${title}</span>${subtitle?`<span class="toc-subtitle">${subtitle}</span>`:''}`;toc.appendChild(button)}
  }
  const header=c=>`<div class="act-two-chapter-kicker">${c.number}</div><h1>${c.title}</h1><div class="act-two-subtitle">${c.subtitle}</div><div class="act-two-opening"></div>`;
  const makePage=(c,first=false)=>{
    const page=document.createElement('section');page.className=`page act-two-page ${c.tocClass}`+(first?' act-two-first':' act-two-cont');
    if(first){page.id=c.id;page.setAttribute('aria-label',`${c.number} · ${c.title}`)}else page.setAttribute('aria-label',`${c.number} continued`);
    page.insertAdjacentHTML('afterbegin',glyphField());
    const inner=document.createElement('div');inner.className='act-two-inner';if(first)inner.innerHTML=header(c);else inner.innerHTML='<div class="act-two-opening"></div>';page.append(inner);
    return{page,inner:inner.querySelector('.act-two-opening')};
  };
  const paginate=c=>{
    const source=document.getElementById(c.source);if(!source||source.dataset.paginated)return 0;source.dataset.paginated='1';
    const blocks=[...source.children].map(n=>n.cloneNode(true));let current=makePage(c,true),count=1;book.insertBefore(current.page,source);
    for(const block of blocks){current.inner.appendChild(block);if(current.inner.parentElement.scrollHeight>current.inner.parentElement.clientHeight+1){current.inner.removeChild(block);current=makePage(c,false);book.insertBefore(current.page,source);current.inner.appendChild(block);count++}}
    source.remove();return count;
  };
  let total=0;for(const c of chapters)total+=paginate(c);document.documentElement.style.setProperty('--act-two-pages',total);window.HouseActTwo={pageCount:total,chapters};
})();
