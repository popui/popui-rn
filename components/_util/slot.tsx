import React from 'react'
import Text from '../text'

function defualtRenderText(text: string) {
  return <Text>{text}</Text>
}

export function getRenderElement({
  renderText = defualtRenderText,
}: {
  renderText?: Function
}) {
  function renderElement(el: any) {
    if (!el) {
      return null
    }
    if (typeof el === 'string') {
      return renderText(el)
    }
    if (React.isValidElement(el)) {
      return el
    }
    if (typeof el === 'function') {
      return el()
    }
    console.warn('renderElement: unkown type. el:', el)
    return el
  }
  return renderElement
}

const renderElement = getRenderElement({})
export default renderElement
