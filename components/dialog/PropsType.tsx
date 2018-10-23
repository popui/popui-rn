export interface DialogPropsType<T> {
  title?: React.ReactNode;
  showCloseButton?: boolean;
  actions?: ActionPropsType<T>[];
  onClose?: () => void;
  operation?: boolean;
  actionsDirection: 'horizontal' | 'vertical'
  styles?:any
  bodyStyle?:any
  style?:any
  renderActionButton?: (action: ActionPropsType<any>, index: number)=>React.ReactNode
  renderActions?: ()=>React.ReactNode
  renderCloseButton?: ()=>React.ReactNode
}

export interface ActionPropsType<T> {
  text: string;
  type?: 'default' | 'primary' | 'warn'
  onPress?: () => void | Promise<any>;
  style?: T | string;
}

export type Callback = (valueOrLogin: string, password?: string) => void;
export type CallbackOrActions<T> = Callback | ActionPropsType<T>[];



