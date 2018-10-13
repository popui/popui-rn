import React from 'react';
import { TextInputTypeProviderType } from './PropsType';
import { noopFunc } from "../_util/noop";
import { TextInputProperties } from 'react-native';

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

export interface TextInputTypeProviderProps extends TextInputTypeProviderType, TextInputProperties {
}

export default class TextInputTypeProvider extends React.Component<TextInputTypeProviderProps, any> {
  static defaultProps = {
    type: 'text',
    name:'TextInputTypeProvider',
    children: noopFunc
  };

  getDisplayTextByType = (text:string) => {
    const { type } = this.props;
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
    return text
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

  render() {
    const {
      type,
      value : originValue,
      children,
      ...restProps
    } = this.props;
    const secureTextEntry = type === 'password'
    const keyboardType = this.getkeyboardType()
    const childrenArgs:TextInputProperties = {
      ...restProps,
      keyboardType,
      secureTextEntry
    }
    if(originValue!==undefined){
      // 处理 value
      const value = this.getDisplayTextByType(originValue)
      childrenArgs.value = value
    }
    return children(childrenArgs)
  }
}
