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

export interface TextInputControlsProps extends TextInputControlsPropsType {

}

const noop = () => { };

const styles = StyleSheet.create<any>(PlainStyle);

export default class TextInputControls extends React.Component<TextInputControlsProps, any> {
  static defaultProps = {
    editable: true,
    clear: false,
    extra: '',
    onExtraPress: noop,
    error: false,
    onErrorPress: noop,
    styles,
  };

  onInputClear = () => {
    if (this.inputRef) {
      this.inputRef.clear();
    }
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText('');
    }
  }


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
    return ((
      <TouchComp onPress={onExtraPress}>
        <View>
          {typeof extra === 'string' ? (
            <Text style={[styles.extra, extraStyle]}>{extra}</Text>
          ) : (
              extra
            )}
        </View>
      </TouchComp>
    ))
  }
  renderClearView = () => {
    const {
      clear,
      editable,
      styles,
      value
    } = this.props;
    /* 只在有 value 的 受控模式 下展示 自定义的 clear 按钮 */
    // ios 原生的 clear 在focus 的情况下, 需要点击外面一次取消focus, 再点一次才能正常操作, 容易造成误解. 因此这里全部都使用 独立渲染的 clear 按钮, 显示与否跟是否 focus 无关. 
    if (editable && clear && value) {
      return (<TouchableOpacity
        style={[styles.clear]}
        onPress={this.onInputClear}
        hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
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
          <IconWeui name="warn" size={variables.icon_size_xs} style={[styles.errorIcon]}/>
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
