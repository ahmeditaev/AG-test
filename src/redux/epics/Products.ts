import * as actions from './../actions'
import {Dispatch} from "redux";

export const getAllProducts = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestProducts())
  try {
    const res = await fetch("http://localhost:8000/data")
    const parsedData = await res.json()
    setTimeout(() => {
      dispatch(actions.receiveProducts(parsedData))
    }, 5000)
  } catch (err) {
    dispatch(actions.failureProducts(err))
  }
}