import {applyMiddleware, combineReducers, compose, createStore, Reducer} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import {reducer as Products} from './Products'
import {reducer as Cities} from './Cities'
import {reducer as Categories} from './Categories'
import {reducer as VisibilityFilter} from './Filters'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import {IProductsState} from "./Products/models";
import {ICitiesState} from "./Cities/models";
import {ICategoriesState} from "./Categories/models";
import {IVisibilityFilterState} from "./Filters/models";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export interface RootState {
  Products: IProductsState,
  Cities: ICitiesState,
  Categories: ICategoriesState
  VisibilityFilter: IVisibilityFilterState
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const persistConfig: any = {
  key: "root",
  storage
}

const reducers: Reducer = combineReducers({
  Products,
  Cities,
  Categories,
  VisibilityFilter
})

const middlewareEnhancer = applyMiddleware(thunk)

const composedEnhancer = compose(middlewareEnhancer)

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, composeWithDevTools(composedEnhancer))

export const persistor = persistStore(store)