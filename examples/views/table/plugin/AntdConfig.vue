<template>
  <div>
    <p class="tip">具体兼容请查看 <a class="link" href="https://www.npmjs.com/package/vxe-table-plugin-antd" target="_blank">vxe-table-plugin-antd</a> 插件的 API</p>

    <vxe-grid
      border
      show-overflow
      ref="xGrid"
      class="vxe-table-antd"
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
    return {
      loading: false,
      tableData: [],
      tableColumn: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', label: 'Number', width: 80 },
        { prop: 'name', label: 'AInput', minWidth: 140, editRender: { name: 'AInput' } },
        { prop: 'role', label: 'AAutoComplete', width: 160, editRender: { name: 'AAutoComplete', props: { dataSource: [] }, events: { search: this.roleSearchEvent } } },
        { prop: 'age', label: 'AInputNumber', width: 160, editRender: { name: 'AInputNumber', props: { max: 35, min: 18 } } },
        { prop: 'sex', label: 'ASelect', width: 140, editRender: { name: 'ASelect', options: [] } },
        { prop: 'sex1', label: 'ASelect', width: 160, editRender: { name: 'ASelect', options: [], props: { mode: 'multiple' } } },
        { prop: 'sex2', label: 'ASelect', width: 140, editRender: { name: 'ASelect', optionGroups: [] } },
        { prop: 'region', label: 'ACascader', width: 200, editRender: { name: 'ACascader', props: { options: [] } } },
        { prop: 'date7', label: 'ADatePicker', width: 140, editRender: { name: 'ADatePicker', props: { type: 'date', format: 'YYYY/MM/DD' } } },
        { prop: 'date8', label: 'AMonthPicker', width: 140, editRender: { name: 'AMonthPicker' } },
        { prop: 'date9', label: 'AWeekPicker', width: 140, editRender: { name: 'AWeekPicker' } },
        { prop: 'date11', label: 'ARangePicker', width: 140, editRender: { name: 'ARangePicker' } },
        { prop: 'date10', label: 'ATimePicker', width: 140, editRender: { name: 'ATimePicker' } },
        { prop: 'attr1', label: 'ATreeSelect', width: 140, editRender: { name: 'ATreeSelect', props: { treeData: [] } } },
        { prop: 'attr2', label: 'ATreeSelect', width: 140, editRender: { name: 'ATreeSelect', props: { treeData: [], treeCheckable: true } } },
        { prop: 'flag', label: 'ASwitch', width: 100, editRender: { name: 'ASwitch', type: 'visible' } },
        { prop: 'rate', label: 'ARate', width: 200, editRender: { name: 'ARate', type: 'visible' } }
      ],
      tableToolbar: {},
      restaurants: ['前端', '后端', '开发', '测试'],
      demoCodes: [
        `
        <vxe-grid
          border
          show-overflow
          ref="xGrid"
          class="vxe-table-antd"
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
            return {
              loading: false,
              tableData: [],
              tableColumn: [
                { type: 'checkbox', width: 60 },
                { type: 'seq', label: 'Number', width: 80 },
                { prop: 'name', label: 'AInput', minWidth: 140, editRender: { name: 'AInput' } },
                { prop: 'role', label: 'AAutoComplete', width: 160, editRender: { name: 'AAutoComplete', props: { dataSource: [] }, events: { search: this.roleSearchEvent } } },
                { prop: 'age', label: 'AInputNumber', width: 160, editRender: { name: 'AInputNumber', props: { max: 35, min: 18 } } },
                { prop: 'sex', label: 'ASelect', width: 140, editRender: { name: 'ASelect', options: [] } },
                { prop: 'sex1', label: 'ASelect', width: 160, editRender: { name: 'ASelect', options: [], props: { mode: 'multiple' } } },
                { prop: 'sex2', label: 'ASelect', width: 140, editRender: { name: 'ASelect', optionGroups: [] } },
                { prop: 'region', label: 'ACascader', width: 200, editRender: { name: 'ACascader', props: { options: [] } } },
                { prop: 'date7', label: 'ADatePicker', width: 140, editRender: { name: 'ADatePicker', props: { type: 'date', format: 'YYYY/MM/DD' } } },
                { prop: 'date8', label: 'AMonthPicker', width: 140, editRender: { name: 'AMonthPicker' } },
                { prop: 'date9', label: 'AWeekPicker', width: 140, editRender: { name: 'AWeekPicker' } },
                { prop: 'date11', label: 'ARangePicker', width: 140, editRender: { name: 'ARangePicker' } },
                { prop: 'date10', label: 'ATimePicker', width: 140, editRender: { name: 'ATimePicker' } },
                { prop: 'attr1', label: 'ATreeSelect', width: 140, editRender: { name: 'ATreeSelect', props: { treeData: [] } } },
                { prop: 'attr2', label: 'ATreeSelect', width: 140, editRender: { name: 'ATreeSelect', props: { treeData: [], treeCheckable: true } } },
                { prop: 'flag', label: 'ASwitch', width: 100, editRender: { name: 'ASwitch', type: 'visible' } },
                { prop: 'rate', label: 'ARate', width: 200, editRender: { name: 'ARate', type: 'visible' } }
              ],
              tableToolbar: {},
              restaurants: ['前端', '后端', '开发', '测试']
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
            this.findTreeSelectList()
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
                this.tableColumn[8].editRender.props.options = data
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
            findTreeSelectList () {
              let treeData = [{
                label: 'Node1',
                value: '0-0',
                key: '0-0',
                children: [{
                  label: 'Child Node1',
                  value: '0-0-0',
                  key: '0-0-0'
                }]
              }, {
                label: 'Node2',
                value: '0-1',
                key: '0-1',
                children: [{
                  label: 'Child Node3',
                  value: '0-1-0',
                  key: '0-1-0',
                  disabled: true
                }, {
                  label: 'Child Node4',
                  value: '0-1-1',
                  key: '0-1-1'
                }, {
                  label: 'Child Node5',
                  value: '0-1-2',
                  key: '0-1-2'
                }]
              }]
              this.tableColumn[14].editRender.props.treeData = treeData
              this.tableColumn[15].editRender.props.treeData = treeData
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
            roleSearchEvent ({ row }, value) {
              let dataSource = this.restaurants.filter(option => option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)
              this.tableColumn[3].editRender.props.dataSource = dataSource
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
    this.findTreeSelectList()
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
        this.tableColumn[8].editRender.props.options = data
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
    findTreeSelectList () {
      let treeData = [{
        label: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [{
          label: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0'
        }]
      }, {
        label: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [{
          label: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          disabled: true
        }, {
          label: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1'
        }, {
          label: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2'
        }]
      }]
      this.tableColumn[14].editRender.props.treeData = treeData
      this.tableColumn[15].editRender.props.treeData = treeData
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
    roleSearchEvent ({ row }, value) {
      let dataSource = this.restaurants.filter(option => option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)
      this.tableColumn[3].editRender.props.dataSource = dataSource
    }
  }
}
</script>
