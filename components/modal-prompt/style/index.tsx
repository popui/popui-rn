import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import theme from '../../style/themes/default'

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
    marginTop: theme.v_spacing_lg,
    color: theme.color_text_caption,
    fontSize: theme.font_size_base,
    textAlign: 'center',
  },
  inputGroup: {
    marginTop: theme.v_spacing_md,
    flexDirection: 'column',
  },
  inputWrapper: {
    borderWidth: StyleSheet.hairlineWidth,
    borderTopWidth: 0,
    borderColor: theme.border_color_base,
  },
  input: {
    height: 36,
    fontSize: theme.font_size_base,
    paddingHorizontal: theme.h_spacing_sm,
    paddingVertical: 0,
  },
  inputFirst: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: theme.radius_sm,
    borderTopRightRadius: theme.radius_sm,
  },
  inputLast: {
    borderBottomLeftRadius: theme.radius_sm,
    borderBottomRightRadius: theme.radius_sm,
  },
}
