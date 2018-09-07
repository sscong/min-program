// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2018-01-01',
    avatarUrl:'/images/man_default.png',
    // avatarWidth:190,
    // avatarHeight:190,
    // avatarTop:0,
    // avatarLeft:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindDateChange:function(res){
    this.setData({
      date:res.detail.value
    })
  },
  uploadImg:function(){
    var that = this;
    wx.chooseImage({
      count:1,
      success: function(res) {
        console.log(res)
        that.setData({
          avatarUrl: res.tempFilePaths[0]
        })
      },
    })
  },
  // imageLoad:function(res){
  //   console.log(res)
  //   var $width = res.detail.width,
  //       $height = res.detail.height,
  //       ratio = $width / $height,
  //       viewSize = 190;
  //       if($height>=$width){
  //         this.setData({
  //           avatarWidth : 190,
  //           avatarHeight : 190 / ratio,
  //           // avatarTop: -(190/ratio-190)/2
  //         })
          
  //       }else{
  //         this.setData({
  //           avatarHeight : 190,
  //           avatarWidth : 190 * ratio,
  //           // avatarLeft: (190 / ratio - 190) / 2
  //         })
          
  //       }
    
  // },

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