"use client"

import Image from 'next/image'
import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Trip = () => {
	useEffect(() => {
		Aos.init();
	}, []);
  return (
  <>
  <div className='my-10 overflow-x-hidden'>

    <div  
	data-aos="fade-down"
	>

        <h1 className='text-3xl font-semibold text-center sm:text-2xl'>
            Trip by Trip
        </h1>
    </div>
 
<div className='flex justify-center gap-8 sm:gap-4 my-4 lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-row'
data-aos="fade-right"
>
<div className=' '>
<Image
							src='/backtrip1.png'
							alt="search_icon"
							width="200"
							height="130"
                            className='rounded-md relative sm:w-[45vw] sm:h-[40vh] card5 h-[230px] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                     
                       
</div>

<div className=' '>
<Image
							src='/trektrip2.png'
							alt="search_icon"
							width="200"
							height="130"
                            className='rounded-md relative card5 h-[230px] sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                      
</div>

<div className=' '>
<Image
							src='/biketrip3.png'
							alt="search_icon"
							width="200"
							height="130"
                            className='rounded-md relative card5 h-[230px] sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                      
                       
</div>


<div className=' '>
<Image
							src='/weektrip4.png'
							alt="search_icon"
							width="200"
							height="130"
                            className='rounded-md relative card5 h-[230px] sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                      
</div>
<div className=' '>
<Image
							src='/camptrip5.png'
							alt="search_icon"
							width="200"
							height="130"
                            className='rounded-md relative card5 h-[230px] sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						
                        />
                     
</div>

<div className=' '>
<Image
							src='/jungtrip6.png'
							alt="search_icon"
							width="200"
							height="130"
                            className='rounded-md relative card5 h-[230px] sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                      
                       
</div>




</div>

  </div>
  
  </>
  )
}

export default Trip