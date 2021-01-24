import {IProductsState, TProductsActionTypes} from "./models";
import {productsTypes} from "./index";

const initialState: IProductsState = {
  loading: false,
  products: null,
  filteredProducts: null,
  error: null
}

export default function productsReducer(state = initialState, action: TProductsActionTypes): IProductsState {
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
        products: action.payload,
        filteredProducts: action.payload
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
        error: action.payload.err
      }
    case productsTypes.PRODUCTS_CLEAR:
      return {
        loading: false,
        error: null,
        products: null,
        filteredProducts: null
      }
    default:
      return state
  }
}