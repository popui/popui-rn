import variables from '../../style/themes/default';
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
    zIndex: variables.toast_zindex,
  },
  innerContainer: {
    backgroundColor: 'transparent',
  },
  innerWrap: {
    alignItems: 'center',
    backgroundColor: variables.toast_fill,
  },
  iconToast: {
    borderRadius: variables.radius_md,
    padding: variables.v_spacing_lg,
    minWidth: 121.6,
    minHeight:121.6
  },
  textToast: {
    borderRadius: variables.radius_sm,
    paddingVertical: variables.v_spacing_md,
    paddingHorizontal: variables.v_spacing_lg,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: variables.v_spacing_md,
  },
  toastIcon: {
    marginTop: 7,
    color: variables.color_text_base_inverse,
    fontSize: 55,
    textAlign: 'center'
  },
  toastImage: {
    marginTop: 15,
    width: variables.icon_size_lg,
    height: variables.icon_size_lg,
    marginBottom: 15,
  },
  toastContent: {
    color: variables.color_text_base_inverse,
    fontSize: variables.font_size_base,
    textAlign: 'center'
  },
  toastLoading: {
    marginTop: 15,
    marginBottom: 15
  }
};
