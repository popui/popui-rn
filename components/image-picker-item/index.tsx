import * as React from 'react';
import { View, StyleSheet, Text,TouchableOpacity,Image } from 'react-native';
import IconWeui from '../icon-weui'
import plainStyles from './style'
const defaultStyles = StyleSheet.create<any>(plainStyles)
import {ImageItemFuncArgs,ImagePickerItemProps,ImagePickerItemState} from './PropsType'
import { noopFunc} from '../_util/noop'

export default class ImagePickerItem extends React.Component<ImagePickerItemProps, ImagePickerItemState> {
  static defaultProps = {
    styles: defaultStyles,
    onImagePress:noopFunc,
    onImageClosePress:noopFunc,
  };
  renderImageCenterContentView = (options:ImageItemFuncArgs)=>{
    const styles = this.props.styles!;
    const {  error, statusText } = options.item
    let content:any = null
    if(error){
      content = <IconWeui name="warn" />
    }
    if(statusText){
      content = <Text style={styles.uploaderStatusContent}>{statusText}</Text>
    }
    return (<View style={styles.uploaderStatus}>
      {content}
    </View>)
  }
  onImagePress = (options:ImageItemFuncArgs)=>{
    const {onImagePress} = this.props
    if(onImagePress){
      onImagePress(options)
    }
  }
  onImageClosePress = (options:ImageItemFuncArgs)=>{
    const {onImageClosePress} = this.props
    if(onImageClosePress){
      onImageClosePress(options)
    }
  }
  renderImageItem = (options:ImageItemFuncArgs)=>{
    const styles = this.props.styles!;
    const {item,index} = options
    const { uri, isVertical } = item
    const source = { uri, isVertical }
    return (<TouchableOpacity
      key={`image-picker-item-touch-${uri}`}
      onPress={() => this.onImagePress(options)}
      activeOpacity={0.6}
    >
      <View style={styles.uploaderFile}>
            <Image source={source} style={styles.uploaderFileImage} />
            {this.renderImageCenterContentView(options)}
          </View>
    </TouchableOpacity>)
  }
  renderImageCloseView= (options:ImageItemFuncArgs)=>{
    const styles = this.props.styles!;
    return (<TouchableOpacity
      onPress={()=>this.onImageClosePress(options)}
      style={styles.closeWrap}
      activeOpacity={0.6}
    >
      <Text style={styles.closeText}>×</Text>
    </TouchableOpacity>)
  }
  public render() {
    const styles = this.props.styles!;
    const {item,index} = this.props
    const options = {item,index}
    const {uri} = item
    return (
      <View key={`image-picker-item-container-${uri}`} style={[styles.item, styles.size]}>
        {this.renderImageItem(options)}
        {this.renderImageCloseView(options)}
      </View>
    )
  }
}
