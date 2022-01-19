import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex items-center flex-wrap absolute bg-transparent p-3 lg:ml-40 lg:mr-52'>
      <Link href='/' passHref>
        <a className='inline-flex items-center p-2 mr-4'>
          <span className='text-xl text-black font-bold uppercase tracking-wide'>
            <Image src='/images/logo.png' alt='' width={130} height={22} />
          </span>
        </a>
      </Link>
      <button
        className='inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-black outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${active ? '' : 'hidden'} w-full lg:inline-flex items-center lg:w-auto`}
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
          <Link href='/' passHref>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 font-lato text-base font-bold hover:text-primary-color-orange-one'>
              About Us
            </a>
          </Link>
          <Link href='/' passHref>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 font-lato text-base font-bold hover:text-primary-color-orange-one'>
              Courses
            </a>
          </Link>
          <Link href='/' passHref>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 font-lato text-base font-bold hover:text-primary-color-orange-one'>
              Events
            </a>
          </Link>
          <Link href='/' passHref>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 font-lato text-base font-bold hover:text-primary-color-orange-one'>
              Blog
            </a>
          </Link>
          <Link href='/' passHref>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 font-lato text-base font-bold  hover:text-primary-color-orange-one'>
              Contacts
            </a>
          </Link>
        </div>
      </div>

      <div
        className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto ml-4`}
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
          <button
            className='py-2 px-3 rounded border-none text-white bg-gradient-to-r from-primary-color-orange-one to-primary-color-orange-second'>
            Get Consultation
          </button>
          <Link href='/' passHref>
            <button className='inline-flex items-center rounded-none font-lato text-base text-gray-800 p-2 ml-2'>
              <CgProfile className='mr-1 mt-1' /> Login / Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
