import { runAPI } from './api'

export const BEGIN_SEND_MSG = "BEGIN_SEND_MSG"
export const SEND_MSG_SUCCESS = "SEND_MSG_SUCCESS"
export const SEND_MSG_FAIL = "SEND_MSG_FAIL"


export const types = {
  BEGIN_SEND_MSG,
  SEND_MSG_FAIL,
  SEND_MSG_SUCCESS
}


export function beginSendMessage(){
  return {
    type: BEGIN_SEND_MSG
  }
}

export function sendMessage(data){
  return sendSuccess(data)
  // return runAPI(
  //   '', // path
  //   '', // method
  //   data,
  //   sendSuccess,
  //   sendFail
  // )
}

function sendSuccess(payload){
  return {
    type: SEND_MSG_SUCCESS,
    payload
  }
}

function sendFail(payload){
  return {
    type: SEND_MSG_FAIL,
    payload
  }
}
