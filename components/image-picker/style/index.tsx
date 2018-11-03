import { ViewStyle, ImageStyle, TextStyle } from 'react-native'
import themeVars from '../../style/themes/default'

export interface IImagePickerStyle {
  container: ViewStyle
  filesContainer: ViewStyle
  size: ViewStyle
  item: ViewStyle
  image: ImageStyle
  closeWrap: ViewStyle
  closeText: TextStyle
  plusText: TextStyle
  [key: string]: any
}

export default {
  container: {
    flexDirection: 'column',
  },
  uploaderBody: {
    marginBottom:
      themeVars.CellGapH - (themeVars.CellGapV + themeVars.UploaderFileSpacing),
    marginRight: 0 - themeVars.UploaderFileSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
}
