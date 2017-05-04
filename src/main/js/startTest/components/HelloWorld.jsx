import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

const Todos = ({todos}) =>
  <div>
    <h1>Todos</h1>
    <ul>
      {todos.map(value => <TodoItem key={value.id.toString()} description={value.description} />)}
    </ul>
  </div>

const BoundTodos = connect(state => ({ todos: state.todos }))(Todos)

const About = () =>
  <div>
    <h1>About</h1>
    <p>This is a sample project to practice web development using modern technologies</p>
  </div>

const Home = () =>
  <div>
    <h1>Home</h1>
  </div>

export default ({ name }) =>
  <Router>
    <div>
      <h1>Hello {name} World</h1>
      <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/about'> About </Link></li>
        <li><Link to='/todos'> Todos </Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/todos' component={() => <BoundTodos />} />
    </div>
  </Router>
