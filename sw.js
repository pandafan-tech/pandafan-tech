importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/113a687221190b38a611.js",
    "revision": "68a29b8d8639fb138cae50fd08fea062"
  },
  {
    "url": "/_nuxt/14bf1771ffea6c5c5935.js",
    "revision": "03456209211783c9b7efbcba01f07384"
  },
  {
    "url": "/_nuxt/2dcde434c322a4d836de.js",
    "revision": "e01f0df4731edf0ee59906fc4b592f32"
  },
  {
    "url": "/_nuxt/6c448e39a3a296688a65.js",
    "revision": "91fb64e3efd62e3f78badd5703df807c"
  },
  {
    "url": "/_nuxt/e3dfe668ff032e9e3c38.js",
    "revision": "c9e9969ff5a1dd218d4d0b4f87f260c3"
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
