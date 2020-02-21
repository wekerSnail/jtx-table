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
        name: 'value,v-model',
        descKey: 'app.api.tooltip.desc.value',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'content',
        descKey: 'app.api.tooltip.desc.content',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'trigger',
        descKey: 'app.api.tooltip.desc.trigger',
        version: '2.1.4',
        type: 'String',
        enum: 'manual, hover, click',
        defVal: 'hover',
        list: []
      },
      {
        name: 'theme',
        descKey: 'app.api.tooltip.desc.theme',
        version: '',
        type: 'String',
        enum: 'dark,light',
        defVal: 'dark',
        list: []
      },
      {
        name: 'zIndex',
        descKey: 'app.api.tooltip.desc.zIndex',
        version: '',
        type: 'Number',
        enum: '',
        defVal: '继承 setup.zIndex',
        list: []
      },
      {
        name: 'isArrow',
        descKey: 'app.api.tooltip.desc.isArrow',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'enterable',
        descKey: 'app.api.tooltip.desc.enterable',
        version: '2.6.7',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'leaveDelay',
        descKey: 'app.api.tooltip.desc.leaveDelay',
        version: '2.6.7',
        type: 'Number',
        enum: '',
        defVal: '300',
        list: []
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
        name: 'default',
        desc: '自定义显示内容模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
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
        name: 'mouseenter',
        desc: '重写默认的移开 tooltip 处理函数',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'Event.target, message',
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
      {
        name: 'show()',
        desc: '手动显示提示框',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'close()',
        desc: '手动关闭提示框',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'toVisible(target, message)',
        desc: '手动显示提示框（对于可复用高性能场景非常适合，只需要创建一个实例，后续通过该方法调用即可显示）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'target: Element, message: string',
        list: []
      }
    ]
  }
]

export default apis
