import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';

export interface SearchBarStyle {
  wrapper: ViewStyle
  searchOuter: ViewStyle
  searchInner: ViewStyle
  searchInput: ViewStyle
  clearIcon: ViewStyle
  cancelTextBtn: ViewStyle
  cancelText: TextStyle
}


export default (theme: Theme) =>{
  const wrapperPaddingLeft = theme.h_spacing_md
const searchInnerPaddingLeft = 15 - theme.h_spacing_md
  return   StyleSheet.create<SearchBarStyle>({
    wrapper: {
      backgroundColor: theme.search_bar_fill,
      height: theme.search_bar_height,
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
      height: theme.search_bar_input_height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelText: {
      fontSize: theme.font_size_base,
      color: theme.color_link,
      paddingLeft: 10,
    },
  });
}

