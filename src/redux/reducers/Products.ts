import {IProductsState, TProductsActionTypes} from "../types/types";
import {EProductsActionTypes} from "../constants/Products";

const initialState: IProductsState = {
  loading: false,
  products: null,
  error: null
}

export default function productsReducer(state = initialState, action: TProductsActionTypes) {
  switch (action.type) {
    case EProductsActionTypes.REQUEST:
      return {
        ...state,
        loading: true
      }
    case EProductsActionTypes.RECEIVE:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }
    case EProductsActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case EProductsActionTypes.CLEAR:
      return {
        loading: false,
        error: null,
        products: null
      }
    default:
      return state
  }
}