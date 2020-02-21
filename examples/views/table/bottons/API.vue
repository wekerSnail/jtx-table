<template>
  <div>
    <h1>全局工具栏按钮注册器</h1>
    <p class="tip">你可以很简单的将工具栏中常用的按钮注册成全局可复用的</p>
    <vxe-table
      resizable
      highlight-current-row
      highlight-hover-row
      highlight-current-column
      :data="tableData">
      <vxe-table-column prop="name" label="app.api.label.prop" min-width="280" tree-node></vxe-table-column>
      <vxe-table-column prop="desc" label="app.api.label.desc" min-width="200"></vxe-table-column>
      <vxe-table-column prop="type" label="app.api.label.type" min-width="140"></vxe-table-column>
      <vxe-table-column prop="enum" label="app.api.label.enum" min-width="150"></vxe-table-column>
      <vxe-table-column prop="defVal" label="app.api.label.defVal" min-width="160"></vxe-table-column>
    </vxe-table>
    <h2>示例</h2>
    <pre>
      <code class="javascript">{{ demoCodes[0] }}</code>
      <code class="html">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableData: [
        {
          name: 'add(code, callback)',
          desc: '添加',
          version: '',
          type: '',
          enum: '',
          defVal: 'code, callback',
          list: []
        },
        {
          name: 'mixin(map)',
          desc: '混合多个',
          version: '',
          type: '',
          enum: '',
          defVal: 'map',
          list: []
        },
        {
          name: 'delete(code)',
          desc: '删除',
          version: '',
          type: '',
          enum: '',
          defVal: 'name',
          list: []
        }
      ],
      demoCodes: [
        `
        <vxe-toolbar :buttons="toolbarButtons"></vxe-toolbar>

        <vxe-table
          border
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="sex" label="sex"></vxe-table-column>
          <vxe-table-column prop="age" label="Age"></vxe-table-column>
        </vxe-table>
        `,
        `
        VXETable.buttons.add('exportBtn', (params, event) => {
          let { $table, code, button } = params
          $table.exportData()
        })

        export default {
          data () {
            return {
              tableData: [],
              toolbarButtons: [
                {
                  code: 'exportBtn',
                  name: '导出.csv'
                }
              ]
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
          }
        }
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
