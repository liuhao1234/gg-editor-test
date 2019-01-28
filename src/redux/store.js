import { createStore } from 'redux';
import rootReducer from './reducer';

//createStore接收两个参数，第二个参数是默认的state
//const store=createStore(reducer,initialState)
const store = createStore(rootReducer)

export default store;