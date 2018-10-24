/* tslint:disable:jsx-no-multiline-js */
import PropTypes from 'prop-types';
import React from 'react';

import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  TouchableOpacity
} from 'react-native';
import { getComponentLocale } from '../_util/getLocale';
import { defaultProps, SearchBarPropsType, SearchBarState } from './PropsType';
import SearchBarStyle, { ISearchBarStyle } from './style/index';
import WeuiIcon from '../weui-icon'

export interface SearchBarNativeProps extends SearchBarPropsType {
  styles: ISearchBarStyle;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void;
  style?: StyleProp<TextStyle>;
}

const SearchBarStyles = StyleSheet.create<any>(SearchBarStyle);


export default class SearchBar extends React.Component<
  SearchBarNativeProps,
  SearchBarState
> {
  static defaultProps = {
    ...defaultProps,
    styles: SearchBarStyles,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  inputRef: TextInput | null;

  constructor(props: SearchBarNativeProps) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      value = '';
    }
    this.state = {
      value,
      focus: false,
    };
  }

  componentWillReceiveProps(nextProps: SearchBarNativeProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onSubmit = (_: { nativeEvent: { text: string } }) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value || '');
    }
  }

  onChangeText = (value: string) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  onCancelPress = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value || '');
    }else{
      // 默认是clear
      this.onClear()
    }
  }

  onFocus = () => {
    this.setState({
      focus: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur = () => {
    this.setState({
      focus: false,
    });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onClear = ()=>{
    this.setState({
      value:''
    })
  }
  render() {
    const {
      clearButtonMode,
      styles,
      value: propsValue,
      cancelText,
      onChangeText,
      onChange,
      disabled,
      style,
      ...restProps
    } = this.props;

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      this.context,
      'SearchBar',
      () => require('./locale/zh_CN'),
    );

    const { value, focus } = this.state;
    // tslint:disable-next-line:variable-name
    let _showCancelButton =  false;
    switch(clearButtonMode){
      case 'always':
        _showCancelButton = true;
        break;
      case 'never':
        _showCancelButton = false;
        break;
      case 'while-editing':
      default:
        _showCancelButton = !!focus;
        break;
    }

    return (
      <View style={styles.wrapper}>
        <View style={styles.searchOuter}>
          <View style={styles.searchInner}>
                <WeuiIcon name="search"/>
                <TextInput
                  clearButtonMode="never"
                  underlineColorAndroid="transparent"
                  editable={!disabled}
                  {...restProps}
                  style={[styles.searchInput, style]}
                  ref={el => ((this.inputRef as any) = el)}
                  value={value}
                  onChangeText={this.onChangeText}
                  onSubmitEditing={this.onSubmit}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  returnKeyType="search"
                  blurOnSubmit={true}
                />
                {value ? (
                    <Text onPress={this.onClear}>
                        <WeuiIcon name="clear"/>
                    </Text>
                ) : null}
            </View>
        </View>
        {_showCancelButton && (
          <TouchableOpacity 
            style={styles.cancelTextBtn} 
            onPress={this.onCancelPress}>
              <Text style={styles.cancelText}>
                {cancelText || _locale.cancelText}
              </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
