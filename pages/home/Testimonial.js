import Image from 'next/image';
import React from 'react'

export default function Testimonial() {
  return (
    <div className='mt-28'>
      <div className='flex flex-col items-center'>
        <span className='font-lato font-bold text-base uppercase text-gray-900'>testimonials</span>
        <span className='font-lato font-black text-5xl text-gray-900 mt-3 mb-14'>What our students say</span>

        <Image
          src='/images/testimonial.png'
          width={1020}
          height={380}
        />
      </div>
    </div>
  );
}
