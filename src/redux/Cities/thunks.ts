import {Dispatch} from "redux";
import {citiesActions as actions} from "./index";
import {MAIN_API} from "../../constants/api";

const fetchCities = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestCitiesActionCreator())
  try {
    const res = await fetch(`${MAIN_API}cities`)
    const parsedData = await res.json()
    setTimeout(() => {
      dispatch(actions.receiveCitiesActionCreator(parsedData))
    }, 5000)
  } catch (err) {
    dispatch(actions.failureCitiesActionCreator(err))
  }
}


export default {
  fetchCities
}