import {categoriesTypes} from "./index";

export interface ICategory {
  id: number
  name: string
}

export interface ICategoriesState {
  loading: boolean
  categories: ICategory[] | null
  error: any
}

export interface IRequestCategoriesAction {
  type: categoriesTypes.CATEGORIES_REQUEST
}

export interface IReceiveCategoriesAction {
  type: categoriesTypes.CATEGORIES_RECEIVE,
  payload: ICategory[]
}

export interface IFailureCategoriesAction {
  type: categoriesTypes.CATEGORIES_FAILURE,
  payload: any
}

export interface IClearCategoriesAction {
  type: categoriesTypes.CATEGORIES_CLEAR
}

export type TCategoriesActionTypes =
  IRequestCategoriesAction |
  IReceiveCategoriesAction |
  IFailureCategoriesAction |
  IClearCategoriesAction