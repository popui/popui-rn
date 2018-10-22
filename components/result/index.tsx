/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { observer } from 'mobx-react'
import {
  Image,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import WeuiIcon from '../weui-icon'
import { ResultPropsType } from './PropsType';
import ResultStyle, { IResultStyle } from './style/index';

export interface ResultNativeProps extends ResultPropsType {
  styles?: IResultStyle;
  style?: StyleProp<ViewStyle>;
}

const ResultStyles = StyleSheet.create<any>(ResultStyle);

@observer
export default class Result extends React.Component<ResultNativeProps, any> {
  static defaultProps = {
    styles: ResultStyles,
  };
  renderIconView =()=>{
    const {
      icon,
      imgUrl,
      iconName
    } = this.props;
    const styles = this.props.styles!;
    let iconContent: JSX.Element | null = null;
    if (icon) {
      iconContent = <View style={styles.iconWrap}>{icon}</View>;
    }else if (iconName) {
      iconContent = <View style={styles.iconWrap}>
        <WeuiIcon name={iconName} msg />
      </View>;
    }else if (imgUrl) {
      iconContent = (
        <View style={styles.iconWrap}>
          <Image
            source={imgUrl as ImageURISource | ImageURISource[]}
            style={styles.img}
          />
        </View>
      );
    }
    return iconContent
  }
  renderTitleView =()=>{
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
  renderMessageView =()=>{
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
  renderBtnsView = ()=>{
    const renderButtons = this.props.renderButtons!;
    const styles = this.props.styles!;
    return (<View style={styles.buttonWrap}>
      {renderButtons()}
    </View>)
  }
  renderExtraView = ()=>{
    const styles = this.props.styles!;
    const extra = this.props.extra!;
    return  (
      <View style={styles.extra}>
        {typeof extra === 'string' ? (
          <Text style={styles.extraText}>{extra}</Text>
        ) : (
          extra
        )}
      </View>
    )
  }
  render() {
    const {
      style,
      title,
      message,
      renderButtons,
      extra
    } = this.props;
    const styles = this.props.styles!;
    return (
      <View style={[styles.result, style]}>
        {this.renderIconView()}
        {title && this.renderTitleView()}
        {message && this.renderMessageView()}
        {renderButtons && this.renderBtnsView()}
        {extra && this.renderExtraView()}
      </View>
    );
  }
}
