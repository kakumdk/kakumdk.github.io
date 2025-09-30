// importScripts('https://cdn.webpushr.com/sw-server.min.js');
"use strict";

function onMessageReceivedSubscriptionState() {
    let e = null;
    self.registration.pushManager.getSubscription()
        .then(t => (e = t, t ? self.registration.pushManager.permissionState(t.options) : null))
        .then(t => {
            if (null == t) {
                broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, !1);
            } else {
                const i = !!e && "granted" === t;
                broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, i);
            }
        });
}

function onMessageReceivedSubscribe() {
    self.registration.pushManager.subscribe({
        userVisibleOnly: !0,
        applicationServerKey: convertedVapidKey
    }).then(e => {
        persistSubscriptionLocally(e);
        broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIBE, null);
    });
}

function broadcastReply(e, t) {
    self.clients.matchAll().then(i => {
        for (const a of i) a.postMessage({
            command: e,
            payload: t
        });
    });
}

var payload, logdata, app_image_url, icon_url, image_url, badge_url, notificationClicked, log_data, notificationAutoHide = !1;
// const CACHE = "offline-v7";
// const CACHE_URLS = ["/offline.html"];
// const CACHE_OFFLINE = "/offline.html";

// self.addEventListener("install", event => {
//     // console.log('[ServiceWorker] Install');
//     event.waitUntil((async () => {
//         const cache = await caches.open(CACHE);
//         cache.addAll(CACHE_URLS);
//         await cache.add(new Request(CACHE_OFFLINE, { cache: 'reload' }));
//     })());
//     self.skipWaiting();
// });
// self.addEventListener("install", event => {
//     event.waitUntil(
//         (async () => {
//             const cache = await caches.open(CACHE);
//             await cache.addAll(CACHE_URLS.map(url => new Request(url, { cache: "reload" })));
//         })()
//     );
//     self.skipWaiting();
// });

// self.addEventListener("activate", event => {
//     // console.log('[ServiceWorker] Activate');
//     // console.log("Webpushr Service Worker is Activated!");
//     event.waitUntil((async () => {
//         if ('navigationPreload' in self.registration) {
//             await self.registration.navigationPreload.enable();
//         }
//     })());
//     self.clients.claim();
// });
// self.addEventListener("activate", event => {
//   event.waitUntil(
//     (async () => {
//       const keys = await caches.keys();
//       for (const key of keys) {
//         if (key !== CACHE) {
//           await caches.delete(key);
//         }
//       }
//     })()
//   );
//   self.clients.claim();
// });

// self.addEventListener("fetch", event => {
//     if (event.request.mode === 'navigate') {
//         event.respondWith((async () => {
//             try {
//                 const preloadResponse = await event.preloadResponse;
//                 if (preloadResponse) {
//                     return preloadResponse;
//                 }
//                 const networkResponse = await fetch(event.request);
//                 return networkResponse;
//             } catch (error) {
//                 // console.log('[Service Worker] Fetch failed; returning offline page instead.', error);
//                 const cache = await caches.open(CACHE);
//                 const cachedResponse = await cache.match(CACHE_OFFLINE);
//                 return cachedResponse;
//             }
//         })());
//     }
// });
// self.addEventListener("fetch", event => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       (async () => {
//         try {
//           const response = await fetch(event.request, { cache: "no-store" });
//           if (!response || !response.ok) {
//             throw new Error("Bad network response");
//           }
//           return response;
//         } catch (error) {
//           console.warn("[SW] Serving offline.html:", error);
//           const cache = await caches.open(CACHE);
//           const cachedResponse = await cache.match(CACHE_OFFLINE);
//           return cachedResponse || Response.error();
//         }
//       })()
//     );
//   }
// });

self.addEventListener("push", event => {
    payload = event.data.json();
    if ("webpushr-test-1002" === payload.t) return !1;
    log_data = {
        sub_id: payload.sub_id,
        triggered_id: payload.tid,
        campaign_id: payload.c,
        server: payload.sr,
        sid: payload.sid
    };
    app_image_url = "https://cdn.webpushr.com/";
    icon_url = payload.i ? app_image_url + payload.i : "";
    image_url = payload.img ? app_image_url + payload.img : "";
    badge_url = payload.b ? app_image_url + payload.b : "";

    const t = payload.t;
    const i = {
        body: payload.m,
        icon: icon_url,
        image: image_url,
        badge: badge_url,
        data: {
            url: payload.u,
            logs: log_data
        },
        requireInteraction: payload.ah === undefined,
        actions: payload.a
    };

    event.waitUntil(self.registration.showNotification(t, i).then(() => self.registration.getNotifications())
        .then(() => {}).then(() => {
            let e = {
                type: "d",
                ...log_data
            };
            fetch("https://notevents.webpushr.com/notification/lg/", {
                body: JSON.stringify(e),
                method: "POST"
            }).then(e => {
                if (e.ok) return e.text();
            });
        }));
});

self.addEventListener("notificationclick", event => {
    notificationClicked = !0;
    event.notification.close();
    if (event.action) {
        clients.openWindow(event.action);
    } else {
        event.waitUntil(clients.openWindow(event.notification.data.url));
    }

    let t = {
        type: "cl",
        ...event.notification.data.logs
    };
    fetch("https://notevents.webpushr.com/notification/lg/", {
        body: JSON.stringify(t),
        method: "POST"
    }).then(e => {
        if (e.ok) return e.text();
    });
});

self.addEventListener("notificationclose", event => {
    if (!notificationClicked && !notificationAutoHide) {
        logdata = {
            type: "cs",
            ...event.notification.data.logs
        };
        fetch("https://notevents.webpushr.com/notification/lg/", {
            body: JSON.stringify(logdata),
            method: "POST"
        }).then(e => {
            if (e.ok) return e.text();
        });
    }
});

const WorkerMessengerCommand = {
    AMP_SUBSCRIPTION_STATE: "amp-web-push-subscription-state"
};

self.addEventListener("message", event => {
    const { command: t } = event.data;
    switch (t) {
        case WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE:
            onMessageReceivedSubscriptionState();
            break;
    }
});
