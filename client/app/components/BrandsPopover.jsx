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

export default function BrandsPopover({ title }) {
  return (
    <PopupState variant='popover' popupId='demo-popup-popover'>
      {(popupState) => (
        <div>
          <Typography className='textFont' {...bindHover(popupState)}>
            <button className='text-2xl md:text-lg hover:text-[#E1C300] font-extrabold'>{title}</button>
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
            sx={{
              marginLeft: '25px',
            }}
          >
            <div
              className='flex h-[300px] w-[250px] cursor-pointer flex-col items-center gap-2 overflow-hidden bg-[#212122] px-4 py-8 text-sm hover:text-[#E1C300] text-white'
              //   style={{
              //     background: '#212122',
              //     height: '350px', // Set the desired height
              //     width: '250px', // Set the desired width
              //     display: 'flex',
              //     alignItems: 'center',
              //     justifyContent: 'center',
              //     cursor: 'pointer',
              //     padding: '10px',
              //     flexDirection: 'column',
              //   }}
            >
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                all brands
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                $hosky
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                bitfins
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                cardano stonerz club
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                cryptoraggies
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                danketsu
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                future fest
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                pendulum
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-md hover:text-[#E1C300] text-white'>
                vudu brigada
              </button>
            </div>
          </HoverPopover>
        </div>
      )}
    </PopupState>
  );
}
