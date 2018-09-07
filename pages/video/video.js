// pages/video/video.js
const app = getApp();
var wxHttps = require('../../utils/https')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoDetails : '',
    uid : '',
    isFollow : null,
    isFollowMe : null,
    isPromptShow: false,
    promptText1: '',
    promptText2 : '',
    promptBtn1: '',
    promptBtn2 : '',
    btnOption1: '',
    btnOption2 : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option.uid)
    var that = this;
    that.data.uid = option.uid;
    wxHttps.videoDetail(that.data.uid).then(function(res) {
      console.log(res.data);
      that.setData({
        videoDetails: res.data.data.user,
        isFollow: res.data.data.user.isFollow,
        isFollowMe: res.data.data.user.isFollowMe
      })
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
  
  },
  //关闭页面
  closePage : function(){
    wx.navigateBack();
  },
  //点击私信
  toChat : function() {
    console.log(this.data.isFollow);
    console.log(this.data.isFollowMe);
    if (this.data.isFollow == 1 && this.data.isFollowMe == 1){
      this.setData({
        isPromptShow: false
      })
      wx.navigateTo({
        url: '/pages/chat/chat?uid=' + this.data.uid
      })
    }else{
      if (this.data.followCard == 0){
        this.setData({
          isPromptShow : true,
          promptText1: '关注信数量不足，',
          promptText2: '加入会员获取更多哦',
          promptBtn1: '加入会员',
          promptBtn2: '分享获得',
          btnOption1: '1',
          btnOption2: '1'
        })
      }else{
        this.setData({
          isPromptShow: true,
          promptText1: '私信前要先关注她或者送出关注信哦~',
          promptText2: '',
          promptBtn1: '取消',
          promptBtn2: '送出关注信',
          btnOption1: '2',
          btnOption2: '2'
        })
      }
    }
  },
  //加入会员
  joinVip : function() {
    console.log('joinVip')
  },
  //取消
  centerFunc: function () {
    console.log('centerFunc')
    this.setData({
      isPromptShow :false
    })
  },
  //分享
  shareFunc: function () {
    console.log('shareFunc')
    
  },
  onShareAppMessage: function (res) {
    console.log(res.target)
    if (res.from === 'button') {
      // 来自页面内转发按钮 
    }
    console.log(res.target)
    let that = this;
    return {
      title: "aaaaaaaa",
      path: '/pages/video/video?uid=' + that.data.uid,
    }
  },
  //发送关注信
  sendLetter: function () {
    console.log('sendLetter')
  },
  followUser: function () { // 关注
    wxHttps.userFollow({ uid: this.data.uid }).then(res => {
      console.log(res)
      if (res.data.errCode == 1) {
        this.setData({
          isFollow: 1
        })
      } else {
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
          isFollow: 0
        })
      } else {
        wx.showToast({
          title: '取消关注失败',
          icon: 'none',
          duration: 2000
        })
      }

    })
  },
})