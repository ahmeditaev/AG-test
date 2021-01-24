import React, {useEffect} from 'react';
import CardItem from "./../kit/components/card-item";
import CustomSelect, {OptionValues} from "./../kit/components/select";
import MultiRangeSlider from "./../kit/components/multi-range-slider";
import SidebarSection from '../kit/components/sidebar-section';
import Button from '../kit/components/button';
import {OptionsType, ValueType} from "react-select";
import {useDispatch} from "react-redux";
import {productsOperations} from '../redux/Products'
import {citiesOperations} from "../redux/Cities";
import {IProduct} from "../redux/Products/models"
import {categoriesOperations} from "../redux/Categories";
import {visibilityFilterOperations} from "../redux/Filters";
import {transformValueToOptionValue} from "../utils/transformValueToOptionValue";
import CategoryList from '../kit/components/category-list';
import {ICategory} from "../redux/Categories/models";
import {IFilters} from "../utils/filterArray";
import NoDataFound from '../kit/components/no-data-found';
import {useTypedSelector} from "../redux/configureStore";
import {productsSelector} from "../redux/Products";
import {citiesSelector} from "../redux/Cities";
import {categoriesSelector} from "../redux/Categories";
import {visibilityFilterSelector} from "../redux/Filters";
import {ICity} from "../redux/Cities/models";

import './App.scss';

const App: React.FC = () => {
  const productsState = useTypedSelector(productsSelector.getProductsState)
  const citiesState = useTypedSelector(citiesSelector.getCitiesState)
  const categoriesState = useTypedSelector(categoriesSelector.getCategoriesState)
  const visibilityFilterState = useTypedSelector(visibilityFilterSelector.getVisibilityFilterState)

  const {fetchProducts, filterProducts, resetFilterProducts} = productsOperations
  const {fetchCities} = citiesOperations
  const {fetchCategories} = categoriesOperations
  const {onChangeCityFilter, onChangePriceFilter, clearVisibilityFilter} = visibilityFilterOperations

  const {products, loadingProducts, filteredProducts, error} = productsState
  const {cities, loadingCities} = citiesState
  const {categories, loadingCategories} = categoriesState
  const {selectedCity, selectedPriceRange, selectedCategories} = visibilityFilterState

  const dispatch = useDispatch()

  useEffect(() => {
    !products && dispatch(fetchProducts())
    !cities && dispatch(fetchCities())
    !categories && dispatch(fetchCategories())
  }, [])

  if (loadingProducts || loadingCities || loadingCategories) {
    return <div className="spinner" />
  }

  if (!products || products.length === 0) {
    return (
      <div>
        <p>No data</p>
        <p>{error || ''}</p>
      </div>
    )
  }

  const options: OptionsType<OptionValues> = cities && !!cities.length ? cities.map(transformValueToOptionValue) : []
  const availablePrices = products.map((item: IProduct) => item.price)
  const defaultPriceRange = {
    min: Math.min(...availablePrices),
    max: Math.max(...availablePrices)
  }

  const handleFilterProducts = () => {
    const currentMinPrice = selectedPriceRange ? selectedPriceRange.min : defaultPriceRange.min
    const currentMaxPrice = selectedPriceRange ? selectedPriceRange.max : defaultPriceRange.max

    const collectedFilters: IFilters = {
      price: (price: number) => price >= currentMinPrice && price <= currentMaxPrice,
      city: (city: number) => selectedCity ? [selectedCity.id].includes(city) : true,
      category: (category: number) => !!selectedCategories.length ?[...selectedCategories].includes(category) : true
    }
    dispatch(filterProducts(collectedFilters))
  }

  const handleResetFilters = () => {
    dispatch(clearVisibilityFilter())
    dispatch(resetFilterProducts())
  }

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="sidebar">
            <SidebarSection title="City">
              <CustomSelect
                value={selectedCity ? transformValueToOptionValue(selectedCity) : null}
                options={options}
                onChange={(option: ValueType<OptionValues, boolean>) => dispatch(onChangeCityFilter(option))}
              />
            </SidebarSection>
            <SidebarSection title="Categories">
              <CategoryList />
            </SidebarSection>
            <SidebarSection title="Price">
              <div className="price-wrap">
                <MultiRangeSlider
                  currentRange={selectedPriceRange || defaultPriceRange}
                  minValue={defaultPriceRange.min}
                  maxValue={defaultPriceRange.max}
                  onChange={(min, max) => dispatch(onChangePriceFilter({min, max}))}
                />
                <Button
                  className="filter-button"
                  title="Filter"
                  onClick={handleFilterProducts}
                />
              </div>
              <Button
                className="reset-button"
                title="Reset filter"
                onClick={handleResetFilters}
              />
            </SidebarSection>
          </div>
          <div className="main">
            <div className="card-list">
              {filteredProducts && !!filteredProducts.length ? filteredProducts.map((item: IProduct, idx: number) => {
                const findCategoryById = categories && !!categories.length ?
                  categories.find((category: ICategory) => item.category === category.id) : null

                const findCityById = cities && !!cities.length ?
                  cities.find((city: ICity) => item.city === city.id) : null

                return (
                  <CardItem
                    key={idx}
                    city={findCityById ? findCityById.name : ''}
                    title={item.name}
                    category={findCategoryById ? findCategoryById.name : ''}
                    price={item.price}
                  />
                )
              }) : <NoDataFound/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
