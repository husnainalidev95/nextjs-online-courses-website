import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Createx</title>
        <meta name="description" content="Createx is a online learning platform which offer courses on various technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='hero-section-bg px-20 pt-20'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
          <div className='flex flex-col mx-10'>
            <div className='flex items-center'>
              <Image src='/images/play-button.png' height={84} width={84} />
              <span className='font-lato font-bold text-gray-900 text-base ml-2'>Play Showreel</span>
            </div>
            <span className='font-lato lg:text-6xl text-4xl font-black mt-10 lg:leading-[5.1rem]'>Enjoy Studying with Createx Online Courses</span>
            <div className='flex flex-row flex-wrap my-5'>
              <button className='px-10 py-2 border rounded border-primary-color-orange-one text-primary-color-orange-one font-ubuntu'>About Us</button>
              <button className='px-10 py-2 mt-2 lg:mt-0 lg:ml-2 border rounded bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second text-white font-ubuntu'>Explore Courses</button>
            </div>
          </div>
          <div className='flex items-center'>
            <Image src='/images/homepage-illustration.png' height={500} width={550} />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:mx-20'>
          <div className='flex flex-row flex-wrap justify-between py-20'>
            <div className='flex flex-row justify-center items-center mr-4'>
              <span className='font-lato font-black text-4xl text-gray-900 mr-2'>1200</span>
              <span className='font-lato font-normal text-base text-gray-900'>Students graduated</span>
            </div>
            <div className='flex flex-row justify-center items-center mr-4 mt-3'>
              <span className='font-lato font-black text-4xl text-gray-900 mr-2'>84</span>
              <span className='font-lato font-normal text-base text-gray-900'>Completed courses</span>
            </div>
            <div className='flex flex-row justify-center items-center mr-4 mt-3'>
              <span className='font-lato font-black text-4xl text-gray-900 mr-2'>16</span>
              <span className='font-lato font-normal text-base text-gray-900'>Qaulified tutors</span>
            </div>
            <div className='flex flex-row justify-center items-center mt-3'>
              <span className='font-lato font-black text-4xl text-gray-900 mr-2'>5</span>
              <span className='font-lato font-normal text-base text-gray-900'>Years of experience</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2/3 top-1/4 left-14">
          <Image className='opacity-60' src='/images/up-arrow-shape.png' width={96} height={96} />
        </div>
        <div className="absolute inset-1/2">
          <Image className='opacity-90' src='/images/circle-d-shape.png' width={150} height={150} />
        </div>
        <div className="absolute inset-1/2">
          <Image className='opacity-90' src='/images/single-d-shape.png' width={61} height={61} />
        </div>
      </div>
    </>
  );
}
