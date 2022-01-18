import React from 'react'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

const Logo: React.FC = () => (
  <MenuItem href="/" isLogo>
    <Avatar src="/gugor.png" size={32} />
    <div className="ml-2 text-xl">Fluffy Tuffys</div>
  </MenuItem>
)

export default Logo
