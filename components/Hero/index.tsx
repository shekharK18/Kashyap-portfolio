
"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import Resume from './Resume'
import { motion } from 'framer-motion'
import LoadingAnimation from '../LoadingAnimation'

const HeroAnimation = dynamic(() => import('./HeroAnimation'), {
  loading: () => <LoadingAnimation />,
})

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const skills = [
    { name: "Azure Cloud", color: "bg-blue-500", icon: "☁️" },
    { name: "Kubernetes", color: "bg-purple-500", icon: "⚙️" },
    { name: "CI/CD Pipelines", color: "bg-green-500", icon: "🔄" },
    { name: "Infra as Code", color: "bg-orange-500", icon: "🏗️" }
  ]

  return (
    <section id="home" className='relative min-h-screen flex items-center'>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-400/10 to-green-400/10 blur-3xl"></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-16'>
          {/* Enhanced Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-8 max-w-2xl"
          >
            <motion.div variants={itemVariants} className='space-y-6'>
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-mono text-gray-600 dark:text-gray-300">
                  $ whoami --verbose
                </span>
              </div> */}
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent leading-tight">
                  DevOps Engineer
                </h1>
                <div className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-300">
                  <motion.span 
                    className="text-blue-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Automation
                  </motion.span>
                  <span className="mx-2">&</span>
                  <motion.span 
                    className="text-green-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Optimization
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I specialize in building robust CI/CD pipelines, containerized environments, and cloud infrastructure. 
              <span className="text-blue-500 font-medium"> Passionate about streamlining deployments</span> and 
              ensuring high-availability systems.
            </motion.p>

            {/* Enhanced Skills Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-3 h-3 rounded-full ${skill.color} shadow-lg`}></div>
                  <span className="text-lg">{skill.icon}</span>
                  <span className="font-mono text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className='pt-8'>
              <Resume />
            </motion.div>
          </motion.div>

          {/* Enhanced Animation Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 25 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ 
              type: "spring", 
              duration: 0.8,
              delay: 0.3
            }}
            whileHover={{ 
              scale: 1.02,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            className="flex-shrink-0 w-full max-w-md lg:w-[500px]"
          >
            <HeroAnimation />
          </motion.div>
        </div>
</div>
    </section>
  )
}

export default Hero