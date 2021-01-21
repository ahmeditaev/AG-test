import React from 'react'
import classNames from "classnames";

import './index.scss'

interface ButtonProps {
  title: string
  onClick: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    title,
    onClick,
    className
  } = props

  const buttonClassNames = classNames(
    "button",
    {
      [`${className}`]: className
    }
  )

  return (
    <button className={buttonClassNames} type="button" onClick={onClick}>
      {title}
    </button>
  )
}

export default Button