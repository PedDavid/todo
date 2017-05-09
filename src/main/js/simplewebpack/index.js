import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import React from 'react'
import { render } from 'react-dom'
import { Icon } from 'semantic-ui-react'
import { createStore } from 'redux'

// Action
// const addTodo = { type: 'ADD_TODO', text: 'My Todo' }
// const removeTodo = { type: 'REMOVE_TODO', id: 1 }
// const toggleTodo = { type: 'TOGGLE_TODO', id: 1 }
// const showCompletedTodo = {type: 'SET_VISIBILITY_FILTER', filter: 1 }

// Action Creator
const addTodo = text => ({ type: 'ADD_TODO', text })
const removeTodo = id => ({ type: 'REMOVE_TODO', id })
const toggleTodo = id => ({ type: 'TOGGLE_TODO', id })

// Reducer (prevState, action) => newState
function todoReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, { text: action.text, completed: false }]
    }
    case 'TOGGLE_TODO': {
      return state.map((todo, index) => {
        if (index === action.id) return Object.assign({}, todo, { completed: !todo.completed })
        return todo
      })
    }
    case 'REMOVE_TODO': {
      return state.filter((todo, index) => index !== action.id)
    }
    default: {
      return state
    }
  }
}

// Create Store
const store = createStore(todoReducer)

// Sample flow
store.dispatch(addTodo('Hello'))
store.dispatch(addTodo('Redux'))
store.dispatch(addTodo('World'))
store.dispatch(addTodo('!'))
store.dispatch(toggleTodo(3))
store.dispatch(addTodo('Hello'))
store.dispatch(removeTodo(4))

const App = () =>
  <div>
    <h1>Hello React World with JSX</h1>
    <Icon loading name='spinner' />
  </div>

render(
  <App />,
  document.getElementById('root')
)
