import { createStore , combineReducers , applyMiddleware } from 'redux'
import * as reducer from '../reducer/index'
import thunk from 'redux-thunk'
// console.log(reducer)
//创建一个  Redux store 来存放应用中所有的state,应用中有且只有一个store

// const Store = createStore(
//     combineReducers(reducer),
//     applyMiddleware(thunk),
// );

const Store = createStore(reducer.reducer);
export default Store;