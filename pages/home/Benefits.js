import { Fragment } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { AiOutlineStar } from 'react-icons/ai';
import { ImStack } from 'react-icons/im';
import { RiCommunityLine } from 'react-icons/ri';
import { BsHandThumbsUp } from 'react-icons/bs';

export default function Benefits() {
  const activeTabClass = 'px-5 py-3 flex justify-center font-lato text-base border border-primary-color-orange-one items-center text-primary-color-orange-one';
  const inActiveTabClass = 'px-5 py-3 flex justify-center items-center font-lato text-base text-gray-600';
  return (
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
  );
}
