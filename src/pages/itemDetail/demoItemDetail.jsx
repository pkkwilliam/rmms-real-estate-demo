import ItemDetail from "rmms-taro-parent/dist/pages/itemDetail/itemDetail";
import DemoItemDetailView from "./demoItemDetail.view";

export default class DemoItemDetail extends ItemDetail {
  state = {
    ...this.state
  };

  render() {
    return (
      <DemoItemDetailView
        toggleShowAgency={this.toggleShowAgency}
        {...this.state}
      />
    );
  }
}
