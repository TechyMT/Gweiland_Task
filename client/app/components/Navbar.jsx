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
              <div className='text-sm font-extrabold text-white  hover:text-[#E1C300]'>
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
            <div className='flex text-lg font-extrabold text-white hover:text-[#E1C300]'>
              premium
            </div>
            <div className='flex text-lg font-extrabold text-white hover:text-[#E1C300]'>
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
              <div className='flex text-lg font-extrabold text-white hover:text-[#E1C300]'>
                become an affiliate
              </div>
              <div className='flex gap-6'>
                <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
                  <Twitter />
                </div>
                <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
                  <Instagram />
                </div>
                <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
                  <SearchOutlinedIcon />
                </div>
                <div className='flex text-sm font-extrabold text-white hover:text-[#E1C300]'>
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
              className='cursor-pointer text-white hover:text-[#E1C300]'
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
              <SearchOutlinedIcon className='text-white hover:text-[#E1C300]' />
              <ShoppingBagOutlinedIcon className='text-white hover:text-[#E1C300]' />
            </div>
          </div>
          {mobileNavOpen && (
            <div className='ml-8 flex h-[100vh] flex-col items-start gap-12 text-white hover:text-[#E1C300]'>
              {/* Mobile Navbar links go here */}
              <div className='flex'>
                <div>
                  <BrandsPopover title='brands' />
                </div>
                <div className='absolute right-8 flex items-center text-xl hover:text-[#E1C300]'>
                  {'->'}
                </div>
              </div>
              <div className='flex'>
                <ShopPopover title='shop' />
                <div className='absolute right-8 flex items-center text-xl hover:text-[#E1C300]'>
                  {'->'}
                </div>
              </div>
              <div className='text-2xl hover:text-[#E1C300]'>premium</div>
              <div className='text-2xl hover:text-[#E1C300]'>gift cards</div>
              <div className='text-2xl hover:text-[#E1C300]'>become an affiliate</div>
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
