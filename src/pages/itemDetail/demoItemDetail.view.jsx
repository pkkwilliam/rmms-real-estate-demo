import React from "react";
import ImageCarousel from "rmms-taro-parent/dist/common/imageCarousel";
import ItemDetailView, {
  Content
} from "rmms-taro-parent/dist/pages/itemDetail/itemDetail.view";
import ContactAgent from "../contactAgent/contactAgent";

export default class DemoItemDetailView extends ItemDetailView {
  render() {
    const { itemDetail, showAgency, toggleShowAgency } = this.props;
    const { id, listingType, name } = itemDetail;
    return (
      <this.Wrapper>
        <ImageCarousel imageUrls={itemDetail.imageUrls} />
        <Content onClickSubmit={toggleShowAgency} {...itemDetail} />
        <ContactAgent
          id={id}
          listingType={listingType}
          name={name}
          showAgency={showAgency}
          toggleShowAgency={toggleShowAgency}
        />
      </this.Wrapper>
    );
  }
}
