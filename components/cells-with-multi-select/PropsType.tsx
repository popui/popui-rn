export interface MultiSelectHeaderCellsPropsType {
  values: any[]
  options: SelectOption[]
  onChange?: (event: any) => void
  disabled?: boolean
  style?: any
  children?: any
}

export interface SelectOption {
  label: string
  value: any
}
