import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import V from '../../style/themes/default'

export interface IImagePickerHeaderStyle {
  uploaderHeader:ViewStyle;
  uploaderTitle:ViewStyle;
  uploaderCounter:ViewStyle;

}
export default {
  uploaderHeader: {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 17 * V.baseLineHeight,
  },
  uploaderTitle: {
    fontSize: 17,
  },
  uploaderCounter: {
    fontSize: 17,
    color: '#888',
  },
};
