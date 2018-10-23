import { ActionPropsType } from '../dialog/PropsType';
import { TextStyle } from 'react-native';

export interface OperationContainerProps {
  actions: ActionPropsType<TextStyle>[];
  onAnimationEnd?: (visible: boolean) => void;
}

export interface OperationArgs {
  actions?: any[]
} 