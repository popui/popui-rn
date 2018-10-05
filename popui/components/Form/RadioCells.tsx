import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, ViewPropTypes } from 'react-native'
import { Cell, CellBody, Cells, CellText } from 'popui/components/Cell'
import { WeuiIcon } from 'popui/components/Icon'
import V from 'popui/theme/ThemeVariables'

const styles = StyleSheet.create({
    radio: {
        fontSize: 16,
        paddingLeft: V.CellInnerGapH,
    },
    disabled: {
        opacity: 0.5,
    },
})

const RadioCells = ({ value, options, onChange, disabled, style, children, ...others }) =>
    <Cells style={[style, disabled ? styles.disabled : null]} {...others}>
        {options.map((option, idx) =>
            <Cell key={idx} onPress={() => !disabled && onChange(option.value)}>
                <CellBody>
                    <CellText>{option.label || option.value}</CellText>
                </CellBody>
                {value === option.value ? (
                    <WeuiIcon name="success_no_circle" style={styles.radio}/>
                ) : null}
            </Cell>,
        )}
        {children}
    </Cells>

RadioCells.propTypes = {
    value: PropTypes.any,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    style: WeuiIcon.propTypes.style,
    children: PropTypes.node,
}

export default RadioCells
