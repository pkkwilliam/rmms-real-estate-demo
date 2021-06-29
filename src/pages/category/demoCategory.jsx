import Category from "rmms-taro-parent/dist/pages/category/category";
import { DEMO_ITEM_DETAIL } from "../../routes/applicationRoutes";

export default class DemoCategory extends Category {
  onClickItem = item => {
    this.goTo(DEMO_ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };
}
