// components/new-gift/new-gift.js
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
    hideDialog:function(){
      this.setData({
        isShow:false
      })
    },
    //显示弹窗
    showDialog:function(){
      this.setData({
        isShow: true
      })
    },
    _cancelEvent:function(){
      //触发取消的回调
      this.triggerEvent("cancelEvent")
    },
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }
})
