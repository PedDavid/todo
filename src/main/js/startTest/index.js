import React from 'react'
import ReactDOM from 'react-dom'

function HelloWorld (props) {
  return <h1> Hello {props.name} World </h1>
}

ReactDOM.render(
  React.createElement(HelloWorld, { name: 'React' }),
  document.getElementById('react')
)
