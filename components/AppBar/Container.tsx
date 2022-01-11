import React from 'react'

interface ContainerProps {
  type: 'navbar' | 'footer'
}

const Container: React.FC<ContainerProps> = ({ type, children }) => (
  <nav
    className={`w-full flex items-center py-8 px-20 gap-6 ${
      type === 'footer' ? 'justify-center' : ''
    }`}
  >
    {children}
  </nav>
)

export default Container
