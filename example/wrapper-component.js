import React from 'react'
import { StyleSheetManager } from 'styled-components'

const Component = (props) => {
  const { frameContext } = props
  return (
    <StyleSheetManager target={frameContext.document.head} className="1123456">
      {props.children}
    </StyleSheetManager>
  )
}

export default Component