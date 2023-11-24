import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='mb-12'>
      <div>
        <Image
          className='object-cover'
          src='/images/Hero1.svg'
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default HeroSection;
