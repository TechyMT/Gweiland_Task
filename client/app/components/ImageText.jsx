import React from 'react';

const ImageText = ({ title }) => {
  return (
    <div className='textFont absolute left-8 top-1/2 flex w-full flex-col break-words text-5xl font-extrabold text-white md:left-28 md:top-1/3 md:w-1/4 md:text-7xl'>
      <div>{title}</div>
      <div className='flex'>
        <a
          href='#_'
          class=' group relative mt-8 flex w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 text-sm font-light text-black'
        >
          <span class='absolute bottom-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-[#000000] opacity-90 transition-all duration-200 ease-out group-hover:h-full'></span>
          <span class='relative group-hover:text-white font-bold'>Shop Now</span>
        </a>
      </div>
    </div>
  );
};

export default ImageText;
