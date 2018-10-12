/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import variables from '../style/themes/default';
import { TextInputControlsPropsType } from './PropsType';
import PlainStyle from './style/index';
import IconWeui from '../icon-weui'

const hitSlop={ top: 5, left: 5, bottom: 5, right: 5 }// 点击外延距离
export interface TextInputControlsProps extends TextInputControlsPropsType {

}

const noop = () => { };

const styles = StyleSheet.create<any>(PlainStyle);

export default class TextInputControls extends React.Component<TextInputControlsProps, any> {
  static defaultProps = {
    clear: false,
    onClearPress:noop,
    extra: undefined,
    onExtraPress: noop,
    error: false,
    onErrorPress: noop,
    styles
  };

  renderExtraView = () => {
    const {
      extra,
      styles,
      onExtraPress,
    } = this.props;
    const TouchComp = onExtraPress?TouchableOpacity:TouchableWithoutFeedback
    const extraStyle = {
      width:
        typeof extra === 'string' && (extra as string).length > 0
          ? (extra as string).length * variables.font_size_heading
          : 0,
    };
    const textStyle = [styles.extra, extraStyle]
    return ((
      <TouchComp onPress={onExtraPress}>
          {typeof extra === 'string' ? (
            <Text style={textStyle}>{extra}</Text>
          ) :extra}
      </TouchComp>
    ))
  }
  renderClearView = () => {
    const {
      clear,
      styles,
      onClearPress
    } = this.props;
    /* 只在有 value 的 受控模式 下展示 自定义的 clear 按钮 */
    // ios 原生的 clear 在focus 的情况下, 需要点击外面一次取消focus, 再点一次才能正常操作, 容易造成误解. 因此这里全部都使用 独立渲染的 clear 按钮, 显示与否跟是否 focus 无关. 
    if (clear) {
      return (<TouchableOpacity
        style={styles.clear}
        onPress={onClearPress}
        hitSlop={hitSlop}
      >
        <IconWeui name="clear" />
      </TouchableOpacity>)
    }
    return null
  }
  renderErrorView = () => {
    const {
      onErrorPress,
      styles,
    } = this.props;
    const TouchComp = onErrorPress?TouchableOpacity:TouchableWithoutFeedback
    return (
      <TouchComp onPress={onErrorPress}>
          <IconWeui 
            name="warn" 
            size={variables.icon_size_xs} 
            style={[styles.errorIcon]}/>
      </TouchComp>
    )
  }
 

  render() {
    const {
      error,
      extra,
      styles,
      style
    } = this.props;
    return (
      <View style={[styles.container,  style]}>
        {this.renderClearView()}
        {extra && this.renderExtraView()}
        {error && this.renderErrorView()}
      </View>
    );
  }
}
