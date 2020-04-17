import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './styles/float-css-transition.scss'

const FloatCSSTransition = ({ in: inProp, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={{ appear: 0, enter: 0, exit: 0 }}
      classNames='float'
      appear
      unmountOnExit
    >
      <div>{children}</div>
    </CSSTransition>
  )
}

export default FloatCSSTransition
