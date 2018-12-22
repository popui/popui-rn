import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import theme from '../../style/themes/default';

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
      theme.CellGapH - (theme.CellGapV + theme.UploaderFileSpacing),
    marginRight: 0 - theme.UploaderFileSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
}
