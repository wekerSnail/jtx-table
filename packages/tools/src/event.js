import XEUtils from 'xe-utils/methods/xe-utils'
import DomTools from './dom'

// 监听全局事件
const browse = DomTools.browse
const wheelName = browse.isDoc && /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel'
const eventStore = []
export const GlobalEvent = {
  on (comp, type, cb) {
    if (cb) {
      eventStore.push({ comp, type, cb })
    }
  },
  off (comp, type) {
    XEUtils.remove(eventStore, item => item.comp === comp && item.type === type)
  },
  trigger (evnt) {
    eventStore.forEach(({ comp, type, cb }) => {
      if (type === evnt.type || (type === 'mousewheel' && evnt.type === wheelName)) {
        cb.call(comp, evnt)
      }
    })
  }
}

if (browse.isDoc) {
  document.addEventListener('keydown', GlobalEvent.trigger, false)
  document.addEventListener('contextmenu', GlobalEvent.trigger, false)
  window.addEventListener('mousedown', GlobalEvent.trigger, false)
  window.addEventListener('blur', GlobalEvent.trigger, false)
  window.addEventListener('resize', GlobalEvent.trigger, false)
  window.addEventListener(wheelName, GlobalEvent.trigger, false)
}

export default GlobalEvent