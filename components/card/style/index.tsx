import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export interface ICardStyle {
  card: ViewStyle;
  full: ViewStyle;
  headerWrap: ViewStyle;
  headerTitle: ViewStyle;
  headerImage: ImageStyle;
  headerContent: TextStyle;
  headerExtra: TextStyle;
  body: ViewStyle;
  footerWrap: ViewStyle;
  footerContent: TextStyle;
  footerExtra: TextStyle;
}

export default {
  card: {
    borderWidth: themeVars.border_width_md,
    borderColor: themeVars.border_color_base,
    borderRadius: themeVars.radius_md,
    paddingBottom: themeVars.v_spacing_sm,
    flexDirection: 'column',
    backgroundColor: themeVars.fill_base,
  },
  full: {
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  headerWrap: {
    flexDirection: 'row',
    paddingVertical: themeVars.v_spacing_sm,
    paddingRight: themeVars.h_spacing_lg,
    marginLeft: themeVars.h_spacing_lg,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    marginRight: themeVars.h_spacing_sm,
  },
  headerContent: {
    color: themeVars.color_text_base,
    fontSize: themeVars.font_size_heading,
    flex: 1,
  },
  headerExtra: {
    flex: 1,
    fontSize: themeVars.font_size_heading,
    color: themeVars.color_text_caption,
    textAlign: 'right',
  },
  body: {
    flexGrow: 1,
    paddingVertical: themeVars.v_spacing_md,
    minHeight: 48,
    borderTopWidth: themeVars.border_width_md,
    borderColor: themeVars.border_color_base,
  },
  footerWrap: {
    flexDirection: 'row',
    paddingHorizontal: themeVars.h_spacing_lg,
  },
  footerContent: {
    flex: 1,
    fontSize: themeVars.font_size_base,
    color: themeVars.color_text_caption,
  },
  footerExtra: {
    textAlign: 'right',
    fontSize: themeVars.font_size_base,
    color: themeVars.color_text_caption,
  },
};
