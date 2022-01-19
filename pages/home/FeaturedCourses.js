import Image from 'next/image';

export default function FeaturedCourses() {
  return (
    <>
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
    </>
  );
}
