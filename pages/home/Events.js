export default function Events() {
  return (
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
  );
}
