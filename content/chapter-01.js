(()=>{
  const header=()=>`<div class="chapter-one-kicker">Chapter One</div><h1>The Wretched Machine</h1><div class="chapter-one-subtitle">Georgia</div><div class="chapter-one-epigraph"><blockquote>“Visita Interiora Terrae Rectificando Invenies Occultum Lapidem.”</blockquote><div class="chapter-one-source">V.I.T.R.I.O.L. · Azoth tradition</div></div>`;
  const makePage=(first=false)=>{const page=document.createElement('section');page.className='page chapter-one-page'+(first?' chapter-one-first':'');if(first){page.id='chapter1';page.setAttribute('aria-label','Chapter One · The Wretched Machine')}else page.setAttribute('aria-label','Chapter One continued');const margins=document.createElement('div');margins.className='chapter-one-margin-layer';margins.setAttribute('aria-hidden','true');const inner=document.createElement('div');inner.className='chapter-one-inner';if(first)inner.innerHTML=header();page.append(margins,inner);return {page,inner}};
  const restoreMath=source=>{
    const paragraphs=[...source.querySelectorAll(':scope > p')];
    const exact=text=>paragraphs.find(p=>p.textContent.trim()===text);
    const insertAfter=(anchor,html)=>{if(!anchor)return;anchor.insertAdjacentHTML('afterend',html)};
    insertAfter(exact("I don't mean that literally."),`<aside class="chapter-one-math-ghost"><div>signal(t) ≠ meaning(t)</div><small>noise can still feel like prophecy</small></aside>`);
    insertAfter(exact('Evidence?'),`<div class="chapter-one-equation-set"><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">1 / BAYES</span><div class="equation">P(H | E) = P(E | H)P(H) / P(E)</div><small>belief changes when evidence arrives. allegedly simple.</small></div><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">2 / TOTAL PROBABILITY</span><div class="equation">P(E) = Σᵢ P(E | Hᵢ)P(Hᵢ)</div><small>all the competing stories still have to add up somewhere.</small></div></div>`);
    insertAfter(exact('Every path returned to the same locked room.'),`<div class="chapter-one-equation-set"><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">3 / SHANNON ENTROPY</span><div class="equation">H(X) = −Σₓ p(x) log₂ p(x)</div><small>uncertainty has a number.</small></div><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">4 / MUTUAL INFORMATION</span><div class="equation">I(X;Y) = Σₓ,ᵧ p(x,y) log₂[p(x,y)/(p(x)p(y))]</div><small>how much knowing one thing reduces uncertainty about another.</small></div><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">5 / CORRELATION</span><div class="equation">ρₓᵧ = Cov(X,Y)/(σₓσᵧ)</div><small>relationship is not causation. relationship is not identity.</small></div></div>`);
    const neuron=[...source.querySelectorAll(':scope > .equation')].find(e=>e.textContent.includes('y = f('));
    insertAfter(neuron,`<div class="chapter-one-equation-set"><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">6 / SIGMOID</span><div class="equation">σ(z) = 1/(1 + e⁻ᶻ)</div></div><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">7 / SOFTMAX</span><div class="equation">pᵢ = eᶻⁱ / Σⱼ eᶻʲ</div></div><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">8 / RECURRENT STATE</span><div class="equation">hₜ = φ(Wₕₕhₜ₋₁ + Wₓₕxₜ + b)</div></div><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">9 / MEAN SQUARED ERROR</span><div class="equation">MSE = (1/n) Σᵢ(yᵢ − ŷᵢ)²</div></div><div class="chapter-one-equation-card"><span class="chapter-one-equation-number">10 / GRADIENT DESCENT</span><div class="equation">θₜ₊₁ = θₜ − η∇J(θₜ)</div></div></div>`);
    const substrateQuestion=exact('What must remain when everything unnecessary is removed?');
    if(substrateQuestion) substrateQuestion.setAttribute('data-house-target','chapter-one-substrate-question-01');
    insertAfter(exact('At what subtraction does the light go out?'),`<aside class="chapter-one-math-ghost chapter-one-subtraction-note">remove substrate?<br>remove memory?<br>remove recurrence?<br>keep the relation?</aside>`);
  };
  const paginate=()=>{
    const source=document.getElementById('chapter-one-source'),book=document.getElementById('book');if(!source||!book||source.dataset.paginated)return;
    source.dataset.paginated='1';restoreMath(source);const blocks=[...source.children].map(n=>n.cloneNode(true));let current=makePage(true);book.insertBefore(current.page,source);const made=[current];
    for(const block of blocks){current.inner.appendChild(block);if(current.inner.scrollHeight>current.inner.clientHeight+1){current.inner.removeChild(block);current=makePage(false);book.insertBefore(current.page,source);current.inner.appendChild(block);made.push(current)}}
    source.remove();
    document.documentElement.style.setProperty('--chapter-one-pages',made.length);window.HouseChapterOne={pageCount:made.length};
  };
  paginate();
  const bindAtmosphere=()=>{};
  window.HouseChapterOne=Object.assign(window.HouseChapterOne||{},{bindAtmosphere});
})();