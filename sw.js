const CACHE_NAME = 'echt-cache-v1';
const urlsToCache = [
  './', './index.html', './app.js', './components.js', './data-b1.js', './data-b2.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
