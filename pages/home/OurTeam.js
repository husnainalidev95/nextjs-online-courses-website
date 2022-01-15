import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";

export default function OurTeam() {

  // emblaRef will be a reference to our carousel viewport
  const [emblaRef, embla] = useEmblaCarousel({

    align: "start",
    // aligns the first slide to the start
    // of the viewport else will align it to the middle.

    loop: true,
    // we need the carousel to loop to the
    // first slide once it reaches the last slide.

    skipSnaps: false,
    // Allow the carousel to skip scroll snaps if
    // it's dragged vigorously.

    inViewThreshold: 0.7,
    // percentage of a slide that need's to be visible
    // inorder to be considered in view, 0.7 is 70%.
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
      <div className='flex justify-between mb-10'>
        <div className='flex flex-col'>
          <span className='font-lato font-bold text-base text-gray-900 uppercase'>Best tutors are all here</span>
          <span className='font-lato font-black text-4xl text-gray-900'>Meet our team</span>
        </div>
        <div>
          <button className='px-3 py-2 bg-orange-50 mr-2'>Abc</button>
          <button className='px-3 py-2 bg-orange-50'>Abc</button>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <Image
            src='/images/team-image-1.png'
            height={320}
            width={245}
            alt="cover image"
          />
        </div>
        <div>
          <Image
            src='/images/team-image-2.png'
            height={320}
            width={245}
            alt="cover image"
          />
        </div>
        <div>
          <Image
            src='/images/team-image-3.png'
            height={320}
            width={245}
            alt="cover image"
          />
        </div>
        <div>
          <Image
            src='/images/team-image-4.png'
            height={320}
            width={245}
            alt="cover image"
          />
        </div>
        <div>
          <Image
            src='/images/team-image-1.png'
            height={320}
            width={245}
            alt="cover image"
          />
        </div>
        <div>
          <Image
            src='/images/team-image-2.png'
            height={320}
            width={245}
            alt="cover image"
          />
        </div>
      </Slider>
    </>
  );
}
