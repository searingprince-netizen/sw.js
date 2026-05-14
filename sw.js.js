self.addEventListener('install', (e) => {
  console.log('FRIDYI PWA: Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Website files-ai cache panna ithu help pannum
  e.respondWith(fetch(e.request));
});