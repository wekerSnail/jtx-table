import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import 'font-awesome/scss/font-awesome.scss'
import './assets/style/index.scss'
import './plugins'
import './mock'
import XEUtils from 'xe-utils/methods/xe-utils'
import moment from 'moment'

// 生成模拟数据
var list = window.MOCK_DATA_LIST = []
var currTime = Date.now()
var nameList = XEUtils.shuffle(['a', 'T', 'b', 'v', 'G', 'k', 'r', 'H', 'x', 'z', 'c', 'd', 'e', 'p', 'U', 'f', 's', 'N'])
var nickList = XEUtils.shuffle(['徐', '李', '雷', '赵', '马', '孙', '钱', '蒋', '老', '蔡', '吕', '项', '徐', '杨', '胡', '杜', '嬴', '叼'])
function mockData () {
  for (var index = 0; index < 600; index++) {
    currTime += 7200000
    let date = new Date(currTime)
    let mDate = moment(currTime)
    list.push({
      id: index,
      name: nameList[index % 10] + nameList[index % 5] + index,
      nickname: nickList[index % 10] + nickList[index % 5] + index,
      role: index % 5 === 0 ? '前端' : index % 4 === 0 ? '后端' : index % 3 === 0 ? '测试' : '项目经理',
      role1: index === 1 ? '1' : '',
      key: 'home.label.key' + Math.max(0, index % 2 === 0 ? index - 1 : index),
      language: index % 2 === 0 ? 'zh_CN' : 'en_US',
      content: index % 2 === 0 ? '内容' + index : 'Content' + index,
      checked: false,
      flag: index % 2 === 0,
      date: date,
      date1: date,
      date2: '09:00:00',
      date3: index % 3 === 0 ? XEUtils.toDateString(currTime, 'yyyy-MM-dd') : '',
      date4: date,
      date5: '09:00',
      date6: null,
      date7: mDate,
      date8: mDate,
      date9: mDate,
      date10: mDate,
      date11: [],
      date12: index % 3 === 0 ? XEUtils.toDateString(currTime - 666, 'yyyy-MM-dd') : '',
      date13: index % 4 === 0 ? XEUtils.toDateString(currTime - 9999, 'yyyy-MM-dd') : '',
      num: (0.234 * index).toFixed(0),
      num1: (0.185 * index).toFixed(0),
      num2: (0.567 * index).toFixed(1),
      num3: (0.789 * index).toFixed(1),
      num4: (0.348 * index).toFixed(2),
      num5: (0.967 * index).toFixed(2),
      num6: `${(0.234 * index).toFixed(0)}`,
      color: index % 4 === 0 ? 'rgba(255, 0, 0, 0.8)' : index % 3 === 0 ? 'rgba(0, 255, 0, 0.8)' : null,
      slider: index % 5 === 0 ? 40 : index % 4 === 0 ? 20 : index % 3 === 0 ? 60 : 0,
      list: [],
      time: currTime + 360000,
      sex: index % 3 ? '0' : '1',
      sex1: index % 3 ? ['0'] : index % 4 ? ['0', '1'] : index % 5 ? [] : ['1'],
      sex2: index % 4 ? '0' : '1',
      sex3: index % 3 ? 0 : 1,
      sex4: index % 4 ? 0 : 1,
      sex5: index % 5 ? '0' : '1',
      amount: 10000000 * (index % 11 === 0 ? 9.46676 : index % 7 === 8.9886 ? 34.78869 : index % 3 === 2.894453 ? 3.33356 : 7.6566444) + index * 88,
      bankCard: '6200000' + (100000000 + index),
      age: index % 6 === 0 ? 16 : index % 6 === 0 ? 18 : index % 4 === 0 ? 26 : index % 3 === 0 ? 28 : 30,
      age1: `${index % 6 === 0 ? 18 : index % 4 === 0 ? 26 : index % 3 === 0 ? 28 : 30}`,
      region: index % 4 === 0 ? [19, 199, 1773] : index % 3 === 0 ? [9, 73, 719] : [1, 1, 5],
      rate: index % 4 === 0 ? 2 : index % 3 === 0 ? 3 : 0,
      rate1: `${index % 4 === 0 ? 2 : index % 3 === 0 ? 3 : 0}`,
      state: `${index % 4 === 0 ? 'value:Washington' : index % 3 === 0 ? 'value:Delaware' : ''}`,
      address: `地址 地址地址 地址地址 址地址 址地址  址地址 址地址址地址址地址 地址${index}`,
      address2: `地址 地址地址 地址${index}`,
      img: `static/other/img${index % 3 ? '1' : '2'}.gif`,
      img1: index % 4 === 0 ? `static/other/img${index % 3 ? '1' : '2'}.gif` : '',
      html1: index % 3 === 0 ? `<span style="color:red;">我是一段Html代码</span><br><span style="color:blue;">我是一段Html代码${index}</span><br><span style="color:green;">绿到你发慌！</span>` : '',
      html2: index % 3 === 0 ? `<span style="color:red;">我是一段Html代码</span><span style="color:blue;">我是一段Html代码${index}</span><span style="color:green;">绿到你发慌！</span>` : '',
      html3: `${index} -> <span style="color:red;">我是一段Html代码</span><span style="color:blue;">我是一段Html代码${index}</span><span style="color:green;">绿到你发慌！</span><br><span style="color:green;">绿到你发慌！</span><br><span style="color:green;">我是一段Html代码,我是一段Html代码，我是一段Html代码，绿到你发慌！</span><br><span style="color:red;">我是一段Html代码,我是一段Html代码，我是一段Html代码</span><br><span style="color:red;">我是一段Html代码,我是一段Html代码，我是一段Html代码</span><br><span style="color:green;">我是一段Html代码,我是一段Html代码，我是一段Html代码</span>`,
      text: `${index} -> ${nickList.concat(nameList).join('').repeat(index % 6 === 0 ? 12 : index % 4 === 16 ? 18 : index % 3 === 0 ? 22 : 26)}`,
      updateTime: currTime,
      createTime: currTime,
      attr1: '',
      attr2: [],
      attr3: index % 2 ? '1' : '',
      attr4: '',
      attr5: 0,
      loading: false,
      info: {
        name2: 'name2_' + index,
        more: {
          sex2: index % 3 ? '0' : '1',
          age2: index % 2 === 0 ? 26 : 30
        }
      }
    })
  }
}

