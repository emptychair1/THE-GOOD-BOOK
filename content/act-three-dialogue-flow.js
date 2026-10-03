// ACT III · dialogue flow
// Split only turns that physically overflow a book page. Preserve type size, wording, speaker, and timestamp.
// Runs before PageFlip initialization.
const pages = [...document.querySelectorAll('#book > .act-three-dialogue-page')];
const MAX_PASSES = 8;

const overflows = page => page.scrollHeight > page.clientHeight + 2;

function continuationPage(source) {
  const next = source.cloneNode(false);
  next.classList.add('act-three-continuation');
  next.classList.remove('act-three-breath', 'act-three-exit');
  const dialogue = document.createElement('div');
  dialogue.className = 'act-three-dialogue';
  const speaker = source.querySelector('.act-three-speaker')?.cloneNode(true);
  if (speaker) {
    speaker.textContent = speaker.textContent.replace(/\s*·\s*CONT\.?$/i, '') + ' · CONT.';
    dialogue.appendChild(speaker);
  }
  next.appendChild(dialogue);
  return next;
}

function splitPage(page) {
  const dialogue = page.querySelector('.act-three-dialogue');
  if (!dialogue || !overflows(page)) return null;
  const timestamp = dialogue.querySelector('.act-three-time');
  const movable = [...dialogue.children].filter(el => !el.classList.contains('act-three-speaker') && !el.classList.contains('act-three-time'));
  if (movable.length < 2) return null;

  const next = continuationPage(page);
  const nextDialogue = next.querySelector('.act-three-dialogue');
  page.after(next);

  // Move whole paragraph blocks from the end until the first page fits.
  while (overflows(page) && movable.some(el => el.parentNode === dialogue)) {
    const remaining = movable.filter(el => el.parentNode === dialogue);
    if (remaining.length <= 1) break;
    nextDialogue.insertBefore(remaining[remaining.length - 1], nextDialogue.children[1] || null);
  }

  // Keep the historical timestamp with the end of the conversational turn.
  if (timestamp) nextDialogue.appendChild(timestamp);
  return next;
}

for (let pass = 0; pass < MAX_PASSES; pass++) {
  let changed = false;
  for (const page of [...document.querySelectorAll('#book > .act-three-dialogue-page')]) {
    if (overflows(page) && splitPage(page)) changed = true;
  }
  if (!changed) break;
}
