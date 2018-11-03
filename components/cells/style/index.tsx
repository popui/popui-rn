import { StyleSheet } from 'react-native'
import themeVars from '../../style/themes/default'

export default {
  underlayColor: {
    backgroundColor: themeVars.fill_tap,
  },
  container: {
    // marginTop:15,
  },
  body: {
    // marginTop: themeVars.CellsMarginTop,
    backgroundColor: themeVars.CellBg,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: themeVars.CellBorderColor,
  },
}
