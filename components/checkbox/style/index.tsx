import { ViewStyle } from 'react-native';
import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export interface ICheckboxStyle {
  wrapper: ViewStyle;
  icon: ViewStyle;
  iconRight: ViewStyle;
  agreeItem: ViewStyle;
  agreeItemCheckbox: ViewStyle;
  checkboxItemCheckbox: ViewStyle;
}

export default {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: themeVars.icon_size_sm,
    height: themeVars.icon_size_sm,
  },
  iconRight: {
    marginLeft: themeVars.h_spacing_md,
  },
  agreeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeItemCheckbox: {
    marginLeft: themeVars.h_spacing_lg,
    marginRight: themeVars.h_spacing_md,
  },
  checkboxItemCheckbox: {
    marginRight: themeVars.h_spacing_md,
    alignSelf: 'center',
  },
};
