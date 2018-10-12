/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProperties,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity
} from 'react-native';
import variables from '../style/themes/default';
import { TextAreaItemPropsType } from './PropsType';
import TextAreaItemStyle, { ITextareaItemStyle } from './style/index';
import { Omit } from '../_util/types';
import IconWeui from '../icon-weui'


export type TextInputProps = Omit<
  TextInputProperties,
  'onChange' | 'onFocus' | 'onBlur'
  >;
function fixControlledValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

export interface TextareaItemNativeProps
  extends TextAreaItemPropsType,
  TextInputProps {
  last?: boolean;
  onContentSizeChange?: (e: any) => void;
  styles?: ITextareaItemStyle;
}

const TextAreaItemStyles = StyleSheet.create<any>(TextAreaItemStyle);

export default class TextAreaItem extends React.Component<
  TextareaItemNativeProps,
  any
  > {
  static defaultProps = {
    onChange() { },
    onFocus() { },
    onBlur() { },
    onErrorPress() { },
    clear: true,
    error: false,
    editable: true,
    rows: 1,
    count: 0,
    keyboardType: 'default',
    autoHeight: false,
    last: false,
    styles: TextAreaItemStyles,
  };

  constructor(props: TextareaItemNativeProps) {
    super(props);
    this.state = {
      inputCount: 0,
      height:
        props.rows !== undefined && props.rows > 1
          ? 6 * props.rows * 4
          : variables.list_item_height,
    };
  }

  onChange = (event: {
    nativeEvent: {
      text: string;
      contentSize: { width: number; height: number };
      target: number;
      eventCount: number;
    };
  }) => {
    const text = event.nativeEvent.text;
    const { onChange } = this.props;

    this.setState({
      inputCount: text.length,
    });

    if (onChange) {
      onChange(text);
    }
  }

  onContentSizeChange = (event: {
    nativeEvent: { contentSize: { width: number; height: number } };
  }) => {
    let height;
    const { autoHeight, onContentSizeChange } = this.props;
    const rows = this.props.rows as number;
    if (autoHeight) {

      console.log("text area onContentSizeChange", {
        event
      })
      height = event.nativeEvent.contentSize.height;
    } else if (rows > 1) {
      height = 6 * rows * 4;
    } else {
      height = variables.list_item_height;
    }

    this.setState({
      height,
    });

    if (onContentSizeChange) {
      onContentSizeChange(event);
    }
  }
  onInputClear =()=>{
    
  }
  renderClearView = () => {
    const {
      clear,
      editable,
      styles,
      value
    } = this.props;
    /* 只在有 value 的 受控模式 下展示 自定义的 clear 按钮 */
    // ios 原生的 clear 在focus 的情况下, 需要点击外面一次取消focus, 再点一次才能正常操作, 容易造成误解. 因此这里全部都使用 独立渲染的 clear 按钮, 显示与否跟是否 focus 无关. 
    if (editable && clear && value) {
      return (<TouchableOpacity
        style={[styles!.clear]}
        onPress={this.onInputClear}
        hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
      >
        <IconWeui name="clear" />
      </TouchableOpacity>)
    }
    return null
  }
  renderCountView = () => {
    const { inputCount } = this.state;
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
  renderErrorView = () => {
    const {
      styles,
      onErrorPress
    } = this.props;
    return (<TouchableOpacity onPress={onErrorPress}
      style={styles!.errorIcon}>
      <IconWeui name="warn" />
    </TouchableOpacity>)
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
    } = this.props;
    const { value, defaultValue } = restProps;
    let valueProps;
    if ('value' in this.props) {
      valueProps = {
        value: fixControlledValue(value),
      };
    } else {
      valueProps = {
        defaultValue,
      };
    }

    const textareaStyle = {
      color: error ? '#f50' : variables.color_text_base,
      paddingRight: error ? 2 * variables.h_spacing_lg : 0,
    };

    const maxLength = count! > 0 ? count : undefined;
    const inputStyle = [
      styles!.input,
      textareaStyle,
      { height: Math.max(45, this.state.height) },
      style,
    ]
    return (
      <TextInput
        clearButtonMode={'never'}
        underlineColorAndroid="transparent"
        style={inputStyle}
        {...restProps}
        {...valueProps}
        onChange={this.onChange}
        onContentSizeChange={this.onContentSizeChange}
        multiline={rows! > 1 || autoHeight}
        numberOfLines={rows}
        maxLength={maxLength}
      />
    )
  }
  renderRightBottomView =()=>{
    const {
      error,
      clear,
      styles,
    } = this.props;
    return (
      <View style={styles!.rightBottom}>
        {clear && this.renderClearView()}
        {this.renderCountView()}
        {error && this.renderErrorView()}
      </View>
    )
  }
  render() {
    const {
      last,
      styles,
    } = this.props;
    const containerStyle = {
      borderBottomWidth: last ? 0 : variables.border_width_sm,
    };
    return (
      <View
        style={[styles!.container, containerStyle, { position: 'relative' }]}
      >
        {this.renderInputView()}
        {this.renderRightBottomView()}
      </View>
    );
  }
}
