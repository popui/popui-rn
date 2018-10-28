import { StyleSheet, View } from 'react-native'
import themeVars from '../../style/themes/default'

const defautlStyles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  errorIcon: {
    marginLeft: 5,
  },
  arrow: {
    width: 8,
    height: 13,
    marginLeft: themeVars.h_spacing_md,
    // marginTop: themeVars.v_spacing_xs,
  },
  arrowV: {
    width: 13,
    height: 8,
    marginLeft: themeVars.h_spacing_md,
  },
})

export default defautlStyles
