import { createStore, applyMiddleware, combineReducers } from "redux";

import promiseMiddleWare from "redux-promise-middleware";
import userReducer from "./ducks/userReducer";

const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
	userReducer
	//   storeReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
