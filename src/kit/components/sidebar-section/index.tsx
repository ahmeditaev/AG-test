import React from 'react'
import classNames from "classnames";

import './index.scss'

interface SidebarSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

const SidebarSection: React.FC<SidebarSectionProps> = (props: SidebarSectionProps) => {
  const {
    title,
    className,
    children
  } = props

  const sectionClassNames = classNames(
    "sidebar-section",
    {
      [`${className}`]: className
    }
  )

  return (
    <section className={sectionClassNames}>
      <h2 className="sidebar-section__title">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default SidebarSection