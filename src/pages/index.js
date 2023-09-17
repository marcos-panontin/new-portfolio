import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/marcos-drawing3.png'
import Link from 'next/link'
import AnimatedButton from '@/components/AnimatedButton'
import AnimatedButton2 from '@/components/AnimatedButton2'
import { AnimatedHeart } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcos Panontin - Fullstack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2 flex flex-col items-center self-center'>
            <Image src={profilePic} alt='Marcos Panontin' className='w-[70%] h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <AnimatedButton text={'Entre em contato' } href={'mailto:amarcospanontin@gmail.com'} />
              <hr className='h-10'></hr>
              <AnimatedButton2 text={'Entre em contato'} href={'mailto:amarcospanontin@gmail.com'} />
              {/* <AnimatedHeart /> */}
            </div>
          </div>

        </Layout>
      </main>
    </>
  )
}
