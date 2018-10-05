import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'
import TouchableWithFallback from 'popui/components/Touchable/TouchableWithFallback'

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: V.CellGapH,
        paddingTop: V.CellGapV,
        paddingBottom: V.CellGapV,
        paddingRight: V.CellGapH,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.CellBorderColor,
    },
    firstCell: {
        borderTopWidth: 0,
    },
    vcodeCell: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
    },
    disabledCell: {
        opacity: 0.5,
    },
})

const Cell = ({ access, vcode, error, first, disabled, children, style, ...others }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (access && child.type.name === 'CellFooter') {
            return React.cloneElement(child, { access: true })
        }
        if (error && (child.type.name === 'CellHeader' || child.type.name === 'CellBody')) {
            return React.cloneElement(child, { error: true })
        }
        return child
    })

    return (
        <TouchableWithFallback underlayColor={V.BgColorActive} {...others} >
            <View
                style={[
                    styles.cell,
                    style,
                    first ? styles.firstCell : null,
                    vcode ? styles.vcodeCell : null,
                    disabled ? styles.disabledCell : null,
                ]}
            >{childrenWithProps}</View>
        </TouchableWithFallback>
    )
}

Cell.propTypes = {
    first: PropTypes.bool,
    access: PropTypes.bool,
    vcode: PropTypes.bool,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    style: ViewPropTypes.style,
}

export default Cell
