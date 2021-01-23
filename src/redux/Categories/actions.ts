import {categoriesTypes} from "./index";
import {
  ICategory,
  IRequestCategoriesAction,
  IReceiveCategoriesAction,
  ICurrentCategoryAction,
  IFailureCategoriesAction,
  IClearCategoriesAction
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

const setCurrentCategoryActionCreator = (data: ICategory): ICurrentCategoryAction => ({
  type: categoriesTypes.CHANGE_CURRENT_CATEGORY,
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
  setCurrentCategoryActionCreator,
  clearCategoriesActionCreator
}