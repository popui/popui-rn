'use strict'

import React, { Component, PropTypes } from 'react'
import { Animated, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { PurePopuiIcon } from 'popui/components/Icon'

const SCREEN_WIDTH = Dimensions.get('window').width

export class UnderLineTabBar extends PureComponent {

    static propTypes = {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,
        underlineColor: PropTypes.string,
        activeTextColor: PropTypes.string,
        inactiveTextColor: PropTypes.string,
        scrollContainerStyle: PropTypes.object,
        tabStyles: PropTypes.object,
    }

    static defaultProps = {
        tabStyles: {},
    }
    renderTab = (tabData, page) => {
        const { style: defaultStyles } = this.props
        const { activeTab, tabStyles, goToPage } = this.props
        const { containerStyle = {} } = tabStyles
        let label, badge, iconName
        if (typeof(tabData) == 'string') {
            label = tabData
        } else {
            label = tabData.label
            badge = tabData.badge
            iconName = tabData.icon
        }
        const isTabActive = (activeTab === page)

        return (
            <TouchableOpacity
                style={[defaultStyles.tabItem, isTabActive ? defaultStyles.activeTabItem : null, containerStyle]}
                key={page}
                onPress={() => goToPage(page)}
                onLayout={(event) => this.onTabLayout(event, page)}
            >
                {iconName && this.renderIcon(isTabActive, iconName)}
                {label && this.renderText(isTabActive, label)}
                {badge && this.renderBadge(isTabActive, badge)}
            </TouchableOpacity>
        )
    }

    constructor(props, context) {
        super(props)
        this.tabState = {}
        this.state = {
            renderUnderline: false,
            tabScrollValue: 0,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.activeTab !== this.props.activeTab) {
            this._checkViewportOverflows()
        }
    }

    _checkViewportOverflows() {
        const { style: defaultStyles, tabStyles, activeTab, tabs } = this.props
        // const screenMargin = Object.assign({}, defaultStyles, tabStyles.tab).marginLeft;
        const screenMargin = { ...defaultStyles, ...tabStyles.tabState }.marginLeft
        const currentTabLayout = this.tabState[activeTab]
        const rightOverflow = currentTabLayout.x + currentTabLayout.width - SCREEN_WIDTH
        const hasRightViewportOverflow = rightOverflow > this.state.tabScrollValue
        const hasLeftViewportOverflow = (currentTabLayout.x < this.state.tabScrollValue)

        if (hasRightViewportOverflow) {
            const isLastTab = tabs.length === activeTab + 1
            const n = isLastTab ? 1 : 2
            const x = rightOverflow + screenMargin * n
            const y = 0
            return this.scrollTabs.scrollTo({ x, y })
        }

        if (hasLeftViewportOverflow) {
            const isFirstTab = activeTab === 0
            const x = isFirstTab ? 0 : currentTabLayout.x - screenMargin * 2
            const y = 0
            return this.scrollTabs.scrollTo({ x, y })
        }
    }

    onTabLayout(event, page) {
        const { tabs } = this.props
        const { x, y, width, height } = event.nativeEvent.layout
        this.tabState[page] = { x, y, width, height }
        if (tabs.length === Object.keys(this.tabState).length) {
            this.setState({ renderUnderline: true })
        }
    }

    renderIcon(isTabActive, iconName) {
        const { style: defaultStyles } = this.props
        const { iconStyle = {} } = this.props.tabStyles
        const finalStyle = [defaultStyles.tabItemIcon, defaultStyles.activeTabItemIcon, iconStyle]
        return (
            <Icon name={iconName} style={finalStyle}/>
        )
    }

    renderText(isTabActive, label) {
        const { style: defaultStyles } = this.props
        const { activeTextColor, inactiveTextColor } = this.props
        const { textStyle = {} } = this.props.tabStyles
        const colorStyle = isTabActive ?
            (activeTextColor ? { color: activeTextColor } : null) :
            (inactiveTextColor ? { color: inactiveTextColor } : null)
        const finalStyle = [defaultStyles.tabItemText, isTabActive ? defaultStyles.activeTabItemText : null, colorStyle, textStyle]
        // console.log(`isTabActive:${isTabActive}, label:${label} finalStyle:`,finalStyle)
        return (<Text style={finalStyle}>{label}</Text>)
    }

    renderBadge(isTabActive, badge = 0) {
        const { style: defaultStyles } = this.props
        const { badgeBubble = {}, badgeText = {} } = this.props.tabStyles
        const finalStyle = [defaultStyles.tabItemBadgeText, badgeText]
        return (
            <View style={[defaultStyles.tabItemBadgeBubble, badgeBubble]}>
                <Text style={finalStyle}>{badge}</Text>
            </View>
        )
    }

    renderUnderline() {
        const { style: defaultStyles, scrollValue, underlineColor } = this.props
        const inputRange = Object.keys(this.tabState)
        const outputRangeLeft = []
        const outputRangeWidth = []

        for (const k in this.tabState) {
            if (this.tabState.hasOwnProperty(k)) {
                outputRangeLeft.push(this.tabState[k].x)
                outputRangeWidth.push(this.tabState[k].width)
            }
        }

        const left = scrollValue.interpolate({
            inputRange,
            outputRange: outputRangeLeft,
        })

        const width = scrollValue.interpolate({
            inputRange,
            outputRange: outputRangeWidth,
        })

        const finalStyle = [defaultStyles.tabItemUnderlineStyle, { left }, { width }]
        return <Animated.View style={finalStyle}/>
    }

    render() {
        const { style: defaultStyles, scrollContainerStyle, tabs, tabBarStyle } = this.props
        return (
            <Animated.View
                style={{ ...defaultStyles.container, ...tabBarStyle }}
            >
                <ScrollView horizontal
                            contentContainerStyle={[defaultStyles.scrollContainer, scrollContainerStyle]}
                            showsHorizontalScrollIndicator={false}
                            ref={(node) => this.scrollTabs = node}
                            bounces={false}
                            scrollEventThrottle={16}
                            onScroll={(e) => this.setState({ tabScrollValue: e.nativeEvent.contentOffset.x })}
                >
                    {tabs.map(this.renderTab)}
                    {this.state.renderUnderline && this.renderUnderline()}
                </ScrollView>
            </Animated.View>
        )
    }
}

export default UnderLineTabBar

