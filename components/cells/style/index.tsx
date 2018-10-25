import { StyleSheet } from 'react-native';
import themeVars from '../../style/themes/default';

export default {
  underlayColor: {
    backgroundColor: themeVars.fill_tap,
  },
  container: {
    marginTop: themeVars.CellsMarginTop,
    backgroundColor: themeVars.CellBg,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: themeVars.CellBorderColor,
  },
  body: {
    backgroundColor: themeVars.fill_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: themeVars.border_color_base,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeVars.border_color_base,
  }
};
