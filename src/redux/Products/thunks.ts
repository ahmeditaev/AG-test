import {productsActions as actions} from './index'
import {Dispatch} from "redux";

const getAllProducts = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestProductsActionCreator())
  try {
    const res = await fetch("http://localhost:8000/products")
    const parsedData = await res.json()
    setTimeout(() => {
      dispatch(actions.receiveProductsActionCreator(parsedData))
    }, 5000)
  } catch (err) {
    dispatch(actions.failureProductsActionCreator(err))
  }
}

export default {
  getAllProducts
}