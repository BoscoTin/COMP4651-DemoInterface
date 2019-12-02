// configureStore.js
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import apiMiddleware from './API/APIMiddleware';
import createRootReducer from './reducers'

const logger = store => next => action => {
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result;
}

export const history = createBrowserHistory()


export default function configureStore(preloadedState) {

  const initialState = {
    chat: {
      messages: [
        {
          content: "Hi",
          user: true
        },
        {
          content: "Bye",
          user: false
        }
      ]
    }
  }

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        logger, //for debug
        routerMiddleware(history), // for dispatching history actions
        apiMiddleware
      ),
    ),
  )

  return store
}
