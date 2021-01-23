import {citiesTypes} from "./index";

export interface ICity {
  id: number
  name: string
}

export interface ICitiesState {
  loading: boolean
  cities: ICity[] | null
  currentCity: ICity | null
  error: any
}

export interface IRequestCitiesAction {
  type: citiesTypes.CITIES_REQUEST
}

export interface IReceiveCitiesAction {
  type: citiesTypes.CITIES_RECEIVE,
  payload: ICity[]
}

export interface ICurrentCityAction {
  type: citiesTypes.CHANGE_CURRENT_CITY,
  payload: ICity
}

export interface IFailureCitiesAction {
  type: citiesTypes.CITIES_FAILURE,
  payload: any
}

export interface IClearCitiesAction {
  type: citiesTypes.CITIES_CLEAR
}

export type TCitiesActionTypes =
  IRequestCitiesAction |
  IReceiveCitiesAction |
  ICurrentCityAction |
  IFailureCitiesAction |
  IClearCitiesAction