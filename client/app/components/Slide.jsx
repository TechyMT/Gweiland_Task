'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import SlideShowCards from './SlideShowCards';
import Constants from '../constants';

// import required modules

const Slide = () => {
  const flickityOptions = {
    autoPlay: true,
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
  };
  return (
    <div className='mb-8 mt-8'>
      <Marquee>
        {Constants.map((constant) => {
          return (
            <SlideShowCards
              key={constant.title}
              title={constant.title}
              bck ={constant.bgColor}
              logo={constant.logo}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default Slide;
