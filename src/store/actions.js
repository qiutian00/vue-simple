// 用户异步请求接口
import { getAppName } from '@/api/app';

const actions =  {
  updateAppName ({ commit }, otherParam) {
    console.log(otherParam)
    getAppName().then(res => {
      const { code, info: { appName }  } = res
      commit('SET_APP_NAME', { appName })
      // console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  // 可以不适应回调，可以用es8异步的形式
  async updateAppName2 ({ commit }, otherParam) {
    try {
      const { code, info: { appName }  } = await getAppName()
      commit('SET_APP_NAME', { appName })
    } catch (err) {
      console.log(err)
    }
  }
}

export default actions
