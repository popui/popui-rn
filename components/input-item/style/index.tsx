import { StyleSheet } from 'react-native'
import themeVars from '../../style/themes/default'

export default {
  container: {
    height: themeVars.list_item_height + themeVars.border_width_sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeVars.border_color_base,
    marginLeft: themeVars.h_spacing_lg,
    paddingRight: themeVars.h_spacing_lg,
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: themeVars.h_spacing_sm,
    textAlignVertical: 'center',
    fontSize: themeVars.font_size_heading,
    color: themeVars.color_text_base,
  },
  input: {
    flex: 1,
    height: themeVars.list_item_height,
    backgroundColor: 'transparent',
    fontSize: themeVars.input_font_size,
    color: themeVars.color_text_base,
  },
  inputErrorColor: {
    color: '#f50',
  },
  clear: {
    backgroundColor: themeVars.color_icon_base,
    borderRadius: 15,
    padding: 2,
  },
  extra: {
    marginLeft: themeVars.h_spacing_sm,
    fontSize: themeVars.font_size_subhead,
    color: themeVars.color_text_caption,
  },
  errorIcon: {
    marginLeft: themeVars.h_spacing_sm,
    width: themeVars.icon_size_sm,
    height: themeVars.icon_size_sm,
  },
}
