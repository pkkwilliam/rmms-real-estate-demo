import React from "react";
import { AtTextarea, AtInput, AtFloatLayout } from "taro-ui";
import { View } from "@tarojs/components";
import ApplicationButton from "rmms-taro-parent/dist/common/applicationButton";
import ApplicationComponent from "rmms-taro-parent/dist/common/applicationComponent";
import { ItemHeader } from "rmms-taro-parent/dist/pages/itemDetail/itemDetail.view";

export default class ContactAgent extends ApplicationComponent {
  state = {
    ...this.state,
    phoneNumber: ""
  };

  render() {
    const { id, listingType, name, showAgency, toggleShowAgency } = this.props;
    const { phoneNumber } = this.state;
    return (
      <AtFloatLayout
        isOpened={showAgency}
        title="預約睇樓"
        onClose={toggleShowAgency}
      >
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <ItemHeader id={id} listingType={listingType} name={name} />
          <AtInput
            customStyle={{ marginLeft: 0, marginTop: 15 }}
            onChange={value => this.setPhoneNumber(value)}
            placeholder="請輸入你的電話號碼"
            title="電話號碼"
            value={phoneNumber}
          />
          <AtTextarea
            count={false}
            customStyle={{ color: "#5F5F5F", marginTop: 15 }}
            disabled
            value={`你好，我想預約關於${id}:${name}，我的電話:${phoneNumber}`}
          />
          <ApplicationButton style={{ marginBottom: 15, marginTop: 30 }}>
            通知中介
          </ApplicationButton>
        </View>
      </AtFloatLayout>
    );
  }

  setPhomeNumber = phoneNumber => {
    this.setState({
      phoneNumber
    });
  };
}
