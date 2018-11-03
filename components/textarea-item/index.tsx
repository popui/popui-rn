/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import {
  StyleSheet,
  Text,
  TextInputProperties,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import themeVars from '../style/themes/default'
import { TextAreaItemPropsType } from './PropsType'
import TextAreaItemStyle, { ITextareaItemStyle } from './style/index'
// import TextInputControls from '../text-input-controls'
import get from 'lodash/get'
import TextInput from '../text-input'

export interface TextareaItemNativeProps
  extends TextAreaItemPropsType,
    TextInputProperties {
  last?: boolean
  onContentSizeChange?: (e: any) => void
  styles?: ITextareaItemStyle
}

const TextAreaItemStyles = StyleSheet.create<any>(TextAreaItemStyle)

export default class TextAreaItem extends React.Component<
  TextareaItemNativeProps,
  any
> {
  static defaultProps = {
    onChange() {},
    onFocus() {},
    onBlur() {},
    onErrorPress() {},
    clear: false,
    error: false,
    editable: true,
    rows: 4,
    count: 0,
    keyboardType: 'default',
    autoHeight: false,
    last: false,
    styles: TextAreaItemStyles,
  }
  inputRef: TextInput | null
  constructor(props: TextareaItemNativeProps) {
    super(props)
    this.state = {
      // value:props.defaultValue || props.value,
      inputCount: 0,
      height:
        props.rows !== undefined && props.rows > 1
          ? 6 * props.rows * 4
          : themeVars.list_item_height,
    }
  }
  // static getDerivedStateFromProps(nextProps:TextareaItemNativeProps, prevState:any){
  //   if(nextProps.value !== prevState.value){
  //     return {
  //       value: fixControlledValue(nextProps.value)
  //     }
  //   }
  //   return null
  // }
  onChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = event.nativeEvent.text
    const { onChange } = this.props
    this.setState({
      // value:text,
      inputCount: text.length,
    })

    if (onChange) {
      onChange(event)
    }
  }
  onClearPress = () => {
    // if (this.inputRef) {
    //   this.inputRef.clear();
    // }
    // this.setState({
    //   value:'',
    //   inputCount:0
    // })
    const { onClearPress } = this.props
    if (onClearPress) {
      onClearPress()
    }
  }
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus()
    }
  }
  onContentSizeChange = (event: {
    nativeEvent: { contentSize: { width: number; height: number } }
  }) => {
    let height
    const { autoHeight, onContentSizeChange } = this.props
    const rows = this.props.rows as number
    if (autoHeight) {
      height = get(event, 'nativeEvent.contentSize.height')
    } else if (rows > 1) {
      height = 6 * rows * 4
    } else {
      height = themeVars.list_item_height
    }
    this.setState({
      height,
    })
    if (onContentSizeChange) {
      onContentSizeChange(event)
    }
  }
  renderCountView = () => {
    const { inputCount } = this.state
    const { rows, count, styles } = this.props
    if (rows! > 1 && count! > 0) {
      return (
        <View style={styles!.count}>
          <Text style={styles!.countText}>
            {inputCount} / {count}
          </Text>
        </View>
      )
    }
    return null
  }

  renderInputView = () => {
    const {
      rows,
      error,
      clear,
      count,
      autoHeight,
      last,
      onErrorPress,
      styles,
      style,
      ...restProps
    } = this.props
    const textareaStyle = {
      color: error ? '#f50' : themeVars.color_text_base,
      paddingRight: error ? 2 * themeVars.h_spacing_lg : 0,
    }
    const maxLength = count! > 0 ? count : undefined
    const inputStyle = [
      styles!.input,
      textareaStyle,
      { height: Math.max(45, this.state.height) },
      style,
    ]
    return (
      <TextInput
        ref={el => (this.inputRef = el)}
        {...restProps}
        clearButtonMode={'never'}
        style={inputStyle}
        onChange={this.onChange}
        onContentSizeChange={this.onContentSizeChange}
        multiline={rows! > 1 || autoHeight}
        numberOfLines={rows}
        maxLength={maxLength}
      />
    )
  }
  renderRightBottomView = () => {
    const { error, clear, styles, onErrorPress } = this.props
    return (
      <View style={styles!.rightBottom}>
        {/* <TextInputControls
          clear={clear}
          error={error}
          extra={this.renderCountView()}
          onErrorPress={onErrorPress}
          onClearPress={this.onClearPress}
        /> */}
      </View>
    )
  }
  render() {
    const { error, last, styles } = this.props
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
      borderBottomColor: themeVars.border_color_base,
      // borderBottomColor: error ? 'red' : themeVars.border_color_base,
    }
    return (
      <View
        style={[styles!.container, containerStyle, { position: 'relative' }]}
      >
        {this.renderInputView()}
        {this.renderRightBottomView()}
      </View>
    )
  }
}
