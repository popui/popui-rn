import themeVars from '../../style/themes/default';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export interface IResultStyle {
  result: ViewStyle;
  iconWrap: ViewStyle;
  img: ImageStyle;
  title: ViewStyle;
  titleText: TextStyle;
  message: ViewStyle;
  messageText: TextStyle;
  extra:ViewStyle;
  extraText:TextStyle;
  buttonWrap: ViewStyle;
  button: ViewStyle;
}

export default {
  result: {
    alignItems: 'center',
    paddingTop: themeVars.result_padding_top,
    paddingBottom: themeVars.result_padding_bottom,
    backgroundColor: themeVars.fill_base,
    borderBottomColor: themeVars.border_color_base,
  },
  iconWrap: {
    margin: 0,
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: themeVars.result_icon_gap,
    marginBottom: themeVars.result_title_gap,
    paddingHorizontal: themeVars.h_spacing_lg,
  },
  titleText: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: themeVars.color_text_base,
  },
  message: {
    paddingHorizontal: themeVars.h_spacing_lg,
  },
  messageText: {
    fontSize: themeVars.font_size_base,
    textAlign: 'center',
    lineHeight: themeVars.line_height_base * themeVars.font_size_base,
    // android: {
    //   lineHeight: 22
    // },
    color: themeVars.color_text_gray,
  },
  buttonWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: themeVars.h_spacing_lg,
    marginTop: themeVars.result_message_gap,
    marginBottom: themeVars.result_buttons_gap,
  },
  extra: {
    // marginBottom: themeVars.result_extra_gap,
    paddingHorizontal: themeVars.h_spacing_lg,
  },
  extraText: {
    fontSize: themeVars.font_size_base,
    color: themeVars.color_text_gray,
    textAlign: 'center',
    lineHeight: themeVars.line_height_base * themeVars.font_size_base,
    // android: {
    //   lineHeight: 22
    // }
  },
};
