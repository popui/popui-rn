import PropTypes from 'prop-types'
import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'
import TouchableWithFallback from 'popui/components/Touchable/TouchableWithFallback'

const styles = StyleSheet.create({
    PanelFooter: {
        paddingTop: 12, // 10
        paddingRight: 15,
        paddingBottom: 12,
        marginLeft: 15,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: V.LineColorLight,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    PanelFooterText: {
        flex: 1,
        color: V.TextColorGray,
        fontSize: 14,
    },
})

const PanelFooter = ({ children, style, textStyle, access, ...others }) =>
    <TouchableWithFallback style={style} underlayColor={V.BgColorActive} {...others}>
        <View style={styles.PanelFooter}>
            <Text style={[styles.PanelFooterText, textStyle]}>
                {children}
            </Text>
            {access ?
                <Image
                    style={{ width: 7.5, height: 12, marginLeft: 5 }}
                    source={require('assets/images/back_arrow.png')}
                /> : false}
        </View>
    </TouchableWithFallback>

PanelFooter.propTypes = {
    access: PropTypes.bool,
    children: PropTypes.node,
    style: TouchableHighlight.propTypes.style,
    textStyle: Text.propTypes.style,
}

export default PanelFooter
