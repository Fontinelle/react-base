import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

export default combineReducers({ exampleRed: exampleReducer });
