import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './styles/fade-css-transition.scss'

const FadeCSSTransition = ({ in: inProp, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={{ appear: 0, enter: 0, exit: 0 }}
      classNames='fade'
      appear
      unmountOnExit
    >
      <div>{children}</div>
    </CSSTransition>
  )
}

export default FadeCSSTransition
