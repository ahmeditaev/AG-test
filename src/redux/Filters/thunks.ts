import {Dispatch} from "redux";
import {visibilityFilterActions as actions} from "./index";
import {ValueType} from "react-select";
import {OptionValues} from "../../kit/components/select";
import {ICityFilterState, IPriceFilterState} from "./models";

const onChangeCityFilter = (option: ValueType<OptionValues, boolean>) => (dispatch: Dispatch) => {
  const selectedOption = (option as OptionValues)

  const value: ICityFilterState = {
    id: selectedOption.value,
    name: selectedOption.label
  }

  dispatch(actions.changeCityFilterActionCreator(value))
}

const onChangeCategoryFilter = (value: number) => (dispatch: Dispatch, getState: () => any) => {
  const state = getState()
  const {category: selectedCategories} = state.VisibilityFilter
  const newSetOfSelectedCategories = new Set(selectedCategories)

  if (newSetOfSelectedCategories.has(value)) {
    newSetOfSelectedCategories.delete(value);
    dispatch(actions.changeCategoryFilterActionCreator(Array.from(newSetOfSelectedCategories) as number[]))
  } else {
    newSetOfSelectedCategories.add(value);
    dispatch(actions.changeCategoryFilterActionCreator(Array.from(newSetOfSelectedCategories) as number[]))
  }

}

const onChangePriceFilter = (data: IPriceFilterState) => (dispatch: Dispatch) => {
  dispatch(actions.changePriceFilterActionCreator(data))
}

export default {
  onChangeCityFilter,
  onChangeCategoryFilter,
  onChangePriceFilter
}