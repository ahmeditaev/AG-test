import React from 'react'
import PreviewImage from './../../shared/img/preview-image.jpg'

import './index.scss'


interface CardItemProps {

}

const CardItem: React.FC<CardItemProps> = (props: CardItemProps) => {
  // const {} = props
  return (
    <div className="card-item">
      <div className="image-wrap">
        <span className="overlay"></span>
        <img width="270" height="180" src={PreviewImage} alt="Preview-image" className="card-item__image" />
      </div>
      <h3 className="card-item__city">London</h3>
      <h2 className="card-item__title">
        Affiliate Marketing - A Beginner's Guide to Earning Online
      </h2>
      <div className="info">
        <span className="card-item__category">
          Architecture
        </span>
        <span className="card-item__price">
          $115
        </span>
      </div>
    </div>
  )
}

export default CardItem
