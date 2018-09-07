// components/sign-in/sign-in.js
var wxHttps = require('../../utils/https.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    signDay:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false,
    signList:[
      {
        day:'第一天',
        icon:'/images/package_img1.png'
      },
      {
        day: '第二天',
        icon: '/images/package_img1.png'
      },
      {
        day: '第三天',
        icon: '/images/package_img1.png'
      },
      {
        day: '第四天',
        icon: '/images/package_img1.png'
      },
      {
        day: '第五天',
        icon: '/images/package_img1.png'
      },
      {
        day: '第六天',
        icon: '/images/package_img1.png'
      },
      {
        day: '第七天',
        icon: '/images/package_img3.png'
      }
    ],
    signedImg:'/images/package_img2.png',
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
    //签到
    signIn:function(){
      var that = this;
      wxHttps.signIn().then(res=>{
        console.log(res.data)
        if(res.data.errCode ==1){
          that.hideDialog();
          wx.showToast({
            title: '签到成功',
            icon: 'none'
          })

        }else{
          wx.showToast({
            title: '签到失败',
            icon: 'none'
          })
        }
      })
    }
  }
})
