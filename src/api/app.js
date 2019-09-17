export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) {
        resolve({
          code: 200,
          info: {
            appName: 'actions-newAppName'
          }
        })
      } else {
        reject(err)
      }
    })
  })
}
