import { useRef } from 'react';
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Slider from "react-slick";

export default function OurTeam() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleClickNext = () => {
    sliderRef.current.slickNext();
  };

  const handleClickPrevious = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className='flex justify-between mb-10'>
        <div className='flex flex-col'>
          <span className='font-lato font-bold text-base text-gray-900 uppercase'>Best tutors are all here</span>
          <span className='font-lato font-black text-4xl text-gray-900'>Meet our team</span>
        </div>
        <div>
          <button className='px-3 py-2 hover:bg-primary hover:rounded-full hover:text-white mr-2' onClick={handleClickPrevious}><AiOutlineArrowLeft /></button>
          <button className='px-3 py-2 hover:bg-primary hover:rounded-full hover:text-white' onClick={handleClickNext}><AiOutlineArrowRight /></button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Image
            className='bg-secondary'
            src='/images/team-image-1.png'
            height={320}
            width={260}
            alt="cover image"
          />
          <div className='flex flex-col items-center'>
            <span className='font-lato font-bold text-xl text-gray-800'>Dianne Russell</span>
            <span className='font-lato font-normal text-base text-gray-700'>Founder and CEO</span>
          </div>
        </div>
        <div>
          <Image
            className='bg-secondary text-center'
            src='/images/team-image-2.png'
            height={320}
            width={260}
            alt="cover image"
          />
          <div className='flex flex-col items-center'>
            <span className='font-lato font-bold text-xl text-gray-800'>Jerome Bell</span>
            <span className='font-lato font-normal text-base text-gray-700'>Founder and Program Director</span>
          </div>
        </div>
        <div>
          <Image
            className='bg-secondary text-center'
            src='/images/team-image-3.png'
            height={320}
            width={260}
            alt="cover image"
          />
          <div className='flex flex-col items-center'>
            <span className='font-lato font-bold text-xl text-gray-800'>Kristin Watson</span>
            <span className='font-lato font-normal text-base text-gray-700'>Marketer, Curator of Marketing Course</span>
          </div>
        </div>
        <div>
          <Image
            className='bg-secondary text-center'
            src='/images/team-image-4.png'
            height={320}
            width={260}
            alt="cover image"
          />
          <div className='flex flex-col items-center'>
            <span className='font-lato font-bold text-xl text-gray-800'>Marvin McKinney</span>
            <span className='font-lato font-normal text-base text-gray-700'>PM, Curator of Management Course</span>
          </div>
        </div>
      </Slider>
    </>
  );
}
