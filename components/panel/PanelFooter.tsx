import PropTypes from 'prop-types'
import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View, ViewPropTypes } from 'react-native'
import variables from '../style/themes/default'
import TouchableWithFallback from '../touchable-with-fallback'

const styles = StyleSheet.create({
    PanelFooter: {
        paddingTop: 12, // 10
        paddingRight: 15,
        paddingBottom: 12,
        marginLeft: 15,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: variables.LineColorLight,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    PanelFooterText: {
        flex: 1,
        color: variables.TextColorGray,
        fontSize: 14,
    },
})

const PanelFooter = ({ children, style, textStyle, access, ...others }) =>
    <TouchableWithFallback style={style} underlayColor={variables.BgColorActive} {...others}>
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
