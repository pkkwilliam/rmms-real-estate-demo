export default {
  pages: [
    "pages/index/index",
    "pages/category/demoCategory",
    "pages/favorite/demoFavorite",
    "pages/itemDetail/demoItemDetail",
    "pages/userProfile/demoUserProfile"
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
        pagePath: "pages/index/index",
        text: "首頁"
      },
      {
        iconPath: "resource/category.png",
        selectedIconPath: "resource/category_selected.png",
        pagePath: "pages/category/demoCategory",
        text: "例表"
      },
      {
        iconPath: "resource/user_profile.png",
        selectedIconPath: "resource/user_profile_selected.png",
        pagePath: "pages/userProfile/demoUserProfile",
        text: "我的"
      }
    ],
    color: "#8F8F8F",
    selectedColor: "#FC5D01",
    backgroundColor: "#EFEFEF",
    borderStyle: "white"
  }
};
