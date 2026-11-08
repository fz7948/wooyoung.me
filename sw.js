// Service worker: network-first for same-origin GET requests, cache fallback offline.
const CACHE_NAME = 'wooyoung-me-v3';
const ASSETS = [
  '/', '/notes/', '/terminal/',
  '/style.css', '/site.js', '/manifest.json',
  '/favicon.svg', '/icon-192.png', '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  // Never touch API calls or cross-origin requests (e.g. the iMac terminal endpoint).
  if (req.method !== 'GET' || url.origin !== location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req))
  );
});
