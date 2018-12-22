import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import theme from '../../style/themes/default';

export interface AccordionStyle {
  container: ViewStyle
  header: ViewStyle
  arrow: ViewStyle
  headerWrap: ViewStyle
  headerText: TextStyle
  content: ViewStyle
  contentText: TextStyle
}

// wait for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/18278
// them below any and change to IAccordionStyle
export default StyleSheet.create<any>({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: theme.border_color_base,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.h_spacing_lg,
    paddingRight: 2 * theme.h_spacing_lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.border_color_base,
  },
  arrow: {
    width: 12,
    height: 12,
  },
  headerWrap: {
    flex: 1,
    height: theme.list_item_height,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: theme.color_text_base,
    fontSize: theme.font_size_heading,
  },
  content: {
    paddingVertical: theme.v_spacing_md,
    paddingHorizontal: theme.h_spacing_md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.border_color_base,
  },
  contentText: {
    fontSize: theme.font_size_subhead,
    color: theme.color_text_paragraph,
  },
})
