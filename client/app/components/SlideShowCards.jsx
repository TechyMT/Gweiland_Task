import Image from 'next/image';
import React from 'react';

const SlideShowCards = ({ title, bck, logo }) => {
  return (
    <div
      className={`textFont ml-16 w-[350px] overflow-hidden rounded-l-full rounded-r-3xl md:h-36 md:w-80 ${bck}`}
    >
      <div className='flex justify-between rounded-r-3xl'>
        <div className='flex justify-center'>
          <Image
            className='rounded-[50%] p-2'
            src={logo}
            width={150}
            height={150}
            alt='logo'
          />
        </div>
        <div className='flex flex-col flex-wrap justify-between rounded-r-full'>
          <div className='flex justify-end rounded-r-full p-4 text-lg font-bold text-white'>
            {title}
          </div>
          <div className='flex justify-end p-4 text-xs font-bold text-white'>
            shop now
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShowCards;
