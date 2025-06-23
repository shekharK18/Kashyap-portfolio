// HeroAnimation.js
"use client"
import React from 'react'

const HeroAnimation = () => {
  return (
    <div className="relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl animate-pulse"></div>
      
      {/* Video container with enhanced styling */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/30">
        <video
          className="w-full h-auto object-cover"
          src="/gif.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            filter: 'brightness(1.1) contrast(1.05)',
            aspectRatio: '16/9'
          }}
        />
        
        {/* Overlay with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}

export default HeroAnimation

