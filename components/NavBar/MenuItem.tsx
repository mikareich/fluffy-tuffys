import React from 'react'
import Link from '../Link'

interface MenuItemProps {
  href: string
  isLogo?: boolean
  isActive?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  isLogo,
  isActive,
  children,
}) => (
  <Link
    href={href}
    className={`transition-all ${isLogo ? 'mr-auto' : 'text-gray-500'} ${
      isActive && !isLogo ? 'text-blue-500' : 'hover:text-black'
    }`}
  >
    {children}
  </Link>
)

export default MenuItem
