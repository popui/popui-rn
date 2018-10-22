import { ActionPropsType } from '../modal/PropsType';
import { TextStyle } from 'react-native';

export interface OperationContainerProps {
  actions: ActionPropsType<TextStyle>[];
  onAnimationEnd?: (visible: boolean) => void;
}