import * as React from "react";
import { observer } from 'mobx-react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ImagePickerAddButtonProps } from "./PropsType";
import plainStyles from "./style";
const defaultStyles = StyleSheet.create<any>(plainStyles);
import { noopFunc } from "../_util/noop";
export interface ImagePickerAddButtonState {}

@observer
export default class ImagePickerAddButton extends React.Component<
  ImagePickerAddButtonProps,
  ImagePickerAddButtonState
> {
  static defaultProps = {
    styles: defaultStyles,
    onPress: noopFunc
  };
  render() {
    const styles = this.props.styles!;

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.uploaderAddButton}
        onPress={this.props.onPress}
      >
        <View style={styles.uploaderAddButtonRec} />
        <View
          style={[
            styles.uploaderAddButtonRec,
            { transform: [{ rotate: "90deg" }] }
          ]}
        />
      </TouchableOpacity>
    );
  }
}
