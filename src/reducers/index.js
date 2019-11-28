import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import APIReducer from './api';

// REDUCER EXPORT

export default (history) => combineReducers({
	router: connectRouter(history),
	api: APIReducer
});
