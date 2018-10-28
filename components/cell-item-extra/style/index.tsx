import { StyleSheet, View } from 'react-native'
import themeVars from '../../style/themes/default'

const defautlStyles = StyleSheet.create({
  extra: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  extraText: {
    color: themeVars.color_text_caption,
    textAlign: 'right',
  },
})

export default defautlStyles
