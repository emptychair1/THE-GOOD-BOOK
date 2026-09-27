(async () => {
  const badge = document.querySelector('.version-badge');
  const mark = label => { if (badge) badge.textContent = `BOOT · ${label}`; };
  const fail = (stage, error) => {
    const message = error?.message || String(error);
    if (badge) badge.textContent = `FAIL · ${stage} · ${message}`;
    console.error(`[THE GOOD BOOK] ${stage}`, error);
  };

  try {
    mark('PAGEFLIP');
    if (!window.St?.PageFlip) throw new Error('St.PageFlip missing');

    mark('CONTENT');
    const book = document.getElementById('book');
    const response = await fetch('./content/foreword.html');
    if (!response.ok) throw new Error(`foreword ${response.status}`);
    book.innerHTML = await response.text();

    mark('MECHANICS');
    await import('../house-mechanics.js');

    mark('BOOK');
    await import('../book.js');
    if (!window.HouseBook?.pf) throw new Error('HouseBook/PageFlip not initialized');

    mark('CONTROLLERS');
    await import('../pages/page-01.js');
    await import('../pages/page-02.js');
    await import('../pages/page-03.js');
    await import('../pages/page-04.js');

    mark('READY');
  } catch (error) {
    fail('BOOT', error);
  }
})();
