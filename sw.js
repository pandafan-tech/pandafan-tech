importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/202e867b2bcd41b99394.js",
    "revision": "97e3debcb6de091144aed131cc009f7b"
  },
  {
    "url": "/_nuxt/6fddba0a7ceec7727b1c.js",
    "revision": "3eb41371cf2f618609aa50a6b7eeba1a"
  },
  {
    "url": "/_nuxt/7882c330ac8bb02ca052.js",
    "revision": "a3fad6ec08666030101dee33c18d7ece"
  },
  {
    "url": "/_nuxt/96b11964a1092fd6b458.js",
    "revision": "0ae582792cbeb99b270d77f00d88be68"
  },
  {
    "url": "/_nuxt/97b6ab7f735511986f12.js",
    "revision": "cfcae384a5f801cfd6f808c66527ce8c"
  },
  {
    "url": "/_nuxt/a6774e37945bbd1cbc24.js",
    "revision": "736d98d9cf4d2db97af86808938434c9"
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
