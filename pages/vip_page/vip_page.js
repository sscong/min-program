// pages/vip_page/vip_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBack: true,
    proList:[
      {
        month:1,
        price:'29.9'
      },
      {
        month: 3,
        price: '68.9'
      },
      {
        month: 6,
        price: '99'
      }
    ],
    priviligeList:[
      {
        icon:'/images/vip_1.png',
        txt:'每天签到五倍私信数量'
      },
      {
        icon: '/images/vip_2.png',
        txt: '显示会员黄金头像'
      },
      {
        icon: '/images/vip_3.png',
        txt: '无需关注信可直接与女用户聊天'
      },
      {
        icon: '/images/vip_4.png',
        txt: '高级礼物各一枚（当天清零）'
      },
      {
        icon: '/images/vip_5.png',
        txt: '女用户对话框中聊天置顶'
      },
      {
        icon: '/images/vip_6.png',
        txt: '上传视频审核通过，展示在红人馆中，更容易被女用户看到'
      },
      {
        icon: '/images/vip_7.png',
        txt: '无限上传视频数量'
      },
    ],
    selectedIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changePro:function(res){
    console.log(res)
    this.setData({
      selectedIndex: res.currentTarget.dataset.index
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