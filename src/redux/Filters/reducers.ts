import {IVisibilityFilterState, TVisibilityFilterTypes} from "./models";
import {visibilityFilterTypes} from "./index";

const initialState: IVisibilityFilterState = {
  city: null,
  category: [],
  price: null
}

export default function visibilityFilterReducer(state = initialState, action: TVisibilityFilterTypes): IVisibilityFilterState {
  switch (action.type) {
    case visibilityFilterTypes.CITY_FILTER_CHANGE:
      return {
        ...state,
        city: action.payload
      }
    case visibilityFilterTypes.CATEGORY_FILTER_CHANGE:
      return {
        ...state,
        category: action.payload
      }
    case visibilityFilterTypes.PRICE_FILTER_CHANGE:
      return {
        ...state,
        price: action.payload
      }
    case visibilityFilterTypes.FILTER_CLEAR:
      return {
        city: null,
        category: [],
        price: null
      }
    default:
      return state
  }
}