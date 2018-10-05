import React from 'react'
// import { ActivityIndicator, Text } from 'react-native'
import AutoProgress from 'popui/components/Progress/AutoProgress'

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
