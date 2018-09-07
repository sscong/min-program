// pages/chat/chat.js
var wxHttps = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBack:true, // 有返回按钮
    scrollHeight:900,
    showSharePrompt:false, //是否展示分享模态框
    giftList:[],
    selectedGiftId:0, //被选中的礼物的id
    uid:null,
    allContentList:[], //聊天对话列表
    otherUserView:{},//对方的用户信息
    userView:{},//自己的用户信息
    sendContent:'', //输入框内容
    timer:null, // 定时器
    toView:'',//scroll-view的最后一个view的id
    contentLength:0,//对话列表的长度
    isShowGift:true,//展示礼物模块
    flowerCount:0,//当天拥有鲜花数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log('这是onload')
    this.setData({
      uid:options.uid
    })
    this.changeShow(); //设置scroll的高度
    
    wxHttps.getGiftList().then(res=>{ // 获取礼物接口
      var list = res.data.data.giftViewList;
      var newList = [];
      for (let i = 0; i < Math.ceil(list.length / 6); i++){
        newList.push(list.slice(0+6*i,6+6*i))
      }
      that.setData({
        giftList: newList,
        flowerCount: res.data.data.flowerCount
      })
    })
  },
  getMsgList:function(){ // 获取对话数据
    var that = this;
    wxHttps.getMsgList({ uid: that.data.uid, lastMsgId: 0 }).then(res => {
      console.log(res)
      if (res.data.errCode == 1){
        that.setData({
          allContentList: res.data.data.msgViewList,
          otherUserView: res.data.data.otherUserView,
          userView: res.data.data.userView
        })
        if (that.data.contentLength != res.data.data.msgViewList.length){
          that.setData({
            contentLength: res.data.data.msgViewList.length
          })
          that.pageScrollToBottom();
        }
        
      }
      
    })
  },
  changeShow:function(){
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        if (that.data.isShowGift) {
          that.setData({ // 63是title的高度，322是输入框的高度
            scrollHeight: res.windowHeight - 322 - 63
          })
        } else {
          that.setData({ // 63是title的高度，59是输入框的高度
            scrollHeight: res.windowHeight - 59 - 63
          })
        }

      }
    })
  },
  goOtherSpace:function(res){ //点击头像跳转到对方空间页面
  console.log(res)
    var uid = null;
    if (res.currentTarget.dataset.tip=='me'){
      uid = this.data.userView.id
    }else{
      uid = this.data.otherUserView.id
    }
    wx.navigateTo({
      url: '/pages/other_space/other_space?degree=' + res.currentTarget.dataset.tip+'&uid='+uid,
    })
  },
  changeShowGift:function(){ //展示输入框
    this.setData({
      isShowGift:false
    })
    this.changeShow();
  },
  showGift:function(){ //展示礼物模块
    this.setData({
      isShowGift: true
    })
    this.changeShow();
  },
  selectedGift:function(res){ //点击礼物的事件
    console.log(res)
    this.setData({
      selectedGiftId: res.currentTarget.dataset.id
    })
  },
  sendMessage:function(e){ //将输入框文本信息赋值
    this.setData({
      sendContent:e.detail.value
    })
  },
  // 发送消息按钮
  bindButtonTap:function(){
    if (this.data.sendContent){
      wxHttps.sendMsg({ uid: this.data.uid, content: this.data.sendContent }).then(function (res) {
        if (res.data.errCode == 1) {
          that.getMsgList();
          that.setData({
            sendContent: ''
          })
        }
      })
    }else{
      wx.showToast({
        title:'输入内容不能为空',
        icon: 'none'
      })
    }
    

  },
  pageScrollToBottom: function () { //页面滚动到最底部的方法
    var that = this;
    this.setData({
      toView: 'index' + (that.data.contentLength - 1)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.sharePrompt = this.selectComponent('#sharePrompt')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('chat页面显示')
    var that = this;
    this.getMsgList();
    this.data.timer = setInterval(function () {
      that.getMsgList();
    }, 3000)
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('chat页面隐藏')
    clearInterval(this.data.timer)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('chat页面unload')
    clearInterval(this.data.timer)
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