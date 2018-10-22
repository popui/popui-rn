import { TextStyle, ViewStyle } from 'react-native';
import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export interface IActivityIndicatorStyle {
  container: ViewStyle;
  innerContainer: ViewStyle;
  wrapper: ViewStyle;
  tip: TextStyle;
  toast: TextStyle;
  spinner: ViewStyle;
}

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: themeVars.toast_zindex,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    borderRadius: themeVars.radius_md,
    backgroundColor: themeVars.toast_fill,
  },
  tip: {
    color: themeVars.color_text_base,
    fontSize: themeVars.font_size_base,
    marginLeft: themeVars.h_spacing_md,
  },
  toast: {
    color: themeVars.color_text_base_inverse,
    fontSize: themeVars.font_size_base,
    marginTop: themeVars.v_spacing_sm,
  },
  spinner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
