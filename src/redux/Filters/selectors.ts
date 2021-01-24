import {RootState} from "../configureStore";

const getVisibilityFilterState = (state: RootState) => ({
  selectedCity: state.VisibilityFilter.city,
  selectedPriceRange: state.VisibilityFilter.price,
  selectedCategories: state.VisibilityFilter.category
})

export default {
  getVisibilityFilterState
}