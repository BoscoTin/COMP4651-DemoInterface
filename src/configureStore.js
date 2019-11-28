// configureStore.js
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
})

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )

  return store
}
