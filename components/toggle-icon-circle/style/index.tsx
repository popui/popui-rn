import themeVars from '../../style/themes/default';
import { ViewStyle, TextStyle } from 'react-native';

export interface ToggleIconCircleStyle {
  wrapper: ViewStyle;
  icon: ViewStyle;
  radioItem: ViewStyle;
  radioItemRadio: ViewStyle;
  radioItemContent: TextStyle;
  radioItemContentDisable: TextStyle;
}

export default {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: themeVars.icon_size_xxs,
    height: themeVars.icon_size_xxs * 0.8,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioItemRadio: {
    marginLeft: themeVars.h_spacing_lg,
    marginRight: themeVars.h_spacing_md,
  },
  radioItemContent: {
    color: themeVars.color_text_base,
    fontSize: themeVars.font_size_heading,
  },
  radioItemContentDisable: {
    color: themeVars.color_text_disabled,
  },
};
