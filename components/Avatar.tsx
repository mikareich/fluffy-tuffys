import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  src: string
  size?: number
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 24 }) => (
  <Image src={src} className="rounded-full" width={size} height={size} />
)

export default Avatar
