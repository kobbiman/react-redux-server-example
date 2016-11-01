import React from "react"
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

/* middleware */
import thunk from 'redux-thunk';

/* reducer */
import * as reducers from './reducers'

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  )

  return store
}