import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";
import varibles from "../style/themes/default";
// import IconWeui from '../icon-weui'
const styles = StyleSheet.create({
  cellFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5
  },
  cellFooterText: {
    textAlign: "center",
    color: varibles.TextColorGray,
    fontSize: varibles.CellFontSize
  },
  vcode: {
    width: 100,
    height: 44
  }
});

export interface CellFooterProps {
  error?:boolean;
  access?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export interface CellFooterState {}

export default class CellFooter extends React.Component<
  CellFooterProps,
  CellFooterState
> {
  constructor(props: CellFooterProps) {
    super(props);

    this.state = {};
  }
  private renderChildrenWithProps = () => {
    const { children, style, access, ...others } = this.props;
    const childrenWithProps = React.Children.map(children, (child: any) => {
      if (!child.type) {
        return (
          <Text style={[styles.cellFooterText, style]} {...others}>
            {child}
          </Text>
        );
      }
      if (
        child.type &&
        child.type.displayName === "Image" &&
        !child.props.style
      ) {
        return React.cloneElement(child, {
          style: [styles.vcode, child.props.style]
        });
      }
      return child;
    });
    return childrenWithProps;
  };
  public render() {
    const {style, access } = this.props;
    const cellFooterStyle = style
      ? [styles.cellFooter, style]
      : styles.cellFooter;
    return (
      <View style={cellFooterStyle}>
        {this.renderChildrenWithProps()}
        {/* {error && <IconWeui name="warn" />} */}
        {access && (
          <Image
            style={{ width: 7.5, height: 12, marginLeft: 5 }}
            source={require("assets/images/back_arrow.png")}
          />
        )}
      </View>
    );
  }
}
