import React from 'react'
import { observer } from 'mobx-react';
import ResponsiveModal from 'react-native-responsive-app-modal'

export const RootModal = (props: {
  isOpen: boolean
  children: any
  [key: string]: any
}) => {
  const { children, ...other } = props
  return (
    <ResponsiveModal
      sizeMatching={'screen'} // modal 适应屏幕大小
      backdropOpacity={0} // 背景完全透明
      backdropPressToClose={false} // 点击背景区域不消失
      {...other}
    >
      {children}
    </ResponsiveModal>
  )
}

export default RootModal
