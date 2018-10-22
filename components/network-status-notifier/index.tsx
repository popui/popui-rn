import React from 'react'
import { observer } from 'mobx-react';
// import { ActivityIndicator, Text } from 'react-native'
import AutoProgress from 'popui-rn/components/Progress/AutoProgress'

export function getNetworkStatusNotifierDefaultRender(
  NetworkStatusNotifier: any
) {
  return (
    <NetworkStatusNotifier
      render={({ loading, error }: any) => {
        // 加载中
        if (loading) {
          return <AutoProgress />
        }
        return null
      }}
    />
  )
}