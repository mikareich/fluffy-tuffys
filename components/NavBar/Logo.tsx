import Image from 'next/image'
import React from 'react'
import MenuItem from './MenuItem'

const Logo: React.FC = () => (
  <MenuItem href="/" isLogo>
    <div className="flex items-center gap-2 text-xl">
      <Image
        src="/gugor.png"
        layout="fixed"
        width={32}
        height={32}
        className="rounded-full"
      />
      Fluffy Tuffys
    </div>
  </MenuItem>
)

export default Logo
