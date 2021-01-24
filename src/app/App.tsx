import React, {useEffect} from 'react';
import CardItem from "./../kit/components/card-item";
import CustomSelect, {OptionValues} from "./../kit/components/select";
import MultiRangeSlider from "./../kit/components/multi-range-slider";
import SidebarSection from '../kit/components/sidebar-section';
import Button from '../kit/components/button';
import {OptionsType, ValueType} from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {productsOperations} from '../redux/Products'
import {citiesOperations} from "../redux/Cities";
import {IProduct} from "../redux/Products/models"
import {categoriesOperations} from "../redux/Categories";
import {visibilityFilterOperations} from "../redux/Filters";
import {transformValueToOptionValue} from "../utils/transformValueToOptionValue";
import CategoryList from '../kit/components/category-list';
import {ICategory} from "../redux/Categories/models";
import {IFilters} from "../utils/filterArray";

import './App.scss';

const App: React.FC = () => {
  const {fetchProducts, filterProducts} = productsOperations
  const {fetchCities} = citiesOperations
  const {fetchCategories} = categoriesOperations
  const {onChangeCityFilter, onChangePriceFilter} = visibilityFilterOperations

  const productsState: any = useSelector<any>(state => state.Products)
  const citiesState: any = useSelector<any>(state => state.Cities)
  const categoriesState: any = useSelector<any>(state => state.Categories)
  const visibilityFilterState: any = useSelector<any>(state => state.VisibilityFilter)

  const dispatch = useDispatch()

  const {products, loading: productsLoading, filteredProducts, error} = productsState
  const {cities, loading: citiesLoading} = citiesState
  const {categories, loading: categoriesLoading} = categoriesState

  const {
    city: currentCity,
    price: currentPriceRange,
    category: selectedCategories
  } = visibilityFilterState

  useEffect(() => {
    !products && dispatch(fetchProducts())
    !cities && dispatch(fetchCities())
    !categories && dispatch(fetchCategories())
  }, [])

  if (productsLoading || citiesLoading || categoriesLoading) {
    return <div>loading...</div>
  }

  if (!products || products.length === 0) {
    return (
      <div>
        <p>No data</p>
        <p>{error || ''}</p>
      </div>
    )
  }

  const options: OptionsType<OptionValues> = cities.map(transformValueToOptionValue)
  const availablePrices = products.map((item: IProduct) => item.price)
  const defaultPriceRange = {
    min: Math.min(...availablePrices),
    max: Math.max(...availablePrices)
  }

  const handleFilterProducts = () => {
    const collectedFilters: IFilters = {
      price: (price: number) => price >= currentPriceRange.min && price <= currentPriceRange.max,
      city: (city: number) => currentCity ? [currentCity.id].includes(city) : true,
      category: (category: number) => !!selectedCategories.length ?[...selectedCategories].includes(category) : true
    }
    dispatch(filterProducts(collectedFilters))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="sidebar">
            <SidebarSection title="City">
              <CustomSelect
                value={currentCity ? transformValueToOptionValue(currentCity) : null}
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
                  currentRange={currentPriceRange || defaultPriceRange}
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
            </SidebarSection>
          </div>
          <div className="main">
            <div className="card-list">
              {!!filteredProducts.length ? filteredProducts.map((item: IProduct, idx: number) => {
                const findCategoryById = categories.find((category: ICategory) => item.category === category.id)
                return (
                  <CardItem
                    key={idx}
                    city="London"
                    title={item.name}
                    category={findCategoryById ? findCategoryById.name : ''}
                    price={item.price}
                  />
                )
              }) : (
                <p>No data found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
