import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, View, ViewPropTypes } from 'react-native'

const styles = StyleSheet.create({
    section: {
        marginBottom: 22.5,
    },
})

const Section = ({ style, children }) =>
    <View style={[styles.section, style]}>{children}</View>

Section.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default Section
