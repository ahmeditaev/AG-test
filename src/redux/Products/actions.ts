import {productsTypes} from "./index";
import {
  IClearProductsAction,
  IFailureProductsAction,
  IFilterProductsAction,
  IProduct,
  IReceiveProductsAction,
  IRequestProductsAction
} from "./models";

/////////////<<Fetch products>>/////////////
const requestProductsActionCreator = (): IRequestProductsAction => ({
  type: productsTypes.PRODUCTS_REQUEST
})

const receiveProductsActionCreator = (data: IProduct[]): IReceiveProductsAction => ({
  type: productsTypes.PRODUCTS_RECEIVE,
  payload: data
})

const failureProductsActionCreator = (err: any): IFailureProductsAction => ({
  type: productsTypes.PRODUCTS_FAILURE,
  payload: { err }
})
/////////////End <<Fetch products>>/////////////

const setFilterProductsActionCreator = (data: IProduct[]): IFilterProductsAction => ({
  type: productsTypes.PRODUCTS_FILTER,
  payload: data
})

/////////////<<Clear state>>/////////////
const clearProductsActionCreator = (): IClearProductsAction => ({
  type: productsTypes.PRODUCTS_CLEAR
})
/////////////End <<Clear state>>/////////////

export default {
  requestProductsActionCreator,
  receiveProductsActionCreator,
  failureProductsActionCreator,
  setFilterProductsActionCreator,
  clearProductsActionCreator
}