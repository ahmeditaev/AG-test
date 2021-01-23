import {categoriesTypes} from "./index";
import {
  ICategory,
  IRequestCategoriesAction,
  IReceiveCategoriesAction,
  ICurrentCategoryAction,
  IFailureCategoriesAction,
  IClearCategoriesAction
} from "./models";

const requestCategoriesActionCreator = (): IRequestCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_REQUEST
})

const receiveCategoriesActionCreator = (data: ICategory[]): IReceiveCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_RECEIVE,
  payload: data
})

const setCurrentCategoryActionCreator = (data: ICategory): ICurrentCategoryAction => ({
  type: categoriesTypes.CHANGE_CURRENT_CATEGORY,
  payload: data
})

const failureCategoriesActionCreator = (err: any): IFailureCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_FAILURE,
  payload: {err}
})

const clearCategoriesActionCreator = (): IClearCategoriesAction => ({
  type: categoriesTypes.CATEGORIES_CLEAR
})

export default {
  requestCategoriesActionCreator,
  receiveCategoriesActionCreator,
  setCurrentCategoryActionCreator,
  failureCategoriesActionCreator,
  clearCategoriesActionCreator
}