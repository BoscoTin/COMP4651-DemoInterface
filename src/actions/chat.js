import { runAPI } from './api'

export const BEGIN_SEND_MSG = "BEGIN_SEND_MSG"
export const SEND_MSG_SUCCESS = "SEND_MSG_SUCCESS"
export const SEND_MSG_FAIL = "SEND_MSG_FAIL"
export const SEND_LA = "SEND_LA"


export const types = {
  BEGIN_SEND_MSG,
  SEND_MSG_FAIL,
  SEND_MSG_SUCCESS,
  SEND_LA
}


export function beginSendMessage(){
  return {
    type: BEGIN_SEND_MSG
  }
}

export function addMessageInWindow(data){
  return {
    type: SEND_LA,
    payload: data
  }
}

export function sendMessage(data){
  return runAPI(
    '', // path
    'POST', // method
    data,
    sendSuccess,
    sendFail
  )
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
