import React from "react";
import LandingPage from "rmms-taro-parent/dist/pages/landingPage/landingPage";
import {
  DEMO_CATEGORY,
  DEMO_ITEM_DETAIL
} from "../../routes/applicationRoutes";
import IndexView from "./index.view";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends LandingPage {
  state = {
    ...this.state
  };

  render() {
    const { category, companyCustomise, item } = this.appState;
    const { landingPage } = companyCustomise;
    return (
      <IndexView
        categories={category.categories}
        items={item.items}
        landingPage={landingPage}
        onClickItem={this.onClickItem}
        onClickMenuButton={this.onClickMenuButton}
        {...this.state}
      />
    );
  }

  onClickMenuButton = categoryId => {
    this.goToTabBar(DEMO_CATEGORY, [{ key: "categoryId", value: categoryId }]);
  };

  onClickItem = item => {
    this.goTo(DEMO_ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };
}
