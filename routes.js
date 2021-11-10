// This file was automatically added by layer0 deploy.
// You should commit this file to source control.

const { Router } = require('@layer0/core/router')
const { gatsbyRoutes } = require('@layer0/gatsby')
const { API_CACHE_HANDLER } = require('./layer0/cache')

module.exports = new Router().match('/images/:path*', API_CACHE_HANDLER).match('/api/:path*', API_CACHE_HANDLER).use(gatsbyRoutes)