'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, EffectCreative, Navigation} from 'swiper/modules';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div className='mb-8'>
      <div className=''>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['0%', 0, -1], // Adjusted translation for the previous slide
              
            },
            next: {
              translate: ['-50%', -1, 0],
              
            },
          }}
          navigation={true}
          loop={true}
          speed={800}
          onFocus={() =>
          {
            console.log('focused');
          }}
          
          modules={[EffectCreative,Autoplay,Navigation]}
          className='mySwiper'
          onMouseEnter={() =>
          {
            
          }}
        >
          <SwiperSlide>
            <Image
              className='object-cover'
              src='/Images/hero1.svg'
              width={1700}
              height={1500}
              alt='hero1'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='object-cover'
              src='/Images/hero2.svg'
              width={1700}
              height={1500}
              alt='hero1'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='object-cover'
              src='/Images/hero3.svg'
              width={1700}
              height={1500}
              alt='hero1'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='object-cover'
              src='/Images/hero4.svg'
              width={1700}
              height={1500}
              alt='hero1'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='object-cover'
              src='/Images/hero5.svg'
              width={1700}
              height={1500}
              alt='hero1'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
