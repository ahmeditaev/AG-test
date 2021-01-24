import {productsActions as actions} from './index'
import {Dispatch} from "redux";
import {filterArray, IFilters} from "../../utils/filterArray";
import {MAIN_API} from "../../constants/api";
import {RootState} from "../configureStore";

const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestProductsActionCreator())
  try {
    const res = await fetch(`${MAIN_API}products`)
    const parsedData = await res.json()
    setTimeout(() => {
      dispatch(actions.receiveProductsActionCreator(parsedData))
    }, 5000)
  } catch (err) {
    dispatch(actions.failureProductsActionCreator(err.message))
  }
}

const filterProducts = (filters: IFilters) => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState()
  const {products} = state.Products
  const filteredProducts = filterArray(products!, filters)
  dispatch(actions.setFilterProductsActionCreator(filteredProducts))
}

const resetFilterProducts = () => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState()
  const {products} = state.Products
  dispatch(actions.setFilterProductsActionCreator(products!))
}

export default {
  fetchProducts,
  filterProducts,
  resetFilterProducts
}