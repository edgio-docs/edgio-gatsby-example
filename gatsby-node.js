const path = require('path')
const fetch = require('node-fetch')
const { InjectManifest } = require('workbox-webpack-plugin')

const apiUrl = 'https://layer0-docs-layer0-examples-api-default.layer0.link'

async function getCategories() {
  const ret = { categories: [] }
  const res = await fetch(`${apiUrl}/category`).catch((e) => ({
    error: e.message,
  }))
  ret.categories = await res.json()
  return ret
}

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new InjectManifest({
          swSrc: './service-worker.js',
        }),
      ],
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/product.js`)
  const categories = (await getCategories())['categories']
  categories.forEach((category) => {
    const products = category['items']
    products.forEach((edge) => {
      createPage({
        path: edge.href,
        component: productTemplate,
        context: edge,
      })
    })
  })
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  categories.forEach((category) => {
    const products = category['items']
    createPage({
      path: category.href,
      component: categoryTemplate,
      context: { products, slug: category.href },
    })
  })
}
