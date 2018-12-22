import { StyleSheet, View } from 'react-native'
import theme from '../../style/themes/default'

const defautlStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    width: theme.icon_size_md,
    height: theme.icon_size_md,
    marginRight: theme.h_spacing_lg,
  },
  multipleThumb: {
    width: theme.icon_size_lg,
    height: theme.icon_size_lg,
  },
})

export default defautlStyles
