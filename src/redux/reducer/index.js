import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';

const allReducers = {
	token : tokenReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;