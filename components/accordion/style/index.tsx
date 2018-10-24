import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import themeVars from '../../style/themes/default';

export interface AccordionStyle {
  container: ViewStyle;
  header: ViewStyle;
  arrow: ViewStyle;
  headerWrap: ViewStyle;
  headerText: TextStyle;
  content: ViewStyle;
  contentText: TextStyle;
}

// wait for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/18278
// them below any and change to IAccordionStyle
export default StyleSheet.create<any>({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: themeVars.border_color_base,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: themeVars.h_spacing_lg,
    paddingRight: 2 * themeVars.h_spacing_lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeVars.border_color_base,
  },
  arrow: {
    width: 12,
    height: 12,
  },
  headerWrap: {
    flex: 1,
    height: themeVars.list_item_height,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: themeVars.color_text_base,
    fontSize: themeVars.font_size_heading,
  },
  content: {
    paddingVertical: themeVars.v_spacing_md,
    paddingHorizontal: themeVars.h_spacing_md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeVars.border_color_base,
  },
  contentText: {
    fontSize: themeVars.font_size_subhead,
    color: themeVars.color_text_paragraph,
  },
});
