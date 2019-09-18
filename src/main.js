import Vue from 'vue'
import App from './App.vue'
import CountTo from '_c/count-to'
import router from './router'
import store from './store'
import Bus from './lib/bus'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// new Vue({
//     router,
//     store,
//     render: h => {
//       return h('div', {
//         attrs: {
//           id: 'box'
//         },
//         style: {
//           color: 'pink'
//         }
//       }, 'qiutian00')
//     }
//   }).$mount('#app')

// new Vue({
//     router,
//     store,
//     render: h => {
//       return h(CountTo, {
//         // 'class': 'count class',
//         // 'class': ['count-to', true ? 'class1' : 'class2'],
//         'class': {'count-to': true},
//         attrs: {},
//         style: {},
//         props: {
//           endVal: 100
//         },
//         // domProps: {
//         //   innerHTML: '123'
//         // },
//         on: {
//           'on-animation-end': (val) => {
//             console.log('on animation end');
//           }
//         },
//         nativeOn: {
//           'click': () => {
//             console.log('click is on');
//           }
//         },
//         directive: [],
//         slot: '',
//         scopedSlots: {},
//         key: '',
//         ref: ''
//       })
//     }
//   }).$mount('#app')

// new Vue({
//   router,
//   store,
//   // 子节点： 必须是字符串或者数组
//   render: h => {
//     return h('div', [
//       h('div', 111),
//       h('span', 222)
//     ]);
//   }
// }).$mount('#app')


// const handleClick = event => {
//   console.log(event)
//   event.stopPropagation()
// }
// let list = [{name: 'admin'}, {name: 'qiutian'}]
// const getLiEleArr = (h) => {
//   return list.map((item, index) => h('li', {
//     on: {
//       'click': handleClick
//     },
//     key: `list_item${index}`
//   }, item.name))
// }
// new Vue({
//   router,
//   store,
//   render: h => {
//     return h('div', [
//       h('ul', {
//         on: {
//           'click': handleClick
//         }
//       }),
//       getLiEleArr(h)
//     ])
//   }
// }).$mount('#app')


// 函数式组件的使用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


