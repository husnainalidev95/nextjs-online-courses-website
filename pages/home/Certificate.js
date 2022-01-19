import Image from "next/image";

export default function Certificate() {
  return (
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
  );
}
