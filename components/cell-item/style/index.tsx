import { StyleSheet } from 'react-native';
import themeVars from '../../style/themes/default';

export default {
  underlayColor: {
    backgroundColor: themeVars.BgColorActive,
  },
  Header: {
    fontSize: themeVars.font_size_base,
    color: themeVars.color_text_caption,
    paddingHorizontal: themeVars.h_spacing_lg,
    paddingTop: themeVars.v_spacing_lg,
    paddingBottom: themeVars.v_spacing_md,
    backgroundColor: themeVars.fill_body,
  },
  Footer: {
    fontSize: themeVars.font_size_base,
    color: themeVars.color_text_caption,
    paddingHorizontal: themeVars.h_spacing_lg,
    paddingVertical: themeVars.v_spacing_md,
    backgroundColor: themeVars.fill_body,
  },
  Body: {
    backgroundColor: themeVars.fill_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: themeVars.border_color_base,
  },
  BodyBottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: themeVars.fill_base,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeVars.border_color_base,
  },
  Item: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: themeVars.h_spacing_lg,
    backgroundColor: themeVars.fill_base,
  },
  Line: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: themeVars.h_spacing_lg,
    paddingVertical: themeVars.v_spacing_sm,
    minHeight: themeVars.list_item_height,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeVars.border_color_base,
  },
  Thumb: {
    width: themeVars.icon_size_md,
    height: themeVars.icon_size_md,
    marginRight: themeVars.h_spacing_lg,
  },
  Content: {
    color: themeVars.color_text_base,
    fontSize: themeVars.font_size_heading,
    textAlignVertical: 'center',
  },
  Extra: {
    color: themeVars.color_text_caption,
    fontSize: themeVars.font_size_heading,
    textAlign: 'right',
    textAlignVertical: 'center',
  },
  Brief: {
    minHeight: themeVars.font_size_icontext,
  },
  BriefText: {
    color: themeVars.color_text_caption,
    fontSize: themeVars.font_size_subhead,
    paddingTop: themeVars.v_spacing_xs,
    textAlignVertical: 'center',
  },
  Arrow: {
    width: 8,
    height: 13,
    marginLeft: themeVars.h_spacing_md,
    marginTop: themeVars.v_spacing_xs,
  },
  ArrowV: {
    width: 13,
    height: 8,
    marginLeft: themeVars.h_spacing_md,
  },
  multipleLine: {
    paddingVertical: themeVars.v_spacing_sm,
  },
  multipleThumb: {
    width: themeVars.icon_size_lg,
    height: themeVars.icon_size_lg,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
};
