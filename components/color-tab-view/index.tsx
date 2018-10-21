import React from 'react'

import { Platform, StyleSheet } from 'react-native'
import ColorTabBar from '../color-tab-view-tab-bar'
import { TabView } from 'react-native-tab-view'
// debug
// import { createDebug } from 'common/utils/debug'
// const debug = createDebug('popui:TabView/ColorTabView')

export interface IProps {
  navigationState: any
  renderScene: Function
  onIndexChange: (index: number) => void
  renderTabBar?: Function
  lazy?: boolean
  style?: any
}

export function defaultRenderTabBar(props: any) {
  return <ColorTabBar {...props} />
}

export const getRenderTabBar = ({
  mainColor,
  currentRoute
}: {
    mainColor: string
    currentRoute: any
  }) => {
  return function renderHeader(props: any) {
    return <ColorTabBar mainColor={mainColor} {...props} />
  }
}

function getCurrentRoute(props: any) {
  const { navigationState } = props
  const { index, routes } = navigationState
  return routes[index]
}


@observer
export class ColorTabView extends React.Component<IProps, any> {
  render() {
    // debug('render')
    const {
      navigationState,
      renderScene,
      onIndexChange,
      renderTabBar = defaultRenderTabBar,
      lazy = false,
      style
    } = this.props
    // style
    let tabViewStyle:any = null
    if (Platform.OS === 'android') {
      tabViewStyle = styles.tabViewAndroid
    }
    if (style) {
      tabViewStyle = [tabViewStyle, style]
    }
    let _renderScene = renderScene
    if (lazy) {
      const renderSceneLazily = (props: any) => {
        const { route } = props
        const currentRoute = getCurrentRoute(props)
        if (currentRoute.key !== route.key) {
          return null
        }
        return renderScene(props)
      }
      _renderScene = renderSceneLazily
    }
    return (
      <TabView
        style={tabViewStyle}
        navigationState={navigationState}
        renderScene={_renderScene}
        onIndexChange={onIndexChange}
        renderTabBar={renderTabBar}
        useNativeDriver
      />
    )
  }
}


const styles = StyleSheet.create({
  tabViewAndroid: {
    height: 500
  }
})

export default TabViewColor
