import PropTypes from 'prop-types'
import React from 'react'
import { ScrollView, StyleSheet, ViewPropTypes } from 'react-native'

const styles = StyleSheet.create({
    article: {
        paddingTop: 20,
        paddingRight: 15,
        paddingBottom: 20,
        paddingLeft: 15,
    },
})

const Article = ({ style, children }) =>
    <ScrollView style={[styles.article, style]}>
        {children}
    </ScrollView>

Article.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default Article
