'use client';

// Importing necessary components from React and Material-UI
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PopupState, {
  bindTrigger,
  bindPopover,
  bindHover,
} from 'material-ui-popup-state';
import HoverPopover from 'material-ui-popup-state/HoverPopover';

// Functional component for Brands Popover, takes 'title' as a prop
export default function BrandsPopover({ title }) {
  return (
    // Using PopupState to manage the state of the popover
    <PopupState variant='popover' popupId='demo-popup-popover'>
      {(popupState) => (
        <div>
          {/* Triggering the popover on hover over the Typography component */}
          <Typography className='textFont' {...bindHover(popupState)}>
            <button className='text-2xl md:text-lg'>{title}</button>
          </Typography>

          {/* Popover component that appears on hover */}
          <HoverPopover
            {...bindPopover(popupState)}
            // Setting the anchor and transform origin for the popover
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
            {/* Content inside the popover */}
            <div
              className='flex h-[300px] w-[250px] cursor-pointer flex-col items-center gap-2 overflow-hidden hover:text-[#E1C300] bg-[#212122] px-4 py-8 text-sm text-white'
            >
              {/* Buttons representing different brands */}
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                all brands
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                $hosky
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                bitfins
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                cardano stonerz club
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                cryptoraggies
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                danketsu
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                future fest
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                pendulum
              </button>
              <button className='textFont mr-auto cursor-pointer border-none bg-transparent px-4 text-sm hover:text-[#E1C300] text-white'>
                vudu brigada
              </button>
            </div>
          </HoverPopover>
        </div>
      )}
    </PopupState>
  );
}
