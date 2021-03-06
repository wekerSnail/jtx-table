<template>
  <div>
    <p class="tip">数据代理<a class="link" href="https://github.com/xuliangzhan/vxe-table-demo/tree/master/vxe-table-by-vue-grid-proxy">（配置式代理项目示例）</a>、固定列、服务端排序、服务端筛选、服务端分页，对于分页场景下，如果想要保留选中状态，可以通过设置 <table-api-link prop="checkbox-config"/> 的 <table-api-link prop="reserve"/> 属性</p>

    <vxe-grid
      resizable
      border="none"
      ref="xGrid"
      height="548"
      row-id="id"
      :sort-config="{trigger: 'cell'}"
      :filter-config="{remote: true}"
      :pager-config="tablePage"
      :toolbar="tableToolbar"
      :columns="tableColumn"
      :proxy-config="tableProxy"
      :checkbox-config="{labelField: 'id', reserve: true, highlight: true, range: true}">
      <template v-slot:empty>
        <span style="color: red;">
          <img src="static/other/img1.gif">
          <p>没有更多数据了！</p>
        </span>
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
      tablePage: {
        pageSize: 15,
        pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]
      },
      tableProxy: {
        index: true, // 启用动态序号代理
        sort: true, // 启用排序代理
        filter: true, // 启用筛选代理
        ajax: {
          // 任何支持 Promise API 的库都可以对接（fetch、jquery、axios、xe-ajax）
          query: ({ page, sort, filters }) => {
            // 处理排序条件
            let formData = {
              sort: sort.prop,
              order: sort.order
            }
            // 处理筛选条件
            filters.forEach(({ column, prop, values }) => {
              formData[prop] = values.join(',')
            })
            return this.$ajax.get(`/api/user/page/list/${page.pageSize}/${page.currentPage}`, formData)
          }
        }
      },
      tableToolbar: {
        buttons: [
          { code: 'reload', name: 'app.body.button.refresh', icon: 'fa fa-refresh', disabled: false },
          {
            name: '导入/导出1',
            dropdowns: [
              { code: 'import', name: '直接导入', icon: 'fa fa-cloud-upload', disabled: false },
              { code: 'export', name: '直接导出 CSV', icon: 'fa fa-download', params: { type: 'csv' }, disabled: false },
              { code: 'export', name: '直接导出 XML', icon: 'fa fa-download', params: { type: 'xml' }, disabled: false },
              { code: 'export', name: '直接导出 HTML', icon: 'fa fa-download', params: { type: 'html' }, disabled: false },
              { code: 'export', name: '直接导出 TXT', icon: 'fa fa-download', params: { type: 'txt' }, disabled: false }
            ]
          },
          {
            name: '导入/导出2',
            icon: 'fa fa-cloud-download',
            dropdowns: [
              { code: 'open_import', name: '高级导入', icon: 'fa fa-cloud-upload', disabled: false },
              { code: 'open_export', name: '高级导出', icon: 'fa fa-download', disabled: false }
            ]
          }
        ]
      },
      tableColumn: [
        { type: 'seq', width: 60, fixed: 'left' },
        { type: 'checkbox', label: 'ID', width: 120, fixed: 'left' },
        { prop: 'name', label: 'Name', width: 300, remoteSort: true },
        { prop: 'nickname', label: 'Nickname', remoteSort: true, width: 300 },
        { prop: 'age', label: 'Age', remoteSort: true, width: 100 },
        {
          prop: 'role',
          label: 'Role',
          remoteSort: true,
          width: 200,
          filters: [
            { label: '前端开发', value: '前端' },
            { label: '后端开发', value: '后端' },
            { label: '测试', value: '测试' },
            { label: '程序员鼓励师', value: '程序员鼓励师' }
          ],
          filterMultiple: false
        },
        { prop: 'describe', label: 'Describe', width: 300, showOverflow: true }
      ],
      demoCodes: [
        `
        <vxe-grid
          resizable
          border="none"
          ref="xGrid"
          height="548"
          row-id="id"
          :sort-config="{trigger: 'cell'}"
          :filter-config="{remote: true}"
          :pager-config="tablePage"
          :toolbar="tableToolbar"
          :columns="tableColumn"
          :proxy-config="tableProxy"
          :checkbox-config="{labelField: 'id', reserve: true, highlight: true, range: true}">
          <template v-slot:empty>
            <span style="color: red;">
              <img src="static/other/img1.gif">
              <p>没有更多数据了！</p>
            </span>
          </template>
        </vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              tablePage: {
                pageSize: 15,
                pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]
              },
              tableProxy: {
                index: true, // 启用动态序号代理
                sort: true, // 启用排序代理
                filter: true, // 启用筛选代理
                ajax: {
                  // 任何支持 Promise API 的库都可以对接（fetch、jquery、axios、xe-ajax）
                  query: ({ page, sort, filters }) => {
                    // 处理排序条件
                    let formData = {
                      sort: sort.property,
                      order: sort.order
                    }
                    // 处理筛选条件
                    filters.forEach(({ column, property, values }) => {
                      formData[property] = values.join(',')
                    })
                    return this.$ajax.get(\`/api/user/page/list/\${page.pageSize}/\${page.currentPage}\`, formData)
                  }
                }
              },
              tableToolbar: {
                buttons: [
                  { code: 'reload', name: 'app.body.button.refresh', icon: 'fa fa-refresh', disabled: false },
                  {
                    name: '导入/导出1',
                    dropdowns: [
                      { code: 'import', name: '直接导入', icon: 'fa fa-cloud-upload', disabled: false },
                      { code: 'export', name: '直接导出 CSV', icon: 'fa fa-download', params: { type: 'csv' }, disabled: false },
                      { code: 'export', name: '直接导出 XML', icon: 'fa fa-download', params: { type: 'xml' }, disabled: false },
                      { code: 'export', name: '直接导出 HTML', icon: 'fa fa-download', params: { type: 'html' }, disabled: false },
                      { code: 'export', name: '直接导出 TXT', icon: 'fa fa-download', params: { type: 'txt' }, disabled: false }
                    ]
                  },
                  {
                    name: '导入/导出2',
                    icon: 'fa fa-cloud-download',
                    dropdowns: [
                      { code: 'open_import', name: '高级导入', icon: 'fa fa-cloud-upload', disabled: false },
                      { code: 'open_export', name: '高级导出', icon: 'fa fa-download', disabled: false }
                    ]
                  }
                ]
              },
              tableColumn: [
                { type: 'seq', width: 60, fixed: 'left' },
                { type: 'checkbox', label: 'ID', width: 120, fixed: 'left' },
                { prop: 'name', label: 'Name', width: 300, remoteSort: true },
                { prop: 'nickname', label: 'Nickname', remoteSort: true, width: 300 },
                { prop: 'age', label: 'Age', remoteSort: true, width: 100 },
                {
                  prop: 'role',
                  label: 'Role',
                  remoteSort: true,
                  width: 200,
                  filters: [
                    { label: '前端开发', value: '前端' },
                    { label: '后端开发', value: '后端' },
                    { label: '测试', value: '测试' },
                    { label: '程序员鼓励师', value: '程序员鼓励师' }
                  ],
                  filterMultiple: false
                },
                { prop: 'describe', label: 'Describe', width: 300, showOverflow: true }
              ]
            }
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
