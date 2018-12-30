//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
		list: [
			{ id: 1, img_url: 'http://127.0.0.1:3000/image/AFEIlbYFEAQYACDOmqzWBSiwnL6fAzDKAjjcAUBm.png', title: '马尔代夫自由行攻略' },
			{ id: 2, img_url: 'http://127.0.0.1:3000/image/AFEIlbYFEAQYACDSmqzWBSig4OjwBjDKAjjcAUBm.png', title: '韩国文化之行攻略' },
			{ id: 3, img_url: 'http://127.0.0.1:3000/image/AFEIlbYFEAQYACDQmqzWBSju9d7RBTDKAjjcAUBm.png', title: '时间浪漫之都法国自由行攻略' },
			{ id: 4, img_url: 'http://127.0.0.1:3000/image/AFEIlbYFEAQYACDNmqzWBSjehN_uAzDKAjjcAUBm.png', title: '领略武汉樱花之行攻略' },
		],
  }
})