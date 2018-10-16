import { ViewStyle } from 'react-native';
import V from '../../style/themes/weui'
import varibles from '../../style/themes/default';

export interface IImagePickerAddButtonStyle {
  uploaderAddButton:ViewStyle
  uploaderAddButtonRec:ViewStyle
}
export default {
  uploaderAddButton: {
    position: 'relative',
    marginRight: V.UploaderFileSpacing,
    marginBottom: V.UploaderFileSpacing,
    width: V.UploaderSize - (V.UploaderBorderWidth * 2),
    height: V.UploaderSize - (V.UploaderBorderWidth * 2),
    borderWidth: V.UploaderBorderWidth,
    borderColor: V.UploaderBorderColor,
  },
  uploaderAddButtonRec: {
    position: 'absolute',
    top: (V.UploaderSize / 4) - 4,
    left: (V.UploaderSize / 2) - 4,
    width: V.UploaderBorderWidth,
    height: V.UploaderSize / 2,
    backgroundColor: V.UploaderBorderColor,
  }
};
