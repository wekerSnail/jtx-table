/*
 * @Author: your name
 * @Date: 2020-04-26 10:36:17
 * @LastEditTime: 2020-04-26 11:13:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jtx-table\packages\v-x-e-table\index.js
 */
import XEUtils from 'xe-utils/methods/xe-utils'
import Interceptor from './src/interceptor'
import Renderer from './src/renderer'
import Buttons from './src/buttons'
import Menus from './src/menus'
import Setup from './src/setup'
import GlobalConfig from '../conf'
import { UtilTools } from '../tools'

const installedPlugins = []

function use (Plugin, options) {
  if (Plugin && Plugin.install) {
    if (installedPlugins.indexOf(Plugin) === -1) {
      Plugin.install(JTXTable, options)
      installedPlugins.push(Plugin)
    }
  }
  return JTXTable
}

/**
 * 检测模块的安装顺序是否正确
 */
function reg (key) {
  if (JTXTable.Table) {
    UtilTools.error('vxe.error.useErr', [key])
  }
  JTXTable[`_${key}`] = 1
}

export const JTXTable = {
  t: key => GlobalConfig.i18n(key),
  v: 'v2',
  reg,
  use,
  types: {},
  setup: Setup,
  interceptor: Interceptor,
  renderer: Renderer,
  buttons: Buttons,
  menus: Menus
}

/**
 * 获取当前的 zIndex
 */
Object.defineProperty(JTXTable, 'zIndex', { get: UtilTools.getLastZIndex })

/**
 * 获取下一个 zIndex
 */
Object.defineProperty(JTXTable, 'nextZIndex', { get: UtilTools.nextZIndex })

/**
 * 获取所有导出类型
 */
Object.defineProperty(JTXTable, 'exportTypes', {
  get () {
    return Object.keys(JTXTable.types)
  }
})

/**
 * 获取所有导入类型
 */
Object.defineProperty(JTXTable, 'importTypes', {
  get () {
    const rest = []
    XEUtils.each(JTXTable.types, (flag, type) => {
      if (flag) {
        rest.push(type)
      }
    })
    return rest
  }
})

export * from './src/interceptor'
export * from './src/renderer'
export * from './src/menus'
export * from './src/buttons'
export default JTXTable
