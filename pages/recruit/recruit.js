// pages/recruit/recruit.js
var app = getApp();
var API_ROOT = 'https://xdrq.rfydong.com/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src : '',
    isvideoShow : false,
    videoDesc:'',
    tags:'',
    tagNames : '',
    isSelectShow : true
  },
  selectLabel: function(){
    wx.navigateTo({
      url: '/pages/labelPage/labelPage',
    })
  },
  chooseVideo : function(){
    var that = this;
    wx.chooseVideo({
      sourceType: ['album'],
      success: function (res) {
        console.log(res.tempFilePath)
        console.log(res.tempFilePath[0])
        that.setData({
          src: res.tempFilePath,
          isvideoShow : true
        })
      }
    })
  },
  //获取textarea的值
  bindTextAreaBlur: function (e) {
    this.setData({
      videoDesc: e.detail.value
    })

  },
  uploadVideo: function(){
    var that = this;    
    console.log(that.data.videoDesc);
    let strTags = that.data.tags.toString();
    wx.uploadFile({
      url: 'https://xdrq.rfydong.com/media/uploadVideo.do', 
      filePath: that.data.src,
      name: 'file',
      formData: {
        videoDesc: that.data.videoDesc,
        tags: strTags
      },
      method: "POST",
      header: {
        'content-type': 'multipart/form-data', 
        'loginKey': app.globalData.loginKey
      },
      success: function (res) {
        console.log(res.data);
        if (res.data == 1){
          console.log(666)
          that.setData({
            isSelectShow : false
          })
          wx.setStorage({
            key: "isUpload",
            data: that.data.isSelectShow
          })
        }
        //do something
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    let that = this;
    wx.getStorage({
      key: 'tags',
      success: function (res) {
        console.log(res.data)
        that.setData({
          tags : res.data
        })
      }
    })
    wx.getStorage({
      key: 'tagNames',
      success: function (res) {
        console.log(res.data)
        that.setData({
          tagNames: res.data
        })
      }
    })
    wx.getStorage({
      key: 'isUpload',
      success: function (res) {
        console.log(res.data)
        that.setData({
          isSelectShow: res.data
        })
      }
    })
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