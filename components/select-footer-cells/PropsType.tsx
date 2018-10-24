export interface SelectFooterCellsPropsType {
  value?:string
  options:SelectOption[]
  onChange?:(event:any)=>void
  disabled?:boolean
  style?:any
  children?:any
}


export interface SelectOption {
  label:string
  value:any
}