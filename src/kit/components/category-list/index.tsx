import React from 'react'
import {ICategory} from "../../../redux/Categories/models";
import Checkbox from "../checkbox";
import {IProduct} from "../../../redux/Products/models";
import {useDispatch} from "react-redux";
import {visibilityFilterOperations, visibilityFilterSelector} from "../../../redux/Filters";
import {useTypedSelector} from "../../../redux/configureStore";
import {categoriesSelector} from "../../../redux/Categories";
import {productsSelector} from "../../../redux/Products";

import './index.scss'

const CategoryList: React.FC = () => {
  const categoriesState = useTypedSelector(categoriesSelector.getCategoriesState)
  const productsState = useTypedSelector(productsSelector.getProductsState)
  const visibilityFilterState = useTypedSelector(visibilityFilterSelector.getVisibilityFilterState)

  const {products} = productsState
  const {categories} = categoriesState
  const {selectedCategories} = visibilityFilterState

  const {onChangeCategoryFilter} = visibilityFilterOperations

  const dispatch = useDispatch()

  if (!categories || categories.length === 0) {
    return null
  }

  const handleChangeCategories = (value: number) => () => dispatch(onChangeCategoryFilter(value))
  return (
    <ul className="category-list">
      {categories.map((item: ICategory, idx: number) => (
        <li key={idx} className="category-list__item">
          <Checkbox
            id={item.id.toString()}
            isChecked={selectedCategories.includes(item.id)}
            label={item.name}
            numberValue={products!.filter((product: IProduct) => product.category === item.id).length}
            onChange={handleChangeCategories(item.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default CategoryList