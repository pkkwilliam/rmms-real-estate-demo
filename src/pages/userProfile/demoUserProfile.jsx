import UserProfile from "rmms-taro-parent/dist/pages/userProfile/userProfile";
import { DEMO_FAVORITE } from "../../routes/applicationRoutes";

export default class DemoUserProfile extends UserProfile {
  onClickMenuItemFavorite = () => {
    this.goTo(DEMO_FAVORITE);
  };
}
