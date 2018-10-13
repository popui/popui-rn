export type InputEventHandler = (value?: string) => void;

export interface TextInputTypeProviderType {
  // left?: React.ReactNode;
  // right?: React.ReactNode;
  type?:
    | 'text'
    | 'bankCard'
    | 'phone'
    | 'password'
    | 'number'
    | 'digit';
  editable?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  // size?: 'large' | 'small';
  textAlign?: 'left' | 'center';
  updatePlaceholder?: boolean;
  styles?: any;
  locale?: object;
  onVirtualKeyboardConfirm?: InputEventHandler;
}
