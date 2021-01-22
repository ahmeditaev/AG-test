import {EProductsActionTypes} from "../constants/Products";

export interface IProducts {
  id: number
  name: string
  city: number
  category: number
  price: number
}

export interface IProductsState {
  loading: boolean
  products: IProducts | null
  error: any
}

interface IRequestProductsAction {
  type: EProductsActionTypes.REQUEST
}

interface IReceiveProductsAction {
  type: EProductsActionTypes.RECEIVE,
  payload: IProducts[]
}

interface IFailureProductsAction {
  type: EProductsActionTypes.FAILURE,
  payload: any
}

interface IClearProductsAction {
  type: EProductsActionTypes.CLEAR
}

export type TProductsActionTypes =
  IRequestProductsAction |
  IReceiveProductsAction |
  IFailureProductsAction |
  IClearProductsAction