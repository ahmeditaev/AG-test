import React from 'react'
import Select from 'react-select'
import {CUSTOM_SELECT_STYLES} from "./styles";

interface CustomSelectProps {
}

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
]

const CustomSelect: React.FC<CustomSelectProps> = (props: CustomSelectProps) => {
  // const {} = props
  return (
    <Select
      placeholder="Choose a city"
      styles={CUSTOM_SELECT_STYLES}
      options={options}
    />
  )
}

export default CustomSelect