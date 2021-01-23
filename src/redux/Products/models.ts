import {productsTypes} from "./index";

export interface IProduct {
  id: number
  name: string
  city: number
  category: number
  price: number
}

export interface IProductsState {
  loading: boolean
  products: IProduct[] | null
  filteredProducts: IProduct[] | null
  error: any
}

export interface IRequestProductsAction {
  type: productsTypes.PRODUCTS_REQUEST
}

export interface IReceiveProductsAction {
  type: productsTypes.PRODUCTS_RECEIVE,
  payload: IProduct[]
}

export interface IFilterProductsAction {
  type: productsTypes.PRODUCTS_FILTER,
  payload: IProduct[]
}

export interface IFailureProductsAction {
  type: productsTypes.PRODUCTS_FAILURE,
  payload: any
}

export interface IClearProductsAction {
  type: productsTypes.PRODUCTS_CLEAR
}

export type TProductsActionTypes =
  IRequestProductsAction |
  IReceiveProductsAction |
  IFilterProductsAction |
  IFailureProductsAction |
  IClearProductsAction