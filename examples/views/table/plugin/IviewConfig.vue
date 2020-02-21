<template>
  <div>
    <p class="tip">具体兼容请查看 <a class="link" href="https://www.npmjs.com/package/vxe-table-plugin-iview" target="_blank">vxe-table-plugin-iview</a> 插件的 API</p>

    <vxe-grid
      border
      show-overflow
      ref="xGrid"
      class="vxe-table-iview"
      height="460"
      :loading="loading"
      :data="tableData"
      :columns="tableColumn"
      :toolbar="tableToolbar"
      :edit-config="{trigger: 'click', mode: 'row'}">
      <template v-slot:buttons>
        <el-button @click="insertEvent">新增</el-button>
        <el-button @click="saveEvent">保存</el-button>
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
    let restaurants = ['前端', '后端', '开发', '测试']
    return {
      loading: false,
      tableData: [],
      tableColumn: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', label: 'Number', width: 80 },
        { prop: 'name', label: 'Number', minWidth: 140, editRender: { name: 'Input' } },
        { prop: 'role', label: 'AutoComplete', width: 160, editRender: { name: 'AutoComplete', props: { data: restaurants, filterMethod: this.roleFilterMethod } } },
        { prop: 'age', label: 'InputNumber', width: 160, editRender: { name: 'InputNumber', props: { max: 35, min: 18 } } },
        { prop: 'sex', label: 'Select', width: 140, editRender: { name: 'Select', options: [] } },
        { prop: 'sex1', label: 'Select', width: 160, editRender: { name: 'Select', options: [], props: { multiple: true, clearable: true } } },
        { prop: 'sex2', label: 'Select', width: 140, editRender: { name: 'Select', optionGroups: [], props: { clearable: true } } },
        { prop: 'region', label: 'Cascader', width: 200, editRender: { name: 'Cascader', props: { data: [] } } },
        { prop: 'date', label: 'DatePicker', width: 200, editRender: { name: 'DatePicker', props: { type: 'date', format: 'yyyy/MM/dd' } } },
        { prop: 'date1', label: 'TimePicker', width: 200, editRender: { name: 'TimePicker', props: { type: 'time' } } },
        { prop: 'flag', label: 'iSwitch', width: 100, editRender: { name: 'iSwitch', type: 'visible' } },
        { prop: 'rate', label: 'Rate', width: 200, editRender: { name: 'Rate', type: 'visible' } }
      ],
      tableToolbar: {},
      demoCodes: [
        `
        <vxe-grid
          border
          show-overflow
          ref="xGrid"
          class="vxe-table-iview"
          height="460"
          :loading="loading"
          :data="tableData"
          :columns="tableColumn"
          :edit-config="{trigger: 'click', mode: 'row'}">
          <template v-slot:buttons>
            <el-button @click="insertEvent">新增</el-button>
            <el-button @click="saveEvent">保存</el-button>
          </template>
        </vxe-grid>
        `,
        `
        export default {
          data () {
            let restaurants = ['前端', '后端', '开发', '测试']
            return {
              loading: false,
              tableData: [],
              tableColumn: [
                { type: 'checkbox', width: 60 },
                { type: 'seq', label: 'Number', width: 80 },
                { prop: 'name', label: 'Number', minWidth: 140, editRender: { name: 'Input' } },
                { prop: 'role', label: 'AutoComplete', width: 160, editRender: { name: 'AutoComplete', props: { data: restaurants, filterMethod: this.roleFilterMethod } } },
                { prop: 'age', label: 'InputNumber', width: 160, editRender: { name: 'InputNumber', props: { max: 35, min: 18 } } },
                { prop: 'sex', label: 'Select', width: 140, editRender: { name: 'Select', options: [] } },
                { prop: 'sex1', label: 'Select', width: 140, editRender: { name: 'Select', options: [], props: { multiple: true, clearable: true } } },
                { prop: 'sex2', label: 'Select', width: 140, editRender: { name: 'Select', optionGroups: [], props: { clearable: true } } },
                { prop: 'region', label: 'Cascader', width: 200, editRender: { name: 'Cascader', props: { data: [] } } },
                { prop: 'date', label: 'DatePicker', width: 200, editRender: { name: 'DatePicker', props: { type: 'date', format: 'yyyy/MM/dd' } } },
                { prop: 'date1', label: 'TimePicker', width: 200, editRender: { name: 'TimePicker', props: { type: 'time' } } },
                { prop: 'flag', label: 'iSwitch', width: 100, editRender: { name: 'iSwitch', type: 'visible' } },
                { prop: 'rate', label: 'Rate', width: 200, editRender: { name: 'Rate', type: 'visible' } }
              ],
              tableToolbar: {}
            }
          },
          created () {
            this.loading = true
            setTimeout(() => {
              this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
              this.loading = false
            }, 500)
            this.findSexList()
            this.findRegionList()
            this.findSexGroupList()
          },
          methods: {
            findSexList () {
              return this.$ajax.get('/api/conf/sex/list').then(data => {
                this.tableColumn[5].editRender.options = data
                this.tableColumn[6].editRender.options = data
              })
            },
            findRegionList () {
              return this.$ajax.get('/api/conf/region/list').then(data => {
                this.tableColumn[8].editRender.props.data = data
              })
            },
            findSexGroupList () {
              let sexGroupList = [
                {
                  label: '分组1',
                  options: [
                    {
                      label: '男',
                      value: '1'
                    }
                  ]
                },
                {
                  label: '分组2',
                  options: [
                    {
                      label: '女',
                      value: '0'
                    }
                  ]
                }
              ]
              this.tableColumn[7].editRender.optionGroups = sexGroupList
            },
            insertEvent () {
              let xGrid = this.$refs.xGrid
              let record = {
                role: '',
                age: 18,
                region: [],
                flag: false,
                rate: 2
              }
              xGrid.insert(record).then(({ row }) => xGrid.setActiveRow(row))
            },
            saveEvent () {
              let { insertRecords, removeRecords, updateRecords } = this.$refs.xGrid.getRecordset()
              if (insertRecords.length || removeRecords.length || updateRecords.length) {
                this.$alert(\`insertRecords=\${insertRecords.length}; removeRecords=\${removeRecords.length}; updateRecords=\${updateRecords.length}\`)
              } else {
                this.$alert('数据未改动！')
              }
            },
            roleFilterMethod  (value, option) {
              return option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
      this.loading = false
    }, 500)
    this.findSexList()
    this.findRegionList()
    this.findSexGroupList()
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    findSexList () {
      return this.$ajax.get('/api/conf/sex/list').then(data => {
        this.tableColumn[5].editRender.options = data
        this.tableColumn[6].editRender.options = data
      })
    },
    findRegionList () {
      return this.$ajax.get('/api/conf/region/list').then(data => {
        this.tableColumn[8].editRender.props.data = data
      })
    },
    findSexGroupList () {
      let sexGroupList = [
        {
          label: '分组1',
          options: [
            {
              label: '男',
              value: '1'
            }
          ]
        },
        {
          label: '分组2',
          options: [
            {
              label: '女',
              value: '0'
            }
          ]
        }
      ]
      this.tableColumn[7].editRender.optionGroups = sexGroupList
    },
    insertEvent () {
      let xGrid = this.$refs.xGrid
      let record = {
        role: '',
        age: 18,
        region: [],
        flag: false,
        rate: 2
      }
      xGrid.insert(record).then(({ row }) => xGrid.setActiveRow(row))
    },
    saveEvent () {
      let { insertRecords, removeRecords, updateRecords } = this.$refs.xGrid.getRecordset()
      if (insertRecords.length || removeRecords.length || updateRecords.length) {
        this.$alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)
      } else {
        this.$alert('数据未改动！')
      }
    },
    roleFilterMethod  (value, option) {
      return option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1
    }
  }
}
</script>
