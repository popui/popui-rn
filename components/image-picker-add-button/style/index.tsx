import { ViewStyle } from 'react-native';
import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export interface IImagePickerAddButtonStyle {
  uploaderAddButton:ViewStyle
  uploaderAddButtonRec:ViewStyle
}
export default {
  uploaderAddButton: {
    position: 'relative',
    marginRight: themeVars.UploaderFileSpacing,
    marginBottom: themeVars.UploaderFileSpacing,
    width: themeVars.UploaderSize - (themeVars.UploaderBorderWidth * 2),
    height: themeVars.UploaderSize - (themeVars.UploaderBorderWidth * 2),
    borderWidth: themeVars.UploaderBorderWidth,
    borderColor: themeVars.UploaderBorderColor,
  },
  uploaderAddButtonRec: {
    position: 'absolute',
    top: (themeVars.UploaderSize / 4) - 4,
    left: (themeVars.UploaderSize / 2) - 4,
    width: themeVars.UploaderBorderWidth,
    height: themeVars.UploaderSize / 2,
    backgroundColor: themeVars.UploaderBorderColor,
  }
};
