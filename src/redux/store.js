import { MovieReducer } from "./reducers/MovieReducer";
import { combineReducers, createStore,applyMiddleware } from "@reduxjs/toolkit";
import { CategoryReducer } from "./reducers/CategoryReducer";
const{default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    movies: MovieReducer,
    categories: CategoryReducer
})

const initialState ={

}


const middleware = [thunk]

const store = createStore(reducer,initialState,applyMiddleware(...middleware))


export default store;