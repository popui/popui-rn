import React from 'react'
import Toast from '../toast'
import RootModal from './RootModal'

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
