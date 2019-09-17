
import vue from 'vue'

// 主要用于修改state中的值
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params.appName
  },
  SET_APP_VERSION (state, newVal) {
    vue.set(state, 'appVersion', newVal)
    // vue 响应式视图，不会更新视图
    // state.appVersion = newVal
  },
  SET_STATE_VALUE( state, newVal) {
    state.stateValue = newVal
  }
}
export default mutations
