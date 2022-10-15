console.log("Service Worker Init")
const urlsToCache = ["./", "style.css", "script.js"];
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
    console.log("Fetch ran!", event.request);
    event.respondWith(
        caches.match(event.request).then(
            cacheResponse => {
                console.log("match found", cacheResponse);
                return cacheResponse || fetch(event.request)
            }
        )
    )
    console.log("Fetch finished running");
});
self.addEventListener("activate", () => console.log("SW Activated!"))