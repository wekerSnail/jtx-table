<template>
  <div>
    <p class="tip">底部合计</p>

    <vxe-grid
      border
      stripe
      resizable
      show-footer
      height="500"
      :toolbar="tableToolbar"
      :footer-method="footerMethod"
      :columns="tableColumn"
      :data="tableData"></vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableColumn: [
        { type: 'seq', width: 60 },
        { prop: 'name', label: 'app.body.label.name', width: 300 },
        { prop: 'sex', label: 'app.body.label.sex', width: 300 },
        { prop: 'age', label: 'Age', width: 300 },
        { prop: 'rate', label: 'Rate', width: 300 },
        { prop: 'rate',
          label: 'Rate',
          width: 300,
          fixed: 'right',
          slots: {
            default: ({ row, column }) => {
              return [
                <el-button>弹框</el-button>, <el-button>弹框</el-button>
              ]
            }
          } }
      ],
      tableToolbar: {
        export: true,
        zoom: true
      },
      tableData: [],
      demoCodes: [
        `
        <vxe-grid
          border
          stripe
          resizable
          show-footer
          height="500"
          :toolbar="tableToolbar"
          :footer-method="footerMethod"
          :columns="tableColumn"
          :data="tableData"></vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              tableColumn: [
                { type: 'seq', width: 60 },
                { prop: 'name', label: 'app.body.label.name' },
                { prop: 'sex', label: 'app.body.label.sex' },
                { prop: 'age', label: 'Age' },
                { prop: 'rate', label: 'Rate' }
              ],
              tableToolbar: {
                export: true,
                zoom: true
              },
              tableData: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 15)
          },
          methods: {
            footerMethod ({ columns, data }) {
              return [
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '和值'
                  }
                  if (['age', 'rate'].includes(column.property)) {
                    return XEUtils.sum(data, column.property)
                  }
                  return null
                }),
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '平均'
                  }
                  if (['age', 'rate'].includes(column.property)) {
                    return XEUtils.mean(data, column.property)
                  }
                  return null
                })
              ]
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 15)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age', 'rate'].includes(column.property)) {
            return XEUtils.sum(data, column.property)
          }
          return null
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age', 'rate'].includes(column.property)) {
            return XEUtils.mean(data, column.property)
          }
          return null
        })
      ]
    }
  }
}
</script>
