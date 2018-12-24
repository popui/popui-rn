import React from 'react'
import RootModalLoading from './RootModalLoading'
import Delay from '../delay'

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
