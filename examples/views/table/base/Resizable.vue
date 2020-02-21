<template>
  <div>
    <p class="tip">通过设置 <table-api-link prop="resizable"/> 属性启用列宽拖动功能</p>

    <vxe-table
      resizable
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age"></vxe-table-column>
      <vxe-table-column prop="time" label="Time"></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p class="tip">横向滚动条</p>

    <vxe-table
      border
      resizable
      highlight-hover-row
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" width="300"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="300"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" width="300"></vxe-table-column>
      <vxe-table-column prop="time" label="Time" width="300"></vxe-table-column>
      <vxe-table-column prop="address" label="Address" width="300" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>

    <p class="tip">固定左列宽拖动（固定左不允许超过表格右边距）</p>

    <vxe-table
      border
      resizable
      :data="tableData">
      <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column prop="atrr1" label="atrr1" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr2" label="atrr2" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr3" label="atrr3" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr4" label="atrr4" width="200"></vxe-table-column>
      <vxe-table-column prop="time" label="Time" width="200"></vxe-table-column>
      <vxe-table-column prop="address" label="Address" width="200" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[4] }}</code>
      <code class="javascript">{{ demoCodes[5] }}</code>
    </pre>

    <p class="tip">固定右列宽拖动（固定右不允许超过表格左边距）</p>

    <vxe-table
      border
      resizable
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" width="200"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="200"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr1" label="atrr1" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr2" label="atrr2" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr3" label="atrr3" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr4" label="atrr4" width="200"></vxe-table-column>
      <vxe-table-column prop="role" label="Role" width="100" fixed="right"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" width="100" fixed="right"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="100" fixed="right"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[6] }}</code>
      <code class="javascript">{{ demoCodes[7] }}</code>
    </pre>

    <p class="tip">左右固定列宽拖动（固定左不允许超过固定右，固定右不允许超过固定左）</p>

    <vxe-table
      border
      resizable
      show-overflow
      :data="tableData">
      <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column prop="atrr1" label="atrr1" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr2" label="atrr2 其他2" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr3" label="atrr3" width="200"></vxe-table-column>
      <vxe-table-column prop="atrr4" label="atrr4 其他4" width="200"></vxe-table-column>
      <vxe-table-column prop="date" label="Date" width="100" fixed="right"></vxe-table-column>
      <vxe-table-column prop="time" label="Time" width="100" fixed="right"></vxe-table-column>
      <vxe-table-column prop="address" label="Address" width="100" fixed="right"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[8] }}</code>
      <code class="javascript">{{ demoCodes[9] }}</code>
    </pre>

    <p class="tip">分组表头拖动（只允许列拖动，不允许分组标题拖动）</p>

    <vxe-table
      border
      resizable
      :data="tableData">
      <vxe-table-column label="基本信息">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column prop="name" label="Name"></vxe-table-column>
      </vxe-table-column>
      <vxe-table-column label="更多信息">
        <vxe-table-column prop="role" label="Role"></vxe-table-column>
        <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
        <vxe-table-column label="详细信息">
          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
          <vxe-table-column prop="date" label="Date" width="140" show-overflow></vxe-table-column>
        </vxe-table-column>
      </vxe-table-column>
      <vxe-table-column prop="address" label="Address" width="200" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[10] }}</code>
      <code class="javascript">{{ demoCodes[11] }}</code>
    </pre>

    <p class="tip">左右固定列的分组表头拖动（只允许列拖动，不允许分组标题拖动）</p>

    <vxe-table
      border
      resizable
      :data="tableData">
      <vxe-table-column label="基本信息">
        <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
        <vxe-table-column prop="name" label="Name" fixed="left" width="100"></vxe-table-column>
      </vxe-table-column>
      <vxe-table-column label="更多信息">
        <vxe-table-column prop="role" label="Role" width="300"></vxe-table-column>
        <vxe-table-column prop="sex" label="Sex" width="300"></vxe-table-column>
        <vxe-table-column label="详细信息">
          <vxe-table-column prop="sex" label="Sex" width="300"></vxe-table-column>
          <vxe-table-column prop="date" label="Date" width="300"></vxe-table-column>
        </vxe-table-column>
      </vxe-table-column>
      <vxe-table-column label="其他信息">
        <vxe-table-column prop="age" label="Age" width="100" fixed="right" show-overflow></vxe-table-column>
        <vxe-table-column prop="address" label="Address" width="100" fixed="right" show-overflow></vxe-table-column>
      </vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[12] }}</code>
      <code class="javascript">{{ demoCodes[13] }}</code>
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
          resizable
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
          <vxe-table-column prop="age" label="Age"></vxe-table-column>
          <vxe-table-column prop="time" label="Time"></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
          }
        }
        `,
        `
        <vxe-table
          border
          resizable
          highlight-hover-row
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" width="300"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" width="300"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" width="300"></vxe-table-column>
          <vxe-table-column prop="time" label="Time" width="300"></vxe-table-column>
          <vxe-table-column prop="address" label="Address" width="300" show-overflow></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
          }
        }
        `,
        `
        <vxe-table
          border
          resizable
          :data="tableData">
          <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column prop="atrr1" label="atrr1" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr2" label="atrr2" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr3" label="atrr3" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr4" label="atrr4" width="200"></vxe-table-column>
          <vxe-table-column prop="time" label="Time" width="200"></vxe-table-column>
          <vxe-table-column prop="address" label="Address" width="200" show-overflow></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
          }
        }
        `,
        `
        <vxe-table
          border
          resizable
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" width="200"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" width="200"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr1" label="atrr1" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr2" label="atrr2" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr3" label="atrr3" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr4" label="atrr4" width="200"></vxe-table-column>
          <vxe-table-column prop="date" label="Date" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column prop="time" label="Time" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column prop="address" label="Address" width="100" fixed="right"></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
          }
        }
        `,
        `
        <vxe-table
          border
          resizable
          show-overflow
          :data="tableData">
          <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column prop="atrr1" label="atrr1" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr2" label="atrr2 其他2" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr3" label="atrr3" width="200"></vxe-table-column>
          <vxe-table-column prop="atrr4" label="atrr4 其他4" width="200"></vxe-table-column>
          <vxe-table-column prop="date" label="Date" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column prop="time" label="Time" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column prop="address" label="Address" width="100" fixed="right"></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
          }
        }
        `,
        `
        <vxe-table
          border
          resizable
          :data="tableData">
          <vxe-table-column label="基本信息">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column prop="name" label="Name"></vxe-table-column>
          </vxe-table-column>
          <vxe-table-column label="更多信息">
            <vxe-table-column prop="role" label="Role"></vxe-table-column>
            <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
            <vxe-table-column label="详细信息">
              <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
              <vxe-table-column prop="date" label="Date" width="140" show-overflow></vxe-table-column>
            </vxe-table-column>
          </vxe-table-column>
          <vxe-table-column prop="address" label="Address" width="200" show-overflow></vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
          }
        }
        `,
        `
        <vxe-table
          border
          resizable
          :data="tableData">
          <vxe-table-column label="基本信息">
            <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
            <vxe-table-column prop="name" label="Name" fixed="left" width="100"></vxe-table-column>
          </vxe-table-column>
          <vxe-table-column label="更多信息">
            <vxe-table-column prop="role" label="Role" width="300"></vxe-table-column>
            <vxe-table-column prop="sex" label="Sex" width="300"></vxe-table-column>
            <vxe-table-column label="详细信息">
              <vxe-table-column prop="sex" label="Sex" width="300"></vxe-table-column>
              <vxe-table-column prop="date" label="Date" width="300"></vxe-table-column>
            </vxe-table-column>
          </vxe-table-column>
          <vxe-table-column label="其他信息">
            <vxe-table-column prop="age" label="Age" width="100" fixed="right" show-overflow></vxe-table-column>
            <vxe-table-column prop="address" label="Address" width="100" fixed="right" show-overflow></vxe-table-column>
          </vxe-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
