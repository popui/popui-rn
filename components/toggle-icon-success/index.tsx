import React from 'react'
import WeuiIcon from '../weui-icon'
import { ToggleIconSuccessPropsType } from './PropsType'

function ToggleIconSuccess(props: ToggleIconSuccessPropsType) {
  const { disabled, checked, style,color,size=23 } = props
  const colorProps: any = {
    color
  }
  if (disabled) {
    colorProps.color = '#ADADAD'
  }
  if (checked) {
    return (
      <WeuiIcon
        name="success_no_circle"
        size={size}
        {...colorProps}
        style={style}
      />
    )
  }
  return null
}

export default ToggleIconSuccess
