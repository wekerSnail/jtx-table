/*
 * @Description: 
 * @version: 1.0.0
 * @Author: weikang
 * @Date: 2019-12-30 16:18:09
 * @LastEditors  : weikang
 * @LastEditTime : 2020-01-07 15:51:20
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/jtx-table/' : '/',
  outputDir: 'docs',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vxe-table(修改) 表格'
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('examples'))
    config.output
      .set('libraryExport', 'default')
      .set('library', 'VXETable')
    if (process.env.npm_lifecycle_event.indexOf('lib') === 0) {
      let XEUtils = {
        root: 'XEUtils',
        commonjs: 'xe-utils/methods/xe-utils',
        commonjs2: 'xe-utils/methods/xe-utils',
        amd: 'xe-utils'
      }
      if (config.has('externals')) {
        config.externals
          // .set('xe-utils', XEUtils)
          .set('xe-utils/methods/xe-utils', XEUtils)
      } else {
        config
          .set('externals', {
            // 'xe-utils': XEUtils,
            'xe-utils/methods/xe-utils': XEUtils
          })
      }
    }
  }
}
