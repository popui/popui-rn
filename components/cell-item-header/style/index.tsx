import { StyleSheet, View } from 'react-native'
import themeVars from '../../style/themes/default'

const defautlStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    width: themeVars.icon_size_md,
    height: themeVars.icon_size_md,
    marginRight: themeVars.h_spacing_lg,
  },
  multipleThumb: {
    width: themeVars.icon_size_lg,
    height: themeVars.icon_size_lg,
  },
})

export default defautlStyles
