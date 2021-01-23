import {Dispatch} from "redux";
import {citiesActions as actions} from "./index";

const fetchCities = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestCitiesActionCreator())
  try {
    const res = await fetch("http://localhost:8000/cities")
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