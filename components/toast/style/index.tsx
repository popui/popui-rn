import themeVars from '../../style/themes/default';
import { Platform, ViewStyle, ImageStyle, TextStyle } from 'react-native';

export interface IToastStyle {
  container: ViewStyle;
  innerContainer: ViewStyle;
  innerWrap: ViewStyle;
  iconToast: ViewStyle;
  textToast: ViewStyle;
  content: TextStyle;
  toastContent:TextStyle;
  toastImage: ImageStyle;
  centering: ViewStyle;
  toastLoading:ViewStyle
  toastIcon:ViewStyle
}

export default {
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 64 : 54,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: themeVars.toast_zindex,
  },
  innerContainer: {
    backgroundColor: 'transparent',
  },
  innerWrap: {
    alignItems: 'center',
    backgroundColor: themeVars.toast_fill,
  },
  iconToast: {
    borderRadius: themeVars.radius_md,
    padding: themeVars.v_spacing_lg,
    minWidth: 121.6,
    minHeight:121.6
  },
  textToast: {
    borderRadius: themeVars.radius_sm,
    paddingVertical: themeVars.v_spacing_md,
    paddingHorizontal: themeVars.v_spacing_lg,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: themeVars.v_spacing_md,
  },
  toastIcon: {
    marginTop: 7,
    color: themeVars.color_text_base_inverse,
    fontSize: 55,
    textAlign: 'center'
  },
  toastImage: {
    marginTop: 15,
    width: themeVars.icon_size_lg,
    height: themeVars.icon_size_lg,
    marginBottom: 15,
  },
  toastContent: {
    color: themeVars.color_text_base_inverse,
    fontSize: themeVars.font_size_base,
    textAlign: 'center'
  },
  toastLoading: {
    marginTop: 15,
    marginBottom: 15
  }
};
