const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'id',
        descKey: 'app.api.toolbar.desc.id',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.toolbar.desc.size',
        version: '',
        type: 'String',
        enum: 'medium,small,mini',
        defVal: '',
        list: []
      },
      {
        name: 'loading',
        descKey: 'app.api.toolbar.desc.loading',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'import',
        descKey: 'app.api.toolbar.desc.import',
        version: '2.6.14',
        type: 'Boolean, Object',
        enum: '',
        defVal: '默认继承 setup.toolbar.import',
        list: [
          {
            name: 'mode',
            desc: '默认导入数据的方式',
            version: '',
            type: 'String',
            enum: 'covering, append',
            defVal: 'covering',
            list: []
          },
          {
            name: 'message',
            desc: '默认显示内置的消息提示',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'types',
            desc: '导入的文件类型列表',
            version: '',
            type: 'Array',
            enum: 'csv, html, xml, txt',
            defVal: '支持所有类型',
            list: []
          },
          {
            name: 'icon',
            desc: '自定义图标',
            version: '2.7.0',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'export',
        descKey: 'app.api.toolbar.desc.export',
        version: '2.6.14',
        type: 'Boolean, Object',
        enum: '',
        defVal: '默认继承 setup.toolbar.export',
        list: [
          {
            name: 'filename',
            desc: '默认的文件名',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'sheetName',
            desc: '默认的表名（只对支持的文档类型有效）',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'original',
            desc: '默认是否导出源数据（如果需要支持导入，则必须设置为 true）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'type',
            desc: '默认选中的类型',
            version: '',
            type: 'String',
            enum: '',
            defVal: '默认选中 types 第一个值',
            list: []
          },
          {
            name: 'types',
            desc: '导出的文件类型列表',
            version: '',
            type: 'Array',
            enum: 'csv, html, xml, txt',
            defVal: '',
            list: []
          },
          {
            name: 'message',
            desc: '默认显示内置的消息提示',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'icon',
            desc: '自定义图标',
            version: '2.7.0',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'refresh',
        descKey: 'app.api.toolbar.desc.refresh',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '默认继承 setup.toolbar.refresh',
        list: [
          {
            name: 'query',
            desc: '查询的方法',
            version: '',
            type: 'Function / Promise',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'icon',
            desc: '自定义图标',
            version: '2.7.0',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconLoading',
            desc: '自定义加载中图标',
            version: '2.7.0',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'resizable',
        descKey: 'app.api.toolbar.desc.resizable',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '默认继承 setup.toolbar.resizable',
        list: [
          {
            name: 'storage',
            desc: '是否启用 localStorage 本地保存，会将保存列宽拖动的状态保存到本地（需要设置 id）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'setting',
        disabled: true,
        descKey: 'app.api.toolbar.desc.setting',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'custom',
        descKey: 'app.api.toolbar.desc.custom',
        version: '2.7.0',
        type: 'Boolean, Object',
        enum: '',
        defVal: '默认继承 setup.toolbar.custom',
        list: [
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'manual,click,hover',
            defVal: 'click',
            list: []
          },
          {
            name: 'immediate',
            desc: '列勾选之后是否实时同步',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'storage',
            desc: '是否启用 localStorage 本地保存，会将列的隐藏状态保存到本地（需要设置 id）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'checkMethod',
            desc: '是否允许选中的方法，该方法 Function({column}) 的返回值用来决定这一列的 checkbox 是否可以选中',
            version: '2.6.19',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'isFooter',
            desc: '是否显示底部操作按钮',
            version: '2.7.0',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'icon',
            desc: '自定义图标',
            version: '2.7.0',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'buttons',
        desc: '按钮列表',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '默认继承 setup.toolbar.buttons',
        list: [
          {
            name: 'name',
            desc: '按钮名称（支持开启国际化）',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'code',
            desc: '按钮编码',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'visible ',
            desc: '是否可视',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'disabled ',
            desc: '是否禁用',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'icon ',
            desc: '按钮图标',
            version: '2.7.0',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'dropdowns',
            desc: '下拉按钮列表',
            version: '',
            type: 'Array',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'name',
                desc: '按钮名称（支持开启国际化）',
                version: '',
                type: 'String',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'code',
                desc: '按钮编码',
                version: '',
                type: 'String',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'visible ',
                desc: '是否可视',
                version: '',
                type: 'Boolean',
                enum: '',
                defVal: 'true',
                list: []
              },
              {
                name: 'disabled ',
                desc: '是否禁用',
                version: '',
                type: 'Boolean',
                enum: '',
                defVal: 'false',
                list: []
              },
              {
                name: 'icon ',
                desc: '按钮图标',
                version: '2.7.0',
                type: 'String',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'buttons',
        desc: '按钮列表',
        version: '',
        type: '',
        enum: '',
        defVal: '{}, h',
        list: []
      },
      {
        name: 'tools',
        desc: '右侧工具列表',
        version: '',
        type: '',
        enum: '',
        defVal: '{}, h',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'button-click',
        desc: '当工具栏的按钮被点击时会后触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{code}, event',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      // {
      //   name: 'hideColumn(column)',
      //   desc: '隐藏指定列',
      //   type: '',
      //   enum: '',
      //   defVal: 'column',
      //   list: []
      // },
      // {
      //   name: 'showColumn(column)',
      //   desc: '显示指定列',
      //   type: '',
      //   enum: '',
      //   defVal: 'column',
      //   list: []
      // },
      // {
      //   name: 'updateSetting()',
      //   desc: '手动更新列自定义的操作状态',
      //   version: '',
      //   type: '',
      //   enum: '',
      //   defVal: '',
      //   list: []
      // },
      // {
      //   name: 'updateResizable()',
      //   desc: '手动更新列宽拖动的操作状态',
      //   version: '',
      //   type: '',
      //   enum: '',
      //   defVal: '',
      //   list: []
      // }
    ]
  }
]

export default apis
