import React from 'react';
import { TextInput } from 'react-native';
import { TextInputProps} from './PropsType'

class Input extends React.Component<TextInputProps, any> {
  inputRef: TextInput | null;

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
  render() {
    return (
      <TextInput
        ref={el => ((this.inputRef as any) = el)}
        underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

export default Input;
