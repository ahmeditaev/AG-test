import {RootState} from "../configureStore";

const getCategoriesState = (state: RootState) => ({
  categories: state.Categories.categories,
  loadingCategories: state.Categories.loading,
})

export default {
  getCategoriesState
}