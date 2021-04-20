import { request } from '../../request/index.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContent: [],
    currentIndex: 0,
  },
  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates()
  },
  // 获取分类数据
  getCates() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
    }).then((result) => {
      this.Cates = result.data.message
      // 左侧分类数据
      let leftMenuList = this.Cates.map((v) => v.cat_name)
      // 右侧内容
      let rightContent = this.Cates[0].children
      this.setData({
        leftMenuList,
        rightContent,
      })
    })
  },
  handleItemTap(e) {
    // 1.获取被点击的索引
    // 2.给data中的currentIndex赋值
    const { index } = e.currentTarget.dataset
    this.setData({
      currentIndex: index,
    })
  },
})
