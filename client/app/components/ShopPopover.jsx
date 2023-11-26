'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PopupState, {
  bindTrigger,
  bindPopover,
  bindHover,
} from 'material-ui-popup-state';
import HoverPopover from 'material-ui-popup-state/HoverPopover';

export default function ShopPopover({ title }) {
  return (
    <PopupState variant='popover' popupId='demo-popup-popover'>
      {(popupState) => (
        <div>
          <Typography className='textFont' {...bindHover(popupState)}>
            <button className='md:text-lg text-2xl'>{title}</button>
          </Typography>
          {/* <Button variant="contained" {...bindHover(popupState)}>
            Open Popover
          </Button> */}
          <HoverPopover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            sx={{}}
          >
            <div className='flex h-[300px] w-screen max-w-full cursor-pointer items-center justify-between gap-2 overflow-hidden bg-[#212122] px-4 py-8 hover:text-[#E1C300] text-white'>
              <div className='flex w-1/2 flex-col justify-start gap-1 py-4'>
                <div className='my-2 flex'>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] font-bold text-white'>
                    apparel
                  </button>
                </div>
                <div className='flex flex-col'>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    unisex hoodies
                  </button>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    unisex zip hoodies
                  </button>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    unisex sweatshirts
                  </button>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    unisex tees
                  </button>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    women's tanks
                  </button>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    unisex tanks
                  </button>
                </div>
              </div>
              <div className='flex w-1/2 flex-col justify-start'>
                <div className='my-4 flex'>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] font-bold text-white'>
                    home
                  </button>
                </div>
                <div className='flex flex-col'>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    phone cases
                  </button>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    framed posters
                  </button>
                  <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-xl hover:text-[#E1C300] text-white'>
                    posters
                  </button>
                </div>
              </div>
            </div>
          </HoverPopover>
        </div>
      )}
    </PopupState>
  );
}
