import Category from "rmms-taro-parent/dist/pages/category/category";
import { DEMO_ITEM_DETAIL } from "../../routes/applicationRoutes";
import DemoCategoryView from "./demoCategory.view";

export default class DemoCategory extends Category {
  state = { ...this.state };

  render() {
    const { category, item } = this.appState;
    const { currentSegmentTypeIndex } = this.state;
    const sortedItems = this.sortItems(item.items, currentSegmentTypeIndex);
    return (
      <DemoCategoryView
        categories={category.categories}
        categoriesItems={this.transfromItemsToNav(sortedItems)}
        onChangeSegmentType={this.onChangeSegmentType}
        onClickCategory={this.onClickCategory}
        onClickItem={this.onClickItem}
        {...this.state}
      />
    );
  }

  onClickItem = item => {
    this.goTo(DEMO_ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };
}
