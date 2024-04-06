import React, { useState, useEffect } from 'react'
import NavigationList from './NavigationList'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavigation = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="nav">
      <div className="nav__menu">
        <img
          onClick={toggleNavigation}
          className="nav__menu__icon"
          src={`/images/icon-menu${isOpen ? '-close' : ''}.svg`}
          alt="Menu Icon"
        />
      </div>
      {isOpen ? (
        <div className="nav__mobile">
          <NavigationList isOpen={isOpen} />
        </div>
      ) : (
        <NavigationList isOpen={isOpen} />
      )}
    </nav>
  )
}

export default Navigation
