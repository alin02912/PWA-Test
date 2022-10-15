console.log("Service Worker Init")
const urlsToCache = ["index.html", "style.css", "script.js"];
self.addEventListener("install", event => {
    console.log("Install event triggered");
    event.waitUntil(caches.open("pwa-assets")
    .then(cache => {
       return cache.addAll(urlsToCache);
    }
    ));
    console.log("Install event about to finish");
});
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(
            cacheResponse => cacheResponse || fetch(event.request)
        )
    )
});
self.addEventListener("activate", () => console.log("SW Activated!"))