import {EProductsActionTypes} from "../constants/Products";
import {IProducts} from "../types/types";

export const requestProducts = () => ({
  type: EProductsActionTypes.REQUEST
})

export const receiveProducts = (data: IProducts[]) => ({
  type: EProductsActionTypes.RECEIVE,
  payload: data
})

export const failureProducts = (err: any) => ({
  type: EProductsActionTypes.FAILURE,
  payload: { err }
})

export const clearProducts = () => ({
  type: EProductsActionTypes.CLEAR
})