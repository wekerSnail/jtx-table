<template>
  <div>
    <p class="tip">
      虚拟滚动渲染，左右固定列<span class="orange">（最大可以支撑 1w 列、20w 行）</span><br>
      大数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 <table-api-link prop="loadData"/>/<table-api-link prop="reloadData"/> 函数<br>
      对于多选 type=<table-column-api-link prop="checkbox"/> 当数据量海量时应该绑定 <table-api-link prop="checkField"/> 属性渲染速度更快<br>
      <span class="red">（注：如果要启用纵向虚拟滚动，所有的行高必须一致，否则无法兼容）</span>
    </p>

    <vxe-toolbar export>
      <template v-slot:buttons>
        <vxe-button @click="loadList(30000)">3w条</vxe-button>
        <vxe-button @click="loadList(60000)">6w条</vxe-button>
        <vxe-button @click="loadList(100000)">10w条</vxe-button>
        <vxe-button @click="$refs.xTable.setAllCheckboxRow(true)">所有选中</vxe-button>
        <vxe-button @click="$refs.xTable.clearCheckboxRow()">清除选中</vxe-button>
        <vxe-button @click="getSelectEvent">获取选中</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      resizable
      show-overflow
      show-header-overflow
      highlight-hover-row
      highlight-current-row
      ref="xTable"
      height="600"
      :loading="loading"
      :sort-config="{trigger: 'cell'}"
      :checkbox-config="{checkField: 'checked'}">
      <vxe-table-column type="checkbox" width="60" fixed="left"></vxe-table-column>
      <vxe-table-column type="seq" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" sortable width="200"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" width="200"></vxe-table-column>
      <vxe-table-column prop="rate" label="Rate" width="200"></vxe-table-column>
      <vxe-table-column prop="region" label="Region" width="200"></vxe-table-column>
      <vxe-table-column prop="time" label="Time" width="200"></vxe-table-column>
      <vxe-table-column prop="address" label="Address" width="300"></vxe-table-column>
      <vxe-table-column prop="updateTime" label="UpdateTime" width="200"></vxe-table-column>
      <vxe-table-column prop="createTime" label="CreateTime" width="200"></vxe-table-column>
      <vxe-table-column prop="attr1" label="Attr1" width="200"></vxe-table-column>
      <vxe-table-column prop="attr2" label="Attr2" width="200"></vxe-table-column>
      <vxe-table-column prop="attr3" label="Attr3" width="200"></vxe-table-column>
      <vxe-table-column prop="attr4" label="Attr4" width="200"></vxe-table-column>
      <vxe-table-column prop="attr5" label="Attr5" width="200"></vxe-table-column>
      <vxe-table-column prop="attr6" label="Attr6" width="200"></vxe-table-column>
      <vxe-table-column prop="attr7" label="Attr7" width="200"></vxe-table-column>
      <vxe-table-column prop="attr8" label="Attr8" width="200"></vxe-table-column>
      <vxe-table-column prop="attr9" label="Attr9" width="200"></vxe-table-column>
      <vxe-table-column prop="createTime" label="CreateTime" width="200"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" width="200" fixed="right"></vxe-table-column>
    </vxe-table>

    <pre>
      <code>
        | Arrow Up ↑ | 匀速向上滚动数据 |
        | Arrow Down ↓ | 匀速向下滚动数据 |
        | Arrow Left ← | 匀速向左滚动数据 |
        | Arrow Right → | 匀速向右滚动数据 |
        | Page Up | 向上翻页滚动 |
        | Page Down | 向下翻页滚动 |
        | Spacebar | 翻页滚动 |
        | Home | 滚动到顶部 |
        | End | 滚动到底部 |
      </code>
    </pre>

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
        <vxe-toolbar export>
          <template v-slot:buttons>
            <vxe-button @click="loadList(30000)">3w条</vxe-button>
            <vxe-button @click="loadList(60000)">6w条</vxe-button>
            <vxe-button @click="loadList(100000)">10w条</vxe-button>
            <vxe-button @click="$refs.xTable.setAllCheckboxRow(true)">所有选中</vxe-button>
            <vxe-button @click="$refs.xTable.clearCheckboxRow()">清除选中</vxe-button>
            <vxe-button @click="getSelectEvent">获取选中</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          resizable
          show-overflow
          show-header-overflow
          highlight-hover-row
          highlight-current-row
          ref="xTable"
          height="600"
          :loading="loading"
          :sort-config="{trigger: 'cell'}"
          :checkbox-config="{checkField: 'checked'}">
          <vxe-table-column type="checkbox" width="60" fixed="left"></vxe-table-column>
          <vxe-table-column type="seq" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" sortable width="200"></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" width="200"></vxe-table-column>
          <vxe-table-column prop="rate" label="Rate" width="200"></vxe-table-column>
          <vxe-table-column prop="region" label="Region" width="200"></vxe-table-column>
          <vxe-table-column prop="time" label="Time" width="200"></vxe-table-column>
          <vxe-table-column prop="address" label="Address" width="300"></vxe-table-column>
          <vxe-table-column prop="updateTime" label="UpdateTime" width="200"></vxe-table-column>
          <vxe-table-column prop="createTime" label="CreateTime" width="200"></vxe-table-column>
          <vxe-table-column prop="attr1" label="Attr1" width="200"></vxe-table-column>
          <vxe-table-column prop="attr2" label="Attr2" width="200"></vxe-table-column>
          <vxe-table-column prop="attr3" label="Attr3" width="200"></vxe-table-column>
          <vxe-table-column prop="attr4" label="Attr4" width="200"></vxe-table-column>
          <vxe-table-column prop="attr5" label="Attr5" width="200"></vxe-table-column>
          <vxe-table-column prop="attr6" label="Attr6" width="200"></vxe-table-column>
          <vxe-table-column prop="attr7" label="Attr7" width="200"></vxe-table-column>
          <vxe-table-column prop="attr8" label="Attr8" width="200"></vxe-table-column>
          <vxe-table-column prop="attr9" label="Attr9" width="200"></vxe-table-column>
          <vxe-table-column prop="createTime" label="CreateTime" width="200"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" width="200" fixed="right"></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false
            }
          },
          created () {
            this.loadList(600)
          },
          methods: {
            loadList (size) {
              this.loading = true
              this.$ajax.mockList(size).then(data => {
                // 使用函数式加载，阻断 vue 对大数组的双向绑定
                this.$refs.xTable.reloadData(data)
                this.loading = false
              })
            },
            getSelectEvent () {
              let selectRecords = this.$refs.xTable.getCheckboxRecords()
              this.$XModal.alert(selectRecords.length)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.loadList(600)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    loadList (size) {
      this.loading = true
      this.$ajax.mockList(size).then(data => {
        // 使用函数式加载，对大数组的监听
        this.$refs.xTable.reloadData(data)
        this.loading = false
      })
    },
    getSelectEvent () {
      let selectRecords = this.$refs.xTable.getCheckboxRecords()
      this.$XModal.alert(selectRecords.length)
    }
  }
}
</script>
