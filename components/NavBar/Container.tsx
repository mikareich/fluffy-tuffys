import React from 'react'

const Container: React.FC = ({ children }) => (
  <nav className="w-full flex items-center py-10 px-20 gap-6">{children}</nav>
)

export default Container
