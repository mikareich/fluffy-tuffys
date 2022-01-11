import React from 'react'

const Container: React.FC = ({ children }) => (
  <nav className="w-full flex items-center py-8 px-20 gap-6">{children}</nav>
)

export default Container
