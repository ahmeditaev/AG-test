import React from 'react'
import Select, {OptionsType, ValueType} from 'react-select'
import {CUSTOM_SELECT_STYLES} from "./styles";

export interface OptionValues {
  value: number | string
  label: string
}

interface CustomSelectProps {
  onChange: (elem: OptionValues) => void
  options: OptionsType<OptionValues>
}

const CustomSelect: React.FC<CustomSelectProps> = (props: CustomSelectProps) => {
  const {
    onChange,
    options
  } = props

  const handleChange = (e: ValueType<OptionValues, boolean>) => {
    onChange(e as OptionValues)
  }

  return (
    <Select
      placeholder="Choose a city"
      styles={CUSTOM_SELECT_STYLES}
      options={options}
      onChange={handleChange}
    />
  )
}

export default CustomSelect