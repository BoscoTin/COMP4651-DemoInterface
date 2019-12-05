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
  var array = state.slice()
  switch (action.type) {
    case types.SEND_MSG_SUCCESS:
      array.push({
        content: action.payload,
        user: false
      })
      return array
    case types.SEND_LA:
      array.push({
        content: action.payload,
        user: true
      })
      return array
    case types.SEND_MSG_FAIL:
      array.push({
        content: "Send to server failed. Please try again.",
        user: false
      })
    default: return state
  }
}


const chatReducer = combineReducers({
  status,
  messages
})

export default chatReducer
