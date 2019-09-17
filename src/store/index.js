import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import user from './module/user'
import saveInLocal from './plugin/save'

Vue.use(Vuex)

// Vuex.Store 来创建实例
export default new Vuex.Store({
  // 严格模式，应该在mutations修改state的值
  strict: process.env.NODE_ENV === 'development',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [ saveInLocal ]
})
