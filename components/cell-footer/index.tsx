import PropTypes from 'prop-types'
import React from 'react'
import { Image, StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    cellFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    cellFooterText: {
        textAlign: 'center',
        color: V.TextColorGray,
        fontSize: V.CellFontSize,
    },
    vcode: {
        width: 100,
        height: 44,
    },
})

const CellFooter = ({ children, style, access, ...others }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (!child.type) {
            return <Text style={[styles.cellFooterText, style]} {...others}>{child}</Text>
        }
        if (child.type && child.type.displayName === 'Image' && !child.props.style) {
            return React.cloneElement(child, { style: [styles.vcode, child.props.style] })
        }
        return child
    })
    const cellFooterStyle = style ? [styles.cellFooter,style] : styles.cellFooter
    return (
        <View style={cellFooterStyle}>
            {childrenWithProps}
            {access ?
                <Image
                    style={{ width: 7.5, height: 12, marginLeft: 5 }}
                    source={require('assets/images/back_arrow.png')}
                /> : false}
        </View>
    )
}

CellFooter.propTypes = {
    access: PropTypes.bool,
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellFooter
