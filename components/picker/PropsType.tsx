import { CascaderValue } from 'rmc-cascader/lib/CascaderTypes'
import { IPopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes'
export interface PickerData {
  value: string | number
  label: string
  children?: PickerData[]
}
export interface PickerPropsType extends IPopupPickerProps {
  data: PickerData[] | PickerData[][]
  cascade?: boolean
  value?: Array<string | number>
  format?: (values: string[]) => string
  cols?: number
  extra?: string
  onChange?: (date?: CascaderValue) => void
  onPickerChange?: (value: CascaderValue) => void
  itemStyle?: any
  indicatorStyle?: any
  loading?: boolean
  cascadeStyle?: any
}
