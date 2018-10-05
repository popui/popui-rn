import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import { create } from 'popui/components/StyleSheet'
import V from '../style/themes/weui'

const { width } = Dimensions.get('window')
const styles = create({
    loadMore: {
        width: width * 0.65,
        marginTop: 14 * 1.5,
        marginBottom: 14 * 1.5,
        marginLeft: width * 0.175,
        marginRight: width * 0.175,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadMoreLine: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.LineColorLight,
        marginTop: 14 * 2.4,
    },
    loadMoreTips: {
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 14 * 1.6,
        android: {
            lineHeight: Math.round(14 * 1.6),
        },
    },
    loadMoreLineTips: {
        position: 'relative',
        top: 0 - (14 * 0.9),
        paddingLeft: 14 * 0.55,
        paddingRight: 14 * 0.55,
        color: V.TextColorGray,
    },
    loadMoreDotTips: {
        paddingLeft: 14 * 0.16,
        paddingRight: 14 * 0.16,
        top: 0 - (14 * 1.2),
    },
    dot: {
        width: 4,
        height: 4,
        backgroundColor: V.LineColorLight,
        borderRadius: 12,
    },
})
export interface ILoadMoreProps {
    loading?: boolean,
    showLine?: boolean,
    showDot?: boolean,
    style?: any,
    textStyle?: any,
    children?: any,
}

const LoadMore = ({ loading, showLine, showDot, style, textStyle, children, ...others }: ILoadMoreProps) =>
    <View
        style={[
            styles.loadMore,
            showLine ? styles.loadMoreLine : {},
            showDot ? styles.loadMoreDot : {},
            style,
        ]}
        {...others}
    >
        {loading ? <ActivityIndicator style={{ marginRight: 5 }} /> : false}
        <Text
            style={[
                styles.loadMoreTips,
                showLine ? styles.loadMoreLineTips : {},
                showDot ? styles.loadMoreDotTips : {},
                textStyle,
            ]}
        >
            {showDot ? <View style={styles.dot} /> : false}
            {children}
        </Text>
    </View>



export default LoadMore
