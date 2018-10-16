import varibles from '../../style/themes/default';
import V from '../../style/themes/default'

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
