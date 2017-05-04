import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import HelloWorld from './components/HelloWorld'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld name='React' />
  </Provider>,
  document.getElementById('root')
)
