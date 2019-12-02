import { combineReducers } from 'redux'
import { types } from '../actions/chat'


const status = (state = '', action) => {
  switch (action.type) {
    case types.BEGIN_SEND_MSG:
      return 'loading'
    case types.SEND_MSG_FAIL:
      return 'fail'
    case types.SEND_MSG_SUCCESS:
      return 'success'
    default: return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case types.SEND_MSG_SUCCESS:
      var array = state.slice()
      array.push({
        content: action.payload.message,
        user: true
      })
      return array
    default: return state
  }
}


const chatReducer = combineReducers({
  status,
  messages
})

export default chatReducer
