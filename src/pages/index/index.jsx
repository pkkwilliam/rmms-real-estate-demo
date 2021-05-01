import React from "react";
import LandingPage from "rmms-taro-parent/dist/pages/landingPage/landingPage";
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
}
