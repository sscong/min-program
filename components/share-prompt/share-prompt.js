// modules/share-prompt/share-prompt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹窗
    hideDialog: function () {
      this.setData({
        isShow: false
      })
    },
    //显示弹窗
    showDialog: function () {
      this.setData({
        isShow: true
      })
    },
    inviteDialog:function(){
      this.hideDialog();
      console.log(111)
    },
    letterDialog:function(){
      this.hideDialog();
      console.log(222)
    }
  }
})
