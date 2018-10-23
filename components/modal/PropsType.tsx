export interface IModalPropTypes {
  wrapStyle?: any;
  maskStyle?: any;
  style?: {};
  animationType: 'none' | 'fade' | 'slide-up' | 'slide-down';
  animationDuration?: number;
  visible: boolean;
  maskClosable?: boolean;
  animateAppear?: boolean;
  onClose?: () => void;
  onAnimationEnd?: (visible: boolean) => void;
}