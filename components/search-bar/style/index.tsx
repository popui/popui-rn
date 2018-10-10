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
const searchInnerPaddingLeft = 15 - variables.h_spacing_md

export default {
  wrapper: {
    backgroundColor: variables.search_bar_fill,
    height: variables.search_bar_height,
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
clearIcon:{

},
  cancelTextContainer: {
    height: variables.search_bar_input_height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: variables.font_size_base,
    color: variables.color_link,
    paddingLeft: 10,
  }
};
