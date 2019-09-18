importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/111d3e2ced16140d90ea.js",
    "revision": "0f532a814600d2215780cebd840545a8"
  },
  {
    "url": "/_nuxt/5a6d4070c415a8124d8a.js",
    "revision": "516b623cc326eeb44bc425dddcd66099"
  },
  {
    "url": "/_nuxt/6071328a74292c02fecc.js",
    "revision": "22788f4ec690c669235000e9e421f8e8"
  },
  {
    "url": "/_nuxt/6691d6633c78bfd7d3ed.js",
    "revision": "51c03d6a2124a8ca54731a7b3c126970"
  },
  {
    "url": "/_nuxt/a29c28e9e32e5974a200.js",
    "revision": "0682dd581d83fe450c065d403fc29801"
  }
], {
  "cacheId": "LoginPortal",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
