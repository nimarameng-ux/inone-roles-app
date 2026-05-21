const CACHE_NAME = 'rr-app-v2';
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(['./','./index.html','./styles.css','./manifest.json','./assets/logo.svg','./assets/icons/icon-192.png','./assets/icons/icon-512.png','./sitemap.json']);
    try {
      const res = await fetch('./sitemap.json', {cache:'no-store'});
      if (res.ok) {
        const pages = await res.json();
        await cache.addAll(pages);
      }
    } catch (e) {}
    self.skipWaiting();
  })());
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => k === CACHE_NAME ? null : caches.delete(k)));
    self.clients.claim();
  })());
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(req).then(r => r || fetch(req).then((res) => {
    const copy = res.clone();
    caches.open(CACHE_NAME).then(c => c.put(req, copy));
    return res;
  })));
});
