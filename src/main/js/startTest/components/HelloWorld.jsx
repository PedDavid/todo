import React from 'react'
import TodoItem from './TodoItem'

export default (props) =>
  <div>
    <h1>Hello {props.name} World</h1>
    <ul>
      {props.todos.map(value => <TodoItem key={value.key.toString()} description={value.description} />)}
    </ul>
  </div>
