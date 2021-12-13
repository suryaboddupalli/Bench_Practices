import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import userReducer from "./reducers/userReducer";
import { watchUser } from "../Saga/userSaga";

const saga = createSagaMiddleware()


export const store = createStore(userReducer, applyMiddleware(saga))

saga.run(watchUser);

