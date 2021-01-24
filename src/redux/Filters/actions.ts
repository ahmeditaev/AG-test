import {visibilityFilterTypes} from "./index";
import {
  IVisibilityFilterState,
  IChangeCityFilterAction,
  IChangeCategoryFilterAction,
  IChangePriceFilterAction,
  IClearFilterAction
} from "./models";

const changeCityFilterActionCreator = (data: IVisibilityFilterState["city"]): IChangeCityFilterAction => ({
  type: visibilityFilterTypes.CITY_FILTER_CHANGE,
  payload: data
})

const changeCategoryFilterActionCreator = (data: IVisibilityFilterState["category"]): IChangeCategoryFilterAction => ({
  type: visibilityFilterTypes.CATEGORY_FILTER_CHANGE,
  payload: data
})

const changePriceFilterActionCreator = (data: IVisibilityFilterState["price"]): IChangePriceFilterAction => ({
  type: visibilityFilterTypes.PRICE_FILTER_CHANGE,
  payload: data
})

const clearFilterActionCreator = (): IClearFilterAction => ({
  type: visibilityFilterTypes.FILTER_CLEAR
})

export default {
  changeCityFilterActionCreator,
  changeCategoryFilterActionCreator,
  changePriceFilterActionCreator,
  clearFilterActionCreator
}