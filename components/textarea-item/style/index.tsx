import { ViewStyle, TextStyle } from 'react-native';
import themeVars from '../../style/themes/default';

export interface ITextareaItemStyle {
  container: ViewStyle;
  input: TextStyle;
  icon: ViewStyle;
  errorIcon: ViewStyle;
  count: ViewStyle;
  clear: ViewStyle;
  countText:TextStyle;
  rightBottom:ViewStyle;
}

export default {
  container: {
    borderBottomWidth: themeVars.border_width_sm,
    borderBottomColor: themeVars.border_color_base,
  },
  input: {
    paddingHorizontal: themeVars.h_spacing_md,
    backgroundColor: themeVars.fill_base,
    fontSize: themeVars.font_size_heading,
    lineHeight: Math.round(1.6 * themeVars.font_size_heading),
    textAlignVertical: 'top',
  },
  icon: {
    position: 'absolute',
    top: 8,
    width: themeVars.icon_size_xs,
    height: themeVars.icon_size_xs,
  },
  errorIcon: {
    position: 'absolute',
    right: 18,
    top: 12,
  },
  rightBottom:{
    position: 'absolute',
    right: themeVars.h_spacing_md,
    bottom: themeVars.h_spacing_md,
  },
  clear:{

  },
  count:{
    paddingLeft: 5,
  },
  countText:{
    color:"#B2B2B2",
  }
};
