import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "@redux-saga/core";
import { rootSage } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [process.env.NODE_ENV !== 'production' && logger , sagaMiddleware].filter(Boolean);

const ChromeDevTools = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancer = ChromeDevTools(applyMiddleware(...middlewares));

const persistConfig = {
    key:"root",
    storage,
    blacklist: ["user", "categories"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, undefined, undefined);  

sagaMiddleware.run(rootSage);

export const persistor = persistStore(store);