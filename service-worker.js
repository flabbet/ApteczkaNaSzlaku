// Name of the Cache.
const CACHE = "cacheV1";

// Select files for caching.
let urlsToCache = [
    "/",
    "/index.html",
    "/dashboard.html",
    "/map.html",
    "/profile.html",
    "/assets/heart.png",
    "/assets/logo.png",
    "/assets/marker.png",
    "/assets/nfc.riv",
    "/assets/profile.png",
    "/ar.js",
    "common.css",
    "dashboard.css",
    "form.js",
    "helpers.js",
    "main.js",
    "map.css",
    "map.js",
    "nfc.js",
    "profile.css",
    "pwa-handler.js",
    "service-worker.js",
    "style.css"
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resourcefrom server.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
