// pages/recharge/recharge.js
var wxHttps = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rechargeList:[
      {
        sum:1,
        supple:''
      },
      {
        sum: 3,
        supple: ''
      },
      {
        sum: 79,
        supple: ''
      },
      {
        sum: 79,
        supple: ''
      },
      {
        sum: 98,
        supple: '送￥9.9'
      },
      {
        sum: 103,
        supple: '送￥9.8'
      }
    ],
    selectedIndex:0,
    showBack:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changeSum:function(res){
    this.setData({
      selectedIndex: res.currentTarget.dataset.index
    })
  },
  wxPay:function(){
    wxHttps.wxPay('91760364AF133C09').then(function(res){
      console.log(res)
    }).catch(function(res){
      console.log(res)
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