import React, {ChangeEvent, useEffect, useState} from 'react'
import { ThumbLeft, ThumbRight, Range } from './styledItems'

import './index.scss'

interface MultiRangeSliderProps {
  minValue?: number
  maxValue?: number
  onChange: (currentMinValue: number, currentMaxValue: number) => void
  currentRange: {min: number, max: number}
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = (props: MultiRangeSliderProps) => {
  const {
    onChange,
    minValue = 0,
    maxValue = 200,
    currentRange
  } = props

  const [inputLeftValue, setInputLeftValue] = useState(currentRange.min)
  const [inputRightValue, setInputRightValue] = useState(currentRange.max)
  const [inputLeftValueInPercentage, setInputLeftValueInPercentage] = useState(getComputedThumbPosition(currentRange.min)['left'])
  const [inputRightValueInPercentage, setInputRightValueInPercentage] = useState(getComputedThumbPosition(currentRange.max)['right'])

  useEffect(() => {
    onChange(inputLeftValue, inputRightValue)
  }, [inputLeftValue, inputRightValue])

  useEffect(() => {
    setInputLeftValue(currentRange.min)
    setInputRightValue(currentRange.max)

    setInputLeftValueInPercentage(getComputedThumbPosition(currentRange.min)['left'])
    setInputRightValueInPercentage(getComputedThumbPosition(currentRange.max)['right'])
  }, [currentRange])

  const handleChangeLeftValue = (e: ChangeEvent<HTMLInputElement>) => {
    const leftValue = Math.min(Number(e.target.value), inputRightValue - 1)
    const leftThumbPosition = getComputedThumbPosition(leftValue)['left']
    setInputLeftValue(leftValue)
    setInputLeftValueInPercentage(leftThumbPosition)
  }

  const handleChangeRightValue = (e: ChangeEvent<HTMLInputElement>) => {
    const rightValue = Math.max(Number(e.target.value), inputLeftValue + 1)
    const rightThumbPosition = getComputedThumbPosition(rightValue)['right']
    setInputRightValue(rightValue)
    setInputRightValueInPercentage(rightThumbPosition)
  }

  function getComputedThumbPosition(val: number) {
    const newValue = ((val - minValue) * 100 / (maxValue - minValue))
    const newPosition = 16 - (newValue * 0.2)

    return {
      left: `calc(${newValue}% + ${newPosition}px)`,
      right: `calc(100% - (${newValue}% + ${newPosition}px))`
    }
  }

  return (
    <div className="range-slider-wrap">
      <div className="multi-range-slider">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={inputLeftValue}
          onChange={handleChangeLeftValue}
        />
        <input
          type="range"
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
