<template>
  <div>
    <p class="tip">具体兼容请查看 <a class="link" href="https://www.npmjs.com/package/vxe-table-plugin-charts" target="_blank">vxe-table-plugin-charts</a> 插件的 API</p>

    <vxe-table
      border
      resizable
      height="500"
      :data="tableData"
      :mouse-config="{ selected: true, checked: true }"
      :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"
      :context-menu="{body: {options: bodyMenus}}"
      :edit-config="{trigger: 'dblclick', mode: 'cell'}">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column prop="nickname" label="Nickname" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="rate" label="Rate" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="num" label="Num" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="num1" label="Num1" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="num2" label="Num2" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="num3" label="Num3" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="num4" label="Num4" :edit-render="{name: 'input'}"></vxe-table-column>
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
      bodyMenus: [
        [
          {
            code: 'INSERT_AT_ACTIVED_ROW',
            name: '插入'
          },
          {
            code: 'DELETE_ROW',
            name: 'app.body.label.delete'
          },
          {
            code: 'CLEAR_CELL',
            name: '清除内容'
          }
        ],
        [
          {
            name: '创建图表',
            prefixIcon: 'fa fa-area-chart',
            children: [
              {
                code: 'CHART_BAR_X_AXIS',
                name: '横向柱状图 - 自由选择',
                prefixIcon: 'fa fa-bar-chart'
              },
              {
                code: 'CHART_BAR_X_AXIS',
                name: '横向柱状图 - 固定类别',
                prefixIcon: 'fa fa-bar-chart',
                params: {
                  category: 'nickname'
                }
              },
              {
                code: 'CHART_BAR_Y_AXIS',
                name: '纵向柱状图 - 自由选择',
                prefixIcon: 'fa fa-bar-chart'
              },
              {
                code: 'CHART_BAR_Y_AXIS',
                name: '纵向柱状图 - 固定类别',
                prefixIcon: 'fa fa-bar-chart',
                params: {
                  category: 'nickname'
                }
              },
              {
                code: 'CHART_LINE',
                name: '折线图 - 自由选择',
                prefixIcon: 'fa fa-line-chart'
              },
              {
                code: 'CHART_LINE',
                name: '折线图 - 固定类别',
                prefixIcon: 'fa fa-line-chart',
                params: {
                  category: 'nickname'
                }
              },
              {
                code: 'CHART_PIE',
                name: '饼图 - 自由选择',
                prefixIcon: 'fa fa-pie-chart'
              },
              {
                code: 'CHART_PIE',
                name: '饼图 - 固定类别',
                prefixIcon: 'fa fa-pie-chart',
                params: {
                  category: 'nickname'
                }
              }
            ]
          }
        ]
      ],
      demoCodes: [
        `
        <vxe-table
          border
          resizable
          height="500"
          :data="tableData"
          :mouse-config="{ selected: true, checked: true }"
          :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"
          :context-menu="{body: {options: bodyMenus}}"
          :edit-config="{trigger: 'dblclick', mode: 'cell'}">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column prop="nickname" label="Nickname" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="age" label="Age" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="rate" label="Rate" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="num" label="Num" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="num1" label="Num1" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="num2" label="Num2" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="num3" label="Num3" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column prop="num4" label="Num4" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [],
              bodyMenus: [
                [
                  {
                    code: 'INSERT_AT_ACTIVED_ROW',
                    name: '插入'
                  },
                  {
                    code: 'DELETE_ROW',
                    name: 'app.body.label.delete'
                  },
                  {
                    code: 'CLEAR_CELL',
                    name: '清除内容'
                  }
                ],
                [
                  {
                    name: '创建图表',
                    prefixIcon: 'fa fa-area-chart',
                    children: [
                      {
                        code: 'CHART_BAR_X_AXIS',
                        name: '横向柱状图 - 自由选择',
                        prefixIcon: 'fa fa-bar-chart'
                      },
                      {
                        code: 'CHART_BAR_X_AXIS',
                        name: '横向柱状图 - 固定类别',
                        prefixIcon: 'fa fa-bar-chart',
                        params: {
                          category: 'nickname'
                        }
                      },
                      {
                        code: 'CHART_BAR_Y_AXIS',
                        name: '纵向柱状图 - 自由选择',
                        prefixIcon: 'fa fa-bar-chart'
                      },
                      {
                        code: 'CHART_BAR_Y_AXIS',
                        name: '纵向柱状图 - 固定类别',
                        prefixIcon: 'fa fa-bar-chart',
                        params: {
                          category: 'nickname'
                        }
                      },
                      {
                        code: 'CHART_LINE',
                        name: '折线图 - 自由选择',
                        prefixIcon: 'fa fa-line-chart'
                      },
                      {
                        code: 'CHART_LINE',
                        name: '折线图 - 固定类别',
                        prefixIcon: 'fa fa-line-chart',
                        params: {
                          category: 'nickname'
                        }
                      },
                      {
                        code: 'CHART_PIE',
                        name: '饼图 - 自由选择',
                        prefixIcon: 'fa fa-pie-chart'
                      },
                      {
                        code: 'CHART_PIE',
                        name: '饼图 - 固定类别',
                        prefixIcon: 'fa fa-pie-chart',
                        params: {
                          category: 'nickname'
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
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
  }
}
</script>
