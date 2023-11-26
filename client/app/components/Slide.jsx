'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import SlideShowCards from './SlideShowCards';
import Constants from '../constants';

// import required modules

const Slide = () => {
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
