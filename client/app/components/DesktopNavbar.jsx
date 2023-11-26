import React from 'react';
import Image from 'next/image';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Instagram, Twitter } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BrandsPopover from './BrandsPopover';
import ShopPopover from './ShopPopover';


const DesktopNavbar = () => {
  return (
    <div className='flex justify-evenly'>
      <div className='ml-12 flex w-1/3 items-center gap-6'>
        <div className='flex items-center gap-1'>
          <div className='text-sm font-extrabold text-white hover:text-[#E1C300]'>
            <BrandsPopover title='brands' />
          </div>
          <span className='flex'>
            <KeyboardArrowDownOutlinedIcon className='w-4 text-white hover:text-[#E1C300]' />
          </span>
        </div>
        <div className='flex items-center gap-1'>
          <div className='text-sm font-extrabold text-white hover:text-[#E1C300]'>
            <ShopPopover title='shop' />
          </div>
          <span className='flex'>
            <KeyboardArrowDownOutlinedIcon className='w-4 text-white hover:text-[#E1C300]' />
          </span>
        </div>
        <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
          premium
        </div>
        <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
          gift cards
        </div>
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
          <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
            <a href='https://bravaland.com/pages/become-an-affiliate'>
              become an affiliate
            </a>
          </div>
          <div className='flex gap-6'>
            <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
              <a href='https://twitter.com/mybravaland'>
                <Twitter />
              </a>
            </div>
            <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
              <a href='https://www.instagram.com/bravamarketplace/'>
                <Instagram />
              </a>
            </div>
            <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
              <a href='https://bravaland.com/account/login'>
                <PersonOutlineOutlinedIcon />
              </a>
            </div>
            <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
              <a href='/'>
                <SearchOutlinedIcon />
              </a>
            </div>
            <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
              <a href='/'>
                <ShoppingBagOutlinedIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
