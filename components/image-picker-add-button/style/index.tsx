import { ViewStyle } from 'react-native'
import theme from '../../style/themes/default'

export interface IImagePickerAddButtonStyle {
  uploaderAddButton: ViewStyle
  uploaderAddButtonRec: ViewStyle
}
export default {
  uploaderAddButton: {
    position: 'relative',
    marginRight: theme.UploaderFileSpacing,
    marginBottom: theme.UploaderFileSpacing,
    width: theme.UploaderSize - theme.UploaderBorderWidth * 2,
    height: theme.UploaderSize - theme.UploaderBorderWidth * 2,
    borderWidth: theme.UploaderBorderWidth,
    borderColor: theme.UploaderBorderColor,
  },
  uploaderAddButtonRec: {
    position: 'absolute',
    top: theme.UploaderSize / 4 - 4,
    left: theme.UploaderSize / 2 - 4,
    width: theme.UploaderBorderWidth,
    height: theme.UploaderSize / 2,
    backgroundColor: theme.UploaderBorderColor,
  },
}
