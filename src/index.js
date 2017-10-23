import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AfterSubmit from './AfterSubmit'
import { Router, Route, browserHistory } from 'react-router'
import PageTransition from 'react-router-page-transition'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/aftersubmit" component={AfterSubmit} />
    </Router>

), document.getElementById('root'));
registerServiceWorker();
