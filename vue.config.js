const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname,'./src/assets/styles/variables.sass'),
        path.resolve(__dirname,'./src/assets/styles/mixin.sass'),
     ]
   }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('/src'))
  }
}
