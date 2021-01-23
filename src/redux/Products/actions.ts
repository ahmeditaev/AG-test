import {productsTypes} from "./index";
import {
  IClearProductsAction,
  IFailureProductsAction,
  IFilterProductsAction,
  IProduct,
  IReceiveProductsAction,
  IRequestProductsAction
} from "./models";

const requestProductsActionCreator = (): IRequestProductsAction => ({
  type: productsTypes.PRODUCTS_REQUEST
})

const receiveProductsActionCreator = (data: IProduct[]): IReceiveProductsAction => ({
  type: productsTypes.PRODUCTS_RECEIVE,
  payload: data
})

const setFilterProductsActionCreator = (data: IProduct[]): IFilterProductsAction => ({
  type: productsTypes.PRODUCTS_FILTER,
  payload: data
})

const failureProductsActionCreator = (err: any): IFailureProductsAction => ({
  type: productsTypes.PRODUCTS_FAILURE,
  payload: { err }
})

const clearProductsActionCreator = (): IClearProductsAction => ({
  type: productsTypes.PRODUCTS_CLEAR
})

export default {
  requestProductsActionCreator,
  receiveProductsActionCreator,
  setFilterProductsActionCreator,
  failureProductsActionCreator,
  clearProductsActionCreator
}