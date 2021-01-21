import React from 'react'
import PreviewImage from './../../shared/img/preview-image.jpg'

import './index.scss'

interface CardItemProps {
  city: string
  title: string
  category: string
  price: number
}

const CardItem: React.FC<CardItemProps> = (props: CardItemProps) => {
  const {
    city,
    title,
    category,
    price
  } = props
  return (
    <div className="card-item">
      <div className="image-wrap">
        <span className="overlay" />
        <img width="270" height="180" src={PreviewImage} alt="Preview-image" className="card-item__image" />
      </div>
      <h3 className="card-item__city">
        {city}
      </h3>
      <h2 className="card-item__title">
        {title}
      </h2>
      <div className="info">
        <span className="card-item__category">
          {category}
        </span>
        <span className="card-item__price">
          ${price}
        </span>
      </div>
    </div>
  )
}

export default CardItem
