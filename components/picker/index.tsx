import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import { PickerPropsType } from './PropsType';
import pickerStyle, { IPickerStyle } from './style/index';

export interface PickerNativeProps extends PickerPropsType {
  styles?: IPickerStyle;
}

const pickerStyles = StyleSheet.create<any>(pickerStyle);
@observer
export default class Picker extends AbstractPicker {
  static defaultProps = {
    ...getDefaultProps(),
    styles: pickerStyles,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  protected popupProps = {};
}
