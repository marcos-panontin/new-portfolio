import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { AnimatedHeart } from './Icons'

const Footer = () => {
  return (
    <footer className='border-t-2 border-dark border-solid'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex'>Built with &nbsp;<AnimatedHeart className='inline'/>&nbsp;by&nbsp;<Link href='/' className='underline'>Marcos Panontin</Link></div>
      </Layout>
    </footer>
  )
}

export default Footer