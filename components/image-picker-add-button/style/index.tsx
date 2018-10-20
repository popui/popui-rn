import { ViewStyle } from 'react-native';
import variables from '../../style/themes/default';

export interface IImagePickerAddButtonStyle {
  uploaderAddButton:ViewStyle
  uploaderAddButtonRec:ViewStyle
}
export default {
  uploaderAddButton: {
    position: 'relative',
    marginRight: variables.UploaderFileSpacing,
    marginBottom: variables.UploaderFileSpacing,
    width: variables.UploaderSize - (variables.UploaderBorderWidth * 2),
    height: variables.UploaderSize - (variables.UploaderBorderWidth * 2),
    borderWidth: variables.UploaderBorderWidth,
    borderColor: variables.UploaderBorderColor,
  },
  uploaderAddButtonRec: {
    position: 'absolute',
    top: (variables.UploaderSize / 4) - 4,
    left: (variables.UploaderSize / 2) - 4,
    width: variables.UploaderBorderWidth,
    height: variables.UploaderSize / 2,
    backgroundColor: variables.UploaderBorderColor,
  }
};
