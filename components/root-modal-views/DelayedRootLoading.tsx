import React from 'react'
import { observer } from 'mobx-react';
import RootModalLoading from 'popui-rn/components/RootModalViews/RootModalLoading'
import Delay from 'popui-rn/components/Timer/Delay'

function DelayedRootLoading(props: {
  isOpen?: boolean
  delay?: number
  style?: any
  textStyle?: any
  text?: string
  [key: string]: any
}) {
  const { delay = 250 } = props
  return (
    <Delay wait={delay}>
      <RootModalLoading {...props} />
    </Delay>
  )
}

export default DelayedRootLoading
