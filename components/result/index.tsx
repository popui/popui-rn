/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  Image,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Button from '../button/index';
import { ResultPropsType } from './PropsType';
import ResultStyle, { IResultStyle } from './style/index';

export interface ResultNativeProps extends ResultPropsType {
  styles?: IResultStyle;
  style?: StyleProp<ViewStyle>;
}

const ResultStyles = StyleSheet.create<any>(ResultStyle);

export default class Result extends React.Component<ResultNativeProps, any> {
  static defaultProps = {
    styles: ResultStyles,
    buttonType: '',
    buttonClick: () => {},
  };
  renderImgContent =()=>{
    const {
      img,
      imgUrl,
    } = this.props;
    const styles = this.props.styles!;
    let imgContent: JSX.Element | null = null;
    if (img) {
      imgContent = <View style={styles.imgWrap}>{img}</View>;
    } else if (imgUrl) {
      imgContent = (
        <View style={styles.imgWrap}>
          <Image
            source={imgUrl as ImageURISource | ImageURISource[]}
            style={styles.img}
          />
        </View>
      );
    }
    return imgContent
  }
  renderTitle =()=>{
    const {
      title,
    } = this.props;
    const styles = this.props.styles!;
    return (<View style={styles.title}>
      {typeof title === 'string' ? (
        <Text style={styles.titleText}>{title}</Text>
      ) : (
        title
      )}
    </View>)
  }
  renderMessage =()=>{
    const {
      message,
    } = this.props;
    const styles = this.props.styles!;
    return  (
      <View style={styles.message}>
        {typeof message === 'string' ? (
          <Text style={styles.messageText}>{message}</Text>
        ) : (
          message
        )}
      </View>
    )
  }
  renderBtns = ()=>{
    const {
      buttonText,
      onButtonClick,
      buttonType,
    } = this.props;
    const styles = this.props.styles!;
    return (<View style={styles.buttonWrap}>
      <Button
        style={styles.button}
        type={buttonType}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </View>)
  }
  render() {
    const {
      style,
      title,
      message,
      buttonText,
    } = this.props;
    const styles = this.props.styles!;
    return (
      <View style={[styles.result, style]}>
        {this.renderImgContent()}
        {title && this.renderTitle()}
        {message && this.renderMessage()}
        {buttonText && this.renderBtns()}
      </View>
    );
  }
}
