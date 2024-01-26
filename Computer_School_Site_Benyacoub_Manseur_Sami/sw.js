let cacheName = "computerStyleV1";
let urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "imatges/fotofrontal.jpg",
  "imatges/html5.png",
  "imatges/icons.png",
  "imatges/javascript.png",
  "imatges/logo.png",
  "imatges/pattern.jpg",
  "imatges/php.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  console.log("service worker se ha instalado");
});

self.addEventListener("fetch", (event) => {
  console.log("fetch");
  // Is this one of our precached assets?
  const url = new URL(event.request.url);
  const isPrecachedRequest = urlsToCache.includes(url.pathname);

  if (isPrecachedRequest) {
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request.url);
      })
    );
  } else {
    // Go to the network
    return;
  }
});

