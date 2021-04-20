// Promise 封装 请求
export const request = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      },
    })
  })
}
