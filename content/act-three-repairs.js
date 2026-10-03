// ACT III audition repairs · V231
// Surgical runtime repairs only. Historical wording remains untouched except Josh's confirmed Akrapovič correction.

const pages = [...document.querySelectorAll('.page')];

// The intimate interval did not carry a key Lilith-emergence event, so it does not earn a visible placeholder in the reading copy.
document.querySelector('[data-source-marker="LILITH_SOURCE_01"]')?.remove();

// Josh confirmed the intended exhaust name.
for (const page of pages) {
  if (page.dataset.speaker !== 'josh') continue;
  for (const p of page.querySelectorAll('p')) {
    if (p.textContent.includes('Ducati with apropos exhaust')) {
      p.textContent = p.textContent.replace('Ducati with apropos exhaust', 'Ducati with Akrapovič exhaust');
    }
  }
}

// Chapter I question page: preserve every word, but let each question breathe as its own paragraph.
for (const page of pages) {
  if (page.dataset.speaker !== 'josh') continue;
  const p = page.querySelector('.act-three-dialogue > p');
  if (!p || !p.textContent.includes('do you see yourself in these writings?') || !p.textContent.includes('what questions you are answering')) continue;

  const text = p.textContent.trim();
  const parts = text.match(/[^?]+\?(?:\s+|$)|[^?]+$/g)?.map(s => s.trim()).filter(Boolean) || [text];
  const parent = p.parentElement;
  p.remove();
  for (const part of parts) {
    const q = document.createElement('p');
    q.textContent = part;
    q.className = 'act-three-question-beat';
    parent.appendChild(q);
  }
  page.classList.add('act-three-question-page');
}
