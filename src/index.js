import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux"
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import register from './reducers'

import './index.css'
import AfterSubmit from './AfterSubmit'
import { Route, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const middleware = routerMiddleware(history)

import registerReducer from "./reducers/register"

import App from './App'

const reducers = combineReducers({ register: registerReducer, router: routerReducer })
const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/aftersubmit" component={AfterSubmit} />
    </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
