//接口调用统一管理
var app = getApp();
var API_ROOT = 'https://xdrq.rfydong.com/';
var loginKey = ""

//传code给服务端以获取loginKey和用户登录状态
function getloginKey(code,fid) {
  let that = this
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + "user/code.do",
      data: {
        code: code,
        fid: fid
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        wx.hideLoading();
        loginKey = res.data.data.loginKey;
        console.log("我是code");
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}


//传userInfo给后台
function sendInfo(userInfo) {
  let that = this
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + "user/login.do",
      data: {
        userInfo: userInfo
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//发现接口
function searchVideos(pageNum, pageSize, videoType) {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'search/getVideoUsers.do',
      data : {
        pageNum: pageNum,
        pageSize: pageSize,
        type: videoType
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//视频详情接口
function videoDetail(uid) {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'search/getVideoInfo.do',
      data: {
        uid: uid
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//我的接口
function myInfo() {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'user/myInfo.do',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}


//对方空间接口
function userInfo(props) {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'user/userInfo.do',
      data: {
        uid: props.uid
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//关注接口
function userFollow(props) {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'user/follow.do',
      data: {
        uid: props.uid
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//取消关注接口
function cancelFollow(props) {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'user/cancelFollow.do',
      data: {
        uid: props.uid
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//信箱列表接口
function getMsgBoxList(props) {
  return new Promise(function (resolve, reject) {
    // wx.showLoading({
    //   title: '加载中',
    // })
    wx.request({
      url: API_ROOT + 'msg/getMsgBoxList.do',
      data: {
        "pageNum": props.pageNum,
        "pageSize": 20
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        // wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        // wx.hideLoading();
        reject(error)
      }
    })
  })
}

//信箱详情接口
function getMsgList(props) {
  return new Promise(function (resolve, reject) {
    // wx.showLoading({
    //   title: '加载中',
    // })
    wx.request({
      url: API_ROOT + 'msg/getMsgList.do',
      data: {
        "uid": props.uid,
        "lastMsgId": props.lastMsgId
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        // wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        // wx.hideLoading();
        reject(error)
      }
    })
  })
}

//发送消息接口
function sendMsg(props) {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'msg/sendMsg.do',
      data: {
        "uid": props.uid,
        "content": props.content
      },
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//消息状态
function hasUnreadMsg() {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: API_ROOT + 'msg/getMsgCommon.do',
      data: '',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}
//查询用户标签
function getUserTags() {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'user/getUserTags.do',
      data: '',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}
//礼物接口
function getGiftList() {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'gift/getGiftList.do',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//支付接口
function wxpaySubmit(props) {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'pay/wxpaySubmit.do',
      method: "POST",
      data:{
        serviceId: props.serviceId
      },
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//初始化接口
function init() {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'user/init.do',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

//签到接口
function signIn() {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: API_ROOT + 'user/signIn.do',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'loginKey': loginKey
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error)
      }
    })
  })
}

// 微信支付的函数
const wxPay = serviceId => {
  return new Promise(function (resolve, reject) {
    wxpaySubmit({ serviceId: serviceId }).then(res => {
      console.log(res)
      if (res.data.errCode == 1) {
        wx.requestPayment({
          'timeStamp': res.data.data.timeStamp,
          'nonceStr': res.data.data.nonceStr,
          'package': res.data.data.package,
          'signType': res.data.data.signType,
          'paySign': res.data.data.paySign,
          'success': function (res) {
            resolve(res)
          },
          'fail': function (error) {
            reject(error)
          }
        })
      }
    })
  })

}




module.exports = {
  getloginKey : getloginKey,
  sendInfo: sendInfo,
  // auth: auth,
  myInfo: myInfo,
  searchVideos: searchVideos,
  userInfo: userInfo,
  userFollow: userFollow,
  cancelFollow: cancelFollow,
  getMsgBoxList: getMsgBoxList,
  getMsgList: getMsgList,
  sendMsg: sendMsg,
  hasUnreadMsg: hasUnreadMsg,
  getUserTags: getUserTags,
  getGiftList: getGiftList,
  wxpaySubmit: wxpaySubmit,
  init: init,
  signIn: signIn,
  wxPay: wxPay,
  videoDetail: videoDetail
}
