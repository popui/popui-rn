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
    alignItems: "center",
    paddingTop: 13 * 0.5,
    paddingBottom: 13 * 0.5,
    paddingLeft: 15,
    paddingRight: 15
  },
  checkbox:{
    marginRight: 5,
  },
  disabled: {
    backgroundColor: "#E1E1E1"
  },
  // agreeItem: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // agreeItemCheckbox: {
  //   marginLeft: themeVars.h_spacing_lg,
  //   marginRight: themeVars.h_spacing_md,
  // },
  // checkboxItemCheckbox: {
  //   marginRight: themeVars.h_spacing_md,
  //   alignSelf: 'center',
  // },
};
