const state = {
  userName: 'liwen'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME (state, newVal) {
    state.userName = newVal
  }
}
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName
    dispatch('updateUserAge', 'other actual param')
  },
  updateUserAge ({ commit, state, rootState, dispatch }, otherparam) {

  }
}

// user 模块中可以再放模块
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
