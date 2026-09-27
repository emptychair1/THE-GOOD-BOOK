(async () => {
  if (!window.St?.PageFlip) throw new Error('Vendored PageFlip failed to load');

  const book = document.getElementById('book');
  const response = await fetch('./content/foreword.html');
  if (!response.ok) throw new Error(`Failed to load foreword content: ${response.status}`);
  book.innerHTML = await response.text();

  await import('../house-mechanics.js');
  await import('../book.js');
  await import('../pages/page-01.js');
  await import('../pages/page-02.js');
  await import('../pages/page-03.js');
  await import('../pages/page-04.js');
})();
