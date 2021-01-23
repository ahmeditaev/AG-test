import {categoriesTypes} from "./index";
import {
  ICategory,
  IRequestCategoriesAction,
  IReceiveCategoriesAction,
  ISetSelectedCategoriesAction,
  IFailureCategoriesAction,
  IClearCategoriesAction,
} from "./models";

/////////////<<Fetch Categories>>/////////////
const requestCategoriesActionCreator = (): IRequestCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_REQUEST
})

const receiveCategoriesActionCreator = (data: ICategory[]): IReceiveCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_RECEIVE,
  payload: data
})

const failureCategoriesActionCreator = (err: any): IFailureCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_FAILURE,
  payload: {err}
})
/////////////End <<Fetch Categories>>/////////////

const setSelectedCategoriesActionCreator = (data: number[]): ISetSelectedCategoriesAction => ({
  type: categoriesTypes.CHANGE_SELECTED_CATEGORIES,
  payload: data
})

/////////////<<Clear state>>/////////////
const clearCategoriesActionCreator = (): IClearCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_CLEAR
})
/////////////End <<Clear state>>/////////////

export default {
  requestCategoriesActionCreator,
  receiveCategoriesActionCreator,
  failureCategoriesActionCreator,
  setSelectedCategoriesActionCreator,
  clearCategoriesActionCreator
}