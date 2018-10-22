import React from "react";
import { observer } from "mobx-react";
import {
  Dimensions,
  LayoutChangeEvent,
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  // TouchableHighlight,
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
import { createDebug } from "../_util/debug";
const debug = createDebug("popui:modal/Modal");

const maxHeight = StyleSheet.create({
  maxHeight: {
    maxHeight: Dimensions.get("window").height
  }
}).maxHeight;

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
    footer: [],
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
    if (this.root) {
      this.root.setNativeProps({
        style: [{ paddingBottom: e.nativeEvent.layout.height }, maxHeight]
      });
    }
  };

  saveRoot = (root: any) => {
    this.root = root;
  };
  renderFooterButton = (action: ActionPropsType<any>, index: number) => {
    const { text=`按钮${index}`, type, onPress, style } = action;
    const { onClose, operation } = this.props;
    const footer = this.props.footer!;
    const styles = this.props.styles!;
    // 按钮数量多余1个
    const hasMoreThanOneButton = footer.length > 1;
    // 当前渲染的是最后一个
    const isLastButton = index === footer.length - 1;
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
      footer && hasMoreThanOneButton && isLastButton
        ? { borderRightWidth: 0 }
        : {};
    // 点击
    const onPressFn = () => {
      if (onPress) {
        onPress();
      }
      if (onClose) {
        onClose();
      }
    };
    // 一个按钮使用 buttonWrapV, 多于 1个 水平排列
    const buttonWrapStyle =
      footer && hasMoreThanOneButton ? styles.buttonWrapH : styles.buttonWrapV;
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
  renderFooter = () => {
    const { footer, operation } = this.props;
    const styles = this.props.styles!;
    let btnGroupStyle = styles.buttonGroupV;
    if (footer && footer.length > 1 && !operation) {
      btnGroupStyle = styles.buttonGroupH;
      this.horizontalFlex = { flex: 1 };
    } else {
      this.horizontalFlex = {};
    }
    if (!footer || footer.length === 0) {
      return null;
    }
    const footerButtons = footer.map((button, i) =>
      this.renderFooterButton(button, i)
    );
    return (
      <View
        style={[btnGroupStyle, styles.footer]}
        onLayout={this.onFooterLayout}
      >
        {footerButtons}
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
      <View style={styles.container}>
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
      </View>
    );
  };
  renderCloseButton = () => {
    const { onClose } = this.props;
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
    const footerDom = this.renderFooter();
    let animType = this.props.animationType;
    if (animType === "slide") {
      animType = "slide-up";
    }
    return (
      <View style={styles.container}>
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
          <View style={maxHeight} ref={this.saveRoot}>
            {title ? <Text style={[styles.header]}>{title}</Text> : null}
            <View style={[styles.body, bodyStyle]}>{children}</View>
            {footerDom}
            {closable && this.renderCloseButton()}
          </View>
        </RCModal>
      </View>
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
    debug("render", {
      props: this.props
    });
    const styles = this.props.styles!;
    let animType = this.props.animationType;
    if (popup) {
      return this.renderPopup();
    }
    if (transparent) {
      return this.renderTransparent();
    }
    if (
      animType === "slide-up" ||
      animType === "slide-down" ||
      animType === "slide"
    ) {
      animType = "slide";
    }
    return (
      <View style={styles.container}>
        <Modal
          visible={visible}
          animationType={animType}
          onRequestClose={onClose}
        >
          <View style={style}>{children}</View>
        </Modal>
      </View>
    );
  }
}

export default AntmModal;
