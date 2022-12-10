import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

// const root = ReactDOM.createRoot(document.getElementById('root'))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
