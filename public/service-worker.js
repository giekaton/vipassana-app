workbox.setConfig({
  debug: false,
});

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  new RegExp('index.html'),
  workbox.strategies.networkFirst({
    cacheName: 'vipassana',
  }),
);

workbox.routing.registerRoute(
  /\.(?:css)$/,
  workbox.strategies.networkFirst({
    cacheName: 'vipassana-css',
  }),
);

workbox.routing.registerRoute(
  /\.(?:png|ico|svg|mp3|js)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'files',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://vipassana.live'),
  workbox.strategies.networkFirst({
    cacheName: 'home',
  }),
);