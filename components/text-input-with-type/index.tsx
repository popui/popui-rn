/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  StyleSheet,
  TextInputProperties,
  View,
} from 'react-native';
import { TextInputWithTypeType } from './PropsType';
import InputItemStyle from './style/index';
// import { Omit } from '../_util/types';
import TextInput from '../text-input'
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
export interface TextInputWithType extends TextInputWithTypeType, TextInputProperties {
  last?: boolean;
  style?: any;
}
import {noopFunc  } from "../_util/noop";
const InputItemStyles = StyleSheet.create<any>(InputItemStyle);

export default class TextInputWithType extends React.Component<TextInputWithType, any> {
  static defaultProps = {
    type: 'text',
    editable: true,
    onChangeText: noopFunc,
    onBlur: noopFunc,
    onFocus: noopFunc,
    textAlign: 'left',
    styles: InputItemStyles,
  };

  inputRef: TextInput | null;

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

  onClearPress = () => {
    // if (this.inputRef) {
    //   this.inputRef.clear();
    // }
    const { onClearPress } = this.props;
    if(onClearPress){
      onClearPress()
    }
  }

  // this is instance method for user to use
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
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
      onErrorPress,
      styles,
      ...restProps
    } = this.props;
    const keyboardType = this.getkeyboardType()
    const inputStyle = [styles.input, error ? styles.inputErrorColor : null]
    return (<TextInput
      {...restProps}
      ref={el => (this.inputRef = el)}
      style={inputStyle}
      keyboardType={keyboardType}
      onChangeText={this.onChangeText}
      secureTextEntry={type === 'password'}
    />)
  }
  render() {
    const {
      styles,
      style
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderInputView()}
      </View>
    );
  }
}
