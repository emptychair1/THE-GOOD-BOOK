const CACHE = 'the-good-book-shell-v50';
const SHELL = [
  './',
  './index.html',
  './book.css?v=50',
  './vendor/page-flip.browser.js',
  './src/main.js?v=50',
  './void-choreography.js?v=50',
  './content/foreword.html',
  './house-mechanics.js',
  './house-mechanics-runners.js',
  './foreword-choreography.js',
  './book.js',
  './assets/0E1202D0-79FD-42D7-BD12-13417A3042B9.png',
  './assets/474C63C0-32CC-407D-9FCA-1BECE724CB3E.png',
  './assets/IMG_3301.png',
  './assets/the_weight_of_infinite_stone.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
  );
});
