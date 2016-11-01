import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/* store */
import { configureStore } from './store'

/* route */
import routes from './routes'

/* store,history */
const store = configureStore(browserHistory,window.__initialState__)
const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("app")
);