import { StyleSheet } from 'react-native'
import theme from '../../style/themes/default'

export default {
  isFirstCell: {
    borderTopWidth: 0,
  },
  cellItem: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: theme.CellGapH, // 以避免左边出现 border
    paddingLeft: theme.CellGapH,
    paddingRight: theme.CellGapH,
    // borderTopWidth: StyleSheet.hairlineWidth, // 每个 Cell 都有 borderTop
    // borderColor: theme.CellBorderColor,
    // backgroundColor: theme.fill_base,
  },
  cellItemDisabled: {
    opacity: 0.5,
  },
  cellLineView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: theme.CellGapV,
    paddingBottom: theme.CellGapV,
    // marginLeft: theme.CellGapH, // 以避免左边出现 border
    // paddingRight: theme.h_spacing_lg,
    // paddingVertical: theme.v_spacing_sm,
    minHeight: theme.list_item_height,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.CellBorderColor,
    // borderBottomColor: theme.border_color_base,
  },
  multipleLine: {
    paddingVertical: theme.v_spacing_sm,
  },
}
