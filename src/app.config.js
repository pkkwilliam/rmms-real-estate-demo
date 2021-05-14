export default {
  pages: [
    "pages/index/index",
    "pages/category/demoCategory",
    "pages/itemDetail/demoItemDetail"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        iconPath: "resource/landing_page.png",
        selectedIconPath: "resource/landing_page_selected.png",
        pagePath: "pages/index/index"
      },
      {
        iconPath: "resource/category.png",
        selectedIconPath: "resource/category_selected.png",
        pagePath: "pages/category/demoCategory"
      }
    ],
    color: "#8F8F8F",
    selectedColor: "#FC5D01",
    backgroundColor: "#EFEFEF",
    borderStyle: "white"
  }
};
