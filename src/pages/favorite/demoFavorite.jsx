import Favorite from "rmms-taro-parent/dist/pages/favorite/favorite";
import { DEMO_ITEM_DETAIL } from "../../routes/applicationRoutes";

export default class DemoFavorite extends Favorite {
  onClickItem = item => {
    this.goTo(DEMO_ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };
}
