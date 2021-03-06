import * as apiActions from './api';
import {types as apiTypes} from './api';

import * as chatActions from './chat';
import {types as chatTypes} from './chat';


export const APITypes = apiTypes;
export const APIActions = apiActions;

export const ChatTypes = chatTypes;
export const ChatActions = chatActions;


// rootest of roots, init types
export const INIT = 'INIT';
export const INIT_DONE = 'INIT_DONE';
export const FONT_DONE = 'FONT_DONE';
export const STYLES_DONE = 'STYLES_DONE';

export const init = function(){
  return { type: INIT };
}
export const initDone = function(){
  return { type: INIT_DONE };
}
export const fontsDone = function(){
  return { type: FONT_DONE };
}
export const stylesDone = function(){
  return { type: STYLES_DONE };
}
