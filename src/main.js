import { PageFlip } from 'page-flip';

window.St = { PageFlip };

(async () => {
  await import('../house-mechanics.js');
  await import('../book.js');
  await import('../pages/page-01.js');
  await import('../pages/page-02.js');
  await import('../pages/page-03.js');
  await import('../pages/page-04.js');
})();
