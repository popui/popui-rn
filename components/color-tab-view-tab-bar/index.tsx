import React, { Component } from 'react'

import { TabBar } from 'react-native-tab-view'
import { Image, StyleSheet, Text } from 'react-native'
// debug
// import { createDebug } from '../_util/debug'
// const debug = createDebug('popui:TabView:ColorTabBar')

/**
 * 每个 Tab 可以有不同的主题色, TabBar 会根据 Tab 的主题色调整颜色
 */

export default class TabViewColorTabBar extends Component<
  {
    navigationState: any
  },
  any
> {
  getCurrentRoute = () => {
    const { navigationState } = this.props
    const { index, routes } = navigationState
    const currentRoute = routes[index]
    return currentRoute
  }
  isFocused = ({ route }: any) => {
    const currentRoute = this.getCurrentRoute()
    // const { currentRoute } = this.props
    return route.key === currentRoute.key
  }
  getCurrentRouteMainColor = () => {
    const { mainColor } = this.getCurrentRoute()
    return mainColor
  }
  _renderTabItemIcon = ({ route }: any) => {
    const focused = this.isFocused({ route })
    const mainColor = this.getCurrentRouteMainColor()
    const imageStyle = [
      styles.iconImage,
      focused ? { tintColor: mainColor } : null,
    ]
    const uri = focused ? route.icon.activeUrl : route.icon.url
    // debug('_renderTabItemIcon', { focused, uri })
    return <Image source={{ uri, cache: 'force-cache' }} style={imageStyle} />
  }

  _renderTabItemLabel = ({ route }: any) => {
    const mainColor = this.getCurrentRouteMainColor()
    const focused = this.isFocused({ route })
    const activeLabel = { color: mainColor, fontWeight: '700' }
    const textStyle = [styles.label, focused ? activeLabel : null]
    return <Text style={textStyle}>{route.title}</Text>
  }

  render() {
    const mainColor = this.getCurrentRouteMainColor()
    // debug('render', { props: this.props })
    const indicatorStyle = { backgroundColor: mainColor }
    return (
      <TabBar
        indicatorStyle={indicatorStyle}
        style={styles.tabbar}
        tabStyle={styles.tabItem}
        renderIcon={this._renderTabItemIcon}
        renderLabel={this._renderTabItemLabel}
        useNativeDriver={true}
        {...this.props}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#ffffff',
  },
  tabItem: {
    flexDirection: 'row',
  },
  label: {
    color: '#000000',
    fontWeight: '400',
    backgroundColor: 'transparent',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  iconImage: {
    tintColor: '#000000',
    width: 20,
    height: 20,
  },
})
