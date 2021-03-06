import GlobalConfig from '../../conf'
import { Renderer } from '../../v-x-e-table'

export default {
  name: 'VxeTableFilter',
  props: {
    filterStore: Object,
    optimizeOpts: Object
  },
  render (h) {
    let { filterStore, optimizeOpts } = this
    let { column } = filterStore
    let filterRender = column ? column.own.filterRender : null
    let compConf = filterRender ? Renderer.get(filterRender.name) : null
    return h('div', {
      class: ['vxe-table--filter-wrapper', 'filter--prevent-default', compConf && compConf.className ? compConf.className : '', {
        't--animat': optimizeOpts.animat,
        'is--multiple': filterStore.multiple,
        'filter--active': filterStore.visible
      }],
      style: filterStore.style
    }, filterStore.visible ? this.renderOptions(h, filterRender, compConf).concat(this.renderFooter(h)) : [])
  },
  methods: {
    renderOptions (h, filterRender, compConf) {
      let { $parent: $table, filterStore } = this
      let { args, column, multiple } = filterStore
      let { slots } = column
      if (slots && slots.filter) {
        return [
          h('div', {
            class: 'vxe-table--filter-template'
          }, slots.filter.call($table, Object.assign({ $table, context: this }, args), h))
        ]
      } else if (compConf && compConf.renderFilter) {
        return [
          h('div', {
            class: 'vxe-table--filter-template'
          }, compConf.renderFilter.call($table, h, filterRender, args, this))
        ]
      }
      return [
        h('ul', {
          class: 'vxe-table--filter-header'
        }, [
          h('li', {
            class: ['vxe-table--filter-option', {
              'is--checked': multiple ? filterStore.isAllSelected : !filterStore.options.some(item => item.checked),
              'is--indeterminate': multiple && filterStore.isIndeterminate
            }],
            attrs: {
              title: GlobalConfig.i18n(multiple ? 'vxe.table.allTitle' : 'vxe.table.allFilter')
            },
            on: {
              click: evnt => {
                this.changeAllOption(evnt, !filterStore.isAllSelected)
              }
            }
          }, GlobalConfig.i18n('vxe.table.allFilter'))
        ]),
        h('ul', {
          class: 'vxe-table--filter-body'
        }, filterStore.options.map(item => {
          return h('li', {
            class: ['vxe-table--filter-option', {
              'is--checked': item.checked
            }],
            attrs: {
              title: item.label
            },
            on: {
              click: evnt => {
                this.changeOption(evnt, !item.checked, item)
              }
            }
          }, item.label)
        }))
      ]
    },
    renderFooter (h) {
      let { filterStore } = this
      let { column, multiple } = filterStore
      let filterRender = column.own.filterRender
      let compConf = filterRender ? Renderer.get(filterRender.name) : null
      return multiple && (!compConf || compConf.isFooter !== false) ? [
        h('div', {
          class: 'vxe-table--filter-footer'
        }, [
          h('button', {
            class: {
              'is--disabled': !filterStore.isAllSelected && !filterStore.isIndeterminate
            },
            attrs: {
              disabled: !filterStore.isAllSelected && !filterStore.isIndeterminate
            },
            on: {
              click: this.confirmFilter
            }
          }, GlobalConfig.i18n('vxe.table.confirmFilter')),
          h('button', {
            on: {
              click: this.resetFilter
            }
          }, GlobalConfig.i18n('vxe.table.resetFilter'))
        ])
      ] : []
    },
    // 全部筛选事件
    filterCheckAllEvent (evnt, value) {
      let filterStore = this.filterStore
      filterStore.options.forEach(option => {
        option.checked = value
      })
      filterStore.isAllSelected = value
      filterStore.isIndeterminate = false
    },
    checkOptions () {
      let { filterStore } = this
      filterStore.isAllSelected = filterStore.options.every(option => option.checked)
      filterStore.isIndeterminate = !filterStore.isAllSelected && filterStore.options.some(option => option.checked)
    },

    /*************************
     * Publish methods
     *************************/
    // （单选）筛选发生改变
    changeRadioOption (evnt, checked, item) {
      this.filterStore.options.forEach(option => {
        option.checked = false
      })
      item.checked = checked
      this.checkOptions()
      this.$parent.confirmFilterEvent()
    },
    // （多选）筛选发生改变
    changeMultipleOption (evnt, checked, item) {
      item.checked = checked
      this.checkOptions()
    },
    changeAllOption (evnt, checked) {
      if (this.filterStore.multiple) {
        this.filterCheckAllEvent(evnt, checked)
      } else {
        this.resetFilter()
      }
    },
    // 筛选发生改变
    changeOption (evnt, checked, item) {
      if (this.filterStore.multiple) {
        this.changeMultipleOption(evnt, checked, item)
      } else {
        this.changeRadioOption(evnt, checked, item)
      }
    },
    // 确认筛选
    confirmFilter () {
      this.$parent.confirmFilterEvent()
    },
    // 重置筛选
    resetFilter () {
      this.$parent.resetFilterEvent()
    }
    /*************************
     * Publish methods
     *************************/
  }
}
