import React from 'react'
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

/**
 * LoadingViewWrapper
 * @returns {any}
 */
export default function LoadingViewWrapper(props: any) {
    const {
        isLoading,
        children,
        style,
        activityIndicatorSize,
    } = props
    const _activityIndicatorSize = activityIndicatorSize || 'large'

    // 居中的 loading
    const loadingView = (<View style={[styles.loadingViewContainer, style]}>
        <ActivityIndicator size={_activityIndicatorSize}/>
    </View>)
    return isLoading ? loadingView : children
}

LoadingViewWrapper.propTypes = {
    isLoading: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    children: PropTypes.node,
    activityIndicatorSize: PropTypes.string,
}

const styles = StyleSheet.create({
    loadingViewContainer: {
        backgroundColor: '#fbf9fe',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
