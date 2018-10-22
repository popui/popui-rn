import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { Dimensions, Modal, Platform, StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import  Mask from '../mask'
import { create } from '../style/utils/StyleSheet'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import TouchableWithFallback from '../touchable-with-fallback'

const { width } = Dimensions.get('window')
const styles = create({
    dialogWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialog: {
        width: width - 60,
        backgroundColor: themeVars.DialogBackgroundColor,
        borderRadius: 3,
        overflow: 'hidden',
    },
    dialogHeader: {
        paddingTop: 1.3 * themeVars.baseFontSize,
        paddingBottom: 0.5 * themeVars.baseFontSize,
        paddingLeft: themeVars.DialogGapWidth,
        paddingRight: themeVars.DialogGapWidth,
    },
    dialogTitle: {
        fontWeight: '400',
    },
    iosDialogTitle: {
        fontSize: 18,
        textAlign: 'center',
    },
    androidDialogTitle: {
        fontSize: 21,
        textAlign: 'left',
    },
    dialogBody: {
        paddingLeft: themeVars.DialogGapWidth,
        paddingRight: themeVars.DialogGapWidth,
    },
    iosDialogBody: {
        paddingBottom: (0.8 * 15) + 20,
    },
    androidDialogBody: {
        paddingTop: 0.25 * 17,
        paddingBottom: (17 * 2) + 20,
    },
    dialogBodyText: {
        color: themeVars.TextColorGray,
        lineHeight: 15 * 1.3,
        android: {
            lineHeight: Math.round(15 * 1.3),
        },
    },
    iosDialogBodyText: {
        fontSize: 15,
        textAlign: 'center',
    },
    androidDialogBodyText: {
        fontSize: 17,
        textAlign: 'left',
    },
    dialogFooter: {
        flexDirection: 'row',
    },
    iosDialogFooter: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: themeVars.DialogLineColor,
        borderStyle: 'solid',
    },
    androidDialogFooter: {
        height: 42,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingLeft: themeVars.DialogGapWidth,
        paddingRight: themeVars.DialogGapWidth,
        paddingBottom: 16 * 0.7,
    },
    dialogFooterOpr: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iosDialogFooterOpr: {
        height: 48,
        flex: 1,
    },
    androidDialogFooterOpr: {
        height: 42,
        paddingLeft: 16 * 0.8,
        paddingRight: 16 * 0.8,
    },
    dialogFooterOprWithNegativeMarginRight: {
        marginRight: 0 - (16 * 0.8),
    },
    dialogFooterOprWithBorder: {
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: themeVars.DialogLineColor,
        borderStyle: 'solid',
    },
    iosDialogFooterOprText: {
        fontSize: 18,
    },
    androidDialogFooterOprText: {
        fontSize: 16,
    },
    defaultDialogFooterOprText: {
        color: '#353535',
    },
    primaryDialogFooterOprText: {
        color: '#0BB20C',
    },
    warnDialogFooterOprText: {
        color: themeVars.ColorWarn,
    },
})

const underlayColor = themeVars.DialogLinkActiveBc

const Dialog = ({
                    visible = false,
                    buttons = [],
                    title,
                    style,
                    maskStyle,
                    headerStyle,
                    titleStyle,
                    bodyStyle,
                    bodyTextStyle,
                    footerStyle,
                    children,
                    onShow,
                    onClose,
                    autoDectect = true,
                    type = 'ios',
                }) => {
    let _type = type
    if (autoDectect) {
        _type = Platform.OS
    }

    const _renderButtons = () =>
        buttons.map(({ type: btnType, label, ...others }, idx) =>
            <TouchableWithFallback
                key={idx}
                style={[
                    styles.dialogFooterOpr,
                    styles[`${_type}DialogFooterOpr`],
                    _type === 'ios' && idx > 0 ? styles.dialogFooterOprWithBorder : {},
                    _type === 'android' && idx === buttons.length - 1 ? styles.dialogFooterOprWithNegativeMarginRight : {},
                ]}
                underlayColor={underlayColor}
                {...others}
            >
                <Text
                    style={[styles[`${_type}DialogFooterOprText`], styles[`${btnType}DialogFooterOprText`]]}
                >{label}</Text>
            </TouchableWithFallback>,
        )

    const childrenWithProps = React.Children.map(children, child => {
        if (child.type.displayName === 'Text') {
            return React.cloneElement(child, {
                style: [styles.dialogBodyText, styles[`${type}DialogBodyText`], bodyTextStyle, child.props.style],
            })
        }
        return child
    })

    return (
        <Modal
            visible={visible}
            transparent={!false}
            onShow={onShow}
            onRequestClose={onClose}
        >
            <Mask style={[styles.dialogWrapper, maskStyle]} onPress={onClose}>
                <View style={[styles.dialog, style]}>
                    <View style={[styles.dialogHeader, headerStyle]}>
                        <Text style={[styles.dialogTitle, styles[`${type}DialogTitle`], titleStyle]}>{title}</Text>
                    </View>
                    <View style={[styles.dialogBody, styles[`${type}DialogBody`], bodyStyle]}>
                        {childrenWithProps}
                    </View>
                    <View style={[styles.dialogFooter, styles[`${type}DialogFooter`], footerStyle]}>
                        {_renderButtons()}
                    </View>
                </View>
            </Mask>
        </Modal>
    )
}

Dialog.propTypes = {
    autoDectect: PropTypes.bool,
    type: PropTypes.oneOf(['ios', 'android']),
    title: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.object),
    visible: PropTypes.bool,
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    style: ViewPropTypes.style,
    maskStyle: ViewPropTypes.style,
    headerStyle: ViewPropTypes.style,
    titleStyle: Text.propTypes.style,
    bodyStyle: ViewPropTypes.style,
    bodyTextStyle: Text.propTypes.style,
    footerStyle: ViewPropTypes.style,
    children: PropTypes.node,
}

export default Dialog