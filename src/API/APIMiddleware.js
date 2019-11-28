// inspired by ohansemmanuel / fake medium
import axios from "axios";
import { domain } from './info';
import { API } from "../actions/api"; // change later
import {
//  accessDenied,
//  apiError,
  apiStart,
//  apiEnd
} from "../actions/api";


const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
  } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

const instance = axios.create();
  // axios default configs
  instance.defaults.baseURL = domain;
  instance.defaults.headers.common["Content-Type"] = "application/json";

  // assign token to header

  if (label) {
    dispatch(apiStart(label));
  }

  instance
    .request({
      url,
      method,
      [dataOrParams]: data
    })
    .then( ( { data, headers } ) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      // if( error.response &&
      //     error.response.status === 400 &&
      //     store.getState().auth.status !== 'logout'
      // ) {
      //   dispatch( AuthActions.logout() )
      // }

      dispatch(onFailure(error));
    })
    // .finally(() => {
    //   if (label) {
    //     dispatch(apiEnd(label));
    //   }
    // });
};

export default apiMiddleware;
