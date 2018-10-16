import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import V from '../../style/themes/default'

export interface IImagePickerStyle {
  container: ViewStyle;
  filesContainer:ViewStyle;
  size: ViewStyle;
  item: ViewStyle;
  image: ImageStyle;
  closeWrap: ViewStyle;
  closeText: TextStyle;
  plusText: TextStyle;
  [key:string]:any
}

export default {
  container: {
   flexDirection: 'column',
  },
  uploaderBody: {
    marginBottom: V.CellGapH - (V.CellGapV + V.UploaderFileSpacing),
    marginRight: 0 - V.UploaderFileSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }
};
