import React from "react";
import { observer } from "mobx-react";
import { ViewStyle, StyleProp, StyleSheet, View } from "react-native";
import WeuiIcon from "../weui-icon";
import { CheckboxPropsType } from "./PropsType";
import CheckboxStyle from "./style/index";

export interface ICheckboxNativeProps extends CheckboxPropsType {
  styles?: any;
  style?: StyleProp<ViewStyle>;
}

const CheckboxStyles = StyleSheet.create<any>(CheckboxStyle);

@observer
export default class Checkbox extends React.Component<
  ICheckboxNativeProps,
  any
> {
  static CheckboxItem: any;
  static AgreeItem: any;

  static defaultProps = {
    styles: CheckboxStyles
  };

  handleClick = () => {
    const { onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange();
    }
  };

  render(): JSX.Element {
    const { disabled,  styles,checked } = this.props;
    const colorProps: any = {};
    if (disabled) {
      colorProps.color = "#ADADAD";
    }
    const checkboxStyle = [styles.checkbox, disabled ? styles.disabled : null];
    return (
      <View style={checkboxStyle}>
        {checked && (
          <WeuiIcon name="success_no_circle" size={10} {...colorProps} />
        )}
      </View>
    );
  }
}
