import { StyleSheet } from 'react-native';
import theme from '../../style/themes/default';

export default {
  underlayColor: {
    backgroundColor: theme.fill_tap,
  },
  Header: {
    fontSize: theme.font_size_base,
    color: theme.color_text_caption,
    paddingHorizontal: theme.h_spacing_lg,
    paddingTop: theme.v_spacing_lg,
    paddingBottom: theme.v_spacing_md,
    backgroundColor: theme.fill_body,
  },
  Footer: {
    fontSize: theme.font_size_base,
    color: theme.color_text_caption,
    paddingHorizontal: theme.h_spacing_lg,
    paddingVertical: theme.v_spacing_md,
    backgroundColor: theme.fill_body,
  },
  Body: {
    backgroundColor: theme.fill_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: theme.border_color_base,
  },
  BodyBottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: theme.fill_base,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.border_color_base,
  },
  Item: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: theme.h_spacing_lg,
    backgroundColor: theme.fill_base,
  },
  Line: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.h_spacing_lg,
    paddingVertical: theme.v_spacing_sm,
    minHeight: theme.list_item_height,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.border_color_base,
  },
  Thumb: {
    width: theme.icon_size_md,
    height: theme.icon_size_md,
    marginRight: theme.h_spacing_lg,
  },
  Content: {
    color: theme.color_text_base,
    fontSize: theme.font_size_heading,
    textAlignVertical: 'center',
  },
  Extra: {
    color: theme.color_text_caption,
    fontSize: theme.font_size_heading,
    textAlign: 'right',
    textAlignVertical: 'center',
  },
  Brief: {
    minHeight: theme.font_size_icontext,
  },
  BriefText: {
    color: theme.color_text_caption,
    fontSize: theme.font_size_subhead,
    paddingTop: theme.v_spacing_xs,
    textAlignVertical: 'center',
  },
  Arrow: {
    width: 8,
    height: 13,
    marginLeft: theme.h_spacing_md,
    marginTop: theme.v_spacing_xs,
  },
  ArrowV: {
    width: 13,
    height: 8,
    marginLeft: theme.h_spacing_md,
  },
  multipleLine: {
    paddingVertical: theme.v_spacing_sm,
  },
  multipleThumb: {
    width: theme.icon_size_lg,
    height: theme.icon_size_lg,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
}
