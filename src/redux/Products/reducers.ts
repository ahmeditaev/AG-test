import {IProductsState, TProductsActionTypes} from "./interfaces";
import {productsTypes} from "./index";

const initialState: IProductsState = {
  loading: false,
  products: null,
  filteredProducts: null,
  error: null
}

export default function productsReducer(state = initialState, action: TProductsActionTypes) {
  switch (action.type) {
    case productsTypes.PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case productsTypes.PRODUCTS_RECEIVE:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }
    case productsTypes.PRODUCTS_FILTER:
      return {
        ...state,
        filteredProducts: action.payload
      }
    case productsTypes.PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case productsTypes.PRODUCTS_CLEAR:
      return {
        loading: false,
        error: null,
        products: null
      }
    default:
      return state
  }
}