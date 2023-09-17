import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'

const about = () => {
  return (
    <>
    <Head>
        <title>Marcos Panontin | Sobre</title>
        <meta name="description" content="About Page for Marcos Panontin Portfolio" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="About me" className='text-5xl mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <section className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Marcos Panontin</h2>
              <p className='font-medium'>Hi, I&apos;m Marcos Panontin, a web developer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 2 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients&apos; visions to life.</p>
              <p className='font-medium my-4'>I believe that design is about more than just making things look pretty - it&apos;s about solving problems and 
creating intuitive, enjoyable experiences for users. </p>
              <p className='font-medium'>Whether I&apos;m working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
            </section>
            <section>
              <Image src='/images/profile/marcos.png' width={1500} height={1500} alt='Marcos Panontin' />
            </section>

          </div>
        </Layout>
      </main>
    </>
  )
}

export default about