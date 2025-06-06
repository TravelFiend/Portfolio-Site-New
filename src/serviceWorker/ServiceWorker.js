import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      }),
    ],
  })
);

// registerRoute(
//   ({url}) => url.origin === 'https://api.themoviedb.org' ||
//                   url.pathname === '/3/discover/tv',
//   new StaleWhileRevalidate({
//     cacheName: 'movie-api-response',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200]
//       }),
//       new ExpirationPlugin({
//         maxEntries: 1
//       })
//     ]
//   })
// );

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60    // 30 Days
      })
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === 'script' ||
                  request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);
