import React from 'react'
import {ICategory} from "../../../redux/Categories/models";
import Checkbox from "../checkbox";
import {IProduct} from "../../../redux/Products/models";
import {useDispatch, useSelector} from "react-redux";
import {visibilityFilterOperations} from "../../../redux/Filters";

import './index.scss'

const CategoryList: React.FC = () => {
  const categoriesState: any = useSelector<any>(state => state.Categories)
  const productsState: any = useSelector<any>(state => state.Products)
  const visibilityFilterState: any = useSelector<any>(state => state.VisibilityFilter)

  const {products} = productsState
  const {categories} = categoriesState
  const {category: selectedCategories} = visibilityFilterState
  const {onChangeCategoryFilter} = visibilityFilterOperations

  const dispatch = useDispatch()

  if (!categories.length) {
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
            numberValue={products.filter((product: IProduct) => product.category === item.id).length}
            onChange={handleChangeCategories(item.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default CategoryList