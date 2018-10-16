import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ImagePickerHeaderProps } from "./PropsType";
import plainStyles from "./style";
const defaultStyles = StyleSheet.create<any>(plainStyles)

export interface ImagePickerHeaderState {}

export default class ImagePickerHeader extends React.Component<
  ImagePickerHeaderProps,
  ImagePickerHeaderState
> {
  static defaultProps = {
    title: "Pick Image",
    showCountInfo: true,
    filesLength:0,
    maxCount: 10,
    styles:defaultStyles
  };

  public render() {
    const { title } = this.props;
    const filesLength =  (this.props.filesLength!).toFixed()
    const maxCount =  (this.props.maxCount!).toFixed()
    const styles = this.props.styles!;
    return (
      <View style={styles.uploaderHeader}>
      <Text style={styles.uploaderTitle}>{title}</Text>
      <Text style={styles.uploaderCounter}>{filesLength} / {maxCount}</Text>
    </View>
    )
  }
}
