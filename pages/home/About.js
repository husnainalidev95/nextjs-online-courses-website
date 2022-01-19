import Image from 'next/image';
import { BsCheck2Circle } from 'react-icons/bs';

export default function About() {
  return (
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
  );
}
