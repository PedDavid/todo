import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'semantic-ui-react'

const App = () =>
  <div>
    <h1>Hello React World with JSX</h1>
    <Icon loading name='spinner' />
  </div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
