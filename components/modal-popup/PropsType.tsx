export interface ModalPopupProps {
  visible: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
  animationType?: any;
  onAnimationEnd?: (visible: boolean) => void;
  animateAppear?: boolean;
  styles?:any
  style?:any
  children?:any
}
