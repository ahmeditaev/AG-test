import React from 'react'
import {ICategory} from "../../../redux/Categories/models";
import Checkbox from "../checkbox";
import {IProduct} from "../../../redux/Products/models";
import {useDispatch, useSelector} from "react-redux";
import {categoriesOperations} from "../../../redux/Categories";

import './index.scss'

const CategoryList: React.FC = () => {
  const categoriesState: any = useSelector<any>(state => state.Categories)
  const productsState: any = useSelector<any>(state => state.Products)

  const {products} = productsState
  const {categories, selectedCategories} = categoriesState
  const {onChangeSelectedCategories} = categoriesOperations

  const dispatch = useDispatch()

  if (!categories.length) {
    return null
  }

  const handleChangeCategories = (value: number) => () => dispatch(onChangeSelectedCategories(value))
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