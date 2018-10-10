import variables from '../../style/themes/default';
import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native';

export interface ISearchBarStyle {
  input: TextStyle;
  inputWrapper: ViewStyle;
  wrapper: ViewStyle;
  cancelTextContainer: ViewStyle;
  cancelText: TextStyle;
  search: ImageStyle;
}
const wrapperPaddingLeft = variables.h_spacing_md
const inputIconPaddingLeft = variables.h_spacing_md
const inputPaddingLeft = variables.icon_size_xxs + inputIconPaddingLeft*2// 图标左右边距均为 h_spacing_md

export default {
  wrapper: {
    backgroundColor: variables.search_bar_fill,
    height: variables.search_bar_height,
    paddingLeft: wrapperPaddingLeft,
    paddingRight: wrapperPaddingLeft,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    borderRadius: variables.radius_md,
    backgroundColor: '#fff',
    borderColor: '#E6E6EA',
    borderWidth: StyleSheet.hairlineWidth,
    height: variables.search_bar_input_height,
    color: variables.color_text_base,
    fontSize: variables.font_size_base,
    paddingLeft: inputPaddingLeft,
    paddingRight:  inputPaddingLeft,
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  cancelTextContainer: {
    height: variables.search_bar_input_height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: variables.link_button_font_size,
    color: variables.color_link,
    paddingLeft: 10,
  },
  search: {
    tintColor: variables.input_color_icon,
    position: 'absolute',
    left: wrapperPaddingLeft + inputIconPaddingLeft, // input 外左边距(h_spacing_md) + input 内左边距(h_spacing_md)
    top: (variables.search_bar_height - variables.icon_size_xxs) / 2,
    width: variables.icon_size_xxs,
    height: variables.icon_size_xxs,
  },
};
