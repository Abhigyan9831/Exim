"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  showChevron?: boolean
}

export function Menu({ trigger, children, align = "left", showChevron = true }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
        )}
      </div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-56 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-9 focus:outline-none z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

interface MenuItemProps {
  children?: React.ReactNode | ((props: { isExpanded: boolean }) => React.ReactNode)
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  isActive?: boolean
  isExpanded?: boolean
}

export function MenuItem({ children, onClick, disabled = false, icon, isActive = false, isExpanded = false }: MenuItemProps) {
  return (
    <button
      className={`relative block w-full h-16 text-center group
        ${disabled ? "text-gray-400 dark:text-gray-500 cursor-not-allowed" : "text-gray-600 dark:text-gray-300"}
        ${isActive ? "bg-white/10" : ""}
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex items-center justify-center h-full">
        {icon && (
          <span className="h-6 w-6 md:h-8 md:w-8 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            {icon}
          </span>
        )}
        {typeof children === "function" ? children({ isExpanded }) : children}
      </span>
    </button>
  )
}

export function MenuContainer({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const childrenArray = React.Children.toArray(children)
  const totalItems = childrenArray.length

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false)
    } else {
      setIsExpanded(true)
    }
  }

  const gap = isMobile ? 56 : 76

  return (
    <div className="relative w-[48px] md:w-[64px]" data-expanded={isExpanded}>
      {/* Container for all items */}
      <div className="relative h-12 md:h-16">
        {/* First item - always visible */}
        <div 
          className={`absolute right-0 top-0 h-12 md:h-16 bg-gray-100 dark:bg-gray-800 cursor-pointer rounded-full group will-change-transform z-50 animate-fade-in transition-all duration-300 flex items-center justify-center overflow-hidden border border-white/10 shadow-lg ${
            isExpanded ? "w-12 md:w-16" : "w-12 md:w-36"
          }`}
          onClick={handleToggle}
        >
          {React.isValidElement(childrenArray[0]) 
            ? React.cloneElement(childrenArray[0] as React.ReactElement<any>, { isExpanded }) 
            : childrenArray[0]}
        </div>

        {/* Other items with gap - expanding upward */}
        {childrenArray.slice(1).map((child, index) => (
          <div 
            key={index} 
            className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-gray-100 dark:bg-gray-800 will-change-transform rounded-full border border-white/10 shadow-lg flex items-center justify-center"
            style={{
              transform: `translateY(${isExpanded ? -(index + 1) * gap : 0}px)`,
              opacity: isExpanded ? 1 : 0,
              zIndex: 40 - index,
              transition: `transform ${isExpanded ? '300ms' : '300ms'} cubic-bezier(0.4, 0, 0.2, 1),
                         opacity ${isExpanded ? '300ms' : '350ms'}`,
              backfaceVisibility: 'hidden',
              perspective: 1000,
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
