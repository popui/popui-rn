import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import theme from '../../style/themes/default';

export interface IResultStyle {
  result: ViewStyle
  iconWrap: ViewStyle
  img: ImageStyle
  title: ViewStyle
  titleText: TextStyle
  message: ViewStyle
  messageText: TextStyle
  extra: ViewStyle
  extraText: TextStyle
  buttonWrap: ViewStyle
  button: ViewStyle
}

export default {
  result: {
    alignItems: 'center',
    paddingTop: theme.result_padding_top,
    paddingBottom: theme.result_padding_bottom,
    backgroundColor: theme.fill_base,
    borderBottomColor: theme.border_color_base,
  },
  iconWrap: {
    margin: 0,
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: theme.result_icon_gap,
    marginBottom: theme.result_title_gap,
    paddingHorizontal: theme.h_spacing_lg,
  },
  titleText: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: theme.color_text_base,
  },
  message: {
    paddingHorizontal: theme.h_spacing_lg,
  },
  messageText: {
    fontSize: theme.font_size_base,
    textAlign: 'center',
    lineHeight: theme.line_height_base * theme.font_size_base,
    // android: {
    //   lineHeight: 22
    // },
    color: theme.color_text_gray,
  },
  buttonWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.h_spacing_lg,
    marginTop: theme.result_message_gap,
    marginBottom: theme.result_buttons_gap,
  },
  extra: {
    // marginBottom: theme.result_extra_gap,
    paddingHorizontal: theme.h_spacing_lg,
  },
  extraText: {
    fontSize: theme.font_size_base,
    color: theme.color_text_gray,
    textAlign: 'center',
    lineHeight: theme.line_height_base * theme.font_size_base,
    // android: {
    //   lineHeight: 22
    // }
  },
}
