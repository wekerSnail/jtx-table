<template>
  <div>
    <p class="tip">局部自定义 <table-column-api-link prop="formatter"/> 格式化内容，<table-column-api-link prop="formatter"/> 会确保在指定的 <table-column-api-link prop="prop"/> 值发生改变时调用，如果想要多字段关联变化请使用<router-link class="nav-link" :to="{name: 'TableTemplate'}">自定义模板</router-link></p>

    <vxe-table
      border
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" sortable></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" :formatter="formatterSex"></vxe-table-column>
      <vxe-table-column prop="time" label="Time" :formatter="formatTime"></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p class="tip">
      全局格式化内容，会在需要的时候自动调用对应 <a class="link" href="https://xuliangzhan.github.io/xe-utils/#/" target="_blank">xe-utils</a> 函数库的方法进行数据处理<br>
      可以通过自定义函数实现统一的格式化处理，这对于很多场景非常有用，减少很多不必要的重复代码
    </p>

    <vxe-table
      border
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="date" label="转日期" width="180" formatter="toDateString"></vxe-table-column>
      <vxe-table-column prop="time" label="转日期格式" width="140" :formatter="['toDateString', 'yyyy-MM-dd']"></vxe-table-column>
      <vxe-table-column prop="amount" label="格式化金额" formatter="commafy"></vxe-table-column>
      <vxe-table-column prop="bankCard" label="银行卡" width="180" :formatter="['commafy', {spaceNumber: 4, separator: ' '}]"></vxe-table-column>
      <vxe-table-column prop="num" label="转整数" formatter="toInteger"></vxe-table-column>
      <vxe-table-column prop="num" label="截取两位小数" :formatter="['toFixedString', 2]"></vxe-table-column>
      <vxe-table-column prop="sex" label="格式化性别" :formatter="['formatSelect', sexList]"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import XEUtils from 'xe-utils/methods/xe-utils'

XEUtils.mixin({
  // 自定义全局的格式化处理函数
  formatSelect (cellValue, list) {
    let item = list.find(item => item.value === cellValue)
    return item ? item.label : ''
  }
})

export default {
  data () {
    return {
      tableData: [],
      sexList: [
        {
          label: '女',
          value: '0'
        },
        {
          label: '男',
          value: '1'
        }
      ],
      demoCodes: [
        `
        <vxe-table
          border
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="name" label="Name" sortable></vxe-table-column>
          <vxe-table-column prop="sex" label="Sex" :formatter="formatterSex"></vxe-table-column>
          <vxe-table-column prop="time" label="Time" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [],
              sexList: [
                {
                  label: '女',
                  value: '0'
                },
                {
                  label: '男',
                  value: '1'
                }
              ]
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
          },
          methods: {
            formatterSex ({ cellValue }) {
              let item = this.sexList.find(item => item.value === cellValue)
              return item ? item.label : ''
            },
            formatTime ({ cellValue, row, column }) {
              return this.$utils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
            }
          }
        }
        `,
        `
        <vxe-table
          border
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="date" label="转日期" width="180" formatter="toDateString"></vxe-table-column>
          <vxe-table-column prop="time" label="转日期格式" width="140" :formatter="['toDateString', 'yyyy-MM-dd']"></vxe-table-column>
          <vxe-table-column prop="amount" label="格式化金额" formatter="commafy"></vxe-table-column>
          <vxe-table-column prop="bankCard" label="银行卡" width="180" :formatter="['commafy', {spaceNumber: 4, separator: ' '}]"></vxe-table-column>
          <vxe-table-column prop="num" label="转整数" formatter="toInteger"></vxe-table-column>
          <vxe-table-column prop="num" label="截取两位小数" :formatter="['toFixedString', 2]"></vxe-table-column>
          <vxe-table-column prop="sex" label="格式化性别" :formatter="['formatSelect', sexList]"></vxe-table-column>
        </vxe-table>
        `,
        `
        XEUtils.mixin({
          // 自定义全局的格式化处理函数
          formatSelect (cellValue, list) {
            let item = list.find(item => item.value === cellValue)
            return item ? item.label : ''
          }
        })

        export default {
          data () {
            return {
              tableData: [],
              sexList: [
                {
                  label: '女',
                  value: '0'
                },
                {
                  label: '男',
                  value: '1'
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
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    formatterSex ({ cellValue }) {
      let item = this.sexList.find(item => item.value === cellValue)
      return item ? item.label : ''
    },
    formatTime ({ cellValue, row, column }) {
      return this.$utils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    }
  }
}
</script>
