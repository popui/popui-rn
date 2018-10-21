import { ViewStyle, TextStyle } from 'react-native';
import {themeStore} from '../../theme-store';
const { variables } = themeStore;

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
    borderBottomWidth: variables.border_width_sm,
    borderBottomColor: variables.border_color_base,
  },
  input: {
    paddingHorizontal: variables.h_spacing_md,
    backgroundColor: variables.fill_base,
    fontSize: variables.font_size_heading,
    lineHeight: Math.round(1.6 * variables.font_size_heading),
    textAlignVertical: 'top',
  },
  icon: {
    position: 'absolute',
    top: 8,
    width: variables.icon_size_xs,
    height: variables.icon_size_xs,
  },
  errorIcon: {
    position: 'absolute',
    right: 18,
    top: 12,
  },
  rightBottom:{
    position: 'absolute',
    right: variables.h_spacing_md,
    bottom: variables.h_spacing_md,
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
