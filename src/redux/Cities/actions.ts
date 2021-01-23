import {citiesTypes} from "./index";
import {
  ICity, IClearCitiesAction,
  ICurrentCityAction,
  IFailureCitiesAction,
  IReceiveCitiesAction,
  IRequestCitiesAction
} from "./models";

const requestCitiesActionCreator = (): IRequestCitiesAction => ({
  type: citiesTypes.CITIES_REQUEST
})

const receiveCitiesActionCreator = (data: ICity[]): IReceiveCitiesAction => ({
  type: citiesTypes.CITIES_RECEIVE,
  payload: data
})

const setCurrentCityActionCreator = (data: ICity): ICurrentCityAction => ({
  type: citiesTypes.CHANGE_CURRENT_CITY,
  payload: data
})

const failureCitiesActionCreator = (err: any): IFailureCitiesAction => ({
  type: citiesTypes.CITIES_FAILURE,
  payload: { err }
})

const clearCitiesActionCreator = (): IClearCitiesAction => ({
  type: citiesTypes.CITIES_CLEAR
})

export default {
  requestCitiesActionCreator,
  receiveCitiesActionCreator,
  setCurrentCityActionCreator,
  failureCitiesActionCreator,
  clearCitiesActionCreator
}