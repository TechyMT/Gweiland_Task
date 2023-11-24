import Image from 'next/image';
import React from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Instagram, Twitter } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Navbar = () => {
  return (
    <div className='sticky top-0 flex justify-evenly bg-[#212122] z-40'>
      <div className='ml-12 flex w-1/3 items-center gap-6'>
        <div className='flex items-center gap-1'>
          <div className='text-sm font-extrabold text-white'>brands</div>
          <span className='flex'>
            <KeyboardArrowDownOutlinedIcon className='w-4 text-white' />
          </span>
        </div>
        <div className='flex items-center gap-1'>
          <div className='text-sm font-extrabold text-white'>shop</div>
          <span className='flex'>
            <KeyboardArrowDownOutlinedIcon className='w-4 text-white' />
          </span>
        </div>
        <div className='flex text-sm font-extrabold text-white'>premium</div>
        <div className='flex text-sm font-extrabold text-white'>gift cards</div>
      </div>
      <div className='mx-auto flex w-1/3 justify-center'>
        <Image
          className='p-2'
          src='/images/Artboard_1.png'
          width={140}
          height={150}
          alt='png'
        />
      </div>
      <div className='ml-12 flex w-1/3 items-center gap-20'>
        <div className='ml-14 flex items-center gap-6'>
          <div className='flex text-sm font-extrabold text-white'>
            become an affliate
          </div>
          <div className='flex gap-6'>
            <div className='flex text-sm font-extrabold text-white'>
              <Twitter />
            </div>

            <div className='flex text-sm font-extrabold text-white'>
              <Instagram />
            </div>
            <div className='flex text-sm font-extrabold text-white'>
              <PersonOutlineOutlinedIcon />
            </div>
            <div className='flex text-sm font-extrabold text-white'>
              <SearchOutlinedIcon />
            </div>
            <div className='flex text-sm font-extrabold text-white'>
              <ShoppingBagOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
