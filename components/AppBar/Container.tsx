import React from 'react'

interface ContainerProps {
  type: 'navbar' | 'footer'
  fixed?: boolean
  border?: boolean
}

const Container: React.FC<ContainerProps> = ({
  type,
  fixed,
  border,
  children,
}) => (
  <>
    <nav
      className={`w-full flex items-center py-8 px-20 gap-6 bg-gray-50 z-10 
    ${type === 'footer' ? 'justify-center' : ''} 
    ${fixed ? 'fixed' : ''} 
    ${border ? 'border-b' : ''}`}
    >
      {children}
    </nav>
    {fixed && <div className="w-full h-24" />}
  </>
)

export default Container
