<template>
  <div>
    <p class="tip">
      虚拟滚动渲染<span class="orange">（最大可以支撑 1w 列、20w 行）</span><br>
      大数据不建议使用双向绑定的 <table-api-link name="data"/> 属性（vue 监听会大数据会短暂的卡顿），建议使用 <table-api-link prop="loadData"/>/<table-api-link prop="loadColumn"/> 函数<br>
      <span class="red">(注：如果要启用横向虚拟滚动，不支持分组表头，如果需要支持动态列宽的话，那么需要处理好 <table-api-link name="rSize"/> 参数，内置的列宽算法是无法支持某些场景的，某些场景下必须手动设置)</span>
    </p>

    <vxe-grid
      border
      show-overflow
      show-header-overflow
      toolbar
      ref="xGrid"
      height="500"
      :loading="loading"
      :checkbox-config="{checkField: 'checked', labelField: 'nickname'}">
      <template v-slot:buttons>
        <vxe-button @click="loadColumnAndData(1000, 1000)">1k列1k条</vxe-button>
        <vxe-button @click="loadColumnAndData(3000, 3000)">3k列3k条</vxe-button>
        <vxe-button @click="loadColumnAndData(5000, 5000)">5k列5k条</vxe-button>
        <vxe-button @click="loadColumnAndData(10000, 10000)">1w列1w条</vxe-button>
      </template>
    </vxe-grid>

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
      loading: false,
      demoCodes: [
        `
        <vxe-grid
          border
          show-overflow
          show-header-overflow
          toolbar
          ref="xGrid"
          height="500"
          :loading="loading"
          :checkbox-config="{checkField: 'checked', labelField: 'nickname'}">
          <template v-slot:buttons>
            <vxe-button @click="loadColumnAndData(1000, 1000)">1k列1k条</vxe-button>
            <vxe-button @click="loadColumnAndData(3000, 3000)">3k列3k条</vxe-button>
            <vxe-button @click="loadColumnAndData(5000, 5000)">5k列5k条</vxe-button>
            <vxe-button @click="loadColumnAndData(10000, 10000)">1w列1w条</vxe-button>
          </template>
        </vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              loading: false
            }
          },
          created () {
            this.loadColumnAndData(200, 600)
          },
          methods: {
            loadColumnAndData (colSize, rowSize) {
              this.loading = true
              Promise.all([
                this.loadColumn(colSize),
                this.loadList(rowSize)
              ]).then(() => {
                this.loading = false
              })
            },
            loadColumn (size) {
              return this.$ajax.mockColumns(size).then(columns => {
                // 使用函数式加载，阻断 vue 对大数组的监听
                return this.$refs.xGrid.reloadColumn(columns)
              })
            },
            loadList (size) {
              return this.$ajax.mockList(size).then(data => {
                // 使用函数式加载，阻断 vue 对大数组的监听
                return this.$refs.xGrid.reloadData(data)
              })
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.loadColumnAndData(200, 600)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    loadColumnAndData (colSize, rowSize) {
      this.loading = true
      Promise.all([
        this.loadColumn(colSize),
        this.loadList(rowSize)
      ]).then(() => {
        this.loading = false
      })
    },
    loadColumn (size) {
      return this.$ajax.mockColumns(size).then(columns => {
        // 使用函数式加载，阻断 vue 对大数组的监听
        return this.$refs.xGrid.reloadColumn(columns.map(item => {
          item.fixed = null
          return item
        }))
      })
    },
    loadList (size) {
      return this.$ajax.mockList(size).then(data => {
        // 使用函数式加载，阻断 vue 对大数组的监听
        return this.$refs.xGrid.reloadData(data)
      })
    }
  }
}
</script>
