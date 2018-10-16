import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import varibles from '../../style/themes/default'

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
    marginBottom: varibles.CellGapH - (varibles.CellGapV + varibles.UploaderFileSpacing),
    marginRight: 0 - varibles.UploaderFileSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }
};
