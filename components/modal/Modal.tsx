import React from "react";
import { observer } from "mobx-react";
import {
  Dimensions,
  LayoutChangeEvent,
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle
} from "react-native";
import RCModal from "rmc-dialog/lib/Modal";
import { ModalPropsType } from "./PropsType";
import modalStyle, { IModalStyle } from "./style/index";
import { noopFunc } from "../_util/noop";

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
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    bodyStyle: {},
    animationType: "fade",
    onClose: noopFunc,
    footer: [],
    transparent: false,
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
  renderFooter = () => {
    const { footer, onClose, operation } = this.props;
    const styles = this.props.styles!;
    let btnGroupStyle = styles.buttonGroupV;
    let horizontalFlex = {};
    if (footer && footer.length === 2 && !operation) {
      btnGroupStyle = styles.buttonGroupH;
      horizontalFlex = { flex: 1 };
    }
    const buttonWrapStyle =
      footer && footer.length === 2 ? styles.buttonWrapH : styles.buttonWrapV;
    let footerDom;
    if (footer && footer.length) {
      const footerButtons = footer.map((button, i) => {
        let buttonStyle = {};
        if (operation) {
          buttonStyle = styles.buttonTextOperation;
        }
        if (button.style) {
          buttonStyle = button.style;
          if (typeof buttonStyle === "string") {
            const styleMap: {
              [key: string]: object;
            } = {
              cancel: {},
              default: {},
              destructive: { color: "red" }
            };
            buttonStyle = styleMap[buttonStyle] || {};
          }
        }
        const noneBorder =
          footer && footer.length === 2 && i === 1
            ? { borderRightWidth: 0 }
            : {};
        const onPressFn = () => {
          if (button.onPress) {
            button.onPress();
          }
          if (onClose) {
            onClose();
          }
        };
        return (
          <TouchableHighlight
            key={i}
            style={horizontalFlex}
            underlayColor="#ddd"
            onPress={onPressFn}
          >
            <View style={[buttonWrapStyle, noneBorder]}>
              <Text style={[styles.buttonText, buttonStyle]}>
                {button.text || `按钮${i}`}
              </Text>
            </View>
          </TouchableHighlight>
        );
      });
      footerDom = (
        <View
          style={[btnGroupStyle, styles.footer]}
          onLayout={this.onFooterLayout}
        >
          {footerButtons}
        </View>
      );
    }
    return footerDom;
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
  renderCloseButton = () =>{
    const {
      onClose,
    } = this.props;
    const styles = this.props.styles!;
    return (
      <TouchableOpacity onPress={onClose} style={[styles.closeWrap]}>
        <Text style={[styles.close]}>×</Text>
      </TouchableOpacity>
    )
  }
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
            {closable  && this.renderCloseButton()}
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
    if (transparent) {
      return this.renderTransparent();
    }
    if (popup) {
      return this.renderPopup();
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
