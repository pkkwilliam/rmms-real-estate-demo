import RmmsAppState from "rmms-taro-parent/dist/appState/contextProvider";

import "./app.scss";
import "taro-ui/dist/style/index.scss";

class App extends RmmsAppState {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <this.AppStateWrapper>{this.props.children}</this.AppStateWrapper>;
  }
}

export default App;
