'use client'
import React, { useEffect, useRef } from 'react';


export default function Test()
{
  
    useEffect(() => {
      initFlickity();
    }, []);
  
    const carousel = useRef(null);
  
    async function initFlickity() {
      if (typeof window !== 'undefined' && carousel.current) {
        const Flickity = (await import('flickity')).default;
        new Flickity(carousel.current, {
          lazyLoad: true,
          wrapAround: true,
          autoPlay: true,
        });
      }
    }
  
    return (
      <div ref={carousel} className="w-full h-[600px] sm:w-[560px] sm:h-auto mx-auto relative">
        <div>
          <img src="/images/hero1.svg" />
        </div>
        <div>
          <img src="/images/hero2.svg" />
            </div>
            <div>
          <img src="/images/hero3.svg" />
            </div>
            <div>
          <img src="/images/hero4.svg" />
        </div>
      </div>
    );
  }