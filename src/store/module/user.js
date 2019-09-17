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
  //
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
