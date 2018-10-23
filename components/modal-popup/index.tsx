import * as React from 'react';
import { observer } from "mobx-react";
import {StyleSheet} from 'react-native';
import RCModal from "rmc-dialog/lib/Modal";
import {ModalPopupProps} from './PropsType';
import modalPopupStyle from './style';
export interface ModalPopupState {
}
const modalPopupStyles = StyleSheet.create<any>(modalPopupStyle);
import { noopFunc } from "../_util/noop";

@observer
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
          // animationType={animType}
          // tslint:disable-next-line:jsx-no-multiline-js
          style={[
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
