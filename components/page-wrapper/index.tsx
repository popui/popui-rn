import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StyleSheet, View } from 'react-native'
import GapH from 'popui-rn/components/gap-h'

export interface IProps {
    hasPaddingTop: boolean,
    hasPaddingBottom: boolean,
    hasPadddingHorizontal: boolean,
    style: any,
    children: any,
    disableScroll: boolean
}

/**
 * 主要内容
 * 提供 PaddingTop,PadddingHorizontal,scrollView 包装
 * @returns {any}
 */
export default function WingBlank(props: IProps) {
    const {
        hasPaddingTop,
        hasPaddingBottom,
        hasPadddingHorizontal,
        style,
        children,
        disableScroll,
    } = props

    const _hasPaddingBottom = hasPaddingBottom || true
    // 主要内容
    const padddingHorizontalStyle = hasPadddingHorizontal ? styles.padddingHorizontal : null
    const padddingTopStyle = hasPaddingTop ? styles.paddingTop : null

    const contentViewStyle = [styles.contentContainer, padddingHorizontalStyle, padddingTopStyle, style]
    const contentView = (<View style={contentViewStyle}>
        {children}
    </View>)

    let contentViewWithWrapper = contentView
    if (!disableScroll) {
        contentViewWithWrapper = (<ScrollView
            style={[styles.scrollView]}
            contentContainerStyle={[styles.scrollViewContentContainer]}
        >
            {contentView}
            {_hasPaddingBottom && <GapH />}
        </ScrollView>)
    }
    return contentViewWithWrapper
}

WingBlank.propTypes = {
    hasPaddingTop: PropTypes.bool,
    hasPaddingBottom: PropTypes.bool,
    hasPadddingHorizontal: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    children: PropTypes.node,
    disableScroll: PropTypes.bool,
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fbf9fe',
    },
    scrollViewContentContainer: {
        marginBottom: 50,
    },
    contentContainer: {
        backgroundColor: '#fbf9fe',
        flex: 1,
    },
    padddingHorizontal: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    paddingTop: {
        paddingTop: 15,
    },
    paddingBottom: {
        paddingBottom: 30,
    },
})
