import { TextStyle, ViewStyle } from 'react-native';
import theme from '../../style/themes/default';

export interface INoticeBarStyle {
  notice: ViewStyle
  container: ViewStyle
  content: TextStyle
  left6: ViewStyle
  left15: ViewStyle
  actionWrap: ViewStyle
  close: TextStyle
  link: TextStyle
}

export default {
  notice: {
    backgroundColor: theme.notice_bar_fill,
    height: theme.notice_bar_height,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginRight: theme.h_spacing_lg,
    overflow: 'hidden',
    width: 0, // ios bug: width size is wrong (usecase: with react-navigation).
  },
  content: {
    fontSize: theme.font_size_subhead,
    color: theme.brand_warning,
  },
  left6: {
    marginLeft: theme.h_spacing_sm,
  },
  left15: {
    marginLeft: theme.h_spacing_lg,
  },
  actionWrap: {
    marginRight: theme.h_spacing_lg,
  },
  close: {
    color: theme.brand_warning,
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'left',
  },
  link: {
    transform: [{ rotate: '225deg' }],
    color: theme.brand_warning,
    fontSize: theme.font_size_icontext,
    fontWeight: '500',
    textAlign: 'left',
  },
}
