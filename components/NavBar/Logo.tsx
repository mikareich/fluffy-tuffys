import Image from 'next/image'
import React from 'react'
import MenuItem from './MenuItem'

const Logo: React.FC = () => (
  <MenuItem href="/" isLogo>
    <Image
      src="/gugor.png"
      layout="fixed"
      width={32}
      height={32}
      className="rounded-full"
    />
    <div className="ml-2 text-xl">Fluffy Tuffys</div>
  </MenuItem>
)

export default Logo
