import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import themeVars from '../../style/themes/default'

export interface IPromptStyle {
  message: TextStyle
  inputGroup: ViewStyle
  inputWrapper: ViewStyle
  input: TextStyle
  inputFirst: ViewStyle
  inputLast: ViewStyle
}

export default {
  message: {
    marginTop: themeVars.v_spacing_lg,
    color: themeVars.color_text_caption,
    fontSize: themeVars.font_size_base,
    textAlign: 'center',
  },
  inputGroup: {
    marginTop: themeVars.v_spacing_md,
    flexDirection: 'column',
  },
  inputWrapper: {
    borderWidth: StyleSheet.hairlineWidth,
    borderTopWidth: 0,
    borderColor: themeVars.border_color_base,
  },
  input: {
    height: 36,
    fontSize: themeVars.font_size_base,
    paddingHorizontal: themeVars.h_spacing_sm,
    paddingVertical: 0,
  },
  inputFirst: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: themeVars.radius_sm,
    borderTopRightRadius: themeVars.radius_sm,
  },
  inputLast: {
    borderBottomLeftRadius: themeVars.radius_sm,
    borderBottomRightRadius: themeVars.radius_sm,
  },
}
