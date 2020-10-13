// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    poemList: [
      {
        people: '李白',
        title: '《梦游天姥吟留别》',
        type: '唐诗',
      },
      {
        people: '杜甫',
        title: '《春望》',
        type: '唐诗',
      },
      {
        people: '杜甫',
        title: '《兵车行》',
        type: '唐诗',
      },
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
  qryData: function () {
    console.log('qry', this.inputValue)
  },
  todetail: function() {
    console.log('detail')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})