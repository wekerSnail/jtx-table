<template>
  <div>
    <p class="tip">手风琴展开效果，通过配置 tree-config={<table-api-link prop="accordion"/>} 属性来开启同一级的节点，每次只能展开一个</p>

    <vxe-table
      border
      resizable
      :tree-config="{children: 'children', accordion: true}"
      :data="tableData">
      <vxe-table-column prop="name" label="app.body.label.name" tree-node></vxe-table-column>
      <vxe-table-column prop="size" label="Size"></vxe-table-column>
      <vxe-table-column prop="type" label="Type"></vxe-table-column>
      <vxe-table-column prop="date" label="Date"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
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
        <vxe-table
          border
          resizable
          :tree-config="{children: 'children', accordion: true}"
          :data="tableData">
          <vxe-table-column prop="name" label="app.body.label.name" tree-node></vxe-table-column>
          <vxe-table-column prop="size" label="Size"></vxe-table-column>
          <vxe-table-column prop="type" label="Type"></vxe-table-column>
          <vxe-table-column prop="date" label="Date"></vxe-table-column>
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
            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = this.$utils.clone(window.MOCK_TREE_DATA_LIST, true)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
