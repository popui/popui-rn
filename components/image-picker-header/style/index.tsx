import { ViewStyle } from 'react-native'
export interface IImagePickerHeaderStyle {
  uploaderHeader: ViewStyle
  uploaderTitle: ViewStyle
  uploaderCounter: ViewStyle
}
export default {
  uploaderHeader: {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 17 * themeVars.baseLineHeight,
  },
  uploaderTitle: {
    fontSize: 17,
  },
  uploaderCounter: {
    fontSize: 17,
    color: '#888',
  },
}
