import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as postReducer } from "./postReducer/reducer";

export const store = legacy_createStore(postReducer, applyMiddleware(thunk));
