import themeVars from '../../style/themes/default'
import { ViewStyle, TextStyle, StyleSheet } from 'react-native'

export interface ISearchBarStyle {
  wrapper: ViewStyle
  searchOuter: ViewStyle
  searchInner: ViewStyle
  searchInput: ViewStyle
  clearIcon: ViewStyle
  cancelTextBtn: ViewStyle
  cancelText: TextStyle
}
const wrapperPaddingLeft = themeVars.h_spacing_md
const searchInnerPaddingLeft = 15 - themeVars.h_spacing_md

export default {
  wrapper: {
    backgroundColor: themeVars.search_bar_fill,
    height: themeVars.search_bar_height,
    paddingLeft: wrapperPaddingLeft,
    paddingRight: wrapperPaddingLeft,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchOuter: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E6E6EA',
    borderRadius: 5,
  },
  searchInner: {
    position: 'relative',
    paddingLeft: searchInnerPaddingLeft,
    paddingRight: searchInnerPaddingLeft,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 5,
    height: 20,
    fontSize: 14,
    flex: 1,
  },
  clearIcon: {},
  cancelTextBtn: {
    height: themeVars.search_bar_input_height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: themeVars.font_size_base,
    color: themeVars.color_link,
    paddingLeft: 10,
  },
}
