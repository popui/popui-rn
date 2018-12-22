import { StyleSheet, View } from 'react-native'
import theme from '../../style/themes/default'

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
    marginLeft: theme.h_spacing_md,
    // marginTop: theme.v_spacing_xs,
  },
  arrowV: {
    width: 13,
    height: 8,
    marginLeft: theme.h_spacing_md,
  },
})

export default defautlStyles
