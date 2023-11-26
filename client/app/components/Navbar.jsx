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
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
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

  return (
    <div className='sticky top-0 z-40 bg-[#212122]'>
      {!isMobile ? <DesktopNavbar /> : <MobileNavbar />}
    </div>
  );
};

export default Navbar;
