import PropTypes from 'prop-types'
import React from 'react'
import { Slider as RNSlider, StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    sliderWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    slider: {
        flex: 1,
    },
    sliderText: {
        marginLeft: 14 * 0.5,
        minWidth: 24,
        color: '#888888',
        textAlign: 'center',
        fontSize: 14,
    },
})

const Slider = ({
                    max = 100,
                    min = 0,
                    step = 1,
                    defaultValue = 0,
                    disabled = false,
                    showValue = true,
                    value,
                    onChange,
                    style,
                    sliderStyle,
                    textStyle,
                    ...others,
                }) =>
    <View style={[styles.sliderWrapper, style]}>
        <RNSlider
            maximumValue={max}
            minimumValue={min}
            step={step}
            value={defaultValue}
            onValueChange={onChange}
            disabled={disabled}
            minimumTrackTintColor={V.ColorPrimary}
            maximumTrackTintColor={'#E9E9E9'}
            style={[styles.slider, sliderStyle]}
            {...others}
        />
        {showValue ? <Text style={[styles.sliderText, textStyle]}>{value}</Text> : false}
    </View>

Slider.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
    showValue: PropTypes.bool,
    value: PropTypes.number,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    style: ViewPropTypes.style,
    sliderStyle: RNSlider.propTypes.style,
    textStyle: Text.propTypes.style,
}

export default Slider
