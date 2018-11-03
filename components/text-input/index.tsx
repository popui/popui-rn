import React from 'react'
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { TextInputProps } from './PropsType'
import InputItemStyle from './style/index'
import WeuiIcon from '../weui-icon'

const InputItemStyles = StyleSheet.create<any>(InputItemStyle)
import { noopFunc } from '../_util/noop'
import { hitSlop } from '../_util/touch'

export default class PopTextInput extends React.Component<TextInputProps, any> {
  displayName: 'PopTextInput'
  static defaultProps = {
    onChangeText: noopFunc,
    onBlur: noopFunc,
    onFocus: noopFunc,
    clear: false,
    onClearPress: noopFunc,
    styles: InputItemStyles,
    placeholderTextColor: '#B2B2B2',
  }
  inputRef: RNTextInput | null
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus()
    }
  }

  clear = () => {
    if (this.inputRef) {
      this.inputRef.clear()
    }
  }
  isFocused = () => {
    if (this.inputRef) {
      return this.inputRef.isFocused()
    }
    return false
  }
  getValueProps = () => {
    const { value, defaultValue } = this.props
    let valueProps
    if ('value' in this.props) {
      valueProps = {
        value: value || '',
      }
    } else {
      valueProps = {
        defaultValue,
      }
    }
    // console.log('getValueProps',{
    //   valueProps
    // })
    return valueProps
  }
  onClearPress = () => {
    const { onClearPress } = this.props
    if (onClearPress) {
      onClearPress()
    }
  }
  renderClearView = () => {
    const { clear, styles, value } = this.props
    if (Platform.OS === 'ios') {
      return null
    }
    /* 只在有 value 的 受控模式 下展示 自定义的 clear 按钮 */
    if (!value || !clear) {
      return null
    }
    // ios 原生的 clear 在focus 的情况下, 需要点击外面一次取消focus, 再点一次才能正常操作, 容易造成误解. 因此这里全部都使用 独立渲染的 clear 按钮, 显示与否跟是否 focus 无关.
    if (clear) {
      return (
        <TouchableOpacity
          style={styles.clear}
          onPress={this.onClearPress}
          hitSlop={hitSlop}
        >
          <WeuiIcon name="clear" />
        </TouchableOpacity>
      )
    }
    return null
  }

  render() {
    const { clear, styles, style, inputStyle, ...restProps } = this.props
    const valueProps = this.getValueProps()
    return (
      <View style={[styles!.container, style]}>
        <RNTextInput
          style={[styles!.input, inputStyle]}
          ref={el => ((this.inputRef as any) = el)}
          clearButtonMode={'none'}
          underlineColorAndroid="transparent"
          {...restProps}
          {...valueProps}
        />
        {this.renderClearView()}
      </View>
    )
  }
}
