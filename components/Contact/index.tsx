"use client"

import React from 'react'
import LinkContainer from './LinkContainer'
import gmail from '../../public/gmail.png'
import calling from '../../public/calling.png'
import github from '../../public/github1.png'
import leetcode from '../../public/leetcode.png'
import linkedin from '../../public/linkedin.png'
import ContactForm from './ContactForm'
import Footer from '../Footer'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id='contact' className='contact max-w-7xl mx-auto px-3 pt-8 sm:pt-20'>
            <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                }}
                className="text-3xl sm:text-5xl font-bold text-center">
                <span className="about mr-2">Contact</span>
                <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Me</span>
            </motion.p>
            <div className="contactContainer flex justify-evenly items-center flex-col gap-4 md:flex-row mt-6">
                <div className="links flex flex-col gap-2">
                    <LinkContainer src={gmail} text='shahilkashyap1@gmail.com' href="mailto:shahilkashyap1@gmail.com" />
                    <LinkContainer src={calling} text='+91 87890 71577' href="tel:+91 87890 71577" />
                    <LinkContainer src={github} text='GitHub' href='https://github.com/shekharK18' />
                    <LinkContainer src={leetcode} text='Leetcode' href="https://leetcode.com/Saurabh_Sen" />
                    <LinkContainer src={linkedin} text='Linkedin' href="https://www.linkedin.com/in/shekhar-kashyap-5b99551aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
                </div>
                <span className="or text-3xl sm:text-5xl font-semibold">OR</span>
                <ContactForm />
            </div>
            <Footer />
        </section>
    )
}

export default Contact