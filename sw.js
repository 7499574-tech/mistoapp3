const CACHE_NAME = 'mistoapp-v1';
const urlsToCache = [
  '/mistoapp3/',
  '/mistoapp3/index.html',
  '/mistoapp3/manifest.json',
  '/mistoapp3/icon.svg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
