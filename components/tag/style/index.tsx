import themeVars from '../../style/themes/default'
import { TextStyle, ViewStyle } from 'react-native'

export interface ITagStyle {
  tag: ViewStyle
  wrap: ViewStyle
  wrapSmall: ViewStyle
  text: TextStyle
  textSmall: TextStyle
  normalWrap: ViewStyle
  normalText: TextStyle
  activeWrap: ViewStyle
  activeText: TextStyle
  disabledWrap: ViewStyle
  disabledText: TextStyle
  close: ViewStyle
  closeIOS: ViewStyle
  closeAndroid: ViewStyle
  closeText: TextStyle
  closeTransform: ViewStyle
}

export default {
  tag: {
    borderRadius: themeVars.radius_sm,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    overflow: 'visible',
  },
  wrap: {
    overflow: 'hidden',
    borderRadius: themeVars.radius_sm,
    borderWidth: themeVars.border_width_sm,
    borderStyle: 'solid',
    paddingVertical: themeVars.v_spacing_sm,
    paddingHorizontal: themeVars.h_spacing_lg,
  },
  wrapSmall: {
    paddingVertical: 1.5,
    paddingHorizontal: themeVars.h_spacing_sm,
  },
  text: {
    fontSize: themeVars.button_font_size_sm,
    textAlign: 'center',
  },
  textSmall: {
    fontSize: themeVars.font_size_icontext,
  },
  normalWrap: {
    backgroundColor: themeVars.fill_base,
    borderColor: themeVars.border_color_base,
  },
  normalText: {
    color: themeVars.color_text_caption,
  },
  activeWrap: {
    backgroundColor: themeVars.fill_base,
    borderColor: themeVars.brand_primary,
  },
  activeText: {
    color: themeVars.color_link,
  },
  disabledWrap: {
    backgroundColor: themeVars.fill_disabled,
    borderWidth: 0,
  },
  disabledText: {
    color: themeVars.color_text_disabled,
  },
  close: {
    position: 'absolute',
    backgroundColor: themeVars.color_text_placeholder,
  },
  closeIOS: {
    borderRadius: 8,
    width: 16,
    height: 16,
    left: -5,
    top: -4,
    overflow: 'hidden',
  },
  closeAndroid: {
    width: 16,
    height: 32,
    left: -2,
    top: -10,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  closeText: {
    color: themeVars.color_text_base_inverse,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 18,
  },
  closeTransform: {
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
}
