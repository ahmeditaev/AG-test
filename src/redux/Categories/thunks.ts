import {Dispatch, Store} from "redux";
import {categoriesActions as actions} from "./index";
import {MAIN_API} from "../../constants/api";

const fetchCategories = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestCategoriesActionCreator())
  try {
    const res = await fetch(`${MAIN_API}categories`)
    const parsedData = await res.json()
    setTimeout(() => {
      dispatch(actions.receiveCategoriesActionCreator(parsedData))
    }, 2000)
  } catch (err) {
    dispatch(actions.failureCategoriesActionCreator(err))
  }
}

export default {
  fetchCategories
}