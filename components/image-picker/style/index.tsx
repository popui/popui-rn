import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import variables from '../../style/themes/default'

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
    marginBottom: variables.CellGapH - (variables.CellGapV + variables.UploaderFileSpacing),
    marginRight: 0 - variables.UploaderFileSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }
};
