// release/components/chatbox
const app = getApp();
// 时间工具类
const timeutil = require('./timeutil');
const cx = Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    roomId: {
      type: Number,
      observer: function (newVal, oldVal) {
        if (newVal != undefined && newVal != null) {
        }
      }
    }
  },
  /**
   * 组件注册页面生命周期
   */
  pageLifetimes: {
    show: function () {

    },
  },
  lifetimes: {
    attached() {
      var that = this;
      that.initMessageHistory();
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            systemInfo: res
          })
        }
      })
    },
    detached() {
      try {
      } catch (error) {
        console.log('--消息监听器关闭失败--')
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    
    openid: app.globalData.openid || wx.getStorageSync('openid'),
    scrollId: '',
    systemInfo: {},
    //消息记录列表
    chatList: [],
    //标记触顶事件
    isTop: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 预览图片
    viewImage(e) {
      // console.log(e)
      let url = e.currentTarget.dataset.url;
      wx.previewImage({
        urls: [url],
      })
    },
    //触顶事件
    tapTop() {
      console.log('--触顶--')
      var that = this;
      that.setData({
        isTop: true
      }, () => {
      })

    },
    //初始化
    initMessageHistory() {
      //初始化消息历史
      var that = this;
app.globalData.cht = that

      that.setData({
        chatList: [
          {
            "type":"man",
            "avatarUrl":"image/user.jpeg",   
            "content":"你好，ChatGpt",
          },
          {
            "type":"robot",
            "avatarUrl":"image/openai-avatar.png",
            "content":"你好！有什么问题我可以帮忙解答吗？欢迎随时向我提问。",
          }
        ]
      })
    },
  }
})
