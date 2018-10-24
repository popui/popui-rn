import * as React from 'react';

import {StyleSheet} from 'react-native';
import RCModal from "../modal";
import {ModalPopupProps} from './PropsType';
import modalPopupStyle from './style';
export interface ModalPopupState {
}
const modalPopupStyles = StyleSheet.create<any>(modalPopupStyle);
import { noopFunc } from "../_util/noop";


export default class ModalPopupComponent extends React.Component<ModalPopupProps, ModalPopupState> {
  static defaultProps = {
    onClose: noopFunc,
    styles: modalPopupStyles,
  };
  render(){
    const {
      children,
      style,
      animationType,
      ...restProps
    } = this.props;
    let animType = animationType;
    const styles = this.props.styles!;
    let aType = "slideUp";
    if (animType === "slide-down") {
      aType = "slideDown";
    }else {
      animType = "slide-up";
      aType = "slideUp";
    }
    return (
        <RCModal
          animationType={animType}
          // tslint:disable-next-line:jsx-no-multiline-js
          contentStyle={[
            styles.popupContainer,
            (styles as any)[`popup_${aType}`],
            style
          ]}
          {...restProps}
        >
            {children}
        </RCModal>
    );
  }
}