window.MOCK_TREE_DATA_LIST = [
  {
    id: '10000',
    parentId: '',
    name: '文件夹 10000',
    size: '53k',
    type: '',
    date: '2019-10-22',
    children: [
      {
        id: '11000',
        parentId: '10000',
        name: '某 11000.avi',
        size: '11k',
        type: 'avi',
        date: '2019-05-21'
      },
      {
        id: '12000',
        parentId: '10000',
        name: '文件夹 12000',
        size: '22k',
        type: '',
        date: '2019-08-16',
        children: [
          {
            id: '12100',
            parentId: '12000',
            name: '图片 12100.png',
            size: '60k',
            type: '',
            date: '2019-08-20',
            children: [
              {
                id: '12110',
                parentId: '12100',
                name: '某个页面 12110.html',
                size: '100k',
                type: 'html',
                date: '2019-05-19'
              }
            ]
          },
          {
            id: '122000',
            parentId: '12000',
            name: 'xxx 122000.avi',
            size: '80k',
            type: 'avi',
            date: '2019-04-18'
          },
          {
            id: '123000',
            parentId: '12000',
            name: '文件夹 123000',
            size: '',
            type: '',
            date: '2019-06-17',
            children: [
              {
                id: '123100',
                name: 'xxx 123100.avi',
                size: '105k',
                type: 'avi',
                date: '2019-05-16'
              },
              {
                id: '123200',
                name: '文件 123200',
                size: '105k',
                type: 'avi',
                date: '2019-02-20'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '20000',
    parentId: '',
    name: '图片 20000.png',
    size: '66k',
    type: 'png',
    date: '2019-08-23'
  },
  {
    id: '30000',
    parentId: '',
    name: '文件夹 30000',
    size: '3k',
    type: '',
    date: '2019-05-14',
    children: [
      {
        id: '31000',
        name: '文件夹 31000',
        size: '9k',
        type: '',
        date: '2019-07-24',
        children: [
          {
            id: '31100',
            name: '从入门到放弃 31100.js',
            size: '40k',
            type: 'js',
            date: '2019-05-27'
          },
          {
            id: '31200',
            name: '文件 31200',
            size: '224k',
            type: 'java',
            date: '2019-10-25'
          }
        ]
      },
      {
        id: '32000',
        name: '文件夹 32000',
        size: '33k',
        type: '',
        date: '2019-05-25',
        children: [
          {
            id: '32100',
            name: '入门教程 32100.mp4',
            size: '35k',
            type: 'mp4',
            date: '2019-05-28'
          },
          {
            id: '32200',
            name: '文件夹 32000',
            size: '33k',
            type: '',
            date: '2019-02-29',
            children: [
              {
                id: '32210',
                name: 'vxe-table 从入门到住院 32210.pdf',
                size: '75k',
                type: 'pdf',
                date: '2019-12-13'
              },
              {
                id: '32220',
                name: '文件夹 32220',
                size: '33k',
                type: '',
                date: '2019-08-12',
                children: [
                  {
                    id: '32221',
                    name: 'vxe-table 从入门到放弃 32221.pdf',
                    size: '85k',
                    type: 'pdf',
                    date: '2019-12-30'
                  }
                ]
              }
            ]
          },
          {
            id: '32300',
            name: '文件夹 32300',
            size: '678k',
            type: '',
            date: '2019-01-10',
            children: [
              {
                id: '32310',
                name: '某视频 32310.mp4',
                size: '75k',
                type: 'mp4',
                date: '2019-11-09'
              },
              {
                id: '32320',
                name: '文件夹 32320',
                size: '88k',
                type: '',
                date: '2019-08-08',
                children: [
                  {
                    id: '32321',
                    name: '音乐 32321.mp3',
                    size: '5k',
                    type: 'mp3',
                    date: '2019-03-07'
                  },
                  {
                    id: '32322',
                    name: '在线观看 32322.avi',
                    size: '5k',
                    type: 'avi',
                    date: '2019-09-09'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '33000',
        name: '在线文档 33000.txt',
        size: '95k',
        type: 'txt',
        date: '2019-01-05'
      }
    ]
  },
  {
    id: '40000',
    parentId: '',
    name: '文件夹 40000',
    size: '26k',
    type: 'mp4',
    date: '2019-03-04',
    children: [
      {
        id: '41000',
        parentId: '40000',
        name: 'xxx 41000.mp4',
        size: '135k',
        type: 'mp4',
        date: '2019-02-03'
      }
    ]
  }
]

mockData()

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
