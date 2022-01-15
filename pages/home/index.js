import React, { Fragment } from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { AiOutlineStar } from 'react-icons/ai';
import { ImStack } from 'react-icons/im';
import { RiCommunityLine } from 'react-icons/ri';
import { BsCheck2Circle, BsHandThumbsUp } from 'react-icons/bs';
import OurTeam from './OurTeam';

export default function HomePage() {

  const activeTabClass = 'px-5 py-3 flex justify-center font-lato text-base border border-primary-color-orange-one items-center text-primary-color-orange-one';
  const inActiveTabClass = 'px-5 py-3 flex justify-center items-center font-lato text-base text-gray-600';
  return (
    <>
      <Head>
        <title>Createx</title>
        <meta name="description" content="Createx is a online learning platform which offer courses on various technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className='bg-section-bg-color md:px-20 sm:px-10 px-10 pt-20'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
          <div className='flex flex-col lg:mx-10 md:mx-10'>
            <div className='flex items-center'>
              <Image src='/images/play-button.png' alt='' height={84} width={84} />
              <span className='font-lato font-bold text-gray-900 text-base ml-2'>Play Showreel</span>
            </div>
            <span className='font-lato lg:text-6xl text-4xl font-black mt-10 lg:leading-[5.1rem]'>Enjoy Studying with Createx Online Courses</span>
            <div className='flex flex-row flex-nowrap my-5'>
              <button className='md:px-10 px-6 py-2 border rounded border-primary-color-orange-one text-primary-color-orange-one font-ubuntu'>About Us</button>
              <button className='md:px-10 px-8 py-2 ml-2 border rounded bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second text-white font-ubuntu'>Explore Courses</button>
            </div>
          </div>
          <div className='flex items-center'>
            <Image src='/images/homepage-illustration.png' alt='' height={500} width={550} />
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
          <Image className='opacity-60' src='/images/up-arrow-shape.png' alt='' width={96} height={96} />
        </div>
      </div>

      <div className='md:px-20 sm:px-10 px-10 py-20'>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-x-20'>
          <Image src='/images/homepage-about-us.png' alt='' width={705} height={560} />
          <div className='flex flex-col '>
            <span className='font-lato text-gray-900 text-base font-bold uppercase tracking-wide'>who we are</span>
            <span className='font-lato text-gray-900 text-3xl font-black tracking-wide'>Why Createx?</span>
            <div className='mt-5'>
              <div className='flex flex-nowrap justify-content items-center'>
                <BsCheck2Circle />
                <span className='text-base text-gray-900 font-normal font-lato ml-2'>A fermentum in morbi pretium aliquam adipiscing donec tempus.</span>
              </div>
              <div className='flex flex-nowrap justify-content items-center mt-2'>
                <BsCheck2Circle />
                <span className='text-base text-gray-900 font-normal font-lato ml-2'>Vulputate placerat amet pulvinar lorem nisl.</span>
              </div>
              <div className='flex flex-nowrap justify-content items-center mt-2'>
                <BsCheck2Circle />
                <span className='text-base text-gray-900 font-normal font-lato ml-2'>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</span>
              </div>
              <div className='flex flex-nowrap justify-content items-center mt-2'>
                <BsCheck2Circle />
                <span className='text-base text-gray-900 font-normal font-lato ml-2'>Etiam duis lobortis in fames ultrices commodo nibh.</span>
              </div>
              <div className='flex flex-nowrap justify-content items-center mt-2'>
                <BsCheck2Circle />
                <span className='text-base text-gray-900 font-normal font-lato ml-2'>Tincidunt sagittis neque sem ac eget.</span>
              </div>
              <div className='flex flex-nowrap justify-content items-center mt-2'>
                <BsCheck2Circle />
                <span className='text-base text-gray-900 font-normal font-lato ml-2'>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</span>
              </div>
              <button className='bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second text-white px-3 font-ubuntu py-2 mt-4'>
                More about us
              </button>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <span className='uppercase tracking-wide font-normal'>ready to learn?</span>
          <div className='flex justify-between'>
            <span className='text-3xl font-lato font-black'>Featured Courses</span>
            <button className='border border-primary-color-orange-one text-primary-color-orange-one px-3 font-normal text-base'>View all courses</button>
          </div>
        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-3 gap-5'>

          {/* card 1 */}
          <div className='flex flex-col md:flex-row border shadow-sm hover:shadow-md'>
            <Image src='/images/courses-image-1.png' alt='' width={214} height={214} />
            <div className='md:w-6/12 w-full p-8'>
              <a className='text-white px-3 py-1 bg-success rounded'>
                Marketing
              </a>
              <div className='flex flex-col'>
                <span className='font-lato font-bold text-xl leading-7 text-gray-900 mt-3'>
                  The Ultimate Google Ads Training Course
                </span>
                <p className='mt-3'>
                  <span className='text-danger font-lato font-bold font-base leading-4 mr-1'>$100</span>
                  <span className='font-lato font-base font-base leading-4 text-gray-700 mr-1'>|</span>
                  <span className='font-lato font-base leading-7 text-gray-700'>by Jerome Bell</span>
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className='flex flex-col md:flex-row border shadow-sm hover:shadow-md'>
            <Image src='/images/courses-image-2.png' alt='' width={214} height={214} />
            <div className='md:w-6/12 w-full p-8'>
              <a className='text-white px-3 py-1 bg-info rounded'>
                Management
              </a>
              <div className='flex flex-col'>
                <span className='font-lato font-bold text-xl leading-7 text-gray-900 mt-3'>
                  Project Management Fundamental
                </span>
                <p className='mt-3'>
                  <span className='text-danger font-lato font-bold font-base leading-4 mr-1'>$480</span>
                  <span className='font-lato font-base font-base leading-4 text-gray-700 mr-1'>|</span>
                  <span className='font-lato font-base leading-7 text-gray-700'>by Marvin McKinney</span>
                </p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className='flex flex-col md:flex-row border shadow-sm hover:shadow-md'>
            <Image src='/images/courses-image-3.png' alt='' width={214} height={214} />
            <div className='md:w-6/12 w-full p-8'>
              <a className='text-white px-3 py-1 bg-warning rounded'>
                HR & Recruting
              </a>
              <div className='flex flex-col'>
                <span className='font-lato font-bold text-xl leading-7 text-gray-900 mt-3'>
                  HR Management and Analytics
                </span>
                <p className='mt-3'>
                  <span className='text-danger font-lato font-bold font-base leading-4 mr-1'>$200</span>
                  <span className='font-lato font-base font-base leading-4 text-gray-700 mr-1'>|</span>
                  <span className='font-lato font-base leading-7 text-gray-700'>by Leslie Alexander Li</span>
                </p>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className='flex flex-col md:flex-row border shadow-sm hover:shadow-md'>
            <Image src='/images/courses-image-4.png' alt='' width={214} height={214} />
            <div className='md:w-6/12 w-full p-8'>
              <a className='text-white px-3 py-1 bg-success rounded'>
                Marketing
              </a>
              <div className='flex flex-col'>
                <span className='font-lato font-bold text-xl leading-7 text-gray-900 mt-3'>
                  Brand Management & PR Communications
                </span>
                <p className='mt-3'>
                  <span className='text-danger font-lato font-bold font-base leading-4 mr-1'>$530</span>
                  <span className='font-lato font-base font-base leading-4 text-gray-700 mr-1'>|</span>
                  <span className='font-lato font-base leading-7 text-gray-700'>by Kristin Waston</span>
                </p>
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div className='flex flex-col md:flex-row border shadow-sm hover:shadow-md'>
            <Image src='/images/courses-image-5.png' alt='' width={214} height={214} />
            <div className='md:w-6/12 w-full p-8'>
              <a className='text-white px-3 py-1 bg-info rounded'>
                Management
              </a>
              <div className='flex flex-col'>
                <span className='font-lato font-bold text-xl leading-7 text-gray-900 mt-3'>
                  Business Development Management
                </span>
                <p className='mt-3'>
                  <span className='text-danger font-lato font-bold font-base leading-4 mr-1'>$400</span>
                  <span className='font-lato font-base font-base leading-4 text-gray-700 mr-1'>|</span>
                  <span className='font-lato font-base leading-7 text-gray-700'>by Dianne Russell</span>
                </p>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className='flex flex-col md:flex-row border shadow-sm hover:shadow-md'>
            <Image src='/images/courses-image-6.png' alt='' width={214} height={214} />
            <div className='md:w-6/12 w-full p-8'>
              <a className='text-white px-3 py-1 bg-red rounded'>
                Design
              </a>
              <div className='flex flex-col'>
                <span className='font-lato font-bold text-xl leading-7 text-gray-900 mt-3'>
                  Graphic Design Basic
                </span>
                <p className='mt-3'>
                  <span className='text-danger font-lato font-bold font-base leading-4 mr-1'>$500</span>
                  <span className='font-lato font-base font-base leading-4 text-gray-700 mr-1'>|</span>
                  <span className='font-lato font-base leading-7 text-gray-700'>by Guy Hawkins</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className='mt-24 mb-10'>
          <div className='flex flex-col justify-center items-center'>
            <span className='uppercase font-lato text-base font-bold text-gray-900'>Our Benefit</span>
            <span className='uppercase font-lato text-3xl font-black text-gray-900 mt-4 leading-10'>That&apos;s how we do it</span>
          </div>

          <div className='mt-10'>
            <Tab.Group>
              <Tab.List className='flex justify-between'>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <a className={selected ? activeTabClass : inActiveTabClass}>
                      <AiOutlineStar className='mt-1 mr-1' /> Experienced Tutors
                    </a>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <a className={selected ? activeTabClass : inActiveTabClass}>
                      <BsHandThumbsUp className='mr-2' /> Feedback and Support
                    </a>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <a className={selected ? activeTabClass : inActiveTabClass}>
                      <ImStack className='mr-2' /> 24/7 Online Library
                    </a>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <a className={selected ? activeTabClass : inActiveTabClass}>
                      <RiCommunityLine className='mr-2' /> Community

                    </a>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                  <div className='flex flex-col justify-center'>
                    <span className='font-lato font-black text-3xl text-gray-900'>Only practicing tutors</span>
                    <p className='text-base text-gray-800 font-normal mt-4'>
                      Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                    </p>
                  </div>
                  <Image src='/images/benefit-illustration.png' alt='' width={600} height={440} />
                </Tab.Panel>
                <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                  <div className='flex flex-col justify-center'>
                    <span className='font-lato font-black text-3xl text-gray-900'>Only practicing tutors</span>
                    <p className='text-base text-gray-800 font-normal mt-4'>
                      Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                    </p>
                  </div>
                  <Image src='/images/benefit-illustration.png' alt='' width={600} height={440} />
                </Tab.Panel>
                <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                  <div className='flex flex-col justify-center'>
                    <span className='font-lato font-black text-3xl text-gray-900'>Only practicing tutors</span>
                    <p className='text-base text-gray-800 font-normal mt-4'>
                      Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                    </p>
                  </div>
                  <Image src='/images/benefit-illustration.png' alt='' width={600} height={440} />
                </Tab.Panel>
                <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                  <div className='flex flex-col justify-center'>
                    <span className='font-lato font-black text-3xl text-gray-900'>Only practicing tutors</span>
                    <p className='text-base text-gray-800 font-normal mt-4'>
                      Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                    </p>
                  </div>
                  <Image src='/images/benefit-illustration.png' alt='' width={600} height={440} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

      </div>

      <div className='bg-section-bg-color md:px-20 sm:px-10 px-10 py-16'>
        <div className='flex flex-col justify-center items-center'>
          <span className='uppercase font-normal font-lato text-base'>Our Events</span>
          <span className='uppercase font-black font-lato text-3xl mt-4'>Lectures & Workshops</span>
        </div>
        <div className='grid grid-cols-1 mt-8'>
          <div className='bg-white flex flex-row flex-wrap py-8 px-8'>
            <span className='font-lato font-black text-5xl text-danger'>05</span>
            <div className='flex flex-col ml-4'>
              <span className='font-lato font-bold text-lg text-gray-900'>August</span>
              <span className='font-lato font-base text-base text-gray-700'>11:00 - 14:00</span>
            </div>
            <div className='flex flex-col ml-10'>
              <span className='font-lato font-bold text-lg text-gray-900'>
                Formation of the organizational structure of the company in the face of uncertainty.
              </span>
              <span className='font-lato font-base text-base text-gray-700'>Online master-class</span>
            </div>
            <div className='flex flex-col ml-auto'>
              <button className='border border-primary-color-orange-one text-primary-color-orange-one hover:bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second hover:text-white px-8 py-2'>
                View more
              </button>
            </div>
          </div>

          <div className='bg-white flex flex-row flex-wrap py-8 px-8 mt-5'>
            <span className='font-lato font-black text-5xl text-danger'>24</span>
            <div className='flex flex-col ml-4'>
              <span className='font-lato font-bold text-lg text-gray-900'>July</span>
              <span className='font-lato font-base text-base text-gray-700'>11:00 - 12:30</span>
            </div>
            <div className='flex flex-col ml-10'>
              <span className='font-lato font-bold text-lg text-gray-900'>
                Building a customer service department. Best Practices.
              </span>
              <span className='font-lato font-base text-base text-gray-700'>Online lecture</span>
            </div>
            <div className='flex flex-col ml-auto'>
              <button className='border border-primary-color-orange-one text-primary-color-orange-one hover:bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second hover:text-white px-8 py-2'>
                View more
              </button>
            </div>
          </div>

          <div className='bg-white flex flex-row flex-wrap py-8 px-8 mt-5'>
            <span className='font-lato font-black text-5xl text-danger'>16</span>
            <div className='flex flex-col ml-4'>
              <span className='font-lato font-bold text-lg text-gray-900'>July</span>
              <span className='font-lato font-base text-base text-gray-700'>10:00 - 13:00</span>
            </div>
            <div className='flex flex-col ml-10'>
              <span className='font-lato font-bold text-lg text-gray-900'>
                How to apply methods of speculative design in practice. Worldbuilding prototyping.
              </span>
              <span className='font-lato font-base text-base text-gray-700'>Online workshop</span>
            </div>
            <div className='flex flex-col ml-auto'>
              <button className='border border-primary-color-orange-one text-primary-color-orange-one hover:bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second hover:text-white px-8 py-2'>
                View more
              </button>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center mt-14'>
            <span className='font-lato font-bold text-3xl text-gray-900'>Do you want more?</span>
            <button className='border bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second text-white font-lato ml-4 py-3 px-6'>
              Explore all events
            </button>
          </div>
        </div>
      </div>

      <div className='md:px-20 sm:px-10 px-10 pt-20'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
          <div className='flex flex-col lg:mx-10 md:mx-10'>
            <span className='font-lato font-bold text-base text-gray-900'>Createx Certificate</span>
            <span className='font-lato font-black text-5xl text-gray-900 mt-3'>Your expertise will be confirmed</span>
            <span className='mt-10 font-lato font-normal text-base text-gray-800'>We are accredited by international professional organizations and institutes:</span>
            <div className='flex justify-around items-center mt-7'>
              <Image src='/images/del-mar-strategy-logo.png' alt='' width={105} height={50} />
              <Image src='/images/sentinal-consulting-logo.png' alt='' width={105} height={50} />
              <Image src='/images/national-health-logo.png' alt='' width={105} height={50} />
            </div>
          </div>
          <div className='flex items-center'>
            <Image src='/images/createx-certificate.png' alt='' width={705} height={500} />
          </div>
        </div>
      </div>

      <div className='bg-gray-200 md:px-20 sm:px-10 px-10 py-16'>
        <OurTeam />
      </div>

    </>
  );
}
