"use client"
import Image from 'next/image'
import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Banner1 = () => {
	useEffect(() => {
		Aos.init();
	}, []);
  return (
<>
<div className='mt-20 overflow-x-hidden sm:mt-8'>
<div className='mx-[140px] sm:hidden sm:mx-2'

data-aos="fade-left">
<img
							src="/banner3.webp"
							alt="search_icon"
							width="290"
							height="130"
                            className=' w-screen sm:w-screen sm:h-[90vh]  rounded-xl relative card3 h-[230px] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                      
</div>

<div className='mx-[140px] hidden sm:inline-block sm:mx-2'

data-aos="fade-left">
<img
							src="/banner4.png"
							alt="search_icon"
							width="290"
							height="130"
                            className=' w-screen sm:w-screen sm:h-[90vh]  rounded-xl relative card3 h-[230px] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                      
</div>

</div>
</>
  )
}

export default Banner1