import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import WeuiIcon from '../weui-icon'
import V from '../style/themes/weui'
import CellText from './CellText'

const styles = StyleSheet.create({
    cellBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    error: {
        flex: 1,
        color: V.ColorWarn,
    },
})

const CellBody = ({ error, children, style, ...others }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (typeof child === 'string') {
            return <CellText style={[error ? styles.error : null]}>{child}</CellText>
        }
        return React.cloneElement(child, {
            style: [child.props.style,
                error ? styles.error : null,
            ],
        })
    })

    return (
        <View style={[styles.cellBody, style, error ? { flexDirection: 'row' } : null]} {...others}>
            {childrenWithProps}
            {error ? <WeuiIcon name="warn"/> : false}
        </View>
    )
}

CellBody.propTypes = {
    error: PropTypes.bool,
    children: PropTypes.node,
    style: ViewPropTypes.style,
}

export default CellBody
