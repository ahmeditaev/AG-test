import {Dispatch, Store} from "redux";
import {categoriesActions as actions} from "./index";

const fetchCategories = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestCategoriesActionCreator())
  try {
    const res = await fetch("http://localhost:8000/categories")
    const parsedData = await res.json()
    setTimeout(() => {
      dispatch(actions.receiveCategoriesActionCreator(parsedData))
    }, 5000)
  } catch (err) {
    dispatch(actions.failureCategoriesActionCreator(err))
  }
}

const onChangeSelectedCategories = (value: number) => (dispatch: Dispatch, getState: () => any) => {
  const state = getState()
  const {selectedCategories} = state.Categories
  const newSetOfSelectedCategories = new Set(selectedCategories)

  if (newSetOfSelectedCategories.has(value)) {
    newSetOfSelectedCategories.delete(value);
    dispatch(actions.setSelectedCategoriesActionCreator(Array.from(newSetOfSelectedCategories) as number[]))
  } else {
    newSetOfSelectedCategories.add(value);
    dispatch(actions.setSelectedCategoriesActionCreator(Array.from(newSetOfSelectedCategories) as number[]))
  }

}

export default {
  fetchCategories,
  onChangeSelectedCategories
}