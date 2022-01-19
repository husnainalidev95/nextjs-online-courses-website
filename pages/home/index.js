import React, { Fragment } from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import OurTeam from './OurTeam';
import Testimonial from './Testimonial';
import Certificate from './Certificate';
import Events from './Events';
import About from './About';
import FeaturedCourses from './FeaturedCourses';
import Benefits from './Benefits';
import HeroSection from './HeroSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Createx</title>
        <meta name="description" content="Createx is a online learning platform which offer courses on various technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <div className='md:px-20 sm:px-10 px-10 py-20'>
        <About />
        <FeaturedCourses />
        <Benefits />
      </div>
      <Events />
      <Certificate />
      <div className='bg-gray-200 md:px-20 sm:px-10 px-10 py-16'>
        <OurTeam />
        <Testimonial />
      </div>
    </>
  );
}
