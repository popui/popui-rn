import { StyleSheet, View } from 'react-native'
import themeVars from '../../style/themes/default'

const defautlStyles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
