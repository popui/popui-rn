import { ViewStyle, TextStyle, StyleSheet } from 'react-native'
import themeVars from '../../style/themes/default'

export interface ISegmentControlStyle {
  segment: ViewStyle
  item: ViewStyle
  itemLeftRadius: ViewStyle
  itemRightRadius: ViewStyle
  itemText: TextStyle
}
export default {
  segment: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: themeVars.brand_primary,
    borderRadius: themeVars.radius_md,
  },
  item: {
    flex: 1,
    paddingVertical: themeVars.h_spacing_sm,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLeftRadius: {
    borderTopLeftRadius: themeVars.radius_md,
    borderBottomLeftRadius: themeVars.radius_md,
  },
  itemRightRadius: {
    borderTopRightRadius: themeVars.radius_md,
    borderBottomRightRadius: themeVars.radius_md,
  },
  itemText: {
    textAlign: 'center',
    fontSize: themeVars.font_size_caption_sm,
  },
}
