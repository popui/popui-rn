import React from "react";
import { observer } from "mobx-react";
import {
  LayoutChangeEvent,
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle
} from "react-native";
import { themeStore } from "../theme-store";
const { themeVars } = themeStore;

import RCModal from "rmc-dialog/lib/Modal";
import { ModalPropsType, ActionPropsType } from "./PropsType";
import modalStyle, { IModalStyle } from "./style/index";
import { noopFunc } from "../_util/noop";
import TouchableWithFallback from "../touchable-with-fallback";

// debug
// import { createDebug } from "../_util/debug";
// const debug = createDebug("popui:modal/Modal");

export interface IModalNativeProps extends ModalPropsType<TextStyle> {
  styles?: IModalStyle;
  style?: StyleProp<ViewStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
}

const modalStyles = StyleSheet.create<any>(modalStyle);

@observer
class AntmModal extends React.Component<IModalNativeProps, any> {
  private horizontalFlex: any;
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: true,
    style: {},
    bodyStyle: {},
    animationType: "fade",
    onClose: noopFunc,
    actions: [],
    transparent: true,
    popup: false,
    animateAppear: true,
    styles: modalStyles,
    operation: false
  };
  static alert: any;
  static operation: any;
  static prompt: any;

  root: View | null;

  onFooterLayout = (e: LayoutChangeEvent) => {
    const styles = this.props.styles!;
    if (this.root) {
      const paddingBottom = e.nativeEvent.layout.height
      console.log("onFooterLayout",{
        event:e.nativeEvent,
        paddingBottom
      })
      this.root.setNativeProps({
        style: [styles.dialogRoot,{ paddingBottom }]
      });
    }
  };

  saveRoot = (root: any) => {
    this.root = root;
  };
  renderActionButton = (action: ActionPropsType<any>, index: number) => {
    const { onClose, operation,renderActionButton } = this.props;
    if(renderActionButton){
      return renderActionButton(action,index)
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
  renderActions = () => {
    const { actions, operation,renderActions } = this.props;
    if(renderActions){
      return renderActions()
    }
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
      this.renderActionButton(button, i)
    );
    return (
      <View
        style={[btnGroupStyle, styles.actions]}
        onLayout={this.onFooterLayout}
      >
        {actionButtons}
      </View>
    );
  };
  renderPopup = () => {
    const {
      children,
      style,
      animateAppear,
      maskClosable,
      visible,
      onClose,
      bodyStyle,
      onAnimationEnd,
      animationType
    } = this.props;
    let animType = animationType;
    const styles = this.props.styles!;
    let aType = "SlideDown";
    if (animType === "slide-up") {
      animType = "slide-up";
      aType = "SlideUp";
    } else {
      animType = "slide-down";
    }
    return (
        <RCModal
          onClose={onClose}
          animationType={animType}
          // tslint:disable-next-line:jsx-no-multiline-js
          style={[
            styles.popupContainer,
            (styles as any)[`popup${aType}`],
            style
          ]}
          visible={visible}
          onAnimationEnd={onAnimationEnd}
          animateAppear={animateAppear}
          maskClosable={maskClosable}
        >
          <View ref={this.saveRoot} style={bodyStyle}>
            {children}
          </View>
        </RCModal>
    );
  };
  renderCloseButton = () => {
    const { onClose,renderCloseButton } = this.props;
    if(renderCloseButton){
      return renderCloseButton()
    }
    const styles = this.props.styles!;
    return (
      <TouchableOpacity onPress={onClose} style={[styles.closeWrap]}>
        <Text style={[styles.close]}>×</Text>
      </TouchableOpacity>
    );
  };
  renderTransparent = () => {
    const {
      title,
      closable,
      children,
      style,
      animateAppear,
      maskClosable,
      transparent,
      visible,
      onClose,
      bodyStyle,
      onAnimationEnd
    } = this.props;

    const styles = this.props.styles!;
    const actionsDom = this.renderActions();
    let animType = this.props.animationType;
    if (animType === "slide") {
      animType = "slide-up";
    }
    return (
        <RCModal
          onClose={onClose}
          animationType={animType}
          wrapStyle={transparent ? styles.wrap : undefined}
          style={[styles.innerContainer, style]}
          visible={visible}
          onAnimationEnd={onAnimationEnd}
          animateAppear={animateAppear}
          maskClosable={maskClosable}
        >
          <View style={styles.dialogRoot} ref={this.saveRoot}>
            {title ? <Text style={[styles.header]}>{title}</Text> : null}
            <View style={[styles.body, bodyStyle]}>{children}</View>
            {actionsDom}
            {closable && this.renderCloseButton()}
          </View>
        </RCModal>
    );
  };
  render() {
    const {
      children,
      style,
      popup,
      transparent,
      visible,
      onClose
    } = this.props;
    // debug("render", {
    //   props: this.props
    // });
    const styles = this.props.styles!;
    let animType = this.props.animationType;
    if (popup) {
      return this.renderPopup();
    }
    if (transparent) {
      return this.renderTransparent();
    }
    // 退化到原生 Modal
    if (
      animType === "slide-up" ||
      animType === "slide-down" ||
      animType === "slide"
    ) {
      animType = "slide";
    }
    return (
        <Modal
          visible={visible}
          animationType={animType}
          onRequestClose={onClose}
        >
          <View style={style}>{children}</View>
        </Modal>
    );
  }
}

export default AntmModal;
