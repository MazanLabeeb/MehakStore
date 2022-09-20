import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

const ChromeDevTools = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancer = ChromeDevTools(applyMiddleware(...middlewares));

const persistConfig = {
    key:"root",
    storage,
    blacklist: ["user", "categories"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, undefined, undefined);    


export const persistor = persistStore(store);