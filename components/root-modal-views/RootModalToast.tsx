import React from 'react'
import { observer } from 'mobx-react';
import Toast from 'popui-rn/components/Toast/Toast'
import RootModal from 'popui-rn/components/RootModalViews/RootModal'

export const RootModalToast = (props: {
  isOpen: boolean
  icon: string
  style?: any
  textStyle?: any
  text?: string
  children?: any
  [key: string]: any
}) => {
  const { isOpen, icon, style, textStyle, text, children, ...other } = props
  const toastProps = { icon, style, textStyle, text, children }
  return (
    <RootModal isOpen={isOpen} {...other}>
      <Toast {...toastProps} />
    </RootModal>
  )
}

export default RootModalToast
