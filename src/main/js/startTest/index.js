import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorld from './components/HelloWorld'

const todos = [ 'todo1', 'todo2', 'todo3' ]
  .map((desc, index) => ({
    key: index,
    description: desc
  }))

ReactDOM.render(
  <HelloWorld name='React' todos={todos} />,
  document.getElementById('react')
)
