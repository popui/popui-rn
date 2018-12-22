// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../style/themes/default'
import { PreviewItemPropsType } from './PropsType'

const styles = StyleSheet.create({
  formPreviewItem: {
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bodyPreviewLabel: {
    marginRight: theme.baseFontSize * 0.9,
    fontSize: theme.baseFontSize * 0.9,
    lineHeight: theme.baseFontSize * 0.9 * 2,
  },
  bodyPreviewValue: {
    fontSize: theme.baseFontSize * 0.9,
    lineHeight: theme.baseFontSize * 0.9 * 2,
    color: theme.TextColorGray,
  },
  headerPreviewLabel: {
    marginRight: theme.baseFontSize,
    fontSize: theme.baseFontSize,
    lineHeight: theme.baseFontSize * 2.5,
  },
  headerPreviewValue: {
    fontSize: theme.baseFontSize * 1.6,
    lineHeight: theme.baseFontSize * 2.5,
    fontStyle: 'normal',
  },
})

const PreviewItem = ({
  style,
  children,
  preset = 'body',
  ...others
}: PreviewItemPropsType) => {
  const childrenWithProps = React.Children.map(children, (child: any) => {
    if (child.type.name === 'PreviewLabel') {
      return React.cloneElement(child, {
        style: [child.props.style, styles[`${preset}PreviewLabel`]],
      })
    }
    if (child.type.name === 'PreviewValue') {
      return React.cloneElement(child, {
        style: [child.props.style, styles[`${preset}PreviewValue`]],
      })
    }
    return child
  })

  return (
    <View style={[styles.formPreviewItem, style]} {...others}>
      {childrenWithProps}
    </View>
  )
}

// PreviewItem.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
//     preset: PropTypes.string,
// }

export default PreviewItem
