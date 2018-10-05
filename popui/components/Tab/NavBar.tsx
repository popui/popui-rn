import React, { Component, PropTypes } from 'react'
import { Animated, Dimensions, findNodeHandle, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const {
    Colors,
    MEDIUM_GUTTER,
} = constants

const WINDOW_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    tab: {
        paddingTop: MEDIUM_GUTTER,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: MEDIUM_GUTTER,
        paddingLeft: MEDIUM_GUTTER,
        paddingRight: MEDIUM_GUTTER,
    },
    tabText: {
        color: Colors.gray,
        fontSize: 15,
    },
    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: Colors.line,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})


class NavBar extends PureComponent {
    static defaultProps = {
        scrollOffset: 52,
        activeTextColor: Colors.green,
        inactiveTextColor: Colors.gray,
        underlineColor: Colors.green,
        backgroundColor: '#ffffff',
        underlineHeight: 2,
        style: {},
        tabStyle: {},
        tabsContainerStyle: {},
    }
    onTabContainerLayout = (e) => {
        this._tabContainerMeasurements = e.nativeEvent.layout
        let width = this._tabContainerMeasurements.width
        if (width < WINDOW_WIDTH) {
            width = WINDOW_WIDTH
        }
        this.setState({ _containerWidth: width })
    }
    onContainerLayout = (e) => {
        this._containerMeasurements = e.nativeEvent.layout
    }
    updateView = (offset) => {
        const position = Math.floor(offset.value)
        const pageOffset = offset.value % 1
        const tabCount = this.props.tabs.length

        if (tabCount === 0 || offset.value < 0 || offset.value > tabCount - 1) {
            return
        }

        if (this.necessarilyMeasurementsCompleted(position)) {
            this.updateTabPanel(position, pageOffset)
            this.updateTabUnderline(position, pageOffset, tabCount)
        }
    }
    necessarilyMeasurementsCompleted = (position) => {
        return this._tabsMeasurements[position] && this._tabsMeasurements[position + 1]
    }
    updateTabPanel = (position, pageOffset) => {
        const absolutePageOffset = pageOffset * this._tabsMeasurements[position].width
        let newScrollX = this._tabsMeasurements[position].left + absolutePageOffset

        newScrollX -= this.props.scrollOffset
        newScrollX = newScrollX >= 0 ? newScrollX : 0

        if (Platform.OS === 'android') {
            this._scrollView.scrollTo({ x: newScrollX, y: 0 })
        } else {
            const rightBoundScroll = this._tabContainerMeasurements.width -
                (this._containerMeasurements.width)
            newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX
            this._scrollView.scrollTo({ x: newScrollX, y: 0 })
        }
    }
    updateTabUnderline = (position, pageOffset, tabCount) => {
        const lineLeft = this._tabsMeasurements[position].left
        const lineRight = this._tabsMeasurements[position].right

        if (position < tabCount - 1) {
            const nextTabLeft = this._tabsMeasurements[position + 1].left
            const nextTabRight = this._tabsMeasurements[position + 1].right

            const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft)
            const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight)

            this.state._leftTabUnderline.setValue(newLineLeft)
            this.state._widthTabUnderline.setValue(newLineRight - newLineLeft)
        } else {
            this.state._leftTabUnderline.setValue(lineLeft)
            this.state._widthTabUnderline.setValue(lineRight - lineLeft)
        }
    }
    measureTab = (page) => {
        const tabContainerhandle = findNodeHandle(this.refs.tabContainer)

        this.refs[`tab_${page}`].measureLayout(tabContainerhandle,
                                               (ox, oy, width, height) => {
                this._tabsMeasurements[page] = {
                    left: ox,
                    right: ox + width,
                    width,
                    height,
                }
                this.updateView({ value: this.props.scrollValue._value })
            })
    }
    renderTab = (name, page, isTabActive, onPressHandler, measureTab) => {
        const { activeTextColor, inactiveTextColor, textStyle, tabs } = this.props
        const textColor = isTabActive ? activeTextColor : inactiveTextColor
        const fontWeight = isTabActive ? 'bold' : 'normal'

        return (
            <TouchableOpacity
                key={name}
                ref={`tab_${page}`}
                accessible={!false}
                accessibilityLabel={name}
                accessibilityTraits="button"
                style={[styles.tab, this.props.tabStyle]}
                onPress={() => onPressHandler(page)}
                onLayout={() => measureTab(page)}
            >
                <View>
                    <Text style={[styles.tabText, { color: textColor, fontWeight }, textStyle]}>
                        {name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    constructor(props) {
        super(props)
        this._tabsMeasurements = []
        this.state = {
            _leftTabUnderline: new Animated.Value(0),
            _widthTabUnderline: new Animated.Value(0),
            _containerWidth: null,
        }
    }

    componentDidMount() {
        this.props.scrollValue.addListener(this.updateView)
    }

    render() {
        const tabUnderlineStyle = {
            position: 'absolute',
            height: this.props.underlineHeight,
            backgroundColor: this.props.underlineColor,
            bottom: 0,
        }

        const dynamicTabUnderline = {
            left: this.state._leftTabUnderline,
            width: this.state._widthTabUnderline,
        }

        return (
            <View
                style={[styles.container,
                    { backgroundColor: this.props.backgroundColor },
                    this.props.style]}
                onLayout={this.onContainerLayout}
            >
                <ScrollView
                    ref={(scrollView) => {
                        this._scrollView = scrollView
                    }}
                    horizontal={!false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    directionalLockEnabled={!false}
                    scrollEventThrottle={16}
                    bounces={false}
                >
                    <View
                        style={[styles.tabs,
                            { width: this.state._containerWidth },
                            this.props.tabsContainerStyle]}
                        ref={'tabContainer'}
                        onLayout={this.onTabContainerLayout}
                    >
                        {this.props.tabs.map((name, page) => {
                            const isTabActive = this.props.activeTab === page
                            const renderTab = this.props.renderTab || this.renderTab
                            return renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab)
                        })}

                        <Animated.View style={[tabUnderlineStyle, dynamicTabUnderline]}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

NavBar.propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    underlineColor: PropTypes.string,
    underlineHeight: PropTypes.number,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: View.propTypes.style,
    tabStyle: View.propTypes.style,
    tabsContainerStyle: View.propTypes.style,
    textStyle: Text.propTypes.style,
    renderTab: React.PropTypes.func,
    scrollValue: PropTypes.object,
}

export default NavBar
