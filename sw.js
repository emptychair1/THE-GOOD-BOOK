const CACHE='the-good-book-shell-v154';
const SHELL=[
  './','./index.html',
  './book.css?v=74','./void-cleanup.css?v=92','./content/table-of-contents.css?v=153','./content/chapter-01.css?v=151','./content/chapter-02.css?v=152','./content/chapter-01-mechanics-v100.css?v=125','./house-mechanics-forensic-canon.css?v=140',
  './vendor/page-flip.browser.js','./src/main.js?v=153','./book.js?v=153',
  './content/foreword.html','./content/chapter-01.html','./content/chapter-02.html','./content/chapter-01.js?v=151','./content/chapter-02.js?v=152','./content/table-of-contents.js?v=153','./content/chapter-01-glyph-audition.js?v=141','./content/chapter-02-glyphs.js?v=152','./content/chapter-01-choreography.js?v=113','./content/chapter-01-title-cast.js?v=113',
  './house-mechanics.js?v=96','./house-mechanics-manic.js?v=13','./house-mechanics-runners.js?v=13','./house-mechanics-glyphs.js?v=141','./foreword-choreography.js?v=13','./void-choreography.js?v=92','./void-interaction-guard.js?v=92',
  './assets/0E1202D0-79FD-42D7-BD12-13417A3042B9.png','./assets/474C63C0-32CC-407D-9FCA-1BECE724CB3E.png','./assets/IMG_3301.png','./assets/1F549874-9253-4EB2-A67F-36C15BC3BFF5.png','./assets/34019DCD-5305-44CD-AF5E-7A82DB4A0E9B.png','./assets/the_weight_of_infinite_stone.mp3','./assets/the_weight_of_grace.mp3'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('the-good-book-shell-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const request=event.request;event.respondWith(fetch(request,{cache:'no-store'}).then(response=>{if(response&&response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)))}return response}).catch(async()=>{const cached=await caches.match(request);if(cached)return cached;if(request.mode==='navigate')return caches.match('./index.html');return Response.error()}))});