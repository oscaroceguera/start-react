import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'styles/style.css'

const MainContainer = React.createClass({
  render () {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            <h1>Hola Mundo!</h1>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

export default MainContainer
