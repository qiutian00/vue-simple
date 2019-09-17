const getters = {
  appWithVersion: (state) => {
    return state.appName + 'v3.0'
    // return `${state.appName}v3.0`
  }
}
export default getters
