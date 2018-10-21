import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export const vars = variables;

export interface ActionSheetStyle {
  container: ViewStyle;
  wrap: ViewStyle;
  content: ViewStyle;
  mask: ViewStyle;
  title: ViewStyle;
  titleText: TextStyle;
  message: ViewStyle;
  btn: ViewStyle;
  cancelBtn: ViewStyle;
  cancelBtnMask: ViewStyle;
  destructiveBtn: TextStyle;
}

export default StyleSheet.create<any>({
  container: {
    zIndex: vars.action_sheet_zindex,
  },
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: themeVars.fill_base,
  },
  mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: themeVars.fill_mask,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: themeVars.h_spacing_lg,
    marginBottom: themeVars.h_spacing_lg,
  },
  titleText: {
    fontWeight: '500',
  },
  message: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: themeVars.h_spacing_lg,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: themeVars.actionsheet_item_height,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: themeVars.border_color_base,
    backgroundColor: 'white',
  },
  cancelBtn: {
    marginTop: themeVars.v_spacing_md,
    position: 'relative',
  },
  cancelBtnMask: {
    position: 'absolute',
    top: -themeVars.v_spacing_md,
    left: 0,
    right: 0,
    height: themeVars.v_spacing_md,
    backgroundColor: themeVars.fill_grey,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: themeVars.border_color_base,
  },
  destructiveBtn: {
    color: themeVars.brand_error,
    fontSize: themeVars.actionsheet_item_font_size,
  },
});
