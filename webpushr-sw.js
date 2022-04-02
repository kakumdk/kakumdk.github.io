// importScripts('https://cdn.webpushr.com/sw-server.min.js');
"use strict";

function onMessageReceivedSubscriptionState() {
    let e = null;
    self.registration.pushManager.getSubscription().then(t => (e = t, t ? self.registration.pushManager.permissionState(t.options) : null)).then(t => {
        if (null == t) broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, !1);
        else {
            const i = !!e && "granted" === t;
            broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, i)
        }
    })
}

function onMessageReceivedSubscribe() {
    self.registration.pushManager.subscribe({
        userVisibleOnly: !0,
        applicationServerKey: convertedVapidKey
    }).then(e => {
        persistSubscriptionLocally(e), broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIBE, null)
    })
}

function broadcastReply(e, t) {
    self.clients.matchAll().then(i => {
        for (const a of i) a.postMessage({
            command: e,
            payload: t
        })
    })
}
var payload, logdata, app_image_url, icon_url, image_url, badge_url, notificationClicked, log_data, notificationAutoHide = !1;
var CACHE = 'offline-v6';
var CACHE_URLS = [
    '/offline.html'
];
var CACHE_OFFLINE = '/offline.html';
self.addEventListener("install", e => {
    console.log('[ServiceWorker] Install');
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        cache.addAll(CACHE_URLS);
        // Setting {cache: 'reload'} in the new request will ensure that the response
        // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
        await cache.add(new Request(CACHE_OFFLINE, {cache: 'reload'}));
    })());
    self.skipWaiting();
}), self.addEventListener("activate", e => {
    console.log('[ServiceWorker] Activate');
    console.log("Webpushr Service Worker is Activated!")
    event.waitUntil((async () => {
        // Enable navigation preload if it's supported.
        // See https://developers.google.com/web/updates/2017/02/navigation-preload
        if ('navigationPreload' in self.registration) {
            await self.registration.navigationPreload.enable();
        }
    })());
    // Tell the active service worker to take control of the page immediately.
    self.clients.claim();
}), self.addEventListener("fetch", e => {
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
}), self.addEventListener("push", function(e) {
    if (payload = e.data.json(), "webpushr-test-1002" == payload.t) return !1;
    log_data = {
        sub_id: payload.sub_id,
        triggered_id: payload.tid,
        campaign_id: payload.c,
        server: payload.sr,
        sid: payload.sid
    }, app_image_url = "https://cdn.webpushr.com/", icon_url = void 0 !== payload.i ? app_image_url + payload.i : "", image_url = void 0 !== payload.img ? app_image_url + payload.img : "", badge_url = void 0 !== payload.b ? app_image_url + payload.b : "";
    const t = payload.t,
        i = {
            body: payload.m,
            icon: icon_url,
            image: image_url,
            badge: badge_url,
            data: {
                url: payload.u,
                logs: log_data
            },
            requireInteraction: void 0 === payload.ah,
            actions: payload.a
        };
    e.waitUntil(self.registration.showNotification(t, i).then(() => self.registration.getNotifications()).then(e => {}).then(function() {
        let e = {
            type: "d",
            ...log_data
        };
        fetch("https://notevents.webpushr.com/notification/lg/", {
            body: JSON.stringify(e),
            method: "POST"
        }).then(function(e) {
            if (e.ok) return e.text()
        })
    }))
}), self.addEventListener("notificationclick", function(e) {
    notificationClicked = !0, e.notification.close(), e.action ? clients.openWindow(e.action) : e.waitUntil(clients.openWindow(e.notification.data.url).then(function() {}));
    let t = {
        type: "cl",
        ...e.notification.data.logs
    };
    fetch("https://notevents.webpushr.com/notification/lg/", {
        body: JSON.stringify(t),
        method: "POST"
    }).then(function(e) {
        if (e.ok) return e.text()
    })
}), self.addEventListener("notificationclose", function(e) {
    0 != notificationClicked && 0 != notificationAutoHide || (logdata = {
        type: "cs",
        ...e.notification.data.logs
    }, fetch("https://notevents.webpushr.com/notification/lg/", {
        body: JSON.stringify(logdata),
        method: "POST"
    }).then(function(e) {
        if (e.ok) return e.text()
    }))
});
const WorkerMessengerCommand = {
    AMP_SUBSCRIPTION_STATE: "amp-web-push-subscription-state"
};
self.addEventListener("message", e => {
    const {
        command: t
    } = e.data;
    switch (console.log(t), t) {
        case WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE:
            onMessageReceivedSubscriptionState()
    }
});