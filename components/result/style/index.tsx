import variables from '../../style/themes/default';
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
    paddingVertical: variables.result_padding_top,
    backgroundColor: variables.fill_base,
    borderBottomColor: variables.border_color_base,
  },
  iconWrap: {
    margin: 0,
  },
  img: {
    width: 60,
    height: 60,
  },
  title: {
    marginTop: variables.result_icon_gap,
    marginBottom: variables.result_title_gap,
    paddingHorizontal: variables.h_spacing_lg,
  },
  titleText: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: variables.color_text_base,
  },
  message: {
    marginBottom: variables.result_message_gap,
    paddingHorizontal: variables.h_spacing_lg,
  },
  messageText: {
    fontSize: variables.font_size_base,
    textAlign: 'center',
    lineHeight: variables.line_height_base * variables.font_size_base,
    // android: {
    //   lineHeight: 22
    // },
    color: variables.color_text_gray,
  },
  buttonWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: variables.h_spacing_lg,
    marginBottom: variables.result_buttons_gap,
  },
  extra: {
    marginBottom: variables.result_extra_gap,
    paddingHorizontal: variables.h_spacing_lg,
  },
  extraText: {
    fontSize: variables.font_size_base,
    color: variables.color_text_gray,
    textAlign: 'center',
    lineHeight: variables.line_height_base * variables.font_size_base,
    // android: {
    //   lineHeight: 22
    // }
  },
};
