import {visibilityFilterTypes} from "./index";

export interface ICityFilterState {
  id: number
  name: string
}

export interface IPriceFilterState {
  min: number
  max: number
}

export interface IVisibilityFilterState {
  city: ICityFilterState | null
  category: number[]
  price: IPriceFilterState | null
}

export interface IChangeCityFilterAction {
  type: visibilityFilterTypes.CITY_FILTER_CHANGE,
  payload: IVisibilityFilterState["city"]
}

export interface IChangeCategoryFilterAction {
  type: visibilityFilterTypes.CATEGORY_FILTER_CHANGE,
  payload: IVisibilityFilterState["category"]
}

export interface IChangePriceFilterAction {
  type: visibilityFilterTypes.PRICE_FILTER_CHANGE,
  payload: IVisibilityFilterState["price"]
}

export interface IClearFilterAction {
  type: visibilityFilterTypes.FILTER_CLEAR
}

export type TVisibilityFilterTypes =
  IChangeCityFilterAction |
  IChangeCategoryFilterAction |
  IChangePriceFilterAction |
  IClearFilterAction