import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import varibles from '../../style/themes/default';
import V from '../../style/themes/weui'

export interface IImagePickerItemStyle {
  [key:string]:any
}

export default {
  uploaderFile: {
    position: 'relative',
    width: V.UploaderSize,
    height: V.UploaderSize,
    marginRight: V.UploaderFileSpacing,
    marginBottom: V.UploaderFileSpacing,
  },
  uploaderFileImage: {
    width: V.UploaderSize,
    height: V.UploaderSize,
    overflow: 'hidden',
    borderRadius: varibles.radius_sm,
  },
  uploaderStatus: {
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
  uploaderStatusContent: {
    color: '#fff',
  },
  uploaderRemove: {
    position: 'absolute',
    top: 2,
    right: 2,
  },
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
    width: V.UploaderBorderWidth + 1,
    height: V.UploaderSize / 2,
    backgroundColor: V.UploaderBorderColor,
  },
  item: {
    marginRight: varibles.h_spacing_sm,
    marginBottom: varibles.v_spacing_sm,
    overflow: 'hidden',
  },
  closeWrap: {
    width: 16,
    height: 16,
    backgroundColor: '#999',
    borderRadius: 8,
    position: 'absolute',
    top: 4,
    right: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  closeText: {
    color: varibles.color_text_base_inverse,
    backgroundColor: 'transparent',
    fontSize: 20,
    height: 20,
    marginTop: -8,
    fontWeight: '300',
  },
  plusWrap: {
    borderRadius: varibles.radius_sm,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusWrapNormal: {
    backgroundColor: varibles.fill_base,
    borderColor: varibles.border_color_base,
  },
  plusWrapHighlight: {
    backgroundColor: varibles.fill_tap,
    borderColor: varibles.border_color_base,
  },
  plusText: {
    fontSize: 64,
    backgroundColor: 'transparent',
    fontWeight: '100',
    color: varibles.color_text_caption,
  },
};
