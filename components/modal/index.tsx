import React from "react";
import {
  View,
  Modal as RNModal,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Easing
} from "react-native";
import modalStyle from "./style";
const styles = StyleSheet.create<any>(modalStyle);

const screen = Dimensions.get("window");
import { IModalPropTypes } from "./PropsType";

export default class RCModal extends React.Component<IModalPropTypes, any> {
  static defaultProps = {
    wrapStyle: styles.wrap,
    maskStyle: styles.mask,
    contentStyle:{},
    animationType: "fade",
    animateAppear: true,
    animationDuration: 300,
    visible: false,
    maskClosable: true,
    onClose() {},
    onAnimationEnd(_visible: boolean) {}
  } as IModalPropTypes;

  animMask: any;
  animDialog: any;

  constructor(props) {
    super(props);
    const { visible } = props;
    this.state = {
      position: new Animated.Value(this.getPosition(visible)),
      scale: new Animated.Value(this.getScale(visible)),
      opacity: new Animated.Value(this.getOpacity(visible)),
      modalVisible: visible
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.shouldComponentUpdate(nextProps, null)) {
      this.setState({
        modalVisible: true
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.visible || this.props.visible !== nextProps.visible) {
      return true;
    }
    if (nextState) {
      if (nextState.modalVisible !== this.state.modalVisible) {
        return true;
      }
    }
    return false;
  }
  componentDidMount() {
    if (this.props.animateAppear && this.props.animationType !== "none") {
      this.componentDidUpdate({});
    }
  }
  componentDidUpdate(prevProps) {
    const { props } = this;
    if (prevProps.visible !== props.visible) {
      this.animateDialog(props.visible);
    }
  }
  animateMask = visible => {
    this.stopMaskAnim();
    this.state.opacity.setValue(this.getOpacity(!visible));
    this.animMask = Animated.timing(this.state.opacity, {
      toValue: this.getOpacity(visible),
      duration: this.props.animationDuration
    });
    this.animMask.start(() => {
      this.animMask = null;
    });
  };
  stopMaskAnim = () => {
    if (this.animMask) {
      this.animMask.stop();
      this.animMask = null;
    }
  };
  stopDialogAnim = () => {
    if (this.animDialog) {
      this.animDialog.stop();
      this.animDialog = null;
    }
  };
  animateDialog = visible => {
    this.stopDialogAnim();
    this.animateMask(visible);

    let { animationType, animationDuration } = this.props;
    animationDuration = animationDuration!;
    if (animationType !== "none") {
      if (animationType === "slide-up" || animationType === "slide-down") {
        this.state.position.setValue(this.getPosition(!visible));
        this.animDialog = Animated.timing(this.state.position, {
          toValue: this.getPosition(visible),
          duration: animationDuration,
          easing: (visible ? Easing.elastic(0.8) : undefined) as any
        });
      } else if (animationType === "fade") {
        this.animDialog = Animated.parallel([
          Animated.timing(this.state.opacity, {
            toValue: this.getOpacity(visible),
            duration: animationDuration,
            easing: (visible ? Easing.elastic(0.8) : undefined) as any
          }),
          Animated.spring(this.state.scale, {
            toValue: this.getScale(visible)
          })
        ]);
      }

      this.animDialog.start(() => {
        this.animDialog = null;
        if (!visible) {
          this.setState({
            modalVisible: false
          });
        }
        if (this.props.onAnimationEnd) {
          this.props.onAnimationEnd(visible);
        }
      });
    } else {
      if (!visible) {
        this.setState({
          modalVisible: false
        });
      }
    }
  };
  close = () => {
    this.animateDialog(false);
  };
  onMaskClose = () => {
    if (this.props.maskClosable && this.props.onClose) {
      this.props.onClose();
    }
  };
  getPosition = visible => {
    if (visible) {
      return 0;
    }
    return this.props.animationType === "slide-down"
      ? -screen.height
      : screen.height;
  };
  getScale = visible => {
    return visible ? 1 : 1.05;
  };
  getOpacity = visible => {
    return visible ? 1 : 0;
  };
  renderMask = () => {
    const { maskStyle } = this.props;
    const { opacity } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.onMaskClose}>
        <Animated.View style={[styles.absolute, { opacity }]}>
          <View style={[styles.absolute, maskStyle]} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  renderContent = () => {
    const { contentStyle, animationType } = this.props;
    const { opacity } = this.state;
    const animationStyleMap = {
      none: {},
      "slide-up": { transform: [{ translateY: this.state.position }] },
      "slide-down": { transform: [{ translateY: this.state.position }] },
      fade: { transform: [{ scale: this.state.scale }], opacity }
    };
    return (
      <Animated.View
        style={[styles.content, contentStyle, animationStyleMap[animationType]]}
      >
        {this.props.children}
      </Animated.View>
    );
  };
  render() {
    const { props } = this;
    if (!this.state.modalVisible) {
      return null as any;
    }
    return (
      <RNModal
        visible
        transparent
        onRequestClose={this.props.onClose}
        supportedOrientations={["portrait", "landscape"]}
      >
        <View style={[styles.wrap, props.wrapStyle]}>
          {this.renderMask()}
          {this.renderContent()}
        </View>
      </RNModal>
    );
  }
}
