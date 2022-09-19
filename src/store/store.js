import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];
const composedEnhancer = compose(applyMiddleware(...middlewares));

const persistConfig = {
    key:"root",
    storage,
    blacklist: ["user"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, undefined, undefined);  
export const persistor = persistStore(store);