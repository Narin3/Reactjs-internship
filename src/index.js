import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import AfterSubmit from './AfterSubmit'
import { Router, Route, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/aftersubmit" component={AfterSubmit} />
    </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
