import { StyleSheet } from 'react-native'
import themeVars from '../../style/themes/default'

export default {
  isFirstCell: {
    borderTopWidth: 0,
  },
  cellItem: {
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
  cellItemDisabled: {
    opacity: 0.5,
  },
  cellLineView: {
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
  multipleLine: {
    paddingVertical: themeVars.v_spacing_sm,
  }
}
