import { ViewStyle } from 'react-native';
import varibles from '../../style/themes/default';

export interface IImagePickerAddButtonStyle {
  uploaderAddButton:ViewStyle
  uploaderAddButtonRec:ViewStyle
}
export default {
  uploaderAddButton: {
    position: 'relative',
    marginRight: varibles.UploaderFileSpacing,
    marginBottom: varibles.UploaderFileSpacing,
    width: varibles.UploaderSize - (varibles.UploaderBorderWidth * 2),
    height: varibles.UploaderSize - (varibles.UploaderBorderWidth * 2),
    borderWidth: varibles.UploaderBorderWidth,
    borderColor: varibles.UploaderBorderColor,
  },
  uploaderAddButtonRec: {
    position: 'absolute',
    top: (varibles.UploaderSize / 4) - 4,
    left: (varibles.UploaderSize / 2) - 4,
    width: varibles.UploaderBorderWidth,
    height: varibles.UploaderSize / 2,
    backgroundColor: varibles.UploaderBorderColor,
  }
};
