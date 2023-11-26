'use client';
import React from 'react';
import Image from 'next/image';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BrandsPopover from './BrandsPopover';
import ShopPopover from './ShopPopover';
import { useState } from 'react';
import { Instagram, Twitter } from '@mui/icons-material';


const MobileNavbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  return (
    <div className='fixed left-0 top-0 w-full bg-[#212122] lg:hidden'>
      <div className='flex items-center justify-between p-1'>
        <div className='cursor-pointer text-white' onClick={toggleMobileNav}>
          {mobileNavOpen ? (
            // Close icon when mobile nav is open
            <> &#10006;</>
          ) : (
            // Hamburger icon when mobile nav is closed
            <>&#9776;</>
          )}
        </div>
        <div className='ml-12 flex'>
          <Image
            className='p-1'
            src='/images/Artboard_1.png'
            width={100}
            height={100}
            alt='png'
          />
        </div>
        <div className='flex gap-4'>
          <SearchOutlinedIcon className='text-white' />
          <ShoppingBagOutlinedIcon className='text-white' />
        </div>
      </div>
      {mobileNavOpen && (
        <div className='ml-8 flex h-[100vh] flex-col items-start gap-12 text-white'>
          {/* Mobile Navbar links go here */}
          <div className='flex'>
            <div>
              <BrandsPopover title='brands' />
            </div>
            <div className='absolute right-8 flex items-center text-xl'>
              {'->'}
            </div>
          </div>
          <div className='flex'>
            <ShopPopover title='shop' />
            <div className='absolute right-8 flex items-center text-xl'>
              {'->'}
            </div>
          </div>
          <div className='text-2xl'>premium</div>
          <div className='text-2xl'>gift cards</div>
          <div className='text-2xl'>become an affiliate</div>
          {/* Add more mobile links as needed */}
          <div className='flex gap-4'>
            <Twitter />
            <Instagram />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
