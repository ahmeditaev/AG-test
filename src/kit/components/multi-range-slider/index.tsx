import React, {ChangeEvent, useEffect, useState} from 'react'
import { ThumbLeft, ThumbRight, Range } from './styledItems'

import './index.scss'

interface MultiRangeSliderProps {
  minValue?: number
  maxValue?: number
  onChange: (currentMinValue: number, currentMaxValue: number) => void
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = (props: MultiRangeSliderProps) => {
  const {
    onChange,
    minValue = 0,
    maxValue = 200
  } = props

  const [inputLeftValue, setInputLeftValue] = useState(minValue)
  const [inputRightValue, setInputRightValue] = useState(maxValue)
  const [inputLeftValueInPercentage, setInputLeftValueInPercentage] = useState(getThumbPosition(minValue)['left'])
  const [inputRightValueInPercentage, setInputRightValueInPercentage] = useState(getThumbPosition(maxValue)['right'])

  useEffect(() => {
    onChange(inputLeftValue, inputRightValue)
  }, [inputLeftValue, inputRightValue])

  const handleChangeLeftValue = (e: ChangeEvent<HTMLInputElement>) => {
    const leftValue = Math.min(Number(e.target.value), inputRightValue - 1)
    const position = getThumbPosition(leftValue)['left']
    setInputLeftValue(leftValue)
    setInputLeftValueInPercentage(position)
  }

  const handleChangeRightValue = (e: ChangeEvent<HTMLInputElement>) => {
    const rightValue = Math.max(Number(e.target.value), inputLeftValue + 1)
    const position = getThumbPosition(rightValue)['right']
    setInputRightValue(rightValue)
    setInputRightValueInPercentage(position)
  }

  function getThumbPosition(val: number) {
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
