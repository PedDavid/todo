import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import React from 'react'
import { render } from 'react-dom'
import { Icon } from 'semantic-ui-react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import TodoList from './app/components/TodoList'

// Reducer (prevState, action) => newState
function todos (state = [], action) {
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
const store = createStore(combineReducers({
  todos
}))

const App = () =>
  <div>
    <h1>Hello React World with JSX</h1>
    <Icon loading name='spinner' />
    <TodoList />
  </div>

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
