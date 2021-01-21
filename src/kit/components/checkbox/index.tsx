import React from 'react'
import { StyledCheckbox } from './styledCheckbox'

import './index.scss'

interface CheckboxProps {
  id: string
  isChecked: boolean
  label: string
  numberValue?: string
  onClick: () => void
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const {
    id,
    isChecked,
    label,
    numberValue,
    onClick,
  } = props

  return (
    <div className='checkbox-wrap'>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onClick}
      />
      <label className='checkbox' htmlFor={id}>
        <StyledCheckbox isChecked={isChecked} className="checkbox__icon" />
        <span className="checkbox__label">{label}</span>
        {!!numberValue && <span className="checkbox__count">({numberValue})</span>}
      </label>
    </div>
  )
}

export default Checkbox