import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedinIcon, MoonIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
  
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : "w-0"}`}>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='w=full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/about" title="About me" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4'/>
        {/* <CustomLink href="/blog" title="Blog" className='mx-4'/> */}
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <Logo />

      </div>


      <nav className='flex items-center justify-center flex-wrap'>

        <section className='flex items-center justify-center flex-wrap'>
          <motion.a href="https://www.linkedin.com/in/marcos-panontin/" target='_blank' whileHover={{y: -3}} whileTap={{scale: 0.9}} className='w-9 mr-5'>
            <LinkedinIcon />
          </motion.a>
          <motion.a href="https://github.com/marcos-panontin" target='_blank' whileHover={{y: -3}} whileTap={{scale: 0.9}} className='w-9 mx-5'>
            <GithubIcon />
          </motion.a>
          <motion.a href="https://twitter.com/marcospanontin" target='_blank' whileHover={{y: -3}} whileTap={{scale: 0.9}} className='w-9 mx-5'>
            <TwitterIcon />
          </motion.a>
        </section>

        <section className='flex items-center justify-center flex-wrap border-l-4 border-l-solid border-dark'>
          <motion.a href="https://twitter.com/marcospanontin" target='_blank' whileHover={{y: -3}} whileTap={{scale: 0.9}} className='w-9 ml-5'>
            <MoonIcon />
          </motion.a>
          <motion.a href="https://twitter.com/marcospanontin" target='_blank' whileHover={{y: -3}} whileTap={{scale: 0.9}} className='w-9 ml-5'>
            <h1>PT</h1>
          </motion.a>
        </section>
      </nav>
    </header>
  )
}

export default NavBar