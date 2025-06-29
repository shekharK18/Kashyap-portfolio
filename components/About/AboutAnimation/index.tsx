"use client"
import React from 'react'
import Image from 'next/image'

const AboutAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Image
        src="/devops.gif"
        alt="DevOps Animation"
        width={500}
        height={300}
        className="max-w-full h-auto rounded-md shadow-lg"
        priority
        style={{ 
          filter: 'brightness(1.1) contrast(1.05)',
        }}
      />
    </div>
  )
}

export default AboutAnimation