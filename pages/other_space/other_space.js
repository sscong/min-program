// pages/other_space/other_space.js
var wxHttps = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    giftList:[
      {
        imgUrl:'/images/gift_1.png'
      },
      {
        imgUrl: '/images/gift_1.png'
      },
      {
        imgUrl: '/images/gift_1.png'
      },
      {
        imgUrl: '/images/gift_1.png'
      },
      {
        imgUrl: '/images/gift_1.png'
      },
      {
        imgUrl: '/images/gift_1.png'
      }
    ],
    isOpus:true,
    isFollowed:true,
    userInfo: {},  // 用户信息
    uid: 1000009, //用户id
    degree:'', // 是自己还是对方
    fansCount:0,//粉丝数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      degree: options.degree,
      uid:options.uid
    })
    wxHttps.userInfo({uid:this.data.uid}).then(res => {
      console.log(res)
      if (res.data.errCode == 1) {
        this.setData({
          userInfo: res.data.data.userView,
          isFollowed: res.data.data.userView.isFollow==0?false:true,
          fansCount: res.data.data.userView.fansCount
        })
      }
    })

  },
  goUploadVoide:function(){
    wx.switchTab({
      url: "/pages/recruit/recruit"
    })
  },
  changeTab:function(value){
    console.log(value)
    if (value.currentTarget.dataset.tabs == 'opus'){
      this.setData({
        isOpus:true
      })
    }else{
      this.setData({
        isOpus: false
      })
    }
  },
  followUser:function(){ // 关注
    wxHttps.userFollow({ uid: this.data.uid }).then(res => {
      console.log(res)
      if (res.data.errCode == 1) {
        this.setData({
          isFollowed: true,
          fansCount: this.data.fansCount+1
        })
      }else{
        wx.showToast({
          title: '关注失败',
          icon: 'none',
          duration: 2000
        })
      }
      
    })
  },
  cancelFollow: function () { // 取消关注
    wxHttps.cancelFollow({ uid: this.data.uid }).then(res => {
      console.log(res)
      if (res.data.errCode == 1) {
        this.setData({
          isFollowed: false,
          fansCount: this.data.fansCount - 1
        })
      }else{
        wx.showToast({
          title: '取消关注失败',
          icon:'none',
          duration: 2000
        })
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})