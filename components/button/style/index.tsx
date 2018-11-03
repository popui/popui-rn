import themeVars from '../../style/themes/default'
import { ViewStyle } from 'react-native'

export default {
  container: {
    flexDirection: 'row',
  } as ViewStyle,
  defaultHighlight: {
    backgroundColor: themeVars.fill_tap,
    borderColor: themeVars.border_color_base,
  },
  primaryHighlight: {
    backgroundColor: themeVars.primary_button_fill_tap,
    borderColor: themeVars.primary_button_fill,
  },
  ghostHighlight: {
    backgroundColor: 'transparent',
    borderColor: themeVars.ghost_button_fill_tap,
  },
  warningHighlight: {
    backgroundColor: themeVars.warning_button_fill_tap,
    borderColor: themeVars.warning_button_fill,
  },
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: themeVars.radius_md,
    borderWidth: 1,
  },
  largeRaw: {
    height: themeVars.button_height,
    paddingLeft: themeVars.h_spacing_lg,
    paddingRight: themeVars.h_spacing_lg,
  },
  smallRaw: {
    height: themeVars.button_height_sm,
    paddingLeft: themeVars.h_spacing_sm,
    paddingRight: themeVars.h_spacing_sm,
  },
  defaultRaw: {
    backgroundColor: themeVars.fill_base,
    borderColor: themeVars.border_color_base,
  },
  primaryRaw: {
    backgroundColor: themeVars.primary_button_fill,
    borderColor: themeVars.primary_button_fill,
  },
  ghostRaw: {
    backgroundColor: 'transparent',
    borderColor: themeVars.ghost_button_color,
  },
  warningRaw: {
    backgroundColor: themeVars.warning_button_fill,
    borderColor: themeVars.warning_button_fill,
  },
  defaultDisabledRaw: {
    backgroundColor: themeVars.fill_disabled,
    borderColor: themeVars.fill_disabled,
  },
  primaryDisabledRaw: {
    opacity: 0.4,
  },
  ghostDisabledRaw: {
    borderColor: `${themeVars.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  warningDisabledRaw: {
    opacity: 0.4,
  },
  defaultHighlightText: {
    color: themeVars.color_text_base,
  },
  primaryHighlightText: {
    color: `${themeVars.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  ghostHighlightText: {
    color: themeVars.ghost_button_fill_tap,
  },
  warningHighlightText: {
    color: `${themeVars.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  largeRawText: {
    fontSize: themeVars.button_font_size,
  },
  smallRawText: {
    fontSize: themeVars.button_font_size_sm,
  },
  defaultRawText: {
    color: themeVars.color_text_base,
  },
  primaryRawText: {
    color: themeVars.color_text_base_inverse,
  },
  ghostRawText: {
    color: themeVars.ghost_button_color,
  },
  warningRawText: {
    color: themeVars.color_text_base_inverse,
  },
  defaultDisabledRawText: {
    color: `${themeVars.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  primaryDisabledRawText: {
    color: `${themeVars.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  ghostDisabledRawText: {
    color: `${themeVars.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  warningDisabledRawText: {
    color: `${themeVars.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
  },
  indicator: {
    marginRight: themeVars.h_spacing_md,
  },
}
