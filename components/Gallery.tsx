import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface GalleryProps {
  paths: string[]
}

const Gallery: React.FC<GalleryProps> = ({ paths }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const updateDelay = 5000

  useEffect(() => {
    if (typeof window === 'undefined') return () => {}

    const interval = setInterval(() => {
      // update the current image index
      setCurrentImageIndex((imageIndex) => (imageIndex + 1) % paths.length)
    }, updateDelay)

    return () => clearInterval(interval)
  }, [paths])

  return (
    <div className="relative w-screen z-0" style={{ height: '500px' }}>
      {paths.map((path, index) => (
        <Image
          key={path}
          src={path}
          layout="fill"
          alt="Yoyo"
          className={`transition delay-200 ${
            index === currentImageIndex ? 'z-0' : '-z-10'
          }`}
          loading="lazy"
          objectFit="cover"
          draggable={false}
        />
      ))}

      <div className="absolute w-full flex gap-2 bottom-4 justify-center">
        {paths.map((path, index) => (
          <button
            key={path}
            className={`w-3 h-3 rounded-full transition-all duration-200 bg-gray-600 opacity-50
                ${
                  index === currentImageIndex ? '!bg-blue-500 !opacity-100' : ''
                }
            `}
            onClick={() => setCurrentImageIndex(index)}
            type="button"
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
