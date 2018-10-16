import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'
import TouchableWithFallback from '../touchable-with-fallback'

const underlayColor = '#ECECEC'

const styles = StyleSheet.create({
    media: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 15,
        marginLeft: 15,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: varibles.LineColorLight,
    },

    // appmsg
    appmsgMedia: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    // small_appmsg
    small_appmsgMedia: {
        padding: 0,
        marginLeft: 0,
    },

    firstMedia: {
        borderTopWidth: 0,
    },
})

const Media = ({ type, style, children, first, ...others }) =>
    <TouchableWithFallback
        style={style}
        underlayColor={underlayColor}
        {...others}
    >
        <View
            style={[styles.media, styles[`${type}Media`] || {}, first ? styles.firstMedia : {}]}
        >{children}</View>
    </TouchableWithFallback>

Media.propTypes = {
    type: PropTypes.oneOf(['text', 'appmsg', 'small_appmsg']),
    style: ViewPropTypes.style,
    children: PropTypes.node,
    first: PropTypes.bool,
}

export default Media
