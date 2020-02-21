<template>
  <div>
    <p class="tip">
      列宽，通过设置 <table-column-api-link prop="width"/> 参数，支持固定像素、百分比、自适应等，如果不设置则全部均匀分配<br>
      <span class="red">(注：不应该全部都使用固定像素，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区，可以配合 "%" 或 "<table-column-api-link prop="min-width"/>" 实现等比例缩放)</span>
    </p>

    <vxe-table
      border
      :data="tableData">
      <vxe-table-column type="seq"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="role" label="Role"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="date" label="Date"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p class="tip">部分固定列宽，其余自适应</p>

    <vxe-table
      border
      :data="tableData">
      <vxe-table-column type="seq" width="80"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" width="200"></vxe-table-column>
      <vxe-table-column prop="role" label="Role"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="140"></vxe-table-column>
      <vxe-table-column prop="age" label="Age"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>

    <p class="tip">设置固定和最小宽，实现等比例放大</p>

    <vxe-table
      border
      :data="tableData">
      <vxe-table-column type="seq" width="80"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" min-width="200"></vxe-table-column>
      <vxe-table-column prop="role" label="Role" min-width="140"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" min-width="120"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" min-width="120"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[4] }}</code>
      <code class="javascript">{{ demoCodes[5] }}</code>
    </pre>

    <p class="tip">设置百分比</p>

    <vxe-table
      border
      :data="tableData">
      <vxe-table-column type="seq" width="10%"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" width="30%"></vxe-table-column>
      <vxe-table-column prop="role" label="Role" width="20%"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="20%"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" width="20%"></vxe-table-column>
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
        <vxe-table
          border
          :data="tableData">
          <vxe-table-column type="seq"></vxe-table-column>
          <vxe-table-column prop="name" label="Name"></vxe-table-column>
          <vxe-table-column prop="role" label="Role"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 4)
          }
        }
        `,
        `
        <vxe-table
          border
          :data="tableData">
          <vxe-table-column type="seq" width="80"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" width="200"></vxe-table-column>
          <vxe-table-column prop="role" label="Role"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" width="140"></vxe-table-column>
          <vxe-table-column prop="age" label="Age"></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 4)
          }
        }
        `,
        `
        <vxe-table
          border
          :data="tableData">
          <vxe-table-column type="seq" width="80"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" min-width="200"></vxe-table-column>
          <vxe-table-column prop="role" label="Role" min-width="140"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" min-width="120"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" min-width="120"></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 4)
          }
        }
        `,
        `
        <vxe-table
          border
          :data="tableData">
          <vxe-table-column type="seq" width="10%"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" width="30%"></vxe-table-column>
          <vxe-table-column prop="role" label="Role" width="20%"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" width="20%"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" width="20%"></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 4)
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 4)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
