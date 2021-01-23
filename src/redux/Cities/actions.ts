import {citiesTypes} from "./index";
import {
  ICity, IClearCitiesAction,
  ICurrentCityAction,
  IFailureCitiesAction,
  IReceiveCitiesAction,
  IRequestCitiesAction
} from "./models";

/////////////<<Fetch Cities>>/////////////
const requestCitiesActionCreator = (): IRequestCitiesAction => ({
  type: citiesTypes.CITIES_REQUEST
})

const receiveCitiesActionCreator = (data: ICity[]): IReceiveCitiesAction => ({
  type: citiesTypes.CITIES_RECEIVE,
  payload: data
})

const failureCitiesActionCreator = (err: any): IFailureCitiesAction => ({
  type: citiesTypes.CITIES_FAILURE,
  payload: { err }
})
/////////////End <<Fetch Cities>>/////////////

const setCurrentCityActionCreator = (data: ICity): ICurrentCityAction => ({
  type: citiesTypes.CHANGE_CURRENT_CITY,
  payload: data
})

/////////////<<Clear state>>/////////////
const clearCitiesActionCreator = (): IClearCitiesAction => ({
  type: citiesTypes.CITIES_CLEAR
})
/////////////End <<Clear state>>/////////////

export default {
  requestCitiesActionCreator,
  receiveCitiesActionCreator,
  failureCitiesActionCreator,
  setCurrentCityActionCreator,
  clearCitiesActionCreator
}