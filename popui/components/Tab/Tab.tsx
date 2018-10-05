// notice: Tab 不能有外层容器，否则不支持手势滑动
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import NavBar from './NavBar'

export default class Tab extends PureComponent {
    static propTypes = {
        style: ScrollableTabView.propTypes.style,
        children: PropTypes.node,
    }

    constructor() {
        super()
    }

    render() {
        const {
            style,
            children,
        } = this.props

        return (
            <ScrollableTabView
                style={style}
                initialPage={0}
                renderTabBar={() => (<NavBar></NavBar>)}
            >
                {children}
            </ScrollableTabView>
        )
    }
}
