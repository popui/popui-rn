/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInputProperties,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import variables from '../style/themes/default';
import Input from '../text-input';
import { TextInputSingleLinePropsType } from './PropsType';
import InputItemStyle from './style/index';
import { Omit } from '../_util/types';
import IconWeui from '../icon-weui'

const keyboardTypeArray = [
  'default',
  'email-address',
  'numeric',
  'phone-pad',
  'ascii-capable',
  'numbers-and-punctuation',
  'url',
  'number-pad',
  'name-phone-pad',
  'decimal-pad',
  'twitter',
  'web-search',
];

/**
 * React Native TextInput Props except these props
 */
export type TextInputProps = Omit<
  TextInputProperties,
  'onChangeText' | 'onFocus' | 'onBlur'
  >;

export interface TextInputSingleLineProps extends TextInputSingleLinePropsType, TextInputProps {
  last?: boolean;
  onExtraClick?: (event: GestureResponderEvent) => void;
  onErrorClick?: (event: GestureResponderEvent) => void;
}

const noop = () => { };

function normalizeValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

const InputItemStyles = StyleSheet.create<any>(InputItemStyle);

export default class TextInputSingleLine extends React.Component<TextInputSingleLineProps, any> {
  static defaultProps = {
    type: 'text',
    editable: true,
    clear: false,
    onChangeText: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false,
    styles: InputItemStyles,
  };

  inputRef: Input | null;

  onChangeText = (text:string) => {
    const { onChangeText, type } = this.props;
    const maxLength = this.props.maxLength as number;
    switch (type) {
      case 'bankCard':
        text = text.replace(/\D/g, '');
        if (maxLength > 0) {
          text = text.substring(0, maxLength);
        }
        text = text.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        text = text.replace(/\D/g, '').substring(0, 11);
        const valueLen = text.length;
        if (valueLen > 3 && valueLen < 8) {
          text = `${text.substr(0, 3)} ${text.substr(3)}`;
        } else if (valueLen >= 8) {
          text = `${text.substr(0, 3)} ${text.substr(3, 4)} ${text.substr(7)}`;
        }
        break;
      case 'password':
        break;
      default:
        break;
    }
    if (onChangeText) {
      onChangeText(text);
    }
  }

  onInputBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.value);
    }
  }

  onInputFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus(this.props.value);
    }
  }

  onInputClear = () => {
    if (this.inputRef) {
      this.inputRef.clear();
    }
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText('');
    }
  }

  // this is instance method for user to use
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }
  renderLeftView = () => {
    const {
      left,
      styles,
      labelNumber
    } = this.props
    const textStyle = {
      width: variables.font_size_heading * (labelNumber as number) * 1.05,
    };
    if (typeof left === 'string') {
      return <Text style={[styles.text, textStyle]}>{left}</Text>
    }
    return left
  }

  renderExtraView = () => {
    const {
      extra,
      styles,
      onExtraClick,
    } = this.props;
    const TouchComp = onExtraClick?TouchableOpacity:TouchableWithoutFeedback
    const extraStyle = {
      width:
        typeof extra === 'string' && (extra as string).length > 0
          ? (extra as string).length * variables.font_size_heading
          : 0,
    };
    return ((
      <TouchComp onPress={onExtraClick}>
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
      onErrorClick,
      styles,
    } = this.props;
    const TouchComp = onErrorClick?TouchableOpacity:TouchableWithoutFeedback
    return (
      <TouchComp onPress={onErrorClick}>
          <IconWeui name="warn" size={variables.icon_size_xs} style={[styles.errorIcon]}/>
      </TouchComp>
    )
  }
  getkeyboardType = () => {
    const {
      type,
    } = this.props;
    let keyboardType: any = 'default';
    if (type === 'number') {
      keyboardType = 'numeric';
    } else if (type === 'bankCard') {
      keyboardType = 'number-pad'; // 不带小数点
    } else if (type === 'phone') {
      keyboardType = 'phone-pad';
    } else if (type && keyboardTypeArray.indexOf(type) > -1) {
      keyboardType = type;
    }
    return keyboardType
  }
  getValueProps = () => {
    const {
      value, defaultValue
    } = this.props;
    let valueProps;
    if ('value' in this.props) {
      valueProps = {
        value: normalizeValue(value),
      };
    } else {
      valueProps = {
        defaultValue,
      };
    }
    return valueProps
  }
  renderInputView = () => {
    const {
      left,
      type,
      clear,
      children,
      error,
      extra,
      labelNumber,
      last,
      onErrorClick,
      styles,
      ...restProps
    } = this.props;
    const valueProps = this.getValueProps()
    const keyboardType = this.getkeyboardType()
    return (<Input
      // clearButtonMode={clear ? 'while-editing' : 'never'}
      clearButtonMode={'never'}
      underlineColorAndroid="transparent"
      ref={el => (this.inputRef = el)}
      {...restProps}
      {...valueProps}
      style={[styles.input, error ? styles.inputErrorColor : null]}
      keyboardType={keyboardType}
      onChangeText={this.onChangeText}
      secureTextEntry={type === 'password'}
      onBlur={this.onInputBlur}
      onFocus={this.onInputFocus}
    />)
  }
  render() {
    const {
      left,
      type,
      clear,
      children,
      error,
      extra,
      labelNumber,
      last,
      onErrorClick,
      styles,
      ...restProps
    } = this.props;
    const { style } = restProps;

    let borderBottomWidth = 0
    if (!last) {
      if (error) {
        borderBottomWidth = 1
      } else {
        borderBottomWidth = StyleSheet.hairlineWidth
      }
    }
    const containerStyle = {
      borderBottomWidth,
      borderBottomColor: error ? 'red' : variables.border_color_base,
    };
    return (
      <View style={[styles.container, containerStyle, style]}>
        {left && this.renderLeftView()}
        {this.renderInputView()}
        {this.renderClearView()}
        {extra && this.renderExtraView()}
        {error && this.renderErrorView()}
      </View>
    );
  }
}
