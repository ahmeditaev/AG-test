import {productsActions as actions} from './index'
import {Dispatch} from "redux";
import {filterArray, IFilters} from "../../utils/filterArray";

const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestProductsActionCreator())
  try {
    const res = await fetch("http://localhost:8000/products")
    const parsedData = await res.json()
    setTimeout(() => {
      dispatch(actions.receiveProductsActionCreator(parsedData))
    }, 5000)
  } catch (err) {
    dispatch(actions.failureProductsActionCreator(err.message))
  }
}

const filterProducts = (filters: IFilters) => (dispatch: Dispatch, getState: () => any) => {
  const state = getState()
  const {products} = state.Products
  const filteredProducts = filterArray(products, filters)
  dispatch(actions.setFilterProductsActionCreator(filteredProducts))
}

export default {
  fetchProducts,
  filterProducts
}