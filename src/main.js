(async () => {
  const badge = document.querySelector('.version-badge');
  const VERSION = 'V3 · MARGIN + FOLIOS';
  const mark = label => { if (badge) badge.textContent = `${VERSION} · BOOT · ${label}`; };
  const fail = (stage, error) => {
    const message = error?.message || String(error);
    if (badge) badge.textContent = `${VERSION} · FAIL · ${stage} · ${message}`;
    console.error(`[THE GOOD BOOK] ${stage}`, error);
  };

  try {
    mark('PAGEFLIP');
    if (!window.St?.PageFlip) {
      mark('PAGEFLIP RECOVERY');
      const vendorResponse = await fetch('./vendor/page-flip.browser.js', { cache: 'no-store' });
      if (!vendorResponse.ok) throw new Error(`PageFlip file ${vendorResponse.status}`);
      const source = await vendorResponse.text();
      if (!source.startsWith('!function')) throw new Error(`PageFlip invalid payload: ${source.slice(0, 24)}`);
      Function(source).call(window);
    }
    if (!window.St?.PageFlip) throw new Error('St.PageFlip missing after recovery');

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

    mark('CHOREOGRAPHY');
    await import('../choreography/foreword.js');

    if (badge) badge.textContent = VERSION;
  } catch (error) {
    fail('BOOT', error);
  }
})();
