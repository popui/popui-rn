/* tslint:disable:jsx-no-multiline-js */
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
// import ImageRoll from './ImageRoll';
import { ImagePickerPropTypes, ImageItemPropType,ImageItemFuncArgs } from "./PropsType";
import imagePickerStyle, { IImagePickerStyle } from "./style/index";
import Expo from "expo";
import { ensureHasPermission } from "../_util/permission";
import ImagePickerItem from '../image-picker-item'
export interface ImagePickerNativeProps extends ImagePickerPropTypes {
  styles?: IImagePickerStyle;
}
import { noopFunc } from "../_util/noop";
const imagePickerStyles = StyleSheet.create<any>(imagePickerStyle);

export default class ImagePicker extends React.Component<
  ImagePickerNativeProps,
  any
> {
  static defaultProps = {
    styles: imagePickerStyles,
    // tslint:disable-next-line:no-empty
    onChange() {},
    // tslint:disable-next-line:no-empty
    onFail() {},
    files: [],
    renderHeader: noopFunc,
    selectable: true
  };

  plusText: any;
  plusWrap: any;

  onPressIn = () => {
    const styles = this.props.styles!;
    this.plusWrap.setNativeProps({
      style: [styles.item, styles.size, styles.plusWrapHighlight]
    });
  };

  onPressOut = () => {
    const styles = this.props.styles!;
    this.plusWrap.setNativeProps({
      style: [styles.item, styles.size, styles.plusWrapNormal]
    });
  };

  showPicker = async () => {
    const { pickerOptions, onAddImageClick } = this.props;
    if (onAddImageClick) {
      onAddImageClick();
      return;
    }
    const { status } = await Expo.Permissions.getAsync(
      Expo.Permissions.CAMERA_ROLL
    );
    if (status !== "granted") {
      await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
    }
    await ensureHasPermission(Expo.Permissions.CAMERA_ROLL);
    let result = await Expo.ImagePicker.launchImageLibraryAsync(pickerOptions);
    if (!result.cancelled) {
      this.addImage(result);
    }
  };

  addImage(imageObj: ImageItemPropType) {
    const { files = [], onChange } = this.props;
    const newImages = files.concat(imageObj);
    if (onChange) {
      onChange(newImages, "add");
    }
  }

  removeImage(idx: number): void {
    const { files = [], onChange } = this.props;
    const newImages: any[] = [];

    files.forEach((image, index) => {
      if (index !== idx) {
        newImages.push(image);
      }
    });
    if (onChange) {
      onChange(newImages, "remove", idx);
    }
  }

  onImageClick(idx: number) {
    if (this.props.onImageClick) {
      this.props.onImageClick(idx, this.props.files);
    }
  }
  renderImageItemView = (item:ImageItemPropType,index:number)=>{
      return <ImagePickerItem
      item={item}
      index={index}
      onImagePress={(options:ImageItemFuncArgs)=>this.onImageClick(options.index)}
      onImageClosePress={(options:ImageItemFuncArgs)=>this.removeImage(options.index)}
      />
  }
  renderImageItemsView = () => {
    const { files = [] } = this.props;
    const filesView = files.map(this.renderImageItemView);
    return filesView;
  };
  renderAddItemView = () => {
    const styles = this.props.styles!;
    return (
      <TouchableWithoutFeedback
        onPress={this.showPicker}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        <View
          ref={conponent => (this.plusWrap = conponent)}
          style={[
            styles.item,
            styles.size,
            styles.plusWrap,
            styles.plusWrapNormal
          ]}
        >
          <Text style={[styles.plusText]}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  render() {
    const { selectable, renderHeader } = this.props;
    const styles = this.props.styles!;
    return (
      <View style={styles.container}>
        {renderHeader && renderHeader()}
        <View style={styles.uploaderBody}>
          {this.renderImageItemsView()}
          {selectable && this.renderAddItemView()}
        </View>
      </View>
    );
  }
}
