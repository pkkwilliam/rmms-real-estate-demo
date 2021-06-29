import Taro from "@tarojs/taro";
import ItemDetailView from "rmms-taro-parent/dist/pages/itemDetail/itemDetail.view";

export default class DemoItemDetailView extends ItemDetailView {
  render() {
    return <ItemDetailView {...this.props} />;
  }
}
