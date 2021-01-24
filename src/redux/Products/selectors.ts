import {RootState} from "../configureStore";

const getProductsState = (state: RootState) => ({
  products: state.Products.products,
  loadingProducts: state.Products.loading,
  filteredProducts: state.Products.filteredProducts,
  error: state.Products.error
})

export default {
  getProductsState
}