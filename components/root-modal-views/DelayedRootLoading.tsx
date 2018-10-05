import React from 'react'
import RootModalLoading from 'popui/components/RootModalViews/RootModalLoading'
import Delay from 'popui/components/Timer/Delay'

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
