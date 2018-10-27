import { StyleSheet } from 'react-native'
import themeVars from '../../style/themes/default'

export default {
  underlayColor: {
    backgroundColor: themeVars.BgColorActive,
  },
  isFirstCell: {
    borderTopWidth: 0,
  },
  vcodeCell: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  disabledCell: {
    opacity: 0.5,
  },
  Item: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: themeVars.CellGapH, // 以避免左边出现 border
    paddingLeft: themeVars.CellGapH,
    paddingRight: themeVars.CellGapH,
    // borderTopWidth: StyleSheet.hairlineWidth, // 每个 Cell 都有 borderTop
    // borderColor: themeVars.CellBorderColor,
    // backgroundColor: themeVars.fill_base,
  },
  Line: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: themeVars.CellGapV,
    paddingBottom: themeVars.CellGapV,
    // marginLeft: themeVars.CellGapH, // 以避免左边出现 border
    // paddingRight: themeVars.h_spacing_lg,
    // paddingVertical: themeVars.v_spacing_sm,
    minHeight: themeVars.list_item_height,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeVars.CellBorderColor,
    // borderBottomColor: themeVars.border_color_base,
  },
  Thumb: {
    width: themeVars.icon_size_md,
    height: themeVars.icon_size_md,
    marginRight: themeVars.h_spacing_lg,
  },
  body:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  extra:{

  },
  extraText: {
    color: themeVars.color_text_caption,
    textAlign: 'right',
  },
  arrowContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Arrow: {
    width: 8,
    height: 13,
    marginLeft: themeVars.h_spacing_md,
    marginTop: themeVars.v_spacing_xs,
  },
  ArrowV: {
    width: 13,
    height: 8,
    marginLeft: themeVars.h_spacing_md,
  },
  multipleLine: {
    paddingVertical: themeVars.v_spacing_sm,
  },
  multipleThumb: {
    width: themeVars.icon_size_lg,
    height: themeVars.icon_size_lg,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
}
