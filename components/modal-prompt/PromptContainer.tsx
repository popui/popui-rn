/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  // TextStyle,
} from 'react-native'
import ModalDialog from '../dialog'
import promptStyle from './style'
import { PropmptContainerProps } from './PropsType'
// import DialogBodyText from '../dialog-body-text';
import RCModal from '../modal'
import Dialog from '../dialog'

const promptStyles = StyleSheet.create<any>(promptStyle)

export default class PropmptContainer extends React.Component<
  PropmptContainerProps,
  any
> {
  static defaultProps = {
    type: 'default',
    defaultValue: '',
    styles: promptStyles,
  }

  constructor(props: PropmptContainerProps) {
    super(props)
    this.state = {
      visible: true,
      text: props.defaultValue,
      password: props.type === 'secure-text' ? props.defaultValue : '',
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  onChangeText(type: string, value: string) {
    this.setState({
      [type]: value,
    })
  }
  getArgs = (func: (...args: any[]) => void) => {
    const { type } = this.props
    const { text, password } = this.state
    if (type === 'login-password') {
      return func.apply(this, [text, password])
    } else if (type === 'secure-text') {
      return func.apply(this, [password])
    }
    return func.apply(this, [text])
  }
  getActions = () => {
    const { actions } = this.props
    let _actions
    if (typeof actions === 'function') {
      _actions = [
        { text: '取消', style: 'cancel', onPress: () => {} },
        { text: '确定', onPress: () => this.getArgs(actions) },
      ]
    } else {
      _actions = actions.map((item) => {
        return {
          text: item.text,
          onPress: () => {
            if (item.onPress) {
              return this.getArgs(item.onPress)
            }
          },
          style: item.style || {},
        }
      })
    }
    return _actions
  }
  renderInputs = () => {
    const { type, placeholders } = this.props
    const styles = this.props.styles!
    const firstStyle = [styles.inputWrapper]
    const lastStyle = [styles.inputWrapper]

    if (type === 'login-password') {
      firstStyle.push(styles.inputFirst)
      lastStyle.push(styles.inputLast)
    } else if (type === 'secure-text') {
      lastStyle.push(styles.inputFirst)
      lastStyle.push(styles.inputLast)
    } else {
      firstStyle.push(styles.inputFirst)
      firstStyle.push(styles.inputLast)
    }
    return (
      <View style={styles.inputGroup}>
        {type !== 'secure-text' && (
          <View style={firstStyle}>
            <TextInput
              autoFocus
              onChangeText={(value) => {
                this.onChangeText('text', value)
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
              onChangeText={(value) => {
                this.onChangeText('password', value)
              }}
              value={this.state.password}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={placeholders![1]}
            />
          </View>
        )}
      </View>
    )
  }
  render() {
    const { title, onAnimationEnd, message } = this.props
    const styles = this.props.styles!
    const actions = this.getActions()
    return (
      <RCModal
        visible={this.state.visible}
        animationType={'fade'}
        maskClosable={true}
        onClose={this.onClose}
        onAnimationEnd={onAnimationEnd}
      >
        <Dialog title={title} actions={actions} onClose={this.onClose}>
          <KeyboardAvoidingView behavior="padding">
            {message && <Text style={styles.message}>{message}</Text>}
            {this.renderInputs()}
          </KeyboardAvoidingView>
        </Dialog>
      </RCModal>
    )
  }
}
