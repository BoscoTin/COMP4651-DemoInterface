import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import APIReducer from './api'
import ChatReducer from './chat'

// REDUCER EXPORT

export default (history) => combineReducers({
	router: connectRouter(history),
	api: APIReducer,
	chat: ChatReducer
});
