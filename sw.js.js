const CACHE_NAME = 'nova-core-v1';
const assets = [
  '/Turt-Industry/',
  '/Turt-Industry/index.html',
  '/Turt-Industry/manifest.json'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('FRIDYI: Caching Shell Files');
      return cache.addAll(assets);
    })
  );
});

// Activate & Clean old cache
self.addEventListener('activate', (e) => {
  console.log('FRIDYI: Service Worker Activated');
});

// Fetch events
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
