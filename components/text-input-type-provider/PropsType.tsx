export type InputEventHandler = (value?: string) => void;

export interface IChildrenArgs {
  getDisplayTextByType:(text:string,maxLength:number)=>string
  keyboardType:string
  secureTextEntry:boolean
}

export interface TextInputTypeProviderType {
  type?:
    | 'text'
    | 'bankCard'
    | 'phone'
    | 'password'
    | 'number'
    | 'digit';
  name?: string;
  children:(args:IChildrenArgs)=>React.ReactNode
}
