// tslint:disable:jsx-no-multiline-js

import React from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import ToastContainerStyle, { IToastStyle } from "./style/index";
import PureIconWeui  from '../icon-weui/PureIconWeui'
export interface ToastProps {
  content: string;
  textStyle?: any;
  duration?: number;
  onClose?: () => void;
  mask?: boolean;
  type?: string;
  onAnimationEnd?: () => void;
  styles?: IToastStyle;
}

const ToastContainerStyles = StyleSheet.create<any>(ToastContainerStyle);

const iconType: {
  [key: string]: any;
} = {
  success: require("./images/success.png"),
  fail: require("./images/fail.png"),
  offline: require("./images/offline.png")
};

export default class ToastContainer extends React.Component<ToastProps, any> {
  static defaultProps = {
    duration: 3,
    mask: true,
    onClose() {},
    styles: ToastContainerStyles
  };

  anim: Animated.CompositeAnimation | null;

  constructor(props: ToastProps) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { onClose, onAnimationEnd } = this.props;
    const duration = this.props.duration as number;
    const timing = Animated.timing;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(this.state.fadeAnim, { toValue: 1, duration: 200 }),
      Animated.delay(duration * 1000)
    ];
    if (duration > 0) {
      animArr.push(timing(this.state.fadeAnim, { toValue: 0, duration: 200 }));
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onClose) {
          onClose();
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }
  renderContent = () => {
    const { content, textStyle } = this.props;
    const styles = this.props.styles!;
    // content
    const textViewStyle = textStyle
      ? [styles.toastContent, textStyle]
      : styles.toastContent;
    if (content) {
      return <Text style={textViewStyle}>{content}</Text>;
    }
    return null;
  }
  renderIcon = () =>{
    const { type = "" } = this.props;
    const styles = this.props.styles!;
    let iconDom: React.ReactElement<any> | null = null;
    switch (type) {
      case "loading":
        iconDom = (<ActivityIndicator
            animating
            style={styles.toastLoading}
            color="#fff"
            size="large"
          />);
        break;
      case "success":
        iconDom = <PureIconWeui name={'success_no_circle'} style={[styles.toastIcon]} />;
        break;
      case "fail":
        iconDom = <PureIconWeui name={'success_no_circle'} style={[styles.toastIcon]} />;
        break;
      case "offline":
        iconDom = <PureIconWeui name={'success_no_circle'} style={[styles.toastIcon]} />;
        break;
      case "info":
        iconDom = null;
        break;
      default:
        iconDom = <Image source={iconType[type]} style={styles.toastImage} />;
        break;
    }
    return iconDom
  }
  render() {
    const { type = "",  mask,  children } = this.props;
    const styles = this.props.styles!;
    const hasIcon =  type !== "info"
    return (
      <View
        style={[styles.container]}
        pointerEvents={mask ? undefined : "box-none"}
      >
        <View style={[styles.innerContainer]}>
          <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <View
              style={[
                styles.innerWrap,
                hasIcon ? styles.iconToast : styles.textToast
              ]}
            >
              {this.renderIcon()}
              {this.renderContent()}
              {children}
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}
