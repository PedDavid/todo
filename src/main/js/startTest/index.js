import React from 'react'
import ReactDOM from 'react-dom'

function HelloWorld (props) {
  return React.createElement('h1', null, `Hello ${props.name} World`)
}

ReactDOM.render(
  React.createElement(HelloWorld, { name: 'React' }),
  document.getElementById('react')
)
