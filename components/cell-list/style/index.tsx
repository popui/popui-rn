import { StyleSheet } from 'react-native'
import theme from '../../style/themes/default'

export default {
  underlayColor: {
    backgroundColor: theme.fill_tap,
  },
  container: {
    // marginTop:15,
  },
  body: {
    // marginTop: theme.CellsMarginTop,
    backgroundColor: theme.CellBg,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.CellBorderColor,
  },
}
