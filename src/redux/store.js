import { combineReducers, createStore } from 'redux';
import todos from '../reducers/todos';

let rootReducer = combineReducers({ todos });
let store = createStore(rootReducer);

export default store;