//app.js
var wxHttps = require('utils/https')
App({
  isReady : false,
  appTimer : null,
  readyCallback : null,
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
  },
  onShow(){
    var that = this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        that.globalData.code = res.code;

        wxHttps.getloginKey(that.globalData.code, that.globalData.fid).then(function (res) {
          
          console.log(JSON.stringify(res.data) + '到后台换取loginKey')
          that.globalData.loginKey = res.data.data.loginKey;
          if (res.data.data.isNewUser == 1) {
            wx.redirectTo({
              url: '/pages/authorize/authorize',
            })
          }
          
          
          
        }).then(function(){
          wxHttps.init().then(function (res) {
            
            that.globalData.signDays = res.data.data.signDays;
            that.globalData.signStatus = res.data.data.signStatus;
           
            if (that.readyCallback) {
              that.readyCallback();
              that.hasMsg();
              that.appTimer = setInterval(function () {
                that.hasMsg();
              }, 13000)
            }
            that.isReady = true;
          })
        })
      }
    })

    
  },
  onhide(){
    clearInterval(this.appTimer);
  },
  onUnload(){
    clearInterval(this.appTimer);
  },
  hasMsg : function(){
    wxHttps.hasUnreadMsg().then(function (res) {
      if (res.data.data.hasUnreadMsg != 0) {
        wx.showTabBarRedDot({
          index: 2
        })
      } else {
        wx.hideTabBarRedDot({
          index: 2
        })
      }
    })
  },
  globalData: {
    code : '',
    userInfo: null,
    loginKey : '',
    fid: '10001',
    hasUnreadMsg : false,
    loginKey : '',
    signDays:0, // 签到天数
    signStatus:0, // 当天是否已经签到
  }
})