import { ViewStyle,StyleSheet } from 'react-native';
import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export interface ICheckboxStyle {
  wrapper: ViewStyle;
  checkbox: ViewStyle;
  disabled: ViewStyle;
  icon: ViewStyle;
  iconRight: ViewStyle;
  agreeItem: ViewStyle;
  agreeItemCheckbox: ViewStyle;
  checkboxItemCheckbox: ViewStyle;
}

export default {
  wrapper: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
    paddingTop: 13 * 0.5,
    paddingBottom: 13 * 0.5,
    paddingLeft: 15,
    paddingRight: 15
  },
  checkbox:{
    marginLeft: themeVars.h_spacing_lg,
    marginRight: themeVars.h_spacing_md,
  },
  disabled: {
    backgroundColor: "#E1E1E1"
  },
  // checkboxItemCheckbox: {
  //   marginRight: themeVars.h_spacing_md,
  //   alignSelf: 'center',
  // },
};
