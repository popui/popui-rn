import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;
import variables from '../../style/themes/default'

export interface IImagePickerItemStyle {
  [key:string]:any
}

export default {
  uploaderFile: {
    position: 'relative',
    width: themeVars.UploaderSize,
    height: themeVars.UploaderSize,
    marginRight: themeVars.UploaderFileSpacing,
    marginBottom: themeVars.UploaderFileSpacing,
  },
  uploaderFileImage: {
    width: themeVars.UploaderSize,
    height: themeVars.UploaderSize,
    overflow: 'hidden',
    borderRadius: themeVars.radius_sm,
  },
  uploaderStatusContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploaderStatusText: {
    color: '#fff',
  },
  uploaderRemoveIcon: {
    position: 'absolute',
    top: 2,
    right: 2,
  }
};
