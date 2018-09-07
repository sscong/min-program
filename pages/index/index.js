//index.js
//获取应用实例
const app = getApp();
var wxHttps = require('../../utils/https')
Page({
  data: {
    tabArr: {
      curHdIndex: 1,
      curBdIndex: 1,
    },
    
    pageNum: 1,
    pageSize: 20,
    type: 1,
    mainDatas:{},
    signDay: app.globalData.signDays,//签到天数
  },
  //tab切换
  changeTab: function (e) {
    var dataId = e.currentTarget.id;
    console.log(dataId+'dataId');
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj,
    })
    var newType = parseInt(dataId);
    this.setData({
      type : newType
    })
    this.start();
  },
  goVideo: function(e){
    this.data.uid = e.currentTarget.dataset.id;
    console.log(this.data.uid);
    wx.navigateTo({
      url: '/pages/video/video?uid=' + this.data.uid
    })
  },
  showDialog:function(){
    console.log(this.dialog)
    this.dialog.showDialog();
    
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },

  onLoad: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#newGift");
    this.signIn = this.selectComponent("#signIn");
    if (app.isReady) {
      this.start();
    } else {
      app.readyCallback = () => {
        this.start();
      };
    }
    
  },
  start : function(){
    let that = this;
    wxHttps.searchVideos(that.data.pageNum, that.data.pageSize, that.data.type).then(function (res) {
      if (res.data.errCode == 1 && res.data.data.users){
        that.setData({
          mainDatas: res.data.data.users
        })
      }
    })
    if (app.globalData.signStatus == 0) { //当天没有签到显示签到窗口
      this.signIn.showDialog();
    }
  },
  onReady: function () {
    
    
    
  },
  onShow: function () {
    
  }
})
