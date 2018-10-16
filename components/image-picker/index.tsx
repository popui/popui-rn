/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// import ImageRoll from './ImageRoll';
import { ImagePickerPropTypes,ImageItemPropType } from './PropsType';
import imagePickerStyle, { IImagePickerStyle } from './style/index';
import Expo from 'expo';
import  {ensureHasPermission} from '../_util/permission'
export interface ImagePickerNativeProps extends ImagePickerPropTypes {
  styles?: IImagePickerStyle;
}

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
    selectable: true,
  };

  plusText: any;
  plusWrap: any;

  // constructor(props: ImagePickerNativeProps) {
  //   super(props);
  //   this.state = {
  //     // visible: false,
  //   };
  // }

  onPressIn = () => {
    const styles = this.props.styles!;
    this.plusWrap.setNativeProps({
      style: [styles.item, styles.size, styles.plusWrapHighlight],
    });
  }

  onPressOut = () => {
    const styles = this.props.styles!;
    this.plusWrap.setNativeProps({
      style: [styles.item, styles.size, styles.plusWrapNormal],
    });
  }

  showPicker = async() => {
    const {allowsEditing,onAddImageClick} = this.props
    if (onAddImageClick) {
       onAddImageClick();
      return;
    }
    const { status } = await Expo.Permissions.getAsync(Expo.Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL)
    }
    await ensureHasPermission(Expo.Permissions.CAMERA_ROLL)
    let result = await Expo.ImagePicker.launchImageLibraryAsync({
      allowsEditing,
    })
    console.log(result);
    if (!result.cancelled) {
      this.addImage(result)
      // this.setState({ image: result.uri });
    }
    // this.setState({
    //   visible: true,
    // });
  }

  addImage(imageObj: ImageItemPropType) {
    const { files = [],onChange } = this.props;
    const newImages = files.concat(imageObj);
    if (onChange) {
      onChange(newImages, 'add');
    }
  }

  removeImage(idx: number): void {
    const newImages: any[] = [];
    const { files = [],onChange } = this.props;
    files.forEach((image, index) => {
      if (index !== idx) {
        newImages.push(image);
      }
    });
    if (onChange) {
      onChange(newImages, 'remove', idx);
    }
  }

  // hideImageRoll = () => {
  //   // this.setState({
  //   //   visible: false,
  //   // });
  //   if (this.props.onFail) {
  //     this.props.onFail('cancel image selection');
  //   }
  // }

  onImageClick(index: number) {
    if (this.props.onImageClick) {
      this.props.onImageClick(index, this.props.files);
    }
  }
  renderFilesView = () =>{
    const { files = [] } = this.props;
    const styles = this.props.styles!;
    const filesView = files.map((item: any, index) => (
      <View key={index} style={[styles.item, styles.size]}>
        <TouchableOpacity
          onPress={() => this.onImageClick(index)}
          activeOpacity={0.6}
        >
          <Image
            source={{ uri: item.uri || item.url }}
            style={[styles.size, styles.image]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.removeImage(index)}
          style={styles.closeWrap}
          activeOpacity={0.6}
        >
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
      </View>
    ));
    return filesView
  }
  renderAddItemView = () =>{
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
            styles.plusWrapNormal,
          ]}
        >
          <Text style={[styles.plusText]}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  // renderImageRollView =()=>{
  //   const imageRollEl = (
  //     <ImageRoll
  //       onCancel={this.hideImageRoll}
  //       onSelected={imgObj => this.addImage(imgObj)}
  //     />
  //   );
  //   return imageRollEl
  // }
  render() {
    const { selectable } = this.props;
    const styles = this.props.styles!;
    
    return (
      <View style={styles.container}>
        {this.renderFilesView()}
        {selectable && this.renderAddItemView()}
        {/* {this.state.visible && this.renderImageRollView()} */}
      </View>
    );
  }
}
