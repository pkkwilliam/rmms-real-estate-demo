import React from "react";
import MainButtonRow from "rmms-taro-parent/dist/common/mainButtonRow/mainButtonRow";
import {
  RENT_SEGMENT,
  SELL_SEGMENT
} from "rmms-taro-parent/dist/pages/category/categorySegment";

import { DEMO_CATEGORY } from "../../routes/applicationRoutes";

export default class DemoMainButtonRow extends MainButtonRow {
  onClickBuySegment = () => {
    this.appState.shortTermMemory.setShortTermMemory({
      currentSegmentTypeIndex: SELL_SEGMENT.index
    });
    this.goToTabBar(DEMO_CATEGORY);
  };

  onClickRentSegment = () => {
    this.appState.shortTermMemory.setShortTermMemory({
      // this is so wrong, not sure why we cant import value
      currentSegmentTypeIndex: RENT_SEGMENT.index
    });
    this.goToTabBar(DEMO_CATEGORY);
  };
}
