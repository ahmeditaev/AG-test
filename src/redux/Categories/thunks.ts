import {Dispatch} from "redux";
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

export default {
  fetchCategories
}