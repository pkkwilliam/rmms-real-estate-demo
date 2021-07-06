import React from "react";
import ImageCarousel from "rmms-taro-parent/dist/common/imageCarousel";
import FlexView from "rmms-taro-parent/dist/common/flexView";
import DemoMainButtonRow from "../../common/mainButtonRow/demoMainButtonRow";
import LandingPageView, {
  BottomListing
} from "rmms-taro-parent/dist/pages/landingPage/landingPage.view";

export default class IndexView extends LandingPageView {
  render() {
    const { categories, items, onClickItem } = this.props;
    const { bottomListStyle, carouselStyle } = this.componentStyle;
    return (
      <this.Wrapper
        style={{
          backgroundColor: this.appStyle?.backgroundColor?.value
        }}
      >
        <FlexView>
          <ImageCarousel imageUrls={carouselStyle.map(image => image.url)} />
          <FlexView style={{ paddingLeft: 15, paddingRight: 15 }}>
            <DemoMainButtonRow />
            <BottomListing
              bottomListStyle={bottomListStyle}
              categories={categories}
              items={items}
              onClickItem={onClickItem}
            />
          </FlexView>
        </FlexView>
      </this.Wrapper>
    );
  }
}
