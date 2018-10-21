// import PropTypes from 'prop-types'
import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextStyle
} from "react-native";
import WeuiIcon from "../icon-weui";
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;

const styles = StyleSheet.create({
  agreement: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 13 * 0.5,
    paddingBottom: 13 * 0.5,
    paddingLeft: 15,
    paddingRight: 15
  },
  agreementText: {
    fontSize: 13,
    color: themeVars.TextColorGray,
    marginLeft: 5
  },
  checkbox: {
    height: 13,
    width: 13,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#D1D1D1",
    alignItems: "center",
    justifyContent: "center"
  },
  disabled: {
    backgroundColor: "#E1E1E1"
  }
});

export interface AgreementProps {
  value?: boolean;
  disabled?: boolean;
  onChange?: Function;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
}

export interface AgreementState {}

@observer
export default class AgreementComponent extends React.Component<
  AgreementProps,
  AgreementState
> {
  onChange = () => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange();
    }
  };
  renderCheckBox = () => {
    const { value = false, disabled } = this.props;
    return (
      <View style={[styles.checkbox, disabled ? styles.disabled : null]}>
        {value ? (
          <WeuiIcon
            name="success_no_circle"
            size={10}
            {...(disabled ? { color: "#ADADAD" } : {})}
          />
        ) : (
          false
        )}
      </View>
    );
  };
  public render() {
    const {
      value = false,
      onChange,
      disabled,
      style,
      textStyle,
      children,
      ...others
    } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onChange} {...others}>
        <View style={[styles.agreement, style]}>
          {this.renderCheckBox()}
          <Text style={[styles.agreementText, textStyle]}>{children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
