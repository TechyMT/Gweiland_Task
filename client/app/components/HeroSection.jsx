'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, FormControlLabel, Slide, Switch } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import Image from 'next/image';

// ... (previous imports)
// ... (previous imports)

const HeroSection = () => {
  const titles = [
    'heritage hoodies',
    'heritage tees',
    'premium tees',
    'premium zip hoodies',
    'heritage women tanks',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='mb-8'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative'>
        <Swiper
          centeredSlides={true}
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['0%', 0, -1],
            },
            next: {
              translate: ['-70%', 0, 0],
            },
          }}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          navigation={false} // Disable default navigation
          loop={true}
          speed={800}
          modules={[EffectCreative, Autoplay, Navigation]}
          className='mySwiper'
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          <SwiperSlide key={1}>
            <div className='flex h-full w-full  items-center justify-center'>
              <div className='absolute h-full w-full bg-black opacity-20'></div>
              <Image
                className={`h-full w-full`}
                src={`/Images/hero1.svg`}
                width={1700}
                height={1500}
                alt={`hero1`}
              />

              <div className='textFont absolute left-28 top-1/3 flex w-1/4 flex-col break-words text-7xl font-extrabold text-white'>
                <div>heritage hoodies</div>
                <div className='flex'>
                  <a
                    href='#_'
                    class=' group relative mt-8 flex w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 text-sm font-light text-black'
                  >
                    <span class='absolute bottom-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-[#000000] opacity-90 transition-all duration-200 ease-out group-hover:h-full'></span>
                    <span class='relative group-hover:text-white'>
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full w-full  items-center justify-center'>
              <div className='absolute h-full w-full bg-black opacity-20'></div>
              <Image
                className={`h-full w-full`}
                src={`/Images/hero2.svg`}
                width={1700}
                height={1500}
                alt={`hero2`}
              />

              <div className='textFont absolute left-28 top-1/3 flex w-1/4 flex-col break-words text-7xl font-extrabold text-white'>
                <div>premium zip hoodies</div>
                <div className='flex'>
                  <a
                    href='#_'
                    class=' group relative mt-8 flex w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 text-sm font-light text-black'
                  >
                    <span class='absolute bottom-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-[#000000] opacity-90 transition-all duration-200 ease-out group-hover:h-full'></span>
                    <span class='relative group-hover:text-white'>
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full w-full  items-center justify-center'>
              <div className='absolute h-full w-full bg-black opacity-20'></div>
              <Image
                className={`h-full w-full`}
                src={`/Images/hero3.svg`}
                width={1700}
                height={1500}
                alt={`hero2`}
              />

              <div className='textFont absolute left-28 top-1/3 flex w-1/4 flex-col break-words text-7xl font-extrabold text-white'>
                <div>premium tees</div>
                <div className='flex'>
                  <a
                    href='#_'
                    class=' group relative mt-8 flex w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 text-sm font-light text-black'
                  >
                    <span class='absolute bottom-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-[#000000] opacity-90 transition-all duration-200 ease-out group-hover:h-full'></span>
                    <span class='relative group-hover:text-white'>
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full w-full  items-center justify-center'>
              <div className='absolute h-full w-full bg-black opacity-20'></div>
              <Image
                className={`h-full w-full`}
                src={`/Images/hero4.svg`}
                width={1700}
                height={1500}
                alt={`hero3`}
              />

              <div className='textFont absolute right-2 top-1/3 flex w-1/4 flex-col justify-end '>
                <div className='flex break-words text-7xl font-extrabold text-white '>
                  heritage women tanks
                </div>
                <div className='flex'>
                  <a
                    href='#_'
                    class=' group relative mt-8 flex w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 text-sm font-light text-black'
                  >
                    <span class='absolute bottom-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-[#000000] opacity-90 transition-all duration-200 ease-out group-hover:h-full'></span>
                    <span class='relative group-hover:text-white'>
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full w-full  items-center justify-center'>
              <div className='absolute h-full w-full bg-black opacity-20'></div>
              <Image
                className={`h-full w-full`}
                src={`/Images/hero5.svg`}
                width={1700}
                height={1500}
                alt={`hero4`}
              />

              <div className='textFont absolute right-2 top-1/3 flex w-1/4 flex-col break-words text-7xl font-extrabold text-white'>
                <div>heritage tees</div>
                <div className='flex'>
                  <a
                    href='#_'
                    class=' group relative mt-8 flex w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 text-sm font-light text-black'
                  >
                    <span class='absolute bottom-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-[#000000] opacity-90 transition-all duration-200 ease-out group-hover:h-full'></span>
                    <span class='relative group-hover:text-white'>
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        {isHovered && (
          <div className='absolute top-1/2 -translate-y-1/2 transform'>
            <button id='prev' className='swiper-button-prev'>
              Prev
            </button>
            <button id='next' className='swiper-button-next text-lg text-black'>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
