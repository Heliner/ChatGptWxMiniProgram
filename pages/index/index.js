// 获取全局APP
const app = getApp();

// 获取计时器函数
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //输入框距离
    InputBottom: 0,
    roomId: 1,
    content: '',
  },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  },
  async submit() {
    var that = this;
    const cht = app.globalData.cht
    const content = that.data.content
    console.log(cht.data.chatList.push({
      "type": "man",
      "avatarUrl":"image/user.jpeg", 
      "content": that.data.content,
    }))

    cht.setData({
      chatList: cht.data.chatList
    })
    that.setData({
      content: ''
    })
    wx.hideLoading();

    console.log("q:", content)
    wx.cloud.callContainer({
      "config": {
        "env": "prod-1ghb5cbr5936f4ec"
      },
      "path": "/chat_itf/",
      "header": {
        "X-WX-SERVICE": "django-q86u"
      },
      "method": "POST",
      "data": {
        prompt: content
      },
      success(res) {
        const robContent = res.data
        console.log("a",robContent)
        console.log(cht.data.chatList.push({
          "type": "rob",
          "content": robContent,
          "avatarUrl":"image/openai-avatar.png",
        }))
        cht.setData({
          chatList: cht.data.chatList,
          scrollId : `msg-${cht.data.chatList.length - 1}`,
        })
      },
      // for offline test
      // fail( err){
        // console.log("fail")
        // console.log(cht.data.chatList.push({
          // "type": "rob",
          // "content":"rand x",
          // "avatarUrl":"image/openai-avatar.png",
        // }))
        // cht.setData({
        // chatList: cht.data.chatList
        // scrollId : `msg-${cht.data.chatList.length - 1}`,
        // })
        // }
    })


  },

})