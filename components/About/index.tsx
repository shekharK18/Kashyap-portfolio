"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import LoadingAnimation from '../LoadingAnimation'
const AboutAnimation = dynamic(() => import('./AboutAnimation'), {
  loading: () => <LoadingAnimation />,
})

const About = () => {
  return (
    <section id="about" className='max-w-7xl mx-auto px-3 py-16 sm:py-20'>
      <p className="text-3xl sm:text-5xl font-bold text-center mb-10">
        <span className="about mr-2">About</span>
        <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Me</span>
      </p>
      <div className="aboutContainer flex flex-col md:flex-row gap-8 mx-4 md:mx-0">
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="aboutAnimation md:w-1/2 flex items-center justify-center">
          <AboutAnimation />
        </motion.div>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="content md:w-1/2 flex flex-col justify-center text-center sm:text-left gap-3">
          <h3 className="heading text-base sm:text-2xl font-semibold">A DevOps Engineer passionate about automation and scalability.</h3>
          <p className="text-xs sm:text-sm md:pr-4">Hey 👋, I am a DevOps Engineer with a passion for building robust infrastructure and streamlined deployment pipelines. I specialize in bridging the gap between development and operations, ensuring smooth continuous integration and delivery. I have extensive experience with Docker, Kubernetes, AWS, Jenkins, Terraform, Git, and various monitoring tools. I'm skilled in automation, infrastructure as code, and implementing CI/CD pipelines. Always eager to embrace new technologies and best practices in the DevOps ecosystem.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About