import React from 'react'
import { observer } from 'mobx-react';
import RootModalToast from 'popui-rn/components/RootModalViews/RootModalToast'

export const RootModalLoading = (props: {
  isOpen?: boolean
  style?: any
  textStyle?: any
  text?: string
  [key: string]: any
}) => {
  const { isOpen = true, text = 'loading...' } = props
  return (
    <RootModalToast isOpen={isOpen} icon="loading" text={text} {...props} />
  )
}

export default RootModalLoading
