"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

// Helper to check if the src is an image (gif, svg, png, jpg, jpeg)
const isImage = (src: string) =>
  /\.(gif|svg|png|jpe?g)$/i.test(src) || src.startsWith('http');

const devopsSkills = [
  { name: 'Docker', src: '/Animation - 1750871380834.gif' },
  { name: 'Automate-Business', src: 'automate-business-processes-14009434-11266754.mp4' },
  { name: 'Azure', src: 'azure-13156227-10740813.mp4' },
  { name: 'Cloud Monitoring', src: 'cloud monitoring1.mp4' },
  { name: 'AWS', src: 'aws-13156224-10740810.mp4' },
  { name: 'AirFlow', src: '/nir_post_89_01_airflow_spinning_logo.gif' },
  { name: 'Linux', src: 'free-linux-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--logo-brand-logos-pack-icons-6671446.mp4' },
  { name: 'Jenkins', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' }, // Jenkins SVG from CDN
  { name: 'CI/CD Pipeline', src: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png' }, // Example pipeline icon from CDN
];

const Skills = () => {
  return (
    <div id="skills" className="skills max-w-7xl mx-auto px-3 py-16 sm:py-20">
      <motion.p
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="text-3xl sm:text-5xl font-bold text-center"
      >
        <span className="about mr-2">DevOps</span>
        <span className="aboutme bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text">Skills</span>
      </motion.p>
      <div className="aboutContainer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 m-8 sm:m-16 justify-evenly place-items-center">
        {devopsSkills.map((skill) => (
          <motion.div key={skill.name}
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            {isImage(skill.src) ? (
              <Image
                src={skill.src}
                alt={skill.name}
                width={100}
                height={100}
                className="w-24 sm:w-36 md:w-48"
                draggable={false}
                unoptimized={skill.src.startsWith('http')}
              />
            ) : (
              <video
                src={skill.src}
                width={100}
                height={100}
                className="w-24 sm:w-36 md:w-48"
                autoPlay
                loop
                muted
                playsInline
                draggable={false}
                aria-label={skill.name}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
