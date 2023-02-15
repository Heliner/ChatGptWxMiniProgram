const app = getApp();
async function GetOpenData() {
  return await wx.cloud.callFunction({
    name: 'openapi',
    data: {
      action: 'getOpenData'
    }
  })
}
module.exports = {
  GetOpenData
}