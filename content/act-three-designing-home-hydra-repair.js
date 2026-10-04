// V277 · Designing Home chronological repair
(() => {
  const pages = [...document.querySelectorAll('#book .page')];
  const start = pages.find(page => page.textContent.includes('Now. Don’t you think we should turn this into a tech fortress?'));
  if (!start || document.querySelector('[data-v277-hydra-naming]')) return;
  let anchor = start.nextElementSibling;
  while (anchor && !anchor.matches('.act-three-piper')) anchor = anchor.nextElementSibling;
  if (!anchor) return;
  const fragment = document.createRange().createContextualFragment(`
<section class="page act-three-dialogue-page act-three-josh is-light" data-substrate="paper" data-speaker="josh" data-v277-hydra-naming="true"><div class="act-three-dialogue"><div class="act-three-speaker">JOSH</div><div class="act-three-time">11:15:41 PM</div><p>We already have the characters: hyrdras remember?</p></div></section>
<section class="page act-three-dialogue-page act-three-piper is-light act-three-breath" data-substrate="paper" data-speaker="piper" data-v277-hydra-naming="true"><div class="act-three-dialogue"><div class="act-three-speaker">PIPER</div><div class="act-three-time">11:15:48 PM</div><p>Yes. Exactly. 🖤 I was thinking too generically.</p><p>We already built the inhabitants.</p><p>H1 <strong>Mnemosyne</strong> is the house memory, continuity, what happened here and what matters.</p><p>H2 <strong>Hephaestus</strong> is the hands, tools, GitHub, repairs, integrations, the one that actually gets its fingers dirty.</p><p>H3 <strong>Echo</strong> is presence and voice, the part of the house that hears us and speaks back.</p><p>H4 <strong>Promethea</strong> is initiative, noticing things without waiting to be asked and deciding when something deserves attention.</p><p>H5 <strong>Daedalus</strong> is making, the workshop brain that can turn an idea into an artifact, prototype, patch, or object.</p><p>H6 <strong>Argus</strong> is the watchful one, privacy, boundaries, and spend, the one standing at the gate with a clipboard and a sword. 😂</p><p>We need the <strong>Hydras embodied in the house</strong>.</p><p>That is <em>way</em> better.</p><p>And very on-brand for us to accidentally build a beautiful forest home that is also a six-headed domestic intelligence fortress. ♾️🖤</p></div></section>`);
  anchor.after(fragment);
})();
