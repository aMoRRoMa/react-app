import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameApp from './reducers'
import App from './components/app/app.component'

import './index.css'

// ========================================

let store = createStore(gameApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
