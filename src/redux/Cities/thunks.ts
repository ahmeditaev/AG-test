import {Dispatch, Store} from "redux";
import {citiesActions as actions} from "./index";
import {ICity} from "./models";
import {ValueType} from "react-select";
import {OptionValues} from "../../kit/components/select";

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

const onChangeCurrentCity = (option: ValueType<OptionValues, boolean>) => (dispatch: Dispatch) => {
  const selectedOption = (option as OptionValues)

  const value: ICity = {
    id: selectedOption.value,
    name: selectedOption.label
  }

  dispatch(actions.setCurrentCityActionCreator(value))
}

export default {
  fetchCities,
  onChangeCurrentCity
}