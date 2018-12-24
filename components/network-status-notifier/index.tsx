import React from 'react'
// import { ActivityIndicator, Text } from 'react-native'
import AutoProgress from '../progress-auto'

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
