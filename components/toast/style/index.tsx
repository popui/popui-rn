import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';

export interface IToastStyle {
  container: ViewStyle
  innerContainer: ViewStyle
  innerWrap: ViewStyle
  iconToast: ViewStyle
  textToast: ViewStyle
  content: TextStyle
  toastContent: TextStyle
  toastImage: ImageStyle
  centering: ViewStyle
  toastLoading: ViewStyle
  toastIcon: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<IToastStyle>({
    container: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? 64 : 54,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: theme.toast_zindex,
    },
    innerContainer: {
      backgroundColor: 'transparent',
    },
    innerWrap: {
      alignItems: 'center',
      backgroundColor: theme.toast_fill,
    },
    iconToast: {
      borderRadius: theme.radius_md,
      padding: theme.v_spacing_lg,
      minWidth: 121.6,
      minHeight: 121.6,
    },
    textToast: {
      borderRadius: theme.radius_sm,
      paddingVertical: theme.v_spacing_md,
      paddingHorizontal: theme.v_spacing_lg,
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.v_spacing_md,
    },
    toastIcon: {
      marginTop: 7,
      color: theme.color_text_base_inverse,
      fontSize: 55,
      textAlign: 'center',
    },
    toastImage: {
      marginTop: 15,
      width: theme.icon_size_lg,
      height: theme.icon_size_lg,
      marginBottom: 15,
    },
    toastContent: {
      color: theme.color_text_base_inverse,
      fontSize: theme.font_size_base,
      textAlign: 'center',
    },
    toastLoading: {
      marginTop: 15,
      marginBottom: 15,
    },
  });
