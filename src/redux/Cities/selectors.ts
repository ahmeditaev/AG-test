import {RootState} from "../configureStore";

const getCitiesState = (state: RootState) => ({
  cities: state.Cities.cities,
  loadingCities: state.Cities.loading,
})

export default {
  getCitiesState
}