import React from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import getAllReducers from './reducer'
import App from './modules'
import rootSaga from '../src/modules/postList/saga'

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers(getAllReducers())
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const root = document.querySelector('#root')

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
