import {applyMiddleware, combineReducers, compose, createStore, Reducer} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import Products from './reducers/Products'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig: any = {
  key: "root",
  storage
}

const reducers: Reducer = combineReducers({
  Products
})

const middlewareEnhancer = applyMiddleware(thunk)

const composedEnhancer = compose(middlewareEnhancer)

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, composeWithDevTools(composedEnhancer))

export const persistor = persistStore(store)