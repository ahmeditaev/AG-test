import React, {ChangeEvent, useState} from 'react'
import { ThumbLeft, ThumbRight, Range } from './styledItems'

import './index.scss'

interface MultiRangeSliderProps {
  minValue?: number
  maxValue?: number
  step?: number
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = (props: MultiRangeSliderProps) => {
  const {
    minValue = 0,
    maxValue = 200,
    step = 20
  } = props

  const [inputLeftValue, setInputLeftValue] = useState(minValue)
  const [inputRightValue, setInputRightValue] = useState(maxValue)
  const [inputLeftValueInPercentage, setInputLeftValueInPercentage] = useState(0)
  const [inputRightValueInPercentage, setInputRightValueInPercentage] = useState(0)

  const handleChangeLeftValue = (e: ChangeEvent<HTMLInputElement>) => {
    const leftValue = Math.min(Number(e.target.value), inputRightValue - step)
    const leftValueInPercentage = ((leftValue - minValue) / (maxValue - minValue)) * 100
    setInputLeftValue(leftValue)
    setInputLeftValueInPercentage(leftValueInPercentage)
  }

  const handleChangeRightValue = (e: ChangeEvent<HTMLInputElement>) => {
    const rightValue = Math.max(Number(e.target.value), inputLeftValue + step)
    const rightValueInPercentage = ((rightValue - minValue) / (maxValue - minValue)) * 100
    setInputRightValue(rightValue)
    setInputRightValueInPercentage(100 - rightValueInPercentage)
  }

  return (
    <div className="range-slider-wrap">
      <div className="multi-range-slider">
        <input
          type="range"
          step={step}
          min={minValue}
          max={maxValue}
          value={inputLeftValue}
          onChange={handleChangeLeftValue}
        />
        <input
          type="range"
          step={step}
          min={minValue}
          max={maxValue}
          value={inputRightValue}
          onChange={handleChangeRightValue}
        />
        <div className="slider">
          <div className="track"/>
          <Range
            left={inputLeftValueInPercentage}
            right={inputRightValueInPercentage}
            className="range"
          />
          <ThumbLeft left={inputLeftValueInPercentage} className="thumb left" />
          <ThumbRight right={inputRightValueInPercentage} className="thumb right" />
        </div>
      </div>
      <span className="range-price">
        <span className="range-price__left">${inputLeftValue}</span>
        <span className="range-price__divider">-</span>
        <span className="range-price__left">${inputRightValue}</span>
      </span>
    </div>
  )
}

export default MultiRangeSlider
