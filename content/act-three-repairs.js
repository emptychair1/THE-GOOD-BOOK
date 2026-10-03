// ACT III audition repairs · V234
// Surgical runtime repairs. Historical wording remains untouched except Josh's confirmed Akrapovič correction.

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

// ACT III approved chat grammar · inferred timestamps.
// These are deliberately typographic chronology cues, not claims of recovered message metadata.
// Each Act III chapter gets its own plausible evening session clock; cadence advances by reading/response weight.
const chapterStarts = [20 * 60 + 47, 22 * 60 + 8, 23 * 60 + 16];
let chapter = -1;
let minute = 0;
let previousSpeaker = null;

for (const page of pages) {
  if (page.matches('.act-three-title-page')) {
    chapter += 1;
    minute = chapterStarts[Math.min(chapter, chapterStarts.length - 1)];
    previousSpeaker = null;
    continue;
  }
  if (!page.matches('.act-three-dialogue-page')) continue;
  const dialogue = page.querySelector('.act-three-dialogue');
  if (!dialogue || dialogue.querySelector('.act-three-time')) continue;

  const speaker = page.dataset.speaker || '';
  const words = [...dialogue.querySelectorAll('p')].reduce((n,p)=>n + p.textContent.trim().split(/\s+/).filter(Boolean).length, 0);
  if (previousSpeaker !== null) {
    const responseBeat = speaker === previousSpeaker ? 1 : 2;
    const readingBeat = Math.max(0, Math.min(4, Math.floor(words / 85)));
    minute += responseBeat + readingBeat;
  }
  previousSpeaker = speaker;

  const clock = ((minute % 1440) + 1440) % 1440;
  const h24 = Math.floor(clock / 60), mins = clock % 60;
  const suffix = h24 >= 12 ? 'PM' : 'AM';
  const hour = h24 % 12 || 12;
  const stamp = document.createElement('div');
  stamp.className = 'act-three-time';
  stamp.dataset.inferred = 'true';
  stamp.textContent = `${hour}:${String(mins).padStart(2,'0')} ${suffix}`;
  dialogue.appendChild(stamp);
}
