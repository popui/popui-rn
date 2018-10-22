/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { observer } from 'mobx-react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  // TextStyle,
} from 'react-native';
import Modal from '../modal';
import promptStyle from './style';
import {PropmptContainerProps} from './PropsType';
// import ModalBodyText from '../modal-body-text';

const promptStyles = StyleSheet.create<any>(promptStyle);

@observer
export default class PropmptContainer extends React.Component<
  PropmptContainerProps,
  any
> {
  static defaultProps = {
    type: 'default',
    defaultValue: '',
    styles: promptStyles,
  };

  constructor(props: PropmptContainerProps) {
    super(props);
    this.state = {
      visible: true,
      text: props.defaultValue,
      password: props.type === 'secure-text' ? props.defaultValue : '',
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  onChangeText(type: string, value: string) {
    this.setState({
      [type]: value,
    });
  }
  getArgs =(func: (...args: any[]) => void)=>{
    const {
      type,
    } = this.props;
    const { text, password } = this.state;
    if (type === 'login-password') {
      return func.apply(this, [text, password]);
    } else if (type === 'secure-text') {
      return func.apply(this, [password]);
    }
    return func.apply(this, [text]);
  }
  render() {
    const {
      title,
      onAnimationEnd,
      message,
      type,
      actions,
      placeholders,
    } = this.props;
    const styles = this.props.styles!;

    let footer;
    if (typeof actions === 'function') {
      footer = [
        { text: '取消', style: 'cancel', onPress: () => {} },
        { text: '确定', onPress: () => this.getArgs(actions) },
      ];
    } else {
      footer = actions.map(item => {
        return {
          text: item.text,
          onPress: () => {
            if (item.onPress) {
              return this.getArgs(item.onPress);
            }
          },
          style: item.style || {},
        };
      });
    }
    const firstStyle = [styles.inputWrapper];
    const lastStyle = [styles.inputWrapper];

    if (type === 'login-password') {
      firstStyle.push(styles.inputFirst);
      lastStyle.push(styles.inputLast);
    } else if (type === 'secure-text') {
      lastStyle.push(styles.inputFirst);
      lastStyle.push(styles.inputLast);
    } else {
      firstStyle.push(styles.inputFirst);
      firstStyle.push(styles.inputLast);
    }

    return (
      <Modal
        transparent
        title={title}
        visible={this.state.visible}
        footer={footer}
        onAnimationEnd={onAnimationEnd}
      >
        <KeyboardAvoidingView behavior="padding">
          {message && <Text style={styles.message}>{message}</Text>}
          <View style={styles.inputGroup}>
            {type !== 'secure-text' && (
              <View style={firstStyle}>
                <TextInput
                  autoFocus
                  onChangeText={value => {
                    this.onChangeText('text', value);
                  }}
                  value={this.state.text}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder={placeholders![0]}
                />
              </View>
            )}
            {(type === 'secure-text' || type === 'login-password') && (
              <View style={lastStyle}>
                <TextInput
                  autoFocus
                  secureTextEntry
                  onChangeText={value => {
                    this.onChangeText('password', value);
                  }}
                  value={this.state.password}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder={placeholders![1]}
                />
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
