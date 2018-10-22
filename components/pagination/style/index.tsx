import { TextStyle, ViewStyle } from 'react-native';
import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export interface IPaginationStyle {
  container: ViewStyle;
  numberStyle: ViewStyle;
  totalStyle: TextStyle;
  activeTextStyle: TextStyle;
  indicatorStyle: ViewStyle;
  pointStyle: ViewStyle;
  pointActiveStyle: ViewStyle;
  spaceStyle: ViewStyle;
}

export default {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  totalStyle: {
    fontSize: 18,
    color: themeVars.color_text_base,
  },
  activeTextStyle: {
    fontSize: 18,
    color: themeVars.color_link,
  },
  indicatorStyle: {
    flexDirection: 'row',
  },
  pointStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: themeVars.input_color_icon,
  },
  pointActiveStyle: {
    backgroundColor: '#888',
  },
  spaceStyle: {
    marginHorizontal: themeVars.h_spacing_sm / 2,
    marginVertical: themeVars.v_spacing_sm / 2,
  },
};
