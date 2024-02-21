"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
const Sliding = () => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
      <img
							src="/dhanaulti.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>
      <SwiperSlide>
      <img
							src="/hills.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>

      <SwiperSlide>
      <img
							src="/banner1.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>

      <SwiperSlide>
      <img
							src="/hero6.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>

      <SwiperSlide>
      <img
							src="/hero7.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>

      <SwiperSlide>
      <img
							src="/hero8.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>

      <SwiperSlide>
      <img
							src="/hero9.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>

      <SwiperSlide>
      <img
							src="/gangotri.jpg"
							alt="search_icon"
							width="200"
							height="200"
                            className='h-[90vh] w-screen'
						/>
      </SwiperSlide>

      
    </Swiper>
  </>
  )
}

export default Sliding