'use client';
import React, { useEffect } from 'react';

const Announcements = () => {
  useEffect(() => {
    // Call to Announcement Api
  }, []);

  return (
    <div className='mx-auto w-auto bg-[#E1C300] md:p-3 p-2 text-[10px] font-bold text-black md:text-xs'>
      <div className='flex h-full flex-col items-center'>
        <div className='mb-1 flex items-center justify-center'>
          VISIT US ON TIKTOK @ <a href='https://bravaland.com'>BRAVALAND.COM</a>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
