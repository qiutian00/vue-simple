// 简单本地保存： 持久化存储
export default store => {
  console.log('store init')
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  store.subscribe((mutation, state) => {
    console.log('commit mutation')
    localStorage.state = JSON.stringify(state)
  })
}
