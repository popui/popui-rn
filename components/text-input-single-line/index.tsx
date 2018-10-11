/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TextInputProperties,
  TouchableWithoutFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import variables from '../style/themes/default';
import Input from '../text-input';
import { TextInputSingleLinePropsType } from './PropsType';
import InputItemStyle from './style/index';
import { Omit } from '../_util/types';

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
  'onChange' | 'onFocus' | 'onBlur'
>;

export interface TextInputSingleLineProps extends TextInputSingleLinePropsType, TextInputProps {
  last?: boolean;
  onExtraClick?: (event: GestureResponderEvent) => void;
  onErrorClick?: (event: GestureResponderEvent) => void;
}

const noop = () => {};

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
    onChange: noop,
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

  onChange = (event:any) => {
    let text = event.text
    const { onChange, type } = this.props;
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
    if (onChange) {
      onChange(text);
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
    this.onChange('');
  }

  // this is instance method for user to use
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }
  renderLeftView =()=>{
    const {
      left,
      styles,
      labelNumber
    } = this.props
      const textStyle = {
        width: variables.font_size_heading * (labelNumber as number) * 1.05,
      };
        if(typeof left === 'string'){
          return <Text style={[styles.text, textStyle]}>{left}</Text>
        }
      return left
  }
  
  renderExtraView = () =>{
    const {
      extra,
      styles,
      onExtraClick,
    } = this.props;
    const extraStyle = {
      width:
        typeof extra === 'string' && (extra as string).length > 0
          ? (extra as string).length * variables.font_size_heading
          : 0,
    };
    return ( (
      <TouchableWithoutFeedback onPress={onExtraClick}>
        <View>
          {typeof extra === 'string' ? (
            <Text style={[styles.extra, extraStyle]}>{extra}</Text>
          ) : (
            extra
          )}
        </View>
      </TouchableWithoutFeedback>
    ))
  }
  renderClearView=()=>{
    const {
      clear,
      editable,
      styles,
      value
    } = this.props;
    /* 只在有 value 的 受控模式 下展示 自定义的 安卓 clear 按钮 */
    if(editable && clear && value && Platform.OS === 'android'){
      return (<TouchableOpacity
        style={[styles.clear]}
        onPress={this.onInputClear}
        hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
      >
        <Image
          source={require('../style/images/cross_w.png')}
          style={{ width: 12, height: 12 }}
        />
      </TouchableOpacity>)
    }
    return null
  }
  renderErrorView =()=>{
    const {
      onErrorClick,
      styles,
    } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onErrorClick}>
        <View style={[styles.errorIcon]}>
          <Image
            source={require('../style/images/error.png')}
            style={{
              width: variables.icon_size_xs,
              height: variables.icon_size_xs,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
  getkeyboardType =()=>{
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
  getValueProps =() =>{
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
  renderInputView=()=>{
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
      clearButtonMode={clear ? 'while-editing' : 'never'}
      underlineColorAndroid="transparent"
      ref={el => (this.inputRef = el)}
      {...restProps}
      {...valueProps}
      style={[styles.input, error ? styles.inputErrorColor : null]}
      keyboardType={keyboardType}
      onChange={this.onChange}
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
    if(!last){
      if(error){
        borderBottomWidth =1 
      }else{
        borderBottomWidth = StyleSheet.hairlineWidth
      }
    }
    const containerStyle = {
      borderBottomWidth,
      borderBottomColor: error? 'red' : variables.border_color_base,
    };
    return (
      <View style={[styles.container, containerStyle, style]}>
        {left && this.renderLeftView()}
        {this.renderInputView()}
        { this.renderClearView()}
        {extra && this.renderExtraView()}
        {error && this.renderErrorView()}
      </View>
    );
  }
}
