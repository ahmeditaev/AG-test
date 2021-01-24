import React from 'react'
import sadIcon from './../../shared/icons/sad-icon.svg'

import './index.scss'

const NoDataFound: React.FC = () => {
  return (
    <div className="no-data-wrap">
      <img width="150" height="150" src={sadIcon} alt="No data found"/>
      <p>No data found</p>
    </div>
  )
}

export default NoDataFound