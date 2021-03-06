<template>
  <div>
    <p class="tip">
      通过调用 <table-api-link prop="exportData"/> 函数指定 type='csv' 可以直接将表格导出为 CSV/HTML/XML/TXT 格式的文件；<br>
      默认会排除 prop 为空和 type 相关的功能列，可以通过自定义 <table-api-link prop="data"/> 和 <table-api-link prop="columns"/> 导出数据<br>
      <span class="red">（注：只支持基本数据结构，目前不支持分组、合并等；树结构和虚拟滚动只允许导出数据源）</span>
    </p>

    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="exportDataEvent">默认导出</vxe-button>
        <vxe-button @click="exportSelectEvent">导出选中</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      ref="xTable1"
      highlight-hover-row
      height="300"
      :data="tableData">
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p class="tip">配置 <table-api-link prop="columnFilterMethod"/> 参数过滤指定列</p>

    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="exportDataEvent2">导出指定列 [name,sex]</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      ref="xTable2"
      highlight-hover-row
      height="300"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>

    <p class="tip">配置 <table-api-link prop="dataFilterMethod"/> 参数过滤指定行</p>

    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="exportDataEvent3">导出指定第10-20行</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      ref="xTable3"
      highlight-hover-row
      height="300"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[4] }}</code>
      <code class="javascript">{{ demoCodes[5] }}</code>
    </pre>

    <p class="tip">不导出表头，指定文件名，导出源数据,格式化数据</p>

    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="exportDataEvent4">完整配置</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      ref="xTable4"
      highlight-hover-row
      height="300"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[6] }}</code>
      <code class="javascript">{{ demoCodes[7] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent">默认导出</vxe-button>
            <vxe-button @click="exportSelectEvent">导出选中</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable1"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
          <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
          },
          methods: {
            exportDataEvent () {
              this.$refs.xTable1.exportData({ type: 'csv' })
            },
            exportSelectEvent () {
              this.$refs.xTable1.exportData({
                data: this.$refs.xTable1.getCheckboxRecords()
              })
            }
          }
        }
        `,
        `
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent2">导出指定列 [name,sex]</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable2"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
          <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
          },
          methods: {
            exportDataEvent2 () {
              this.$refs.xTable2.exportData({
                type: 'csv',
                columnFilterMethod: column => ['name', 'sex'].includes(column.property)
              })
            }
          }
        }
        `,
        `
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent3">导出指定第10-20行</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable3"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
          <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
          },
          methods: {
            exportDataEvent3 () {
              this.$refs.xTable3.exportData({
                type: 'csv',
                dataFilterMethod: (row, rowIndex) => rowIndex >= 9 && rowIndex < 20
              })
            }
          }
        }
        `,
        `
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent4">完整配置</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable4"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
          <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
          },
          methods: {
            exportDataEvent4 () {
              this.$refs.xTable1.exportData({
                filename: '自定义文件名',
                type: 'csv',
                original: true,
                isHeader: false,
                data: this.tableData.map(row => {
                  row.date = this.$utils.toDateString(row.date, 'yyyy-MM-dd')
                  return row
                })
              })
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    exportDataEvent () {
      this.$refs.xTable1.exportData({ type: 'csv' })
    },
    exportSelectEvent () {
      this.$refs.xTable1.exportData({
        data: this.$refs.xTable1.getCheckboxRecords()
      })
    },
    exportDataEvent2 () {
      this.$refs.xTable2.exportData({
        type: 'csv',
        columnFilterMethod: column => ['name', 'sex'].includes(column.property)
      })
    },
    exportDataEvent3 () {
      this.$refs.xTable3.exportData({
        type: 'csv',
        dataFilterMethod: (row, rowIndex) => rowIndex >= 9 && rowIndex < 20
      })
    },
    exportDataEvent4 () {
      this.$refs.xTable1.exportData({
        filename: '自定义文件名',
        type: 'csv',
        original: true,
        isHeader: false,
        data: this.tableData.map(row => {
          row.date = this.$utils.toDateString(row.date, 'yyyy-MM-dd')
          return row
        })
      })
    }
  }
}
</script>
