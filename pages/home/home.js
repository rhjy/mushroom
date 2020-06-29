// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    duration: 500, // swiper滑动动画时长
    interval: 5000, // 自动切换时间间隔
    bannerImageList: [{
        url: "http://192.168.14.80:3000/public/images/carousel/banner_01.png"
      },
      {
        url: "http://192.168.14.80:3000/public/images/carousel/banner_02.png"
      },
      {
        url: "http://192.168.14.80:3000/public/images/carousel/banner_03.png"
      }
    ],
    courseList:[
      {"icon":"http://192.168.14.80:3000/public/images/recommend/recommend1.png"},
      {"icon":"http://192.168.14.80:3000/public/images/recommend/recommend2.png"},
      {"icon":"http://192.168.14.80:3000/public/images/recommend/recommend3.png"},
      {"icon":"http://192.168.14.80:3000/public/images/recommend/recommend4.png"},
    ],
    videoImageList:[
      {"name":"可爱的玩偶制作教程","view_count":152,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot1.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"编程几何的艺术魅力","view_count":623,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot2.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"如何提升孩子空间想象力","view_count":451,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot3.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"人工智能运算技术入门","view_count":232,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot4.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"可爱的玩偶制作教程","view_count":152,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot1.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"编程几何的艺术魅力","view_count":623,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot2.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"如何提升孩子空间想象力","view_count":451,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot3.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"人工智能运算技术入门","view_count":232,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot4.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"可爱的玩偶制作教程","view_count":152,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot1.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"编程几何的艺术魅力","view_count":623,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot2.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"如何提升孩子空间想象力","view_count":451,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot3.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
      {"name":"人工智能运算技术入门","view_count":232,"cover_photo_url":"http://192.168.14.80:3000/public/images/hot_video/hot4.png","video_url":"http://vjs.zencdn.net/v/oceans.mp4"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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