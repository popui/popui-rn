import { StyleSheet, View } from 'react-native'
import themeVars from '../../style/themes/default'

const defautlStyles = StyleSheet.create({
  containerRow: {
    // flex: 1,
    maxWidth:150,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerColumn: {
    // flex: 1,
    maxWidth:150,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  extraText: {
    color: themeVars.color_text_caption,
    textAlign: 'right',
  },
})

export default defautlStyles
