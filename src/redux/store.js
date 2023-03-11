import { createStore, applyMiddleware, compose } from "redux";
import AllReducers from "./AllReducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AllReducers, {}, composeEnhancers(applyMiddleware()));

export default store;
