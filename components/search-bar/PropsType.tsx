function noop() {}

export interface SearchBarPropsType {
  defaultValue?: string
  value?: string
  placeholder?: string
  onSubmit?: (value: string) => void
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onCancel?: (value: string) => void
  showCancelButton?: boolean
  clearButtonMode?: 'while-editing' | 'never' | 'always'
  cancelText?: string
  disabled?: boolean
  styles?: any
  autoFocus?: boolean
  focused?: boolean
  onClear?: (value: string) => void
  maxLength?: number
}

export interface SearchBarState {
  value?: string
  focus?: boolean
  focused?: boolean
}

export const defaultProps = {
  prefixCls: 'am-search',
  placeholder: '搜索',
  onSubmit: noop,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onClear: noop,
  // showCancelButton: false,
  clearButtonMode: 'while-editing',
  disabled: false,
}
