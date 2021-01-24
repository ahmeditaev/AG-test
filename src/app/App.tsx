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
import {transformValueToOptionValue} from "../utils/transformValueToOptionValue";
import CategoryList from '../kit/components/category-list';

import './App.scss';
import {ICategory} from "../redux/Categories/models";

interface Props {

}


const App: React.FC<Props> = (props: Props) => {
  const {fetchProducts} = productsOperations
  const {fetchCities, onChangeCurrentCity} = citiesOperations
  const {fetchCategories} = categoriesOperations

  const productsState: any = useSelector<any>(state => state.Products)
  const citiesState: any = useSelector<any>(state => state.Cities)
  const categoriesState: any = useSelector<any>(state => state.Categories)

  const dispatch = useDispatch()

  const {products, loading: productsLoading} = productsState
  const {cities, loading: citiesLoading, currentCity} = citiesState
  const {categories, loading: categoriesLoading} = categoriesState

  useEffect(() => {
    !products && dispatch(fetchProducts())
    !cities && dispatch(fetchCities())
    !categories && dispatch(fetchCategories())
  }, [])

  if (productsLoading || citiesLoading || categoriesLoading) {
    return <div>loading...</div>
  }

  if (!products || products.length === 0) {
    return <div>No data</div>
  }

  const options: OptionsType<OptionValues> = cities.map(transformValueToOptionValue)

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="sidebar">
            <SidebarSection title="City">
              <CustomSelect
                value={currentCity ? transformValueToOptionValue(currentCity) : null}
                options={options}
                onChange={(option: ValueType<OptionValues, boolean>) => dispatch(onChangeCurrentCity(option))}
              />
            </SidebarSection>
            <SidebarSection title="Categories">
              <CategoryList />
            </SidebarSection>
            <SidebarSection title="Price">
              <div className="price-wrap">
                <MultiRangeSlider/>
                <Button
                  className="filter-button"
                  title="Filter"
                  onClick={() => console.log('check')}
                />
              </div>
            </SidebarSection>
          </div>
          <div className="main">
            <div className="card-list">
              {products.map((item: IProduct, idx: number) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
