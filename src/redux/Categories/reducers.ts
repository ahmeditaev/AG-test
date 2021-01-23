import {ICategoriesState, TCategoriesActionTypes} from "./models";
import {categoriesTypes} from "./index";

const initialState: ICategoriesState = {
  loading: false,
  categories: null,
  selectedCategories: [],
  error: null
}

export default function categoriesReducer(state = initialState, action: TCategoriesActionTypes): ICategoriesState {
  switch (action.type) {
    case categoriesTypes.CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case categoriesTypes.CATEGORIES_RECEIVE:
      return {
        ...state,
        loading: false,
        error: null,
        categories: action.payload
      }
    case categoriesTypes.CHANGE_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload
      }
    case categoriesTypes.CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case categoriesTypes.CATEGORIES_CLEAR:
      return {
        loading: false,
        error: null,
        categories: null,
        selectedCategories: []
      }
    default:
      return state
  }
}