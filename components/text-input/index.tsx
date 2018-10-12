import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInputProps} from './PropsType'

function normalizeValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}


export default class PopTextInput extends React.Component<TextInputProps, any> {
  inputRef: RNTextInput | null;

  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  clear = () => {
    if (this.inputRef) {
      this.inputRef.clear();
    }
  }
  isFocused =() =>{
    if (this.inputRef) {
      return  this.inputRef.isFocused();
    }
    return false
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
    // console.log('getValueProps',{
    //   valueProps
    // })
    return valueProps
  }
  render() {
    const valueProps = this.getValueProps()
    return (
      <RNTextInput
        ref={el => ((this.inputRef as any) = el)}
        clearButtonMode={'always'}
        underlineColorAndroid="transparent"
        placeholderTextColor={'#B2B2B2'}
        {...this.props}
        {...valueProps}
      />
    );
  }
}