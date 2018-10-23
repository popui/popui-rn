import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {ModalActionsProps} from './PropsType';
import { observer } from "mobx-react";
import { themeStore } from "../theme-store";
const { themeVars } = themeStore;
import modalActionsStyle from "./style/index";
import { noopFunc } from "../_util/noop";
import TouchableWithFallback from "../touchable-with-fallback";
import {ActionPropsType} from '../modal/PropsType'

const modalActionsStyles = StyleSheet.create<any>(modalActionsStyle);

export interface ModalActionsState {
}

@observer
export default class ModalActions extends React.Component<ModalActionsProps, ModalActionsState> {
  private horizontalFlex: any;
  static defaultProps = {
    onClose: noopFunc,
    styles: modalActionsStyles,
    operation: false
  };
  constructor(props: ModalActionsProps) {
    super(props);
    this.state = {
    };
  }
  renderAction = (action: ActionPropsType<any>, index: number) => {
    const { onClose, operation,renderAction } = this.props;
    if(renderAction){
      return renderAction(action,index)
    }
    const { text=`按钮${index}`, type, onPress, style } = action;
    const actions = this.props.actions!;
    const styles = this.props.styles!;
    // 按钮数量多余1个
    const hasMoreThanOneButton = actions.length > 1;
    // 当前渲染的是最后一个
    const isLastButton = index === actions.length - 1;
    // type
    let defaultType = 'default'
    if(isLastButton){
      defaultType = 'primary'
    }
    const buttonType = type || defaultType

    // 自定义按钮样式
    let buttonStyle = {};
    if (operation) {
      buttonStyle = styles.buttonTextOperation;
    }
    if (style && typeof style !== "string") {
      buttonStyle = style;
      // 如果是字符串, 转换成对象
      // Todo: 去掉
      // if (typeof buttonStyle === "string") {
      //   const styleMap: {
      //     [key: string]: object;
      //   } = {
      //     cancel: {},
      //     default: {},
      //     destructive: { color: "red" }
      //   };
      //   buttonStyle = styleMap[buttonStyle] || {};
      // }
    }
    // 最后一个按钮右边无 border
    const noneBorder =
      actions && hasMoreThanOneButton && isLastButton
        ? { borderRightWidth: 0 }
        : {};
    // 点击
    const onPressFn = async() => {
      if (onPress) {
        await onPress();
      }
      if (onClose) {
        onClose();
      }
    };
    // 一个按钮使用 buttonWrapV, 多于 1个 水平排列
    const buttonWrapStyle =
      actions && hasMoreThanOneButton ? styles.buttonWrapH : styles.buttonWrapV;
    const textStyle = [
      styles.buttonText,
      styles[`buttonText_${buttonType}`],
      buttonStyle
    ];
    return (
      <TouchableWithFallback
        key={index}
        style={this.horizontalFlex}
        underlayColor={themeVars.DialogLinkActiveBc}
        onPress={onPressFn}
      >
        <View style={[buttonWrapStyle, noneBorder]}>
          <Text style={textStyle}>{text}</Text>
        </View>
      </TouchableWithFallback>
    );
  };
  render () {
    const { actions, operation } = this.props;
    if (!actions || actions.length === 0) {
      return null;
    }
    const styles = this.props.styles!;
    // 默认垂直排列
    let btnGroupStyle = styles.buttonGroupV;
    if (actions.length > 1 && !operation) {
      // 水平排列
      btnGroupStyle = styles.buttonGroupH;
      this.horizontalFlex = { flex: 1 };
    } else {
      this.horizontalFlex = {};
    }
    const actionButtons = actions.map((button, i) =>
      this.renderAction(button, i)
    );
    return (
      <View
        style={[btnGroupStyle, styles.actions]}
        // onLayout={this.onFooterLayout}
      >
        {actionButtons}
      </View>
    );
  }
}
