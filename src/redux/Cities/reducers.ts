import {ICitiesState, TCitiesActionTypes} from "./interfaces";
import {citiesTypes} from "./index";

const initialState: ICitiesState = {
  loading: false,
  cities: null,
  currentCity: null,
  error: null
}

export default function citiesReducer(state = initialState, action: TCitiesActionTypes) {
  switch (action.type) {
    case citiesTypes.CITIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case citiesTypes.CITIES_RECEIVE:
      return {
        ...state,
        loading: false,
        error: null,
        cities: action.payload
      }
    case citiesTypes.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      }
    case citiesTypes.CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case citiesTypes.CITIES_CLEAR:
      return {
        loading: false,
        error: null,
        products: null
      }
    default:
      return state
  }
}