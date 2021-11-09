const { InjectManifest } = require('workbox-webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  console.log('Stage', stage)
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
