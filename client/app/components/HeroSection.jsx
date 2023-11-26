'use client';

// Importing React, useRef, and useState from 'react'
import React, { useRef, useState } from 'react';

// Importing Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Importing Material-UI components
import { Box, FormControlLabel, Slide, Switch } from '@mui/material';

// Importing Swiper styles and creative effect
import 'swiper/css';
import 'swiper/css/effect-creative';

// Importing required Swiper modules
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';

// Importing Image and ImageText components
import Image from 'next/image';
import ImageText from './ImageText';

// HeroSection component
const HeroSection = () => {
  // Array of titles for each slide
  const titles = [
    'heritage hoodies',
    'heritage tees',
    'premium tees',
    'premium zip hoodies',
    'heritage women tanks',
  ];

  // State for active slide index and hover status
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Functions to handle mouse enter and leave events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Rendering the HeroSection component
  return (
    <div
      className='mb-8'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative'>
        {/* Swiper component for image slides */}
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={false} // Disable default navigation
          loop={true}
          speed={800}
          modules={[EffectCreative, Autoplay, Navigation]}
          className='mySwiper'
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {/* Individual slides with images and titles */}
          <SwiperSlide key={1}>
            {/* Slide content for the first slide */}
            {/* ... (content for other slides) */}
          </SwiperSlide>

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
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
