/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInputProperties,
  View,
} from 'react-native';
import variables from '../style/themes/default';
import { TextInputWithControlsPropsType } from './PropsType';
import InputItemStyle from './style/index';
// import { Omit } from '../_util/types';
import TextInputControls from '../text-input-controls'
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

// /**
//  * React Native TextInput Props except these props
//  */
// export type TextInputProps = Omit<
//   TextInputProperties,
//   'style'
//   >;

export interface TextInputWithControlsProps extends TextInputWithControlsPropsType, TextInputProperties {
  last?: boolean;
  style?: any;
}

const noop = () => { };


const InputItemStyles = StyleSheet.create<any>(InputItemStyle);

export default class TextInputWithControls extends React.Component<TextInputWithControlsProps, any> {
  static defaultProps = {
    type: 'text',
    editable: true,
    onChangeText: noop,
    onBlur: noop,
    onFocus: noop,
    clear: false,
    error: false,
    extra: '',
    onClearPress:noop,
    onExtraPress: noop,
    onErrorPress: noop,
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false,
    styles: InputItemStyles,
  };

  inputRef: TextInput | null;
  // constructor(props: TextInputWithControlsProps) {
  //   super(props);
  //   this.state = {
  //     value:props.defaultValue || props.value
  //   };
  // }
  // static getDerivedStateFromProps(nextProps:TextInputWithControlsProps, prevState:any){
  //   if(nextProps.value !== prevState.value){
  //     return {
  //       value: normalizeValue(nextProps.value)
  //     }
  //   }
  //   return null
  // }

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
    // this.setState({
    //   value:''
    // })
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
      return <Text style={[styles.leftLabel, textStyle]}>{left}</Text>
    }
    return left
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
      clearButtonMode={'never'}
      ref={el => (this.inputRef = el)}
      style={inputStyle}
      keyboardType={keyboardType}
      onChangeText={this.onChangeText}
      secureTextEntry={type === 'password'}
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
      onExtraPress,
      onErrorPress,
      styles,
      ...restProps
    } = this.props;
    const { style } = restProps;

    return (
      <View style={[styles.container, style]}>
        {left && this.renderLeftView()}
        {this.renderInputView()}
        <TextInputControls 
          clear={clear}
          extra={extra}
          error={error}
          onClearPress={this.onClearPress}
          onExtraPress={onExtraPress}
          onErrorPress={onErrorPress}
        />
      </View>
    );
  }
}
