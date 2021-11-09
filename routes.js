// This file was added by layer0 init.
// You should commit this file to source control.

const { Router } = require('@layer0/core/router')

import { API_CACHE_HANDLER } from './layer0/cache'

const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR
const ONE_YEAR = 365 * ONE_DAY

const edgeOnly = {
  browser: false,
  edge: { maxAgeSeconds: ONE_YEAR },
}

const edgeAndBrowser = {
  browser: { maxAgeSeconds: ONE_YEAR },
  edge: { maxAgeSeconds: ONE_YEAR },
}

module.exports = new Router()
  .prerender([{ path: '/' }])
  .match('/api/:path*', API_CACHE_HANDLER)
  .match('/images/:path*', API_CACHE_HANDLER)
  .match('/category/:path*', ({ serveStatic, cache }) => {
    cache(edgeOnly)
    serveStatic('public/category/[slug]/index.html')
  })
  .match('/service-worker.js', ({ serveStatic, cache }) => {
    cache(edgeOnly)
    serveStatic('public/service-worker.js')
  })
  .match('/product/:path*', ({ serveStatic, cache }) => {
    cache(edgeOnly)
    serveStatic('public/product/[slug]/index.html')
  })

  // match routes for js/css resources and serve the static files
  .match('/static/:path*', ({ serveStatic, cache }) => {
    cache(edgeAndBrowser)
    serveStatic('public/static/:path*')
  })
  .match('/assets/:path*', ({ serveStatic, cache }) => {
    cache(edgeAndBrowser)
    serveStatic('public/assets/:path*')
  })
  // match client-side routes that aren't a static asset
  // and serve the app shell. client-side router will
  // handle the route once it is rendered
  .match('/:path*/:file([^\\.]+|)', ({ appShell, cache }) => {
    cache(edgeOnly)
    appShell('public/index.html')
  })
  // match other assets such as favicon, manifest.json, etc
  .match('/:path*', ({ serveStatic, cache }) => {
    cache(edgeOnly)
    serveStatic('public/:path*')
  })
  // send any unmatched request to serve the static index.html
  .fallback(({ serveStatic }) => serveStatic('public/index.html'))
