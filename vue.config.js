const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('/src'))
  }
}
