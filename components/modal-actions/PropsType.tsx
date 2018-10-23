import {ActionPropsType} from '../modal/PropsType'

export interface ModalActionsPropsType<T> {
  styles?:any
  actions?: ActionPropsType<T>[];
  onClose?: () => void;
  operation?: boolean;
  renderAction?: (action: ActionPropsType<any>, index: number)=>React.ReactNode
}

export interface ModalActionsProps extends ModalActionsPropsType<any> {
  
}