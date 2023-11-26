'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Instagram, Twitter } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BrandsPopover from './BrandsPopover';
import ShopPopover from './ShopPopover';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initialize the state based on the initial window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  return (
    <div className='sticky top-0 z-40 bg-[#212122]'>
      {!isMobile ? (
        <div className='flex justify-evenly'>
          <div className='ml-12 flex w-1/3 items-center gap-6'>
            <div className='flex items-center gap-1'>
              <div className='text-sm font-extrabold text-white'>
                <BrandsPopover title='brands' />
              </div>
              <span className='flex'>
                <KeyboardArrowDownOutlinedIcon className='w-4 text-white' />
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <div className='text-sm font-extrabold text-white'>
                <ShopPopover title='shop' />
              </div>
              <span className='flex'>
                <KeyboardArrowDownOutlinedIcon className='w-4 text-white' />
              </span>
            </div>
            <div className='flex text-sm font-extrabold text-white'>
              premium
            </div>
            <div className='flex text-sm font-extrabold text-white'>
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
              <div className='flex text-sm font-extrabold text-white'>
                become an affiliate
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
      ) : (
        <div className='fixed left-0 top-0 w-full bg-[#212122] lg:hidden'>
          <div className='flex items-center justify-between p-1'>
            <div
              className='cursor-pointer text-white'
              onClick={toggleMobileNav}
            >
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
      )}
    </div>
  );
};

export default Navbar;
