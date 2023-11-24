'use client';
import React, { useEffect } from 'react';

const Announcements = () => {
  useEffect(() => {
    // Call to Announcement Api
  }, []);

  return (
    <div className='flex justify-center bg-[#E1C300] p-3 text-xs font-bold text-black'>
      VISIT US ON TIKTOK @ <a href='https://bravaland.com'>BRAVALAND.COM</a>
    </div>
  );
};

export default Announcements;
