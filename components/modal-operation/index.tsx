import React from 'react'
//
import topView from 'rn-topview'
import OperationContainer from './OperationContainer'
import { OperationArgs } from './PropsType'
export function operation({ actions }: OperationArgs) {
  const _actions = actions || [{ text: '确定' }]

  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove()
    }
  }

  topView.set(
    <OperationContainer actions={_actions} onAnimationEnd={onAnimationEnd} />
  )
}

export default {
  operation,
}
