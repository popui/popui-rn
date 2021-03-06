// Overlay.js

'use strict'

import React from 'react'
import TopView from 'rn-topview'

export default class Overlay {
  // base props
  //   style: ViewPropTypes.style,
  //   modal: PropTypes.bool,
  //   animated: PropTypes.bool,
  //   overlayOpacity: PropTypes.number,
  //   overlayPointerEvents: ViewPropTypes.pointerEvents,
  static show(overlayView) {
    let key
    let onDisappearCompletedSave = overlayView.props.onDisappearCompleted
    let element = React.cloneElement(overlayView, {
      onDisappearCompleted: () => {
        TopView.remove(key)
        onDisappearCompletedSave && onDisappearCompletedSave()
      },
    })
    key = TopView.add(element)
    return key
  }

  static hide(key) {
    TopView.remove(key)
  }

  static transformRoot(transform, animated, animatesOnly = null) {
    TopView.transform(transform, animated, animatesOnly)
  }

  static restoreRoot(animated, animatesOnly = null) {
    TopView.restore(animated, animatesOnly)
  }
}
