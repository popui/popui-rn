import { StyleSheet, View } from 'react-native'
import theme from '../../style/themes/default'

const defautlStyles = StyleSheet.create({
  footer: {
    // flex: 1,
    marginLeft: theme.h_spacing_md,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footerText: {},
})

export default defautlStyles
