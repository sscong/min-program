// pages/labelPage/labelPage.js
var wxHttps = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    labelArr : [],
    tagIds : [],
    newChar : [],
    newInter : [],
    newShape : [],
    selectedTags : [],
    nameIds : []
  },
  selectTag : function(e){
    let index = e.currentTarget.dataset.index;
    let check = this.data.newChar[index].select;
    this.data.newChar[index].select = check === true ? false : true;
    if (this.data.newChar[index].select == true){
      console.log(this.data.tagIds.length);
      if (this.data.tagIds.length <=5){
        this.data.tagIds.push(e.currentTarget.dataset.id);
        this.data.tagIds = [... new Set(this.data.tagIds)];
        this.data.nameIds.push(e.currentTarget.dataset.name);
        this.data.nameIds = [... new Set(this.data.nameIds)];
      }else{
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    }else{
      for(let i in this.data.tagIds){
        if (this.data.tagIds[i] ==  e.currentTarget.dataset.id){
         this.data.tagIds.splice(i,1)
         break 
        }
      }
      for (let i in this.data.nameIds) {
        if (this.data.nameIds[i] == e.currentTarget.dataset.name) {
          this.data.nameIds.splice(i, 1)
          break
        }
      }
    }
    console.log(this.data.tagIds);
    console.log(this.data.nameIds);
    this.setData({
      selectedTags: this.data.nameIds
    })
  },
  selectTag2: function (e) {
    let index = e.currentTarget.dataset.index;
    console.log(index + '090')
    let check = this.data.newInter[index].select;
    this.data.newInter[index].select = check === true ? false : true;
    if (this.data.newInter[index].select == true) {
      if (this.data.tagIds.length <= 5) {
        this.data.tagIds.push(e.currentTarget.dataset.id);
        this.data.tagIds = [... new Set(this.data.tagIds)];
        this.data.nameIds.push(e.currentTarget.dataset.name);
        this.data.nameIds = [... new Set(this.data.nameIds)];
      } else {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      for (let i in this.data.tagIds) {
        if (this.data.tagIds[i] == e.currentTarget.dataset.id) {
          this.data.tagIds.splice(i, 1)
          break
        }
      }
      for (let i in this.data.nameIds) {
        if (this.data.nameIds[i] == e.currentTarget.dataset.name) {
          this.data.nameIds.splice(i, 1)
          break
        }
      }
    }
    console.log(this.data.tagIds);
    this.setData({
      selectedTags: this.data.nameIds
    })
  },
  selectTag3: function (e) {
    let index = e.currentTarget.dataset.index;
    console.log(index + '090')
    let check = this.data.newShape[index].select;
    this.data.newShape[index].select = check === true ? false : true;
    if (this.data.newShape[index].select == true) {
      if (this.data.tagIds.length <= 5) {
        this.data.tagIds.push(e.currentTarget.dataset.id);
        this.data.tagIds = [... new Set(this.data.tagIds)]; 
        this.data.nameIds.push(e.currentTarget.dataset.name);
        this.data.nameIds = [... new Set(this.data.nameIds)];
      } else {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      for (let i in this.data.tagIds) {
        if (this.data.tagIds[i] == e.currentTarget.dataset.id) {
          this.data.tagIds.splice(i, 1)
          break
        }
      }
      for (let i in this.data.nameIds) {
        if (this.data.nameIds[i] == e.currentTarget.dataset.name) {
          this.data.nameIds.splice(i, 1)
          break
        }
      }
    }
    console.log(this.data.tagIds);
    this.setData({
      selectedTags: this.data.nameIds
    })
  },
  goRecruit : function(){
    wx.setStorage({
      key: "tags",
      data: this.data.tagIds
    })
    wx.setStorage({
      key: "tagNames",
      data: this.data.nameIds
    })
    console.log(878);
    wx.switchTab({
      url: '/pages/recruit/recruit'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wxHttps.getUserTags().then(function(res) {
      that.setData({
        labelArr: res.data.data
      })
      let charlist = [];
      let interlist = [];
      let shapelist = [];
      let one = {};
      let two = {};
      let three = {};
      for (let i in that.data.labelArr.characterTags) {
        one = that.data.labelArr.characterTags[i];
        one['select'] = false;
        charlist.push(one);
      }
      that.setData({
        newChar: charlist
      })
      for (let i in that.data.labelArr.interestTags) {
        two = that.data.labelArr.interestTags[i];
        two['select'] = false;
        interlist.push(two);
      }
      that.setData({
        newInter: interlist
      })
      for (let i in that.data.labelArr.shapeTags) {
        three = that.data.labelArr.shapeTags[i];
        three['select'] = false;
        shapelist.push(three);
      }
      that.setData({
        newShape: shapelist
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
  
  }
})