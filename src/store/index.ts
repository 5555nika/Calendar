import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "./reducers";

export const rootReducers = combineReducers(reducers)

export const store = createStore(rootReducers, undefined, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch =  typeof store.dispatch