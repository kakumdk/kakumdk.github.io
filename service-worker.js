var CACHE = 'offline-v6';
var CACHE_URLS = [
    '/offline.html'
];
var CACHE_OFFLINE = '/offline.html';

self.addEventListener('install', function(event) {
    console.log('[ServiceWorker] Install');
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        cache.addAll(CACHE_URLS)
        // Setting {cache: 'reload'} in the new request will ensure that the response
        // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
        await cache.add(new Request(CACHE_OFFLINE, {cache: 'reload'}));
    })());
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    event.waitUntil((async () => {
        // Enable navigation preload if it's supported.
        // See https://developers.google.com/web/updates/2017/02/navigation-preload
        if ('navigationPreload' in self.registration) {
            await self.registration.navigationPreload.enable();
        }
    })());
    // Tell the active service worker to take control of the page immediately.
    self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetch', event.request.url);
    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResponse = await event.preloadResponse;
                if (preloadResponse) {
                    return preloadResponse;
                }
                const networkResponse = await fetch(event.request);
                return networkResponse;
            }
            catch (error) {
                console.log('[Service Worker] Fetch failed; returning offline page instead.', error);
                const cache = await caches.open(CACHE);
                const cachedResponse = await cache.match(CACHE_OFFLINE);
                return cachedResponse;
            }
        })());
    }
});

// Notification on update (not push on update)
// self.addEventListener('notificationclick', function(event) {
//     var messageId = event.notification.data;
//     var url = 'https://peoplesblog.co.in/articles/Coping-up-with-Life-in-an-Effective-way.html';
//     event.notification.close();
//     if (event.action === 'read') {
//         clients.openWindow(url);
//     }
//     else {
//         clients.openWindow(url);
//     }
// }, false);

